<?php
if (!headers_sent()) {
    header('Strict-Transport-Security: max-age=31536000; includeSubDomains; preload');
    header('X-Frame-Options: DENY');
    header('X-Content-Type-Options: nosniff');
    header('Referrer-Policy: no-referrer-when-downgrade');
    header('Permissions-Policy: camera=(), microphone=(), geolocation=()');
    header(
        'Content-Security-Policy: '
        . "default-src 'self'; "
        . "img-src 'self' data: https://www.gstatic.com https://www.google.com https://cdn.jsdelivr.net; "
        . "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://www.google.com https://www.gstatic.com; "
        . "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; "
        . "font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net data:; "
        . "connect-src 'self' https://www.google.com https://www.gstatic.com https://cdn.jsdelivr.net; " // Added https://cdn.jsdelivr.net for source maps
        . "frame-src https://www.google.com/recaptcha/; "
        . "base-uri 'self'; "
        . "form-action 'self'; "
        . "upgrade-insecure-requests"
    );
}
?>
