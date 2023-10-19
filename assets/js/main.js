// Obtener la fecha actual
        var fechaActual = new Date();

        // Definir nombres de días de la semana
        var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

        // Obtener el nombre del día de la semana actual
        var diaSemanaActual = diasSemana[fechaActual.getDay()];

        // Obtener el día del mes actual
        var diaMesActual = fechaActual.getDate();

        // Definir nombres de meses
        var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

        // Obtener el nombre del mes actual
        var mesActual = meses[fechaActual.getMonth()];

        // Obtener el año actual
        var anoActual = fechaActual.getFullYear();

        // Crear la cadena de texto en el formato deseado
        var nuevaFecha = diaSemanaActual + ' ' + diaMesActual + ' de ' + mesActual + ' de ' + anoActual;

        // Modificar el contenido del div con id "fecha"
        document.getElementById('fecha').textContent = nuevaFecha;

        function actualizarPrecios() {
            // Realizar una solicitud GET a la API
            fetch('https://api.bluelytics.com.ar/v2/latest')
                .then(response => response.json())
                .then(data => {
                    // Extraer los valores de "compra" y "venta" del JSON
                    const compra = '$' + data.oficial.value_buy; // Agregar el símbolo de dinero
                    const venta = '$' + data.oficial.value_sell;   // Agregar el símbolo de dinero

                    // Actualizar los valores de los elementos HTML
                    document.getElementById('ocompra').value = compra;
                    document.getElementById('oventa').value = venta;
                })
                .catch(error => {
                    console.error('Error al obtener los precios del dólar:', error);
                });
        }

        // Ejecutar la función actualizarPrecios() cuando la página se cargue
        function bactualizarPrecios() {
            // Realizar una solicitud GET a la API
            fetch('https://api.bluelytics.com.ar/v2/latest')
                .then(response => response.json())
                .then(data => {
                    // Extraer los valores de "compra" y "venta" del JSON
                    const compra = '$' + data.blue.value_buy; // Agregar el símbolo de dinero
                    const venta = '$' + data.blue.value_sell;   // Agregar el símbolo de dinero

                    // Actualizar los valores de los elementos HTML
                    document.getElementById('bcompra').value = compra;
                    document.getElementById('bventa').value = venta;
                })
                .catch(error => {
                    console.error('Error al obtener los precios del dólar:', error);
                });
        }
        actualizarPrecios();
        // Ejecutar la función actualizarPrecios() cuando la página se cargue
        window.onload = bactualizarPrecios;