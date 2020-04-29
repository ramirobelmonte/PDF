window.onload = function() {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://script.google.com/macros/s/AKfycbxgSvcs5gANRET0tFDdBl1Hh5dlekwkXMnamwIYAPjr3yEXRj8/exec', true);
  xhttp.send();

  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

      let datos = JSON.parse(this.responseText);
      const formulario = document.querySelector('#formulario');
      const tabla = document.querySelector('#tabla');

      const filtrar = ()=> {
        const texto = formulario.value.toLowerCase().replace(" ","");
        tabla.innerHTML = '';

        for (var i = 0; i < datos.length; i++){
            let item = datos[i];
            let dato = datos[i].Nombre.toLowerCase();

            if (dato.indexOf(texto) !== -1) {

              tabla.innerHTML += `
              <tr>
                <td class="icono">${item.tipo.split('/')[1]}</td>
                <td class="nombre">
                  <a class="tarjeta" href='${item.Link}'>
                    ${item.Nombre.replace(/\w[^_]+$/g,"")}
                  </a>
                </td>
                <td class="etiqueta">${item.Nombre.match(/[^\_]+(?=\.)/g)}</td>
              </tr>`
            }
        }
      }

      formulario.addEventListener('keyup', filtrar)
      filtrar()

    }
  }
};
