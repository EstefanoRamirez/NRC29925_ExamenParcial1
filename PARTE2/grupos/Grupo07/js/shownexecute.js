// 🔹 Diccionario de códigos (igual que antes)
const codigos = {
  'panel-default': `<div class="panel panel-default">
  <div class="panel-heading">Panel por defecto</div>
  <div class="panel-body">Contenido del panel</div>
  </div>`,
  'panel-primary': `<div class="panel panel-primary">
  <div class="panel-heading">Panel primario</div>
  <div class="panel-body">Contenido importante</div>
  </div>`,
  'panel-success': `<div class="panel panel-success">
  <div class="panel-heading">Panel de éxito</div>
  <div class="panel-body">Operación exitosa</div>
  </div>`,
  'panel-warning': `<div class="panel panel-warning">
  <div class="panel-heading">Panel de advertencia</div>
  <div class="panel-body">¡Atención!</div>
  </div>`,
  'panel-danger': `<div class="panel panel-danger">
  <div class="panel-heading">Panel de peligro</div>
  <div class="panel-body">¡Error crítico!</div>
  </div>`,
  'panel-list': `<div class="panel panel-default">
  <div class="panel-heading">Panel con lista</div>
  <ul class="list-group">
      <li class="list-group-item">Elemento 1</li>
      <li class="list-group-item">Elemento 2</li>
      <li class="list-group-item">Elemento 3</li>
  </ul>
  </div>`,
  'panel-video': `<div class="panel panel-default">
  <div class="panel-heading">Panel con video</div>
  <div class="panel-body">
      <div class="video-responsive">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ZfdProPxTiY?si=5xwdGT1I1r8oRUnq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
  </div>
  </div>`,
  'panel-image': `<div class="panel panel-default">
  <div class="panel-heading">Panel con imagen</div>
  <div class="panel-body">
      <img src="img/Bootstrap_logo.svg.png" class="img-fluid" alt="Imagen de ejemplo">
  </div>
  </div>`,
  'panel-table': `<div class="panel panel-default">
  <div class="panel-heading">Panel con tabla</div>
  <table class="table">
      <tr><th>Nombre</th><th>Edad</th></tr>
      <tr><td>Ana</td><td>23</td></tr>
      <tr><td>Juan</td><td>30</td></tr>
  </table>
  </div>`,
  'panel-pdf': `<div class="panel panel-default">
  <div class="panel-heading">Panel con PDF embebido</div>
  <div class="panel-body">
      <iframe src="docs/26-bootstrap.pdf" width="100%" height="500px"></iframe>
  </div>
  </div>`
};

// 🔹 Esta función sigue manejando los <code> en los ejemplos (no se toca)
function mostrarCodigo(tipo) {
  const panelBody = event.target.closest(".panel-body");
  if (!panelBody) return;

  const codeBlock = panelBody.querySelector("code.code-sample");
  if (!codeBlock) return;

  codeBlock.textContent = codigos[tipo];
}

// 🔹 Esta sigue igual: ejecuta código desde <code> por ID
function ejecutarCodigo(idCodigo, idResultado) {
  const codeElement = document.getElementById(idCodigo);
  const resultContainer = document.getElementById(idResultado);

  if (!codeElement || !resultContainer) return;

  const codigoHTML = codeElement.textContent.trim();
  resultContainer.innerHTML = codigoHTML;
}

// 🔹 🔸 NUEVAS FUNCIONES 🔸 🔹
// Para el panel editable con <textarea>
function mostrarCodigoEnTextarea(tipo) {
  const area = document.getElementById("codigo");
  area.value = codigos[tipo] || "<!-- Código no disponible -->";
}

function ejecutarDesdeTextarea() {
  const codigoHTML = document.getElementById("codigo").value.trim();
  const contenedor = document.getElementById("resultado");
  contenedor.innerHTML = codigoHTML;
}
