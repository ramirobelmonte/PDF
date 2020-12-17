const url_api = 'https://script.google.com/macros/s/AKfycbxgSvcs5gANRET0tFDdBl1Hh5dlekwkXMnamwIYAPjr3yEXRj8/exec';

async function listJson() {
  let response = await fetch(url_api);
  let data = await response.json();


};
