$(document).ready(function() {
    
    // Función para inicializar Scrollspy en un contenedor
    function inicializarScrollspy(container) {
        var scrollSpyElements = container.querySelectorAll('[data-spy="scroll"]');
        scrollSpyElements.forEach(function(element) {
            var targetId = element.getAttribute('data-target');
            var targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Limpiar observadores anteriores si existen
                if (element._scrollspyObserver) {
                    element._scrollspyObserver.disconnect();
                }
                
                // Usar Intersection Observer para detectar secciones visibles
                var observerOptions = {
                    root: element,
                    rootMargin: '0px',
                    threshold: 0.5
                };
                
                var observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            var id = entry.target.getAttribute('id');
                            if (id) {
                                // Actualizar el enlace activo
                                var activeLink = targetElement.querySelector('a[href="#' + id + '"]');
                                if (activeLink) {
                                    // Remover active de todos los enlaces
                                    targetElement.querySelectorAll('.nav-link').forEach(function(link) {
                                        link.classList.remove('active');
                                    });
                                    // Agregar active al enlace correspondiente
                                    activeLink.classList.add('active');
                                }
                            }
                        }
                    });
                }, observerOptions);
                
                // Guardar el observer para poder desconectarlo después
                element._scrollspyObserver = observer;
                
                // Observar todas las secciones dentro del contenedor scrollspy
                var sections = element.querySelectorAll('[id]');
                sections.forEach(function(section) {
                    observer.observe(section);
                });
            }
        });
    }
    
    // Función para manejar clics en menús de navegación
    function inicializarMenuNavegacion(container) {
        // Usar delegación de eventos para evitar problemas con múltiples listeners
        var menuContainer = container === document ? document : container;
        
        // Remover listeners anteriores y agregar uno nuevo usando delegación
        menuContainer.addEventListener('click', function(e) {
            if (e.target.classList.contains('nav-link') && e.target.closest('.nav-pills')) {
                var link = e.target;
                var href = link.getAttribute('href');
                
                // Solo procesar si es un enlace interno
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    var targetSection = document.querySelector(href);
                    if (targetSection) {
                        // Encontrar el contenedor scrollspy padre
                        var scrollspyContainer = targetSection.closest('[data-spy="scroll"]');
                        if (scrollspyContainer) {
                            // Calcular la posición relativa dentro del contenedor
                            var sectionTop = targetSection.offsetTop - scrollspyContainer.offsetTop;
                            scrollspyContainer.scrollTop = sectionTop - 20; // Offset de 20px
                        }
                    }
                }
            }
        }, true);
    }
    
    // Botón para mostrar/ocultar el ejemplo interactivo
    $('#btn-mostrar-ejemplo').on('click', function() {
        var ejemplo = $('#ejemplo-interactivo');
        if (ejemplo.is(':visible')) {
            ejemplo.slideUp();
            $(this).html('<i class="fas fa-play"></i> Mostrar Ejemplo Interactivo');
        } else {
            ejemplo.slideDown(function() {
                // Reinicializar Scrollspy cuando se muestra el contenedor
                inicializarScrollspy(document);
                inicializarMenuNavegacion(document);
            });
            $(this).html('<i class="fas fa-eye-slash"></i> Ocultar Ejemplo Interactivo');
        }
    });
    
    // Inicializar tabs de Bootstrap 5 manualmente usando delegación de eventos
    document.addEventListener('click', function(event) {
        var triggerEl = event.target.closest('.ejemplo-interactivo .nav-tabs [data-bs-toggle="tab"]');
        if (triggerEl) {
            event.preventDefault();
            event.stopPropagation();
            
            var href = triggerEl.getAttribute('href');
            var targetTab = href ? document.querySelector(href) : null;
            
            if (targetTab) {
                // Ocultar todos los paneles
                document.querySelectorAll('.ejemplo-interactivo .tab-pane').forEach(function(panel) {
                    panel.classList.remove('show', 'active');
                });
                
                // Remover active de todos los tabs
                document.querySelectorAll('.ejemplo-interactivo .nav-tabs .nav-link').forEach(function(link) {
                    link.classList.remove('active');
                    link.setAttribute('aria-selected', 'false');
                });
                
                // Activar el tab y panel seleccionado
                triggerEl.classList.add('active');
                triggerEl.setAttribute('aria-selected', 'true');
                targetTab.classList.add('show', 'active');
                
                // Reinicializar Scrollspy para el nuevo tab activo después de un pequeño delay
                setTimeout(function() {
                    inicializarScrollspy(targetTab);
                }, 150);
            }
        }
    });
    
    // Inicializar Scrollspy para los ejemplos al cargar la página
    inicializarScrollspy(document);
    inicializarMenuNavegacion(document);

    // Botón para mostrar/ocultar el ejercicio
    $('#btn-mostrar-ejercicio').on('click', function() {
        var ejercicio = $('#ejercicio-contenido');
        if (ejercicio.is(':visible')) {
            ejercicio.slideUp();
            $(this).html('<i class="fas fa-code"></i> Mostrar Ejercicio');
        } else {
            ejercicio.slideDown(function() {
                // Reinicializar Scrollspy cuando se muestra el ejercicio
                inicializarScrollspy(document);
            });
            $(this).html('<i class="fas fa-eye-slash"></i> Ocultar Ejercicio');
        }
    });

    // Inicializar tabs del ejercicio
    document.addEventListener('click', function(event) {
        var triggerEl = event.target.closest('.ejercicio-interactivo-ejecucion .nav-tabs [data-bs-toggle="tab"]');
        if (triggerEl) {
            event.preventDefault();
            event.stopPropagation();
            
            var href = triggerEl.getAttribute('href');
            var targetTab = href ? document.querySelector(href) : null;
            
            if (targetTab) {
                // Ocultar todos los paneles del ejercicio
                document.querySelectorAll('.ejercicio-interactivo-ejecucion .tab-pane').forEach(function(panel) {
                    panel.classList.remove('show', 'active');
                });
                
                // Remover active de todos los tabs del ejercicio
                document.querySelectorAll('.ejercicio-interactivo-ejecucion .nav-tabs .nav-link').forEach(function(link) {
                    link.classList.remove('active');
                    link.setAttribute('aria-selected', 'false');
                });
                
                // Activar el tab y panel seleccionado
                triggerEl.classList.add('active');
                triggerEl.setAttribute('aria-selected', 'true');
                targetTab.classList.add('show', 'active');
                
                // Reinicializar Scrollspy para el nuevo tab activo
                setTimeout(function() {
                    inicializarScrollspy(targetTab);
                }, 150);
            }
        }
    });

});