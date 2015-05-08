/*!
 * Copyright 2015, All Rights Reserved.
 *
 * Code licensed under the MIT License:
 * http://vitorbritto.mit-license.org/
 *
 * Author: Vitor Britto <code@vitorbritto.com.br>
 */


(function(window, document, undefined) {

    'use strict';

    var isValid = (function() {

        var validate = validate || {};

        // VALIDATE METHOD
        validate.inputEmail = function(email) {
            var emailPattern = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return emailPattern.test(email);
        };

        // INITIALIZE MODULE
        return {
            email: validate.inputEmail
        };

    })();

    // Global
    window.isValid = isValid;

})(window, document);

