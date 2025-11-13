$(document).ready(function(){
    // Función para ejecutar ejemplos de código
    $('.execute').on('click', function(){
        var target = $(this).data('target');
        var container = $('#' + target);
        
        // Toggle de visibilidad
        container.toggle();
        
        // Si el contenedor está visible
        if(container.is(':visible')) {
            // Buscar el contenedor de código más cercano
            var htmlCode = $(this).closest('.card-body').find('#code-html').text() || '';
            var jsCode = $(this).closest('.card-body').find('#code-js').text() || '';
            
            // Limpiar el contenedor
            container.empty();
            
            // Si hay código HTML, lo inyectamos
            if(htmlCode) {
                container.html(htmlCode);
            }
            
            // Si hay código JavaScript, lo evaluamos
            if(jsCode) {
                try {
                    // Remover cualquier script previo
                    container.find('script').remove();
                    
                    // Crear un nuevo elemento script
                    var script = document.createElement('script');
                    script.text = jsCode;
                    container.append(script);
                } catch(e) {
                    console.error('Error al ejecutar el código JavaScript:', e);
                    container.append('<div class="alert alert-danger mt-2">Error al ejecutar el código JavaScript</div>');
                }
            }

            // Cambiar el texto del botón
            $(this).text('Ocultar');
        } else {
            // Restaurar el texto del botón
            $(this).text('Ejecutar');
        }
    });
});