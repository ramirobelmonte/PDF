$(document).ready(function () {
    $.get("Documentos", function(data) {
      $("#files").append(data);
    });
  });
