$(document).ready(function () {
  // Configurar todos los botones de ejecución
  $('.execute').each(function () {
    // Estado inicial del botón con íconos
    const targetId = $(this).data('target');
    if (targetId === 'ejecucion-10') {
      $(this).html('<i class="fas fa-code me-2"></i> EJECUTAR');
    } else {
      $(this).html('<i class="fas fa-play me-2"></i> EJECUTAR');
    }
  });

  $('.execute').on('click', function () {
    const $button = $(this);
    const targetId = $button.data('target');
    const $targetElement = $('#' + targetId);
    const $codeBlock = $button.prev('pre');

    // Caso especial para el ejercicio 10 (iframe)
    if (targetId === 'ejecucion-10') {
      if ($targetElement.is(':visible')) {
        $targetElement.slideUp();
        $button.html('<i class="fas fa-code me-2"></i> EJECUTAR');
        $button.removeClass('btn-primary').addClass('btn-outline-primary');
      } else {
        $targetElement.slideDown();
        $button.html('<i class="fas fa-eye-slash me-2"></i> OCULTAR');
        $button.removeClass('btn-outline-primary').addClass('btn-primary');
      }
      return;
    }

    // Para los demás ejercicios (1-9)
    if ($codeBlock.length && $targetElement.length) {
      // Si el contenedor ya está visible, ocultarlo
      if ($targetElement.is(':visible')) {
        $targetElement.slideUp();
        $button.html('<i class="fas fa-play me-2"></i> EJECUTAR');
        $button.removeClass('btn-primary').addClass('btn-outline-primary');
        return;
      }

      // Obtener el código del bloque pre
      const code = $codeBlock.find('code').text() || $codeBlock.text();

      // Limpiar el contenido anterior
      $targetElement.html('');

      try {
        // Mostrar el código ejecutado
        $targetElement.html(code);

        // Aplicar estilos para mejor visualización
        $targetElement.css({
          'text-align': 'left',
          'padding': '20px',
          'min-height': '60px',
        });

      } catch (error) {
        $targetElement.html('<div class="alert alert-danger">Error al ejecutar el código: ' + error.message + '</div>');
      }

      // Mostrar el elemento de resultado con slide
      $targetElement.slideDown();

      // Cambiar texto y estilo del botón
      $button.html('<i class="fas fa-eye-slash me-2"></i> OCULTAR');
      $button.removeClass('btn-outline-primary').addClass('btn-primary');
    }
  });

  // Inicializar todos los elementos demo-output como ocultos
  $('.demo-output').hide();
});