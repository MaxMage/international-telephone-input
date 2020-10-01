define([
    'jquery',
    'intlTelInput'
], function ($, intlTelInput) {
    'use strict';

    return function (validator) {

        const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

        let validatorObj = {
            message: '',
            validate: function (value, params, additionalParams) {
                var countryCode = $(".selected-flag .iti-flag").attr('class');

                if (countryCode === undefined) {
                    this.message = errorMap[1];
                    return false;
                }

                countryCode = countryCode.split(' ')[1];

                var isValid = intlTelInputUtils.isValidNumber(value, countryCode);
                var errorCode = intlTelInputUtils.getValidationError(value, countryCode);

                if (isValid) {
                    this.message = errorMap[errorCode];
                }

                return isValid;
            },
        }

        validatorObj.addRule(
            'validate-phone-number',
            validatorObj.validate,
            $.mage.__(validatorObj.message)
        );

        return validatorObj;
    };
});