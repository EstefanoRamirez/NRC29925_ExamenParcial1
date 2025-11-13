$(document).ready(function() {
    $('#btn-mostrar-ejercicio').on('click', function() {
        var ejercicio = $('#ejercicio-contenido');
        
        if (ejercicio.is(':visible')) {
            // Si está visible, lo oculta
            ejercicio.slideUp();
            $(this).html(' Visualizar Ejercicio');
        } else {
            // Si está oculto, lo muestra
            ejercicio.slideDown(function() {
                // Si tienes funciones de inicialización, se ejecutan aquí
                if (typeof inicializarScrollspy === 'function') inicializarScrollspy(document);
            });
            $(this).html(' Ocultar Ejercicio');
        }
    });
});



