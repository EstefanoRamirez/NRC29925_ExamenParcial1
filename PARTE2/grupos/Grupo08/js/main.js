$(document).ready(function() {

    function toggleSlide(buttonId, targetId, textShow, textHide) {
        $(buttonId).on('click', function() {
            var target = $(targetId);
            if (target.is(':visible')) {
                target.slideUp();
                $(this).html(textShow);
            } else {
                target.slideDown();
                $(this).html(textHide);
            }
        });
    }

    function toggleExecution(buttonId, targetId) {
        $(buttonId).on('click', function() {
            var target = $(targetId);
            if (target.is(':visible')) {
                target.slideUp();
                $(this).html('<i class="fas fa-play"></i> Ejecutar');
            } else {
                target.slideDown();
                $(this).html('<i class="fas fa-eye-slash"></i> Ocultar');
            }
        });
    }

    toggleSlide('#btn-mostrar-video', '#video-container', 
        '<i class="fas fa-video"></i> Mostrar Video Tutorial', 
        '<i class="fas fa-eye-slash"></i> Ocultar Video Tutorial'
    );
    
    toggleSlide('#btn-mostrar-imagenes', '#imagenes-container', 
        '<i class="fas fa-image"></i> Mostrar Imágenes de Ejemplo', 
        '<i class="fas fa-eye-slash"></i> Ocultar Imágenes de Ejemplo'
    );


    toggleSlide('#btn-mostrar-ejemplo-practico', '#ejemplo-practico-contenido', 
        '<i class="fas fa-laptop-code"></i> Mostrar Ejemplo Práctico', 
        '<i class="fas fa-eye-slash"></i> Ocultar Ejemplo Práctico'
    );
    toggleSlide('#btn-mostrar-prueba-parcial', '#prueba-parcial-contenido', 
        '<i class="fas fa-code"></i> Mostrar Prueba Parcial', 
        '<i class="fas fa-eye-slash"></i> Ocultar Prueba Parcial'
    );


    toggleExecution('#btn-ejecutar-badge-contextuales', '#ejecucion-badge-contextuales');
    toggleExecution('#btn-ejecutar-badge-pill', '#ejecucion-badge-pill');
    toggleExecution('#btn-ejecutar-badge-botones', '#ejecucion-badge-botones');

    toggleExecution('#btn-ejecutar-breadcrumb-default', '#ejecucion-breadcrumb-default');
    toggleExecution('#btn-ejecutar-breadcrumb-iconos', '#ejecucion-breadcrumb-iconos');

    toggleExecution('#btn-ejecutar-pagination-default', '#ejecucion-pagination-default');
    toggleExecution('#btn-ejecutar-pagination-iconos', '#ejecucion-pagination-iconos');
    toggleExecution('#btn-ejecutar-pagination-estados', '#ejecucion-pagination-estados');
    toggleExecution('#btn-ejecutar-pagination-sizing', '#ejecucion-pagination-sizing');

    toggleExecution('#btn-ejecutar-label-default', '#ejecucion-label-default');
    toggleExecution('#btn-ejecutar-label-colores', '#ejecucion-label-colores');


    $('.nav-temas .nav-link').on('click', function (e) {
        var $this = $(this);
        var $targetPane = $($this.attr('href'));

        $('.ejecucion-code-block').slideUp();
        $('.btn-ejecutar').html('<i class="fas fa-play"></i> Ejecutar');
        
        $('#ejemplo-practico-contenido').slideUp();
        $('#prueba-parcial-contenido').slideUp();
        $('#btn-mostrar-ejemplo-practico').html('<i class="fas fa-laptop-code"></i> Mostrar Ejemplo Práctico');
        $('#btn-mostrar-prueba-parcial').html('<i class="fas fa-code"></i> Mostrar Prueba Parcial');
        
        $('#video-container').slideUp();
        $('#imagenes-container').slideUp();
        $('#btn-mostrar-video').html('<i class="fas fa-video"></i> Mostrar Video Tutorial General');
        $('#btn-mostrar-imagenes').html('<i class="fas fa-image"></i> Mostrar Imágenes de Ejemplo');

        if ($this.hasClass('active')) {
            e.preventDefault();
            e.stopPropagation();

            $targetPane.removeClass('show active');
            $this.removeClass('active');
        }

    });

});