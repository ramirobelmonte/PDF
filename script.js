// url del json que envio desede appscript de google
const url_api = 'https://script.google.com/macros/s/AKfycbx2ozkGTwFrDK0wTWP6eJw3hQ1ufGsoCAmYcUoMk71jj2h784s/exec';
// variables del DOM
let header = document.querySelector('header'),
    section = document.getElementById('masonry-section'),
    fragment = document.createDocumentFragment(),
    file_card_template = document.getElementById('file-card-template').content,
    select = document.getElementById('select-input')
// otras variables
let extensiones = {
                    "application/msword" : "DOCUMENTO",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" : "DOCUMENTO",
                    "application/pdf" : "PDF",
                    "application/vnd.ms-powerpoint" : "PRESENTACION",
                    "video/mp4" : "VIDEO",
                    "image/jpeg" : "IMAGEN"
                  }
let category = [];


// las funciones
async function addApi() {
  let res = await fetch(url_api);
  let data = await res.json();

  if (res.ok) {
    data.forEach((archivo) => {
      archivo.type = extensiones[archivo.type];
      archivo.name = archivo.name.toLowerCase();
      category.push(archivo.category);
      showTemplate(archivo);
    });
  }else{
    // aqui armá algun div de error
    console.log('Error boludo');
  }
  hideloading();
}

// funciones varias
function optionAdd(lista){
  let listaR = new Set(lista)

  listaR.forEach((options) => {
    let option = document.createElement("option")
    option.textContent = options.toUpperCase()
    option.setAttribute("value", options)
    select.appendChild(option)
  });

}
function showTemplate(file){
  let clone = file_card_template.cloneNode(true)

  clone.querySelector('.file-card').classList.add(file.type);
  clone.querySelector('#file-tipo').textContent = file.type;
  clone.querySelector('#file-title').textContent = file.name;
  clone.querySelector('.file-card>a').setAttribute('href', file.link);
  clone.querySelector('#file-category').textContent = file.category;

  fragment.appendChild(clone);
  section.appendChild(fragment);
}
function showloading() {
  header.classList.add("show")
  setTimeout(()=>{header.classList.remove("show")}, 5000)
}
function hideloading() {
  header.classList.remove("show")
}

// se carga la ventana
window.onload = () => {
  showloading();
  addApi();
};
