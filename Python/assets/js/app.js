const $ = require('jquery');
window.$ = window.jQuery = $;

require( '../scss/app.scss' );
require( '../css/custom.css' );

require( 'jquery-ui-dist/jquery-ui.css' );
require( 'jquery-ui-dist/jquery-ui.js' );

// Vendor scripts
require( '../vendor/bootstrap/js/bootstrap.bundle.js' );
require( '../vendor/jquery-easing/jquery.easing.js' );

// Main script
require( './sb-admin-2.js' );
