$(document).ready(function(){

  $('.thumbnail').click(function(){
    var source = ($(this).attr('src'));
    $('.portfolio-main-display').attr('src', source);
      win_width = $(document).innerWidth();
      win_height = $(window).height();
      picture_width = $('.portfolio-main-display').attr('src', source).width();
      picture_height = win_height - 250;
      picture_margin = (win_width - picture_width) / 2;
      $('.portfolio-main-display').css({
        'margin-left': picture_margin + 'px',
        'max-width' : win_width + 'px',
        'max-height': picture_height + 'px',
      });
    });

  //owl carousel
  $('#front-page-carousel').owlCarousel({
      loop:true,
      items: 1,
      // center: true,
      nav:true,
      autoplay:true,
      autoplayTimeout: 5000,
      navText: ["<i class='fa fa-arrow-circle-right'></i>",
      "<i class='fa fa-arrow-circle-left'></i>"]
  });


  $('.c-hamburger').click(function() {
    if(this.classList.contains("is-active") == true) {
      this.classList.remove("is-active");
      $(".navigation-menu").hide();
      $('body').animate({'left':'+=200px'}, {queue: false, duration: 500});
      $('.c-hamburger').animate({'right' : '+40px'}, {queue: false, duration: 500})

    } else {
      this.classList.add('is-active');
      $(".navigation-menu").show();
      $('body').animate({'left':'-=200px'}, {queue: false, duration: 500});
      $('.c-hamburger').animate({'right' : '-40px'}, {queue: false, duration: 500})
    }
  });

  $('#portfolio').owlCarousel({
    loop:true,
    nav:true,
    center: false,
    // autoplay:true,
    autoLoad: true,
    // autoWidth: false,
    margin: 10,
    autoplayTimeout: 5000,
      navText: ["<i id='arrow' class='fa fa-arrow-circle-right'></i>",
     "<i id='arrow1' class='fa fa-arrow-circle-left'></i>"]
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
