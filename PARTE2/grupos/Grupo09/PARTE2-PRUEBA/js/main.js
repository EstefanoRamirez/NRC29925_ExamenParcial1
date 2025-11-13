
$(document).ready(function () {
    // Selecciona el enlace con el id 'mostrar-tabla-btn'
    $('#mostrar-tabla-btn').on('click', function (event) {
        // Previene el comportamiento por defecto del enlace (que es recargar la página)
        event.preventDefault();

        // Selecciona la sección de la tabla por su id y la muestra con un efecto de aparición suave
        $('#seccion-tabla-grupo').fadeIn();
    });
    $('#formularioValidacionModal').on('submit', function (event) {
        // 1. Prevenimos que el formulario se envíe de la forma tradicional
        event.preventDefault();

        // Variable para controlar si el formulario es válido
        var esValido = true;

        // 2. Limpiamos los errores previos en cada intento de envío
        // Quitamos las clases de error/éxito y vaciamos los mensajes de ayuda
        $('.form-group').removeClass('has-error has-success');
        $('.help-block').text('');

        // 3. Definimos las validaciones campo por campo

        // Validar Nombre
        var nombre = $('#nombreModal');
        if (nombre.val().trim() === '') {
            nombre.closest('.form-group').addClass('has-error');
            nombre.closest('.form-group').find('.help-block').text('El nombre es obligatorio.');
            esValido = false;
        } else {
            nombre.closest('.form-group').addClass('has-success');
        }

        // Validar Usuario
        var usuario = $('#usuarioModal');
        if (usuario.val().trim() === '') {
            usuario.closest('.form-group').addClass('has-error');
            usuario.closest('.form-group').find('.help-block').text('El usuario es obligatorio.');
            esValido = false;
        } else {
            usuario.closest('.form-group').addClass('has-success');
        }

        // Validar Contraseñas
        var pass1 = $('#pass1Modal');
        var pass2 = $('#pass2Modal');
        if (pass1.val().trim() === '') {
            pass1.closest('.form-group').addClass('has-error');
            pass1.closest('.form-group').find('.help-block').text('La contraseña es obligatoria.');
            esValido = false;
        } else if (pass1.val().length < 6) {
            pass1.closest('.form-group').addClass('has-error');
            pass1.closest('.form-group').find('.help-block').text('La contraseña debe tener al menos 6 caracteres.');
            esValido = false;
        } else {
            pass1.closest('.form-group').addClass('has-success');
        }

        if (pass2.val().trim() === '') {
            pass2.closest('.form-group').addClass('has-error');
            pass2.closest('.form-group').find('.help-block').text('Debe confirmar la contraseña.');
            esValido = false;
        } else if (pass1.val() !== pass2.val()) {
            pass2.closest('.form-group').addClass('has-error');
            pass2.closest('.form-group').find('.help-block').text('Las contraseñas no coinciden.');
            esValido = false;
        } else {
            // Solo marcamos como éxito si la primera contraseña también es válida
            if (pass1.closest('.form-group').hasClass('has-success')) {
                pass2.closest('.form-group').addClass('has-success');
            }
        }

        // Validar Género
        var genero = $('#generoModal');
        if (genero.val() === null || genero.val() === '') {
            genero.closest('.form-group').addClass('has-error');
            genero.closest('.form-group').find('.help-block').text('Debe seleccionar un género.');
            esValido = false;
        } else {
            genero.closest('.form-group').addClass('has-success');
        }

        // 4. Si todo es válido, mostramos un mensaje y cerramos el modal
        if (esValido) {
            alert('¡Formulario validado y listo para enviar!');

            // Opcional: Cerrar el modal
            $('#formularioModal').modal('hide');

            // Opcional: Limpiar el formulario para la próxima vez que se abra
            $('#formularioValidacionModal')[0].reset();
            $('.form-group').removeClass('has-success'); // Limpiar clases de éxito
        }
    });

    // Opcional: Limpiar la validación cuando el modal se cierra
    $('#formularioModal').on('hidden.bs.modal', function () {
        // Reseteamos el formulario y quitamos todas las clases de validación
        $('#formularioValidacionModal')[0].reset();
        $('.form-group').removeClass('has-error has-success');
        $('.help-block').text('');

    });
});
