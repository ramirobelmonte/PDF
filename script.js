$(document).ready(function(){
  $('.filtro').on('change', function(){
    if (this.value == "pt") {
      $('li').hide(),
      $('#pt').show();
    }
    if (this.value == "pg") {
      $('li').hide(),
      $('#pg').show();
    }
    else {
      $('li').show();
    }
  })
});
