// Espera que el DOM esté completamente cargado
$(document).ready(function() {
  
  // Al hacer clic en el botón Formulario
  $('#btnFormulario').on('click', function(e) {
    e.preventDefault(); // evita que el enlace cambie de página

    // Carga el contenido del archivo dentro del modal
    $('#contenidoFormulario').load('FormFormulario.html', function(response, status, xhr) {
      if (status === "error") {
        $('#contenidoFormulario').html("<p>Error al cargar el formulario.</p>");
      }
    });

    // Muestra el modal
    $('#formularioModal').modal('show');
  });

});
