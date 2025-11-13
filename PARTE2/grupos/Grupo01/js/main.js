$(document).ready(function () {
    $(".execute").click(function () {
        var example = $(this).data("code");
        var container = $("#" + example);
        var existingButton = container.find("button");
        var $this = $(this); 

        if (existingButton.length > 0) {
        existingButton.tooltip('dispose');
        container.empty(); 
        $this.text("Ejecutar"); 
        return;
        }
        var code;
        switch (example) {
            case "tooltip-derecha":
                code = `<button class="btn btn-info " data-toggle="tooltip" data-placement="right" title="Derecha"> Pasa el mouse por mí</button>`;
                break;
            case "tooltip-izquierda":
                code = `<button class="btn btn-info " data-toggle="tooltip" data-placement="left" title="Izquierda"> Pasa el mouse por mí</button>`;
                break;
            case "tooltip-arriba":
                code = `<button class="btn btn-info " data-toggle="tooltip" data-placement="top" title="Arriba"> Pasa el mouse por mí</button>`;
                break;
            case "tooltip-abajo":
                code = `<button class="btn btn-info " data-toggle="tooltip" data-placement="bottom" title="Abajo"> Pasa el mouse por mí</button>`;
                break;
        }
        container.html(code);
        $('[data-toggle="tooltip"]').tooltip();

    });


 $(".execute-popover").click(function () {
        var example = $(this).data("code");
        var container = $("#" + example);
        var existingButton = container.find("button");
        var $this = $(this);

        if (existingButton.length > 0) {
        existingButton.popover('dispose'); 
        container.empty();
        $this.text("Ejecutar");
        return;
        }

        // Crear nuevo botón según el ejemplo
        var code = "";
        switch (example) {
        case "popover-derecha":
            code = `<button class="btn btn-info" data-container="body" data-toggle="popover" data-placement="right" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra consequat felis, ac efficitur mauris vestibulum non." title="Mensaje 1...">Presionar</button>`;
            break;
        case "popover-izquierda":
            code = `<button class="btn btn-info" data-container="body" data-toggle="popover" data-placement="left" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra consequat felis, ac efficitur mauris vestibulum non." title="Mensaje 2...">Presionar</button>`;
            break;
        case "popover-arriba":
            code = `<button class="btn btn-info" data-container="body" data-toggle="popover" data-placement="top" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra consequat felis, ac efficitur mauris vestibulum non." title="Mensaje 3...">Presionar</button>`;
            break;
        case "popover-abajo":
            code = `<button class="btn btn-info" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra consequat felis, ac efficitur mauris vestibulum non." title="Mensaje 4...">Presionar</button>`;
            break;
        }
        container.html(code);
        $('[data-toggle="popover"]').popover();
    });

    // Lógica para cargar/mostrar el proyecto PRUEBA_PARTE2 dentro de un iframe aislado
    (function () {
        var btn = document.getElementById('runPruebaBtnGrupo01');
        var container = document.getElementById('pruebaContainer');
        var iframe = document.getElementById('pruebaIframe');
        var srcPath = 'Prueba1_Parte2/index.html';
        var opened = false;

        if (btn) {
            btn.addEventListener('click', function () {
                if (!opened) {
                    // Abrir: cargar iframe y mostrar contenedor
                    btn.disabled = true;
                    btn.innerText = 'Cargando...';
                    iframe.src = srcPath;
                    container.style.display = 'block';

                    // Cuando termine de cargar, actualizar estado del botón
                    var onload = function () {
                        btn.disabled = false;
                        btn.innerText = 'Cerrar Proyecto';
                        btn.classList.remove('btn-success');
                        btn.classList.add('btn-danger');
                        opened = true;
                        iframe.removeEventListener('load', onload);
                    };
                    iframe.addEventListener('load', onload);
                } else {
                    // Cerrar: limpiar src para liberar recursos y ocultar
                    iframe.src = '';
                    container.style.display = 'none';
                    btn.innerText = 'Ejecutar Proyecto';
                    btn.classList.remove('btn-danger');
                    btn.classList.add('btn-success');
                    opened = false;
                }
            });
        }
    })();

});
