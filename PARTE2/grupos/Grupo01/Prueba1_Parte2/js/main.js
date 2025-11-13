/* Toggle: muestra/oculta el contenido ya embebido en #dynamicContent (vanilla JS) */
document.addEventListener('DOMContentLoaded', function() {
	var content = document.getElementById('dynamicContent');

	// Inicializar tooltips y popovers nativos de Bootstrap 5
	if (window.bootstrap) {
		// Inicializar tooltips: elementos con data-bs-toggle="tooltip" y los marcados con data-bs-tooltip
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"], [data-bs-tooltip]'));
		tooltipTriggerList.forEach(function (el) { new bootstrap.Tooltip(el); });

		var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
		popoverTriggerList.forEach(function (el) { new bootstrap.Popover(el); });

	}

	document.addEventListener('click', function(e) {
		var target = e.target;
		// permite que funcione si el click es en el <a> o en un elemento interno
		var link = target.closest && target.closest('#grupo2-link');
		if (link) {
			e.preventDefault();
			var style = window.getComputedStyle(content);
			if (style.display === 'none') {
				content.style.display = 'block';
			} else {
				content.style.display = 'none';
			}
		}
	});
});

