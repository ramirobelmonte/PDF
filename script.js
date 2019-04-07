$(document).ready(function(){

  $('.filtro').on('change', function(){
    if (this.value == "pt") {
      $('li').hide(),
      $('.pt').show();
    }
    else if (this.value == "mf") {
      $('li').hide(),
      $('.mf').show();
    }
    else if (this.value == "pg") {
      $('li').hide(),
      $('.pg').show();
    }
    else {
      $('li').show();
    }
  })
});
