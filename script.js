function puto(){
  var x = document.querySelector('#filtro').value,
      li = document.getElementsByTagName('li'),
      pt = document.getElementsByClassName('pt'),
      mf = document.getElementsByClassName('mf'),
      pg = document.getElementsByClassName('pg');

  function ocultar(elemento) {
    for (var i = 0; i < elemento.length; i++) {
      elemento[i].classList.add("hide");
    }
  }
  function mostrar(elemento) {
    for (var i = 0; i < elemento.length; i++) {
      elemento[i].classList.remove("hide");
    }
  }

  if (x == 'pt') {
    ocultar(li),mostrar(pt);
  }
  else if (x == 'mf') {
    ocultar(li), mostrar(mf);
  }
  else if (x == 'pg') {
    ocultar(li), mostrar(pg);
  }
  else {
    mostrar(li);
  }
};
// https://jsfiddle.net/v2ewfg9u/ !! filtrar tabla sasas
