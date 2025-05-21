(function($, root, undefined) {
  $(function() {
    "use strict";

    // DOM ready, take it away

    $(document).ready(function() {
      jQuery("#slippry").slippry({
        // options
        adaptiveHeight: true, // height of the sliders adapts to current slide
        captions: true, // Position: overlay, below, custom, false
        pager: false,
        auto: false,
        controls:true
      });

      var a = jQuery(".redils-responsive-height .redils");
      if (a.length) {
        a.redils({
          autoResize: true,
          setHeight: true
        });
      }
    });
  });
})(jQuery, this);
