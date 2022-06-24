$(document).ready(function() {


  //-----------------------Mobile Menu
  $(document).on('click', '.menu-toggle__btn', function(e) {
    e.preventDefault();
    $(this).toggleClass('opened');
    $('.nav-sections-items').toggleClass('opened');
    $('body').toggleClass('overflow');
  });

});
