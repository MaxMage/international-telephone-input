define([
    'jquery',
    'intlTelInput'
], function ($) {
    var initIntl = function (config, node) {
        $(node).intlTelInput(config);
    };
    return initIntl;
});