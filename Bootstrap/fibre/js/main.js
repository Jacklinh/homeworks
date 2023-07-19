$(document).ready(function() {
    // slider 
    let sliderMainvs = $("#tmp_slider");
    sliderMainvs.owlCarousel({      
        items: 1,
        loop: true,
        autoplay: true,
        rewind: true,
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
    AOS.init({
        duration: 1000,
        offset: 120,
    });
    // slider testimonial
    $("#tmp_slider_testimonial").owlCarousel({      
        items: 1,
        loop: true,
        autoplay: true,
        margin:10,
        stagePadding:10,
        smartSpeed:3000
    });
    // slider galler
    $("#tmp_slider_gallery").owlCarousel({      
        items: 4,
        loop: true,
        autoplay: true,
        margin:30,
        stagePadding:30,
        smartSpeed:3000
    });
    //aos
    AOS.init();
});