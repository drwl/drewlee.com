jQuery(function($) {
  var i = 0;
  var divs = $('div.content');
  var div_count = divs.length;
  var div;

  function hide_divs(){
    for (i = 0; i < div_count; i++) {
      div = $(divs[i]);
      if (!div.hasClass('hidden')) {
        div.addClass('hidden');
      }
    }
  };

  $('#atm-ucla').click(function(e) {
    e.preventDefault();
    hide_divs();
    $('#div-atm-ucla').removeClass('hidden');
  });

  $('#wid-work').click(function(e) {
    e.preventDefault();
    hide_divs();
    $('#div-wid-work').removeClass('hidden');
  });

  $('#lc-email').click(function(e) {
    e.preventDefault();
    hide_divs();
    $('#div-lc-email').removeClass('hidden');
  });


});
