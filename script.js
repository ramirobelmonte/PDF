// url del json que envio desede appscript de google
const url_api = 'https://script.google.com/macros/s/AKfycbx2ozkGTwFrDK0wTWP6eJw3hQ1ufGsoCAmYcUoMk71jj2h784s/exec'
// variables del DOM
let header = document.querySelector('header'),
    section = document.getElementById('masonry-section'),
    filterInput = document.getElementById('filterInput'),
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
let category = []
let lista = []


// las funciones
async function addApi() {
  let res = await fetch(url_api)
  let data = await res.json()

  if (res.ok) {
    data.forEach((archivo) => {
      archivo.type = extensiones[archivo.type]
      archivo.name = archivo.name.toLowerCase()
      category.push(archivo.category)
      lista.push(archivo.name)
      showTemplate(archivo)
  })
  }else{
    // aqui armá algun div de error
    console.log('Error boludo')
  }
  hideloading()
}

// funciones varias
function optionAdd(lista){
  let listaR = new Set(lista)

  listaR.forEach((options) => {
    let option = document.createElement("option")
    option.textContent = options.toUpperCase()
    option.setAttribute("value", options)
    select.appendChild(option)
  })

}
function showTemplate(file){
  let clone = file_card_template.cloneNode(true)

  clone.querySelector('.file-card').setAttribute('alt', file.name)
  clone.querySelector('.file-card').classList.add(file.type)
  clone.querySelector('#file-tipo').textContent = file.type
  clone.querySelector('#file-title').textContent = file.name
  clone.querySelector('.file-card>a').setAttribute('href', file.link)
  clone.querySelector('#file-category').textContent = file.category

  fragment.appendChild(clone)
  section.appendChild(fragment)
}
function hideloading(){
  header.classList.add("show")
  setTimeout(()=>{
    header.classList.add("show")
  }, 5000)
}
// se carga la ventana
window.onload = () => {
  addApi()

  filterInput.addEventListener("keyup", () => {
    let value = filterInput.value.toUpperCase()
    let listCardsFile = document.querySelectorAll(".file-card")
    listCardsFile.forEach(item => {
      if (item.textContent.toUpperCase().includes(value)) {
        item.classList.remove("filter")        
      }else {
        item.classList.add("filter")
      }
    });
  })
}
