// esto es la tabla de archivos que no es tan tabla
let li = document.getElementsByTagName('li');
// esta es una funcion que oculta el primero y muestra el segundo
function toggle(elemento, elemento2) {
  for (var i = 0; i < elemento.length; i++) {
    elemento[i].classList.add('hide')
  }
  for (var i = 0; i < elemento2.length; i++) {
    elemento2[i].classList.remove('hide')
  }
};
// la funcion gato
function cat(){
  x = document.querySelector('#filtro').value;
  y = document.getElementsByClassName(x);

  if (x == 'all') {
    toggle(y, li);
  }else {
    toggle(li, y);
  }
};

// https://jsfiddle.net/v2ewfg9u/ !! filtrar tabla sasas
