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
    function setAnimation ( _elem, _InOut ) {
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        _elem.each ( function () {
            var $elem = $(this);
            var $animationType = 'animate__animated ' + $elem.attr('data-animation-'+_InOut);
            $elem.addClass($animationType).one(animationEndEvent, function () {
            $elem.removeClass($animationType);
          });
        });
    }
    
    var round = 0;
    sliderMainvs.on('changed.owl.carousel', function(event) {
        var $currentItem = $('.owl-item', sliderMainvs).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-in]");
        setAnimation ($elemsToanim, 'in');
    })
      
    sliderMainvs.on('translated.owl.carousel', function(event) {
        if (event.item.index == (event.page.count - 1))  {
        if (round < 1) {
            round++
        } else {
            sliderMainvs.trigger('stop.owl.autoplay');
            var owlData = sliderMainvs.data('owl.carousel');
            owlData.settings.autoplay = false; //don't know if both are necessary
            owlData.options.autoplay = false;
            sliderMainvs.trigger('refresh.owl.carousel');
        }
        }
    });
    // slider testimonial
    $("#tmp_slider_testimonial").owlCarousel({      
        items: 1,
        loop: true,
        autoplay: true,
        margin:10,
        stagePadding:10,
        smartSpeed:3000,
    });
    // slider galler
    $("#tmp_slider_gallery").owlCarousel({      
        items: 4,
        loop: true,
        autoplay: true,
        margin:30,
        stagePadding:30,
        smartSpeed:3000,
        responsive:{
            0:{
                items:2,
            },
            768:{
                items:4,
            },
        }
    });
    //aos
    AOS.init();
    // fixed scroll
    $(window).scroll(function(){
        let sticky = $('#tmp_header'),
            scroll = $(window).scrollTop();
        let heightHeader = sticky.height();
        if (scroll >= heightHeader) sticky.addClass('fixed-top');
        else sticky.removeClass('fixed-top');

        let pageTop = $('.page-top');
        if(scroll >= 150) {
            pageTop.addClass('show');
        }else {
            pageTop.removeClass('show');
        }
    });
    
    
});