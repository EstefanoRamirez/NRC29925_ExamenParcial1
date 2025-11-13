$(document).ready(function() {

     $(".btn[href='']").first().on("click", function (e) {
    e.preventDefault();

    $("#barra-progreso-container").fadeIn();
    let progreso = 0;
    let intervalo = setInterval(function () {
      progreso += 10;
      $("#barra-progreso")
        .css("width", progreso + "%")
        .text("Cargando " + progreso + "%");
      if (progreso >= 100) {
        clearInterval(intervalo);
        $("#barra-progreso-container").fadeOut();
        $("#login").modal("show");
      }
    }, 200);
  });
    const datosGrupos = {
        7: [
            { num: 1, nombre: "Kevin", apellido: "Llumiquinga", correo: "kevin@espe.edu.ec" },
            { num: 2, nombre: "Joselin", apellido: "Villegas", correo: "joselin@espe.edu.ec" }
        ]
    };
    $("#listaGrupos a").click(function(e) {
        e.preventDefault();
        const grupo = $(this).data("grupo");
        if (datosGrupos[grupo]) {
            let tablaHTML = `
            <div class="panel panel-info">
                <div class="panel-heading text-center">
                    <h3><strong>Integrantes del Grupo ${grupo}</strong></h3>
                </div>
                <div class="panel-body">
                    <table class="table table-striped table-bordered text-center">
                        <thead>
                            <tr class="info">
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            datosGrupos[grupo].forEach(p => {
                tablaHTML += `<tr><td>${p.num}</td><td>${p.nombre}</td><td>${p.apellido}</td><td>${p.correo}</td></tr>`;
            });
            tablaHTML += `
                        </tbody>
                    </table>
                    <div class="text-center">
                        <button id="btnVolver" class="btn btn-info">Volver</button>
                    </div>
                </div>
            </div>`;
            const nuevaVentana = window.open("", "_blank");
                nuevaVentana.document.write(`
                <html>
                    <head>
                    <title>Integrantes del Grupo ${grupo}</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
                    <style>
                        body { padding: 20px; background-color: #f8f9fa; }
                        .panel { box-shadow: 0 0 10px rgba(0,0,0,0.2); border-radius: 8px; }
                        h3 { color: #0275d8; }
                        table { margin-top: 10px; }
                        button { margin-top: 15px; }
                    </style>
                    </head>
                    <body>
                    ${tablaHTML}
                    <script>
                        document.getElementById('btnVolver').addEventListener('click', () => {
                        window.close();
                        });
                    </script>
                    </body>
                </html>
                `);
                nuevaVentana.document.close();
        } else {
            alert("Solo el Grupo 7 está habilitado por ahora.");
        }
    });
    const boton = document.getElementById('botonformulario');
    const modalformulario = $('#formulariologin');
    const loginform=$('#login');
    const volver = document.getElementById('btCancelar');
    let visible = false;
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        if (!visible) {
            modalformulario.modal('show');
            visible = true;
        } else {
            modalformulario.modal('hide');
            visible = false;
        }
    });
        boton.addEventListener('click', (e) => {
        e.preventDefault();
        if (!visible) {
            loginform.modal('show');
            visible = true;
        } else {
            loginform.modal('hide');
            visible = false;
        }
    });
    volver.addEventListener('click', () => {
        modalformulario.modal('hide');
        visible = false;
    });
    modalformulario.on('hidden.bs.modal', () => {
        visible = false;
    });
});




