const API_URL = 'https://api.bluelytics.com.ar/v2/latest';
let oficialValue = null;
const priceInput = document.getElementById('price');
const provInput = document.getElementById('province');
const regionalcontainer = document.getElementById('regcont'); // Definimos regionalcontainer aquí

async function obtenerValorOficial() {
  try {
    const respuesta = await fetch(API_URL);
    const datos = await respuesta.json();
    oficialValue = datos.oficial.value_sell;
  } catch (error) {
    console.error('Error:', error);
  }
}

async function calculate() {
  try {
    if (oficialValue === null) await obtenerValorOficial();

    const price = parseFloat(priceInput.value);
    const pesos = price * oficialValue;
    let reg = 0;

    switch (provInput.value) {
      case 'caba':
      case 'pba':
        reg = 0.02 * pesos;
        document.getElementById('regionalimp').textContent = 'Ingresos Brutos CABA (AGIP RG 312/2019)';
        break;
      case 'cdba':
      case 'ttff':
        reg = 0.03 * pesos;
        document.getElementById('regionalimp').textContent = 'Ingresos Brutos CORDOBA (Decreto 774/2018)';
        break;
      case 'lppa':
        reg = 0.01 * pesos;
        document.getElementById('regionalimp').textContent = 'Ingresos Brutos LA PAMPA (RG 14/2019 (Anexo II)';
        break;
      case 'rrnn':
        reg = 0.05 * pesos;
        document.getElementById('regionalimp').textContent = 'Ingresos Brutos RIO NEGRO (RG 808/2020)';
        break;
      case 'salt':
        reg = 0.036 * pesos;
        document.getElementById('regionalimp').textContent = 'Ingresos Brutos SALTA (RG 34/2018)';
        break;
      case 'chac':
        reg = 0.055 * pesos;
        document.getElementById('regionalimp').textContent = 'Ingresos Brutos CHACO (RG 2046/2020)';
        break;
      case 'neuq':
        reg = 0.04 * pesos;
        document.getElementById('regionalimp').textContent = 'Ingresos Brutos NEUQUEN (RG 1/2022)';
        break;
      case 'none':
        reg = 0;
        break;
      default:
        break;
    }

    // Mostrar u ocultar el contenedor según el valor de reg
    if (reg === 0) {
      regionalcontainer.classList.add('hidden');
    } else {
      regionalcontainer.classList.remove('hidden');
    }

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
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  priceInput.addEventListener('input', calculate);
  provInput.addEventListener('change', calculate);
  calculate(); // Llamar a calculate() inicialmente
});
