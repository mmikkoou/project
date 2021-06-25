$(document).ready(function() {
  $('.menu').click(function(){
    $('.menu_mini').css("display","block");
      $('.mainmenu').removeClass('none');
    });
    $('.icon_close').click(function(){
      $('.mainmenu').addClass('none');
    });
  });

  $(document).ready(function() {
    $('button').click(function(){
      $('button').addClass('color');
        $('button').html('ПОСТАВЛЕНО');
      });
    });

    $(document).ready(function() {
      $('button').click(function(){
        $('button').addClass('color');
        $('button').html('ЗАБРОНИРОВАНО');
      });
    });
