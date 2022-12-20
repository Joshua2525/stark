AOS.init({
  easing: 'ease-in-out-sine'
});


$(document).on('click', '.maindivheaderpart .leftpart .menumaindiv', function () {
   $('body').toggleClass('menuopenscoll');
   $('.menubarlistmaindiv').toggle();
   $('.menubarmain').toggleClass('open');
   setTimeout(function(){
      $('.menubarlistmaindiv .menulist').toggleClass('animation');
   }, 1);
});