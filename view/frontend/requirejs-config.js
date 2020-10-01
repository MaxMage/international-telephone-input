var config = {
    paths: {
        "intlTelInput": 'MaxMage_InternationalTelephoneInput/js/intlTelInput',
        "intlTelInputUtils": 'MaxMage_InternationalTelephoneInput/js/utils',
        "internationalTelephoneInput": 'MaxMage_InternationalTelephoneInput/js/internationalTelephoneInput'
    },

    shim: {
        'intlTelInput': {
            'deps':['jquery', 'knockout']
        },
        'internationalTelephoneInput': {
            'deps':['jquery', 'intlTelInput']
        }
    },
    config: {
        mixins: {
            'Magento_Ui/js/lib/validation/validator': {
                'MaxMage_InternationalTelephoneInput/js/phoneValidator': true
            }
        }
    }
};