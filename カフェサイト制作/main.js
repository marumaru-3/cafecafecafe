$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});

$(function() {
   $('.hamburger').click(function() {
       $(this).toggleClass('active');

       if ($(this).hasClass('active')) {
           $('.globalMenuSp').addClass('active');
       } else {
           $('.globalMenuSp').removeClass('active');
       }
   });
});