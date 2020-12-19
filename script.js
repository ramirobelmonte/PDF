const url_api = 'https://script.google.com/macros/s/AKfycbxgSvcs5gANRET0tFDdBl1Hh5dlekwkXMnamwIYAPjr3yEXRj8/exec';
// variables del DOM
let table = document.getElementById('tabla');
let fragment = document.createDocumentFragment();
let templateTr = document.getElementById('template-tr').content;
var tipo = templateTr.querySelector('.tipo');
var nombre = templateTr.querySelector('.nombre>a');
var nombreA = templateTr.querySelector('.nombre>a');
var asignatura = templateTr.querySelector('.asignatura');


async function listJson() {
  let response = await fetch(url_api);
  let data = await response.json();
  data.forEach((archivo) => { console.log(archivo);
    tipo.textContent = archivo.Tipo;
    nombre.textContent = archivo.Nombre;
    nombreA.setAttribute('href', archivo.Link);
    asignatura.textContent = archivo.Asignatura;

    const clone = templateTr.cloneNode(true);
    fragment.appendChild(clone);
  });
  table.appendChild(fragment);
};

function normalizar(y) {
  return y.toLowerCase().replace(" ","");
};

window.onload = listJson();
