// url del json que envio desede appscript de google
const url_api = 'https://script.google.com/macros/s/AKfycbxgSvcs5gANRET0tFDdBl1Hh5dlekwkXMnamwIYAPjr3yEXRj8/exec';
// variables del DOM
let header = document.querySelector('header');
let table = document.getElementById('tabla-contenedora');
let fragment = document.createDocumentFragment();
let templateTr = document.getElementById('template-tr').content;

// se carga la ventana
window.onload = () => {addApi()
};
// se carga el DOM
document.addEventListener("DOMContentLoaded", () => {
  header.classList.add("fadeable");
});


// las funciones
async function addApi() {
  let res = await fetch(url_api);
  let data = await res.json();

  if (res.ok) {
    data.forEach((archivo) => {
      showTemplate(archivo);
    });

    setInterval( () => { header.classList.add("fade-in"); }, 500);
  }else{
    // aqui armá algun div de error
    console.log('Error boludo');
  }
}

function showTemplate(file) {
  let clone = templateTr.cloneNode(true)

  clone.querySelector('.tipo-archivo').textContent = file.tipo;
  clone.querySelector('.nombre-archivo>a').textContent = file.Nombre;
  clone.querySelector('.nombre-archivo>a').setAttribute('href', file.Link);
  clone.querySelector('.asignatura-archivo').textContent = file.asignatura;

  fragment.appendChild(clone);
  table.appendChild(fragment);
}
