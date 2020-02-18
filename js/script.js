(function($){
    $(document).ready(function() {
        
        $('.btn_header_contact').click(function (e) {
            e.preventDefault();
            $('.header_contact').removeClass('close');
        });
    
        $('.btn_header_contact_close').click(function (e) {
            e.preventDefault();
            $('.header_contact').addClass('close');
        });
    
        if (url.thankyou.length > 0) {
            document.addEventListener('wpcf7mailsent', function (event) {
                location = url.thankyou;
            }, false);
        }   

    });
})(jQuery);