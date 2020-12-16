window.onload = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://script.google.com/macros/s/AKfycbxgSvcs5gANRET0tFDdBl1Hh5dlekwkXMnamwIYAPjr3yEXRj8/exec', true);
  xhttp.send();
  xhttp.onload = function(){
      let objetosJson = JSON.parse(this.responseText);
      const searchInput = document.querySelector('#searchInput');
      const tabla = document.querySelector('#tabla');

      let fragment = document.createDocumentFragment();
      let templateTr = document.querySelector('#template-tr').content;
        for(let objetoJson of objetosJson){
          templateTr.querySelector('.tipo').textContent = objetoJson.tipo;
          templateTr.querySelector('.nombre a').setAttribute("href", objetoJson.Link);
          templateTr.querySelector('.nombre a').textContent = objetoJson.Nombre;
          templateTr.querySelector('.asignatura').textContent = objetoJson.Asignatura;
          const clone = templateTr.cloneNode(true);
          fragment.appendChild(clone);
        };
        tabla.appendChild(fragment);
      };
};
