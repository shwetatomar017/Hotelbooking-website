/*start tooltip from room page*/
$(document).ready(function(){
    'use strict'; 
    $('[data-toggle="tooltip"]').tooltip();
});
/*end*/

(function($) {
 
 
/* back to top button */
$(window).on('scroll', function(e) {  
    if ($(this).scrollTop() >= 700) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(400);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
  $("#return-to-top").on('click', function(e) {  
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 700);
});
/*end to top*/

$.fn.menumaker = function(options) {  
 var hmenu = $(this), settings = $.extend({
   format: "dropdown",
   sticky: false
 }, options);
 return this.each(function() {
   $(this).find(".button").on('click', function(){
     $(this).toggleClass('menu-opened');
     var mainmenu = $(this).next('ul');
     if (mainmenu.hasClass('open')) { 
       mainmenu.slideToggle().removeClass('open');
     }
     else {
       mainmenu.slideToggle().addClass('open');
       if (settings.format === "dropdown") {
         mainmenu.find('ul').show();
       }
     }
   });
   hmenu.find('li ul').parent().addClass('has-sub');
multiTg = function() {
     hmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
     hmenu.find('.submenu-button').on('click', function() {
       $(this).toggleClass('submenu-opened');
       if ($(this).siblings('ul').hasClass('open')) {
         $(this).siblings('ul').removeClass('open').slideToggle();
       }
       else {
         $(this).siblings('ul').addClass('open').slideToggle();
       }
     });
   };
   if (settings.format === 'multitoggle') multiTg();
   else hmenu.addClass('dropdown');
   if (settings.sticky === true) hmenu.css('position', 'fixed');
resizeFix = function() {
  var mediasize = 1000;
     if ($( window ).width() > mediasize) {
       hmenu.find('ul').show();
     }
     if ($(window).width() <= mediasize) {
       hmenu.find('ul').hide().removeClass('open');
     }
   };
   resizeFix();
   return $(window).on('resize', resizeFix);
 });
  };
 

$("#hmenu").menumaker({
   format: "multitoggle"
});

$(window).on('scroll', function(e) {  if ($(this).scrollTop() > 1){      $('header').addClass("sticky");  }  else{    
$('header').removeClass("sticky");  }});

/*end menu*/


})(jQuery);
