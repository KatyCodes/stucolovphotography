$(document).ready(function(){

  setTimeout(function() {
    $('#main-logo').delay(300).animate({
      'opacity': '1','top':'0%','left': '0%',}, 500);
  },500);


  $(window).scroll(function() {
    wH = $(window).height();
    wS = $(window).scrollTop();

    // portfolio page animation
    hTc = $('#front-page-carousel').offset().top;
    hHc = $('#front-page-carousel').outerHeight() - 200;
    hWc = $('#front-page-carousel').width();

    $('.portfolio-text-overlay').css({
       'max-width': hWc + 'px',
     });

    if(wS > (hTc+hHc-wH)){
     $('.portfolio-text-overlay').animate({
       'top': '150px',
       'opacity': '1',
     },1000, 'linear');
   }
  //  else if (wS < (hTc+hHc-wH)) {
  //     $('.portfolio-text-overlay').stop(true, true).animate({
  //      'top': '0px',
  //      'opacity': '0',
  //    });
  // };

   //about page animation
   hTa = $('#about').offset().top;
   hTa = $('#about').outerHeight() + 300;
   hWa = $('#about').width();
   if(wS > (hTa+hTa-wH)){
     $('#about h2').animate({
       'top': '250px',
       'opacity': '1',
     },1000, 'linear' );
     $('#about p').animate({
       'top': '150px',
       'opacity': '1',
     }, 1000, 'linear');
  }
  // else if(wS < (hTa+hTa-wH)) {
  //     $('#about *').stop(true, true).animate({
  //       'top': '0px',
  //       'opacity': '0',
  //     }, 1000, 'linear');
  //  }
});

  win_height = $(window).height();
  photo_height = win_height + 100;
  $('.owl-item.front').css({
    'max-height': win_height + 'px',
  });
  $('#front-page-carousel').css({
    'max-height': win_height + 'px',
  });

  $('#intro').css({
    'height': win_height + 'px',
  });
  $('#about').css({
    'height': win_height + 'px',
  });

  //owl carousel
  $('#front-page-carousel').owlCarousel({
      loop:true,
      items: 1,
      center: true,
      nav:true,
      // autoplay:true,
      autoHeight:false,
      // autoplayTimeout: 5000,
      navText: ["<span class='lnr lnr-chevron-right'></span>",
      "<span class='lnr lnr-chevron-left'></span>"]
  });


});

var folder = "images/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if(val.match(/\.(jpe?g|png|gif)$/) && val !== null) {
                // $('#portfolio').append( "<div id=\"portfolio-photo\"class=\"owl-item\"><img src='"+ folder + val +"'></div>" );
                  $('#portfolio').append( "<img class='thumbnail' src='"+ folder + val +"'>" );
            }
        });
    }
});
  var img = $('.thumbnail');
 if (img.height() > 200) {
   $(this).addClass('largeThumbnail');
 };
