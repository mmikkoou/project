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
        $('button').html('Поставлено');
      });
    });

    $(document).ready(function() {
      $('.btn_t').click(function(){
        $('.btn_t').addClass('color');
        $('.btn_t').html('Забронировано');
      });
    });

    $(document).ready(function() {
      $('.btn').click(function(){
        $('.btn').addClass('color');
        $('.btn').html('Отправлено');
      });
    });
