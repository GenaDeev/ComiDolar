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
    let reg = 0;
    if (provInput == 'none') {
      var reg = 0;
    }
    else {
      if (provInput.value == 'caba' || provInput == 'pba') {
        var reg = 0.02 * pesos;
      }
      else {
        if (provInput.value == 'cdba' || provInput == 'ttff') {
          var reg = 0.03 * pesos;
        }
        else {
          if (provInput.value == 'lppa') {
            var reg = 0.01 * pesos;
          }
          else {
            if (provInput.value == 'rrnn') {
              var reg = 0.05 * pesos;
            }
            else {
              if (provInput.value == 'salt') {
                var reg = 0.036 * pesos;
              }
              else {
                if (provInput.value == 'chac') {
                  var reg = 0.055 * pesos;
                }
                else {
                  if (provInput.value == 'neuq') {
                    var reg = 0.04 * pesos;
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log(reg);
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
