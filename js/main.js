$(document).ready(function() {

    
    $('.sidebar_offcanvas_trigger').click(function (e) {
        e.preventDefault();
        $(this).parents('.sidebar_offcanvas_container').toggleClass('open');
    });
    
    $('.sidebar_offcanvas_trigger_close').click(function (e) {
        e.preventDefault();
        $(this).parents('.sidebar_offcanvas_container').toggleClass('open');
    });
 

});
