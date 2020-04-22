document.querySelector('html').addEventListener('load', traerDatos());

function traerDatos() {
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'https://script.google.com/macros/s/AKfycbxgSvcs5gANRET0tFDdBl1Hh5dlekwkXMnamwIYAPjr3yEXRj8/exec', true);
  xhttp.send();
  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

      let datos = JSON.parse(this.responseText);
      item = datos;
      console.log(datos);
      let filtro = item.filter(function (el) {
        return (el.tipo != 'application/vnd.google-apps.spreadsheet')
      })

      let tabla = document.querySelector('#tabla');
      tabla.innerHTML = '';

      for (var i = 0; i < filtro.length; i++) {
        let items = filtro[i];
        tabla.innerHTML += "<li><i>" + items.tipo.split('/')[1] + "</i><a href='" + items.Link + "'>" + items.Nombre + "</a></li>"
      }
    }
  }
}
