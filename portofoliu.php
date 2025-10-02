<?php
require_once __DIR__ . '/includes/security-headers.php';

$pageTitle = 'Portofoliu Web Design și Proiecte Digitale | DesignToro';
$pageDescription = 'Explorează proiectele DesignToro: site-uri, magazine online și materiale de brand create pentru clienți din diferite domenii.';
$pageKeywords = 'portofoliu web design, proiecte site-uri, exemple magazine online, lucrări design';
$pageUrl = 'https://www.designtoro.ro/portofoliu';
$currentPage = 'portofoliu';

$portfolioPath = __DIR__ . '/img/portofoliu';
$portfolioItems = [];

$typeMap = [
    'prezentare' => [
        'category' => 'website',
        'label' => 'Site de prezentare',
        'alt' => 'Previzualizare site de prezentare %s',
    ],
    'magazin' => [
        'category' => 'ecommerce',
        'label' => 'Magazin online',
        'alt' => 'Previzualizare magazin online %s',
    ],
    'branding' => [
        'category' => 'branding',
        'label' => 'Identitate și conținut',
        'alt' => 'Previzualizare proiect de branding %s',
    ],
];

if (is_dir($portfolioPath)) {
    $files = glob($portfolioPath . '/*.webp');
    sort($files, SORT_NATURAL | SORT_FLAG_CASE);

    foreach ($files as $file) {
        $filename = basename($file);

        if (!preg_match('/^(.+?)_(prezentare|magazin|branding)\.webp$/', $filename, $matches)) {
            continue;
        }

        $domain = $matches[1];
        $typeKey = $matches[2];

        if (!isset($typeMap[$typeKey])) {
            continue;
        }

        $url = 'https://' . $domain;
        $host = parse_url($url, PHP_URL_HOST) ?: $domain;
        $primaryLabel = explode('.', $host)[0];
        $readableName = str_replace(['-', '_'], ' ', $primaryLabel);

        if (function_exists('mb_convert_case')) {
            $readableName = mb_convert_case($readableName, MB_CASE_TITLE, 'UTF-8');
        } else {
            $readableName = ucwords($readableName);
        }

        $portfolioItems[] = [
            'filename' => $filename,
            'url' => $url,
            'host' => $host,
            'name' => $readableName,
            'category' => $typeMap[$typeKey]['category'],
            'label' => $typeMap[$typeKey]['label'],
            'alt' => sprintf($typeMap[$typeKey]['alt'], $readableName),
        ];
    }
}

usort(
    $portfolioItems,
    static function (array $first, array $second): int {
        return strcmp($first['name'], $second['name']);
    }
);

$filters = [
    'all' => [
        'label' => 'Toate',
        'always' => true,
    ],
    'website' => [
        'label' => 'Site-uri de prezentare',
    ],
    'ecommerce' => [
        'label' => 'Magazine online',
    ],
    'branding' => [
        'label' => 'Identitate și conținut',
    ],
];

$availableCategories = [];
foreach ($portfolioItems as $item) {
    $availableCategories[$item['category']] = true;
}

include __DIR__ . '/partials/head.php';
?>
<section class="page-hero py-5" aria-labelledby="portfolio-hero">
    <div class="container narrow text-center">
        <h1 id="portfolio-hero">Proiecte digitale care aduc rezultate reale.</h1>
        <p>Vezi exemple de site-uri, magazine online și campanii pe care le-am construit pas cu pas împreună cu clienții noștri.</p>
    </div>
</section>
<section class="portfolio-filters py-3" aria-label="Filtre portofoliu">
    <div class="container filter-buttons">
        <?php foreach ($filters as $filterKey => $filter): ?>
            <?php if (!($filter['always'] ?? false) && !isset($availableCategories[$filterKey])): ?>
                <?php continue; ?>
            <?php endif; ?>
            <button
                class="filter-button<?= $filterKey === 'all' ? ' is-active' : '' ?>"
                data-filter="<?= htmlspecialchars($filterKey, ENT_QUOTES) ?>"
            >
                <?= htmlspecialchars($filter['label'], ENT_QUOTES) ?>
            </button>
        <?php endforeach; ?>
    </div>
</section>
<section class="portfolio-gallery py-4" aria-label="Galerie portofoliu">
    <div class="container portfolio-masonry">
        <?php if (!empty($portfolioItems)): ?>
            <?php foreach ($portfolioItems as $item): ?>
                <article class="portfolio-item" data-category="<?= htmlspecialchars($item['category'], ENT_QUOTES) ?>">
                    <a
                        class="portfolio-link"
                        href="<?= htmlspecialchars($item['url'], ENT_QUOTES) ?>"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Deschide <?= htmlspecialchars($item['host'], ENT_QUOTES) ?>"
                    >
                        <figure class="portfolio-media">
                            <img
                                src="/img/portofoliu/<?= htmlspecialchars($item['filename'], ENT_QUOTES) ?>"
                                alt="<?= htmlspecialchars($item['alt'], ENT_QUOTES) ?>"
                                loading="lazy"
                                width="960"
                                height="1890"
                            >
                        </figure>
                        <div class="portfolio-details">
                            <h2><?= htmlspecialchars($item['name'], ENT_QUOTES) ?></h2>
                            <p><?= htmlspecialchars($item['label'], ENT_QUOTES) ?></p>
                        </div>
                    </a>
                </article>
            <?php endforeach; ?>
        <?php else: ?>
            <p class="portfolio-empty">Momentan pregătim proiectele pentru această secțiune. Revino curând pentru noutăți.</p>
        <?php endif; ?>
    </div>
</section>
<section class="cta-banner py-5" aria-labelledby="cta-portfolio">
    <div class="container cta-inline d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
        <div>
            <h2 id="cta-portfolio">Vrei să vezi proiectul tău în această galerie?</h2>
            <p>Trimite-ne câteva detalii și îți arătăm ce pași urmăm pentru a ajunge acolo.</p>
        </div>
        <a class="btn btn-accent" href="/contact">Hai să discutăm</a>
    </div>
</section>
<section class="portfolio-more py-5" aria-hidden="true">
    <div class="container">
        <p>SI MULTE ALTELE...</p>
    </div>
</section>
<?php include __DIR__ . '/partials/footer.php'; ?>
