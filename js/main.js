$(document).ready(function() {

    /**
     * offcanvas sidebar
     */

    $('.sidebar_offcanvas_trigger').click(function (e) {
        e.preventDefault();
        $(this).parents('.sidebar_offcanvas_container').toggleClass('open');
    });
    
    $('.sidebar_offcanvas_trigger_close').click(function (e) {
        e.preventDefault();
        $(this).parents('.sidebar_offcanvas_container').toggleClass('open');
    });

    /**
     * add class
     */
    if ($('.open').length > 0) {
        $('.sidebar_offcanvas').removeClass('close');
    }

    $('.sidebar_offcanvas_trigger').on('click', function(e){
        $('.sidebar_offcanvas').removeClass('close');
      });
    $('.sidebar_offcanvas_trigger_close').on('click', function(e){
        e.preventDefault();
        $('.sidebar_offcanvas').addClass('close');
      });


    $('.btn-close').on('click', function (e) {
        $('.row-subscribe').addClass('d-none');
    });


      /**
       * rangeslider
       */
    
  

});


