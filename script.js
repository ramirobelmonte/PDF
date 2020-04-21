console.log("tamo activo")

document.querySelector('html').addEventListener('load', traerDatos());

function traerDatos() {
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'https://script.google.com/macros/s/AKfycbxgSvcs5gANRET0tFDdBl1Hh5dlekwkXMnamwIYAPjr3yEXRj8/exec', true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      item = datos.data;
      console.log(item.length);

      let tabla = document.querySelector('#tabla');
      tabla.innerHTML = '';

      for (var i = 1; i < item.length; i++) {
        let items = item[i];
        tabla.innerHTML += "<li><a href='" + items.Id + "'>" + items.Nombre + "</a></li>"
      }
    }
  }
}
