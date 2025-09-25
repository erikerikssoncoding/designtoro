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
        . "img-src 'self' data: https://www.gstatic.com https://www.google.com; "
        . "script-src 'self' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/; "
        . "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
        . "font-src 'self' https://fonts.gstatic.com; "
        . "connect-src 'self'; "
        . "frame-src https://www.google.com/recaptcha/; "
        . "base-uri 'self'; "
        . "form-action 'self'; "
        . "upgrade-insecure-requests"
    );
}
?>
