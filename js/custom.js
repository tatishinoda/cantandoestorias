
  (function ($) {

  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();

      scrollToDiv(elWrapped,header_height);
      return false;

      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;

        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

  })(window.jQuery);

  function whatsapp(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/5511996854539?text="
    +"*Name :* "+name+"%0a"
    +"*Email :* "+email+"%0a"
    +"*Phone :* "+phone+"%0a"
    +"*Message :* "+message;

    window.open(url,'_blank').focus();
  }

$('.slider-fade').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
