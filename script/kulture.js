(function ($) {
  "use strict";

  Drupal.behaviors.bootstrap_culture_overrides = {
    attach: function (context, settings) {

      if ($('.navigation-wrapper .main-menu-wrapper ', context).length) {
        $('.pane-search-form', context).css({"max-width": "400px"});
      }
    }
  };
})(jQuery);

