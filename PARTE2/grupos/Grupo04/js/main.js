$(document).ready(function() {
            // Inicializa WOW.js para las animaciones
            new WOW().init();

            // jQuery
            
            // Ejemplo 1
            $("#btnEx1").click(function() {
                $("#execEx1").slideToggle();
            });

            // Ejemplo 2
            $("#btnEx2").click(function() {
                $("#execEx2").slideToggle();
            });

            // Ejemplo 3
            $("#btnEx3").click(function() {
                $("#execEx3").slideToggle();
            });

            // Ejemplo 4
            $("#btnEx4").click(function() {
                $("#execEx4").slideToggle();
            });

            // Manejador para el NUEVO Ejemplo 5 (Iframe)
            $("#btnEx5").click(function() {
                $("#execEx5").slideToggle();
            });

        });