addEventListener("DOMContentLoaded", actualizarPrecios);

var fechaActual = new Date,
    diasSemana = ["Domingo", "Lunes", "Martes", "Mi\xe9rcoles", "Jueves", "Viernes", "S\xe1bado"],
    diaSemanaActual = diasSemana[fechaActual.getDay()],
    diaMesActual = fechaActual.getDate(),
    meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    mesActual = meses[fechaActual.getMonth()],
    anoActual = fechaActual.getFullYear(),
    nuevaFecha = diaSemanaActual + " " + diaMesActual + " de " + mesActual + " de " + anoActual;

function actualizarPrecios() {
    fetch("https://api.bluelytics.com.ar/v2/latest").then(e => e.json()).then(e => {
        let oficialcompra = "$" + e.oficial.value_buy,
            oficialventa = "$" + e.oficial.value_sell;
            bluecompra = "$" + e.blue.value_buy,
            blueventa = "$" + e.blue.value_sell,
            brecha = (e.blue.value_sell - e.oficial.value_sell) / e.oficial.value_sell * 100,
            brechafull = parseFloat(brecha.toFixed(2)) + "%";
        document.getElementById("ocompra").value = oficialcompra, document.getElementById("oventa").value = oficialventa, document.getElementById("bcompra").value = bluecompra, document.getElementById("bventa").value = blueventa, document.getElementById("brechav").value = brechafull;
    }).catch(e => {
        console.error("Error al obtener los precios del d\xf3lar:", e)
    })
}

document.getElementById("fecha").textContent = nuevaFecha;