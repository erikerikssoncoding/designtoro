<?php

declare(strict_types=1);

const FINGERPRINT_LOCK_FILE = __DIR__ . '/../storage/fingerprint-locks.json';
const FINGERPRINT_LOCK_TTL = 86400; // 24 hours

/**
 * Ensure the fingerprint storage directory and file exist.
 */
function ensure_fingerprint_storage(): void
{
    $directory = dirname(FINGERPRINT_LOCK_FILE);
    if (!is_dir($directory)) {
        mkdir($directory, 0775, true);
    }

    if (!file_exists(FINGERPRINT_LOCK_FILE)) {
        file_put_contents(FINGERPRINT_LOCK_FILE, '{}');
    }
}

/**
 * Read the fingerprint lock store.
 */
function fingerprint_store_read(): array
{
    ensure_fingerprint_storage();

    $handle = fopen(FINGERPRINT_LOCK_FILE, 'c+');
    if ($handle === false) {
        return [];
    }

    if (!flock($handle, LOCK_SH)) {
        fclose($handle);
        return [];
    }

    rewind($handle);
    $contents = stream_get_contents($handle);
    flock($handle, LOCK_UN);
    fclose($handle);

    if ($contents === false || $contents === '') {
        return [];
    }

    $data = json_decode($contents, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        return [];
    }

    return is_array($data) ? $data : [];
}

/**
 * Write fingerprint lock store data.
 */
function fingerprint_store_write(array $data): void
{
    ensure_fingerprint_storage();

    $handle = fopen(FINGERPRINT_LOCK_FILE, 'c+');
    if ($handle === false) {
        return;
    }

    if (!flock($handle, LOCK_EX)) {
        fclose($handle);
        return;
    }

    $encoded = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

    if ($encoded === false) {
        $encoded = '{}';
    }

    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, $encoded);
    fflush($handle);

    flock($handle, LOCK_UN);
    fclose($handle);
}

/**
 * Prune expired fingerprint locks from the dataset.
 *
 * @return array{0: array<string, array<string, int>>, 1: bool}
 */
function fingerprint_store_prune(array $data): array
{
    $now = time();
    $changed = false;

    foreach ($data as $scope => $fingerprints) {
        if (!is_array($fingerprints)) {
            unset($data[$scope]);
            $changed = true;
            continue;
        }

        foreach ($fingerprints as $hash => $timestamp) {
            $timestamp = (int) $timestamp;
            if ($timestamp <= 0 || ($now - $timestamp) >= FINGERPRINT_LOCK_TTL) {
                unset($fingerprints[$hash]);
                $changed = true;
            }
        }

        if (empty($fingerprints)) {
            unset($data[$scope]);
            $changed = true;
        } else {
            $data[$scope] = $fingerprints;
        }
    }

    return [$data, $changed];
}

/**
 * Build the fingerprint key from raw data.
 */
function fingerprint_generate_key(?string $fingerprintRaw): ?string
{
    $fingerprintRaw = is_string($fingerprintRaw) ? trim($fingerprintRaw) : '';

    if ($fingerprintRaw !== '') {
        return hash('sha256', $fingerprintRaw);
    }

    $ip = $_SERVER['REMOTE_ADDR'] ?? '';
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';

    $fallback = trim($ip . '|' . $userAgent);
    if ($fallback === '') {
        return null;
    }

    return hash('sha256', $fallback);
}

/**
 * Determine if a fingerprint submission is blocked for any of the provided scopes.
 *
 * @param array<int, string> $scopes
 */
function fingerprint_submission_blocked(?string $fingerprintKey, array $scopes): bool
{
    if (!$fingerprintKey || empty($scopes)) {
        return false;
    }

    $data = fingerprint_store_read();
    [$data, $changed] = fingerprint_store_prune($data);

    $blocked = false;
    foreach (array_unique($scopes) as $scope) {
        if (!is_string($scope) || $scope === '') {
            continue;
        }

        if (isset($data[$scope][$fingerprintKey])) {
            $blocked = true;
            break;
        }
    }

    if ($changed) {
        fingerprint_store_write($data);
    }

    return $blocked;
}

/**
 * Store a successful submission fingerprint for the provided scopes.
 *
 * @param array<int, string> $scopes
 */
function fingerprint_remember_submission(?string $fingerprintKey, array $scopes): void
{
    if (!$fingerprintKey || empty($scopes)) {
        return;
    }

    $data = fingerprint_store_read();
    [$data] = fingerprint_store_prune($data);

    $timestamp = time();

    foreach (array_unique($scopes) as $scope) {
        if (!is_string($scope) || $scope === '') {
            continue;
        }

        if (!isset($data[$scope]) || !is_array($data[$scope])) {
            $data[$scope] = [];
        }

        $data[$scope][$fingerprintKey] = $timestamp;
    }

    fingerprint_store_write($data);
}
