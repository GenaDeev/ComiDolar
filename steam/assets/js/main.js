async function obtenerValorOficial() {
    try {
        const respuesta = await fetch('https://api.bluelytics.com.ar/v2/latest');
        const datos = await respuesta.json();
        return datos.oficial.value_sell;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Obtén la referencia al elemento input
const priceInput = document.getElementById('price');

// Agrega un event listener para el evento 'input'
priceInput.addEventListener('input', calculate);

// La función calculate() se ejecutará cada vez que cambie el valor del input
async function calculate() {
  try {
    // Obtener el valor oficial
    const oficial = await obtenerValorOficial();

    // Resto de tu lógica de cálculo
    const price = parseFloat(priceInput.value);
    const pesos = price * oficial;
    const impais = 0.3 * pesos;
    const gan = 0.3 * pesos;
    const total = pesos + impais + gan;

    // Actualizar elementos HTML
    document.getElementById('pesosResult').value = pesos.toFixed(2);
    document.getElementById('impaisResult').value = impais.toFixed(2);
    document.getElementById('gananciasResult').value = gan.toFixed(2);
    document.getElementById('totalResult').value = total.toFixed(2);
  } catch (error) {
    console.error('Error:', error);
  }
}
document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      
      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});
