<?php
if (!isset($pageTitle)) {
    $pageTitle = 'DesignToro | Agenție Web Design & Marketing Digital București';
}
if (!isset($pageDescription)) {
    $pageDescription = 'DesignToro este partenerul tău pentru creare site-uri de prezentare, magazine online și strategii de marketing digital.';
}
if (!isset($pageKeywords)) {
    $pageKeywords = 'agenție web design, creare site bucurești, marketing digital, servicii seo, promovare online';
}
if (!isset($pageUrl)) {
    $pageUrl = 'https://www.designtoro.ro/';
}
require_once __DIR__ . '/../config/sitekey.php';
$config = require __DIR__ . '/../config/app.php';
if (!is_array($config)) {
    $config = [];
}
$assetVersion = isset($config['asset_version'])
    ? htmlspecialchars((string) $config['asset_version'], ENT_QUOTES, 'UTF-8')
    : '1.0.0';
$bodyClasses = $bodyClasses ?? [];
if (!is_array($bodyClasses)) {
    $bodyClasses = [$bodyClasses];
}
$bodyClasses = array_filter(array_map('trim', $bodyClasses));
array_unshift($bodyClasses, 'no-js');
$bodyClassAttribute = htmlspecialchars(implode(' ', array_unique($bodyClasses)), ENT_QUOTES, 'UTF-8');
?>
<!DOCTYPE html>
<html lang="ro" class="no-js">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $pageTitle; ?></title>
    <meta name="description" content="<?= $pageDescription; ?>">
    <meta name="keywords" content="<?= $pageKeywords; ?>">
    <link rel="canonical" href="<?= $pageUrl; ?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
    >
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css"
        integrity="sha384-PPIZEGYM1v8zp5Py7UjFb79S58UeqCL9pYVnVPURKEqvioPROaVAJKKLzvH2rDnI"
        crossorigin="anonymous"
    >
    <link rel="stylesheet" href="/assets/css/style.css?v=<?= $assetVersion; ?>">
    <script>
        window.RECAPTCHA_SITE_KEY = '<?= RECAPTCHA_SITE_KEY; ?>';
    </script>
    <script>document.documentElement.classList.remove('no-js');</script>
</head>
<body class="<?= $bodyClassAttribute; ?>">
<?php include __DIR__ . '/header.php'; ?>
<main>
