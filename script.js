let li = document.getElementsByTagName('li');

function toggle(elemento, elemento2) {
  for (var i = 0; i < elemento.length; i++) {
    elemento[i].classList.add('hide')
  }
  for (var i = 0; i < elemento2.length; i++) {
    elemento2[i].classList.remove('hide')
  }
  if (i == 0) {
    document.getElementById('nada').classList.remove('hide')
  }else {
    document.getElementById('nada').classList.add('hide')
  }
};

function cat(){
  x = document.querySelector('#filtro').value;
  y = document.getElementsByClassName(x);

  if (x == 'all') {
    toggle(li, li);
  }else {
    toggle(li, y);
  }
};

// *https://jsfiddle.net/v2ewfg9u/ como filtrar la lista
// *futura actualizacion: usar la api de drive
