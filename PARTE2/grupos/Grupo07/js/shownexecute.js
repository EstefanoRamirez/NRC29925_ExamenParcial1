    // Diccionario de códigos
    const codigos = {
        paneltypes: `<div class="panel panel-default">
    <div class="panel-heading">Cabecera</div>
    <div class="panel-body">Cuerpo del panel</div>
    <div class="panel-footer">Pie del panel</div>
    </div>`,
        paneltable: `<div class="panel panel-default">
    <div class="panel-heading">Panel con tabla</div>
    <table class="table">
        <tr><th>Nombre</th><th>Edad</th></tr>
        <tr><td>Ana</td><td>23</td></tr>
        <tr><td>Juan</td><td>30</td></tr>
    </table>
    </div>`,
        panellist: `<div class="panel panel-default">
    <div class="panel-heading">Panel con lista</div>
    <ul class="list-group">
        <li class="list-group-item">Elemento 1</li>
        <li class="list-group-item">Elemento 2</li>
        <li class="list-group-item">Elemento 3</li>
    </ul>
    </div>`
    };

    // Función para cambiar el contenido del textarea
    function mostrarCodigo(tipo) {
        const area = document.getElementById("codigo");
        area.value = codigos[tipo];
    }
    
    function ejecutarCodigo() {
        const codigoHTML = document.getElementById("codigo").value;
        const contenedor = document.getElementById("resultado");
        contenedor.innerHTML = codigoHTML; // Renderiza el HTML en el div
    }