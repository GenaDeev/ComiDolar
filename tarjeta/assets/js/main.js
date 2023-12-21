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
const provInput = document.getElementById('province');

// Agrega un event listener para el evento 'input'
priceInput.addEventListener('input', calculate);
provInput.addEventListener('change', calculate);

// La función calculate() se ejecutará cada vez que cambie el valor del input
async function calculate() {
  try {
    // Obtener el valor oficial
    const oficial = await obtenerValorOficial();

    // Resto de tu lógica de cálculo
    const price = parseFloat(priceInput.value);
    const pesos = price * oficial;
    const regionallabel = document.getElementById('regionalimp');
    const regionalcontainer = document.getElementById('regcont');
    let reg = 0;  // Inicializa reg aquí, después de obtener pesos

    if (provInput.value === 'caba') {
      reg = 0.02 * pesos;
      regionallabel.textContent = 'Ingresos Brutos CABA (AGIP RG 312/2019)'
      regionalcontainer.classList.remove('hidden')
    } else if (provInput.value === 'pba') {
      reg = 0.02 * pesos;
      regionallabel.textContent = 'Ingresos Brutos PBA (ARBA RG 38/2019)'
      regionalcontainer.classList.remove('hidden')
    } else if (provInput.value === 'cdba') {
      reg = 0.03 * pesos;
      regionallabel.textContent = 'Ingresos Brutos CORDOBA (Decreto 774/2018)'
      regionalcontainer.classList.remove('hidden')
    } else if (provInput.value === 'ttff') {
      reg = 0.03 * pesos;
      regionallabel.textContent = 'Ingresos Brutos TIERRA DEL FUEGO (RG 929/2022)'
      regionalcontainer.classList.remove('hidden')
    } else if (provInput.value === 'lppa') {
      reg = 0.01 * pesos;
      regionallabel.textContent = 'Ingresos Brutos LA PAMPA (RG 14/2019 (Anexo II)'
      regionalcontainer.classList.remove('hidden')
    } else if (provInput.value === 'rrnn') {
      reg = 0.05 * pesos;
      regionallabel.textContent = 'Ingresos Brutos RIO NEGRO (RG 808/2020)'
      regionalcontainer.classList.remove('hidden')
    } else if (provInput.value === 'salt') {
      reg = 0.036 * pesos;
      regionallabel.textContent = 'Ingresos Brutos SALTA (RG 34/2018)'
      regionalcontainer.classList.remove('hidden')
    } else if (provInput.value === 'chac') {
      reg = 0.055 * pesos;
      regionallabel.textContent = 'Ingresos Brutos CHACO (RG 2046/2020)'
      regionalcontainer.classList.remove('hidden')
    } else if (provInput.value === 'neuq') {
      reg = 0.04 * pesos;
      regionallabel.textContent = 'Ingresos Brutos NEUQUEN (RG 1/2022)'
      regionalcontainer.classList.remove('hidden')
    } else if (provInput.value === 'none') {
      reg = 0;
      regionalcontainer.classList.add('hidden')
    }
    

    // Resto de tu lógica de cálculo
    const impais = 0.3 * pesos;
    const gan = 0.3 * pesos;
    const total = pesos + impais + gan + reg;

    // Actualizar elementos HTML
    document.getElementById('pesosResult').value = pesos.toFixed(2);
    document.getElementById('impaisResult').value = impais.toFixed(2);
    document.getElementById('gananciasResult').value = gan.toFixed(2);
    document.getElementById('regionalResult').value = reg.toFixed(2);
    document.getElementById('totalResult').value = total.toFixed(2);
  } catch (error) {
    console.error('Error:', error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
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
