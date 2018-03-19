# International Telephone Input module for Magento 2

The module for Magento 2 based on a jQuery plugin for entering and validating international telephone numbers https://github.com/jackocnr/intl-tel-input/. The utilities script (build/js/utils.js) is a custom build of Google's <a href="https://github.com/googlei18n/libphonenumber">libphonenumber</a>.

Integration to Magento 2 a jQuery plugin for entering and validating international telephone numbers. It adds a flag dropdown to telephone fields, detects the user's country, displays a relevant placeholder and provides formatting/validation methods. **At the current moment not all features implement for Magento 2.**, plugin provides such possibility.

![Demo International Telephone Input module](https://i.imgur.com/3hXb37G.png "Demo International Telephone Input module")

<a href="https://intl-tel-input.com/">The demo page</a> of a jQuery plugin, not Magento module.

## Installation

1. Go to Magento 2 root directory

2. Enter following commands to install module:

   ```
   composer require maxmage/international-telephone-input
   ```

3. Enter following commands to enable module:

   ```
   php bin/magento module:enable MaxMage_InternationalTelephoneInput
   php bin/magento setup:upgrade
   php bin/magento cache:clean
   ```

## Configuration

1. Enable the International Telephone Input module in Magento® Admin under *Stores* >
   *Configuration* > *Customers* > *International Telephone Input*.

    ![Disable/Enable International Telephone Input module](https://i.imgur.com/RVYyjqj.png "Disable/Enable International Telephone Input module")

