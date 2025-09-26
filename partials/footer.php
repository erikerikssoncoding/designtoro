</main>
<footer class="site-footer">
    <div class="container footer-grid">
        <div class="footer-column">
            <a href="/" class="footer-logo">designtoro</a>
            <p>
                Construim site-uri clare și campanii ușor de înțeles. Explicăm fiecare pas și te ajutăm să atragi clienți noi fără jargon tehnic.
            </p>
        </div>
        <div class="footer-column">
            <h3>Explorează</h3>
            <ul>
                <li><a href="/">Acasă</a></li>
                <li><a href="/servicii">Servicii</a></li>
                <li><a href="/preturi">Prețuri</a></li>
                <li><a href="/portofoliu">Portofoliu</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h3>Contact rapid</h3>
            <ul class="footer-contact">
                <li><i class="fa-solid fa-location-dot text-primary" aria-hidden="true"></i>București, România</li>
                <li><i class="fa-solid fa-envelope-open-text text-primary" aria-hidden="true"></i><a href="mailto:office@designtoro.ro">office@designtoro.ro</a></li>
                <li><i class="fa-solid fa-phone text-primary" aria-hidden="true"></i><a href="tel:+40757568812">+40 757 568 812</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h3>Urmărește noutățile</h3>
            <ul class="social-links">
                <li><a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i> Instagram</a></li>
                <li><a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin" aria-hidden="true"></i> LinkedIn</a></li>
                <li><a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                <li><a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube" aria-hidden="true"></i> YouTube</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>Copyright © <?= date('Y'); ?> DesignToro.ro | <a href="#">Politica de Confidențialitate</a> | <a href="#">Termeni și Condiții</a></p>
    </div>
</footer>
<?php
$mobileFooterNavItems = [
    'home' => [
        'href' => '/',
        'icon' => 'fa-solid fa-house',
        'label' => 'Acasă',
    ],
    'servicii' => [
        'href' => '/servicii',
        'icon' => 'fa-solid fa-layer-group',
        'label' => 'Servicii',
    ],
    'preturi' => [
        'href' => '/preturi',
        'icon' => 'fa-solid fa-tags',
        'label' => 'Prețuri',
    ],
    'portofoliu' => [
        'href' => '/portofoliu',
        'icon' => 'fa-solid fa-briefcase',
        'label' => 'Portofoliu',
    ],
    'contact' => [
        'href' => '/contact',
        'icon' => 'fa-solid fa-envelope',
        'label' => 'Contact',
    ],
];
$currentPageKey = $currentPage ?? null;
?>
<nav class="mobile-footer-nav" aria-label="Navigație rapidă">
    <?php foreach ($mobileFooterNavItems as $slug => $item): ?>
        <?php if ($currentPageKey === $slug) { continue; } ?>
        <a href="<?= $item['href']; ?>" class="mobile-footer-nav__link">
            <i class="<?= $item['icon']; ?>" aria-hidden="true"></i>
            <span><?= $item['label']; ?></span>
        </a>
    <?php endforeach; ?>
</nav>
<script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"
    defer
></script>
<script src="/assets/js/main.js" defer></script>
<script src="https://www.google.com/recaptcha/api.js?render=<?= RECAPTCHA_SITE_KEY; ?>" defer></script>
</body>
</html>
