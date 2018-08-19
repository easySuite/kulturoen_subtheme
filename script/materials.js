(function ($) {
  "use strict";

  $(document).ready(function () {
    $('.field-type-ting-reference').each(function() {
      var classes = $(this).attr('class').split(' ');
      var delay = 0;
      // Find pane's ID to get its delay settings.
      $(classes).each(function(i, item){
        if (item.match(/pane\-\d+/)) {
          delay = parseInt(Drupal.settings.materials[item]);
        }
      });

      $(this).find('.field-items:first').slick({
        autoplay: false,
        // autoplaySpeed: 2000,
        responsive: true,
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        customPaging: function(slick, index) {
          return '<a>' + (index + 1) + '</a>';
        }
      });
    });
  });
})(jQuery);