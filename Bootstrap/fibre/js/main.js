$(document).ready(function() {
    // slider 
    $("#tmp_slider").owlCarousel({      
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout:5000,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar
    });
    function startProgressBar() {
        $(".slide-progress").css({
          width: "100%",
          transition: "width 5000ms"
        });
    }
  
    function resetProgressBar() {
        $(".slide-progress").css({
            width: 0,
            transition: "width 0s"
        });
    }
    // slider testimonial
    $("#tmp_slider_testimonial").owlCarousel({      
        items: 1,
        loop: true,
        autoplay: true,
        margin:10,
        stagePadding:10,
        smartSpeed:3000
    });
});