var page = window.location.pathname.split("/").pop().split(".")[0];
var aux = window.location.pathname.split("/");
var to_build = (aux.includes('pages') || aux.includes('docs') ? '../' : './');
var root = window.location.pathname.split("/")
if (!aux.includes("pages")) {
  page = "dashboard";
}

if (document.querySelector("[data-target='tooltip']")) {
  loadJS(to_build + "assets/js/tooltips.js", true);
  loadStylesheet(to_build + "assets/css/tooltips.css");
}

if (document.querySelector("[nav-pills]")) {
  loadJS(to_build + "assets/js/nav-pills.js", true);
}

if (document.querySelector("[dropdown-trigger]")) {
  loadJS(to_build + "assets/js/dropdown.js", true);
}

if (document.querySelector("[fixed-plugin]")) {
  loadJS(to_build + "assets/js/fixed-plugin.js", true);
}

if (document.querySelector("[navbar-main]") || document.querySelector("[navbar-profile]")) {
  if (document.querySelector("aside")) {
    loadJS(to_build + "assets/js/sidenav-burger.js", true);
  }
}

if (document.querySelector(".github-button")) {
  loadJS("https://buttons.github.io/buttons.js", true);
}

function loadJS(FILE_URL, async) {
  let dynamicScript = document.createElement("script");

  dynamicScript.setAttribute("src", FILE_URL);
  dynamicScript.setAttribute("type", "text/javascript");
  dynamicScript.setAttribute("async", async);

  document.head.appendChild(dynamicScript);
}

function loadStylesheet(FILE_URL) {
  let dynamicStylesheet = document.createElement("link");

  dynamicStylesheet.setAttribute("href", FILE_URL);
  dynamicStylesheet.setAttribute("type", "text/css");
  dynamicStylesheet.setAttribute("rel", "stylesheet");

  document.head.appendChild(dynamicStylesheet);
}

let blue;
let cblue;
let cofficial;
let official;
let brecha;
let euro;
let real;
let chile;
let uru;
let bluevalor = document.getElementById('bventa');
let cbluevalor = document.getElementById('bcompra');
let oficialvalor = document.getElementById('oventa');
let coficialvalor = document.getElementById('ocompra');
let brechavalor = document.getElementById('brechav');
let eurovalor = document.getElementById('eurov');
let realvalor = document.getElementById('realv');
let chilevalor = document.getElementById('chilev');
let uruvalor = document.getElementById('uruv');
let blueDif = document.getElementById('blueDif');
let ofiDif = document.getElementById('oficialDif');

function getYesterdayDate() {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const year = yesterday.getFullYear();
  const month = String(yesterday.getMonth() + 1).padStart(2, '0');
  const day = String(yesterday.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  document.getElementById('date').textContent = `${day}/${month}/${year}`;
}

const blueURL = 'https://dolarapi.com/v1/dolares/blue';
const officialURL = 'https://dolarapi.com/v1/dolares/oficial';
const euroURL = 'https://dolarapi.com/v1/cotizaciones/eur';
const realURL = 'https://dolarapi.com/v1/cotizaciones/brl';
const chileURL = 'https://dolarapi.com/v1/cotizaciones/clp';
const uruURL = 'https://dolarapi.com/v1/cotizaciones/uyu';

fetch(blueURL)
  .then(response => response.json())
  .then(data => {
    blue = (data.venta).toFixed(0);
    cblue = (data.compra).toFixed(0);
    bluevalor.textContent = '$' + blue;
    cbluevalor.textContent = '$' + cblue;

    fetch(officialURL)
      .then(response => response.json())
      .then(data => {
        official = (data.venta).toFixed(0);
        cofficial = (data.compra).toFixed(0);
        oficialvalor.textContent = '$' + official;
        coficialvalor.textContent = '$' + cofficial;

        const yesterdayDate = getYesterdayDate();
        brecha = ((blue - official) / official * 100).toFixed(2);
        brechavalor.textContent = brecha + '%';
        
        const blueYesterdayURL = `https://api.argentinadatos.com/v1/cotizaciones/dolares/blue/${yesterdayDate}`;

        fetch(blueYesterdayURL)
          .then(response => response.json())
          .then(data => {
            blueYesterday = data.venta;

            const officialYesterdayURL = `https://api.argentinadatos.com/v1/cotizaciones/dolares/oficial/${yesterdayDate}`;

            fetch(officialYesterdayURL)
              .then(response => response.json())
              .then(data => {
                officialYesterday = data.venta;
                brechaYesterday = (blueYesterday - officialYesterday) / officialYesterday * 100;
                brechaDifferential = (brecha - brechaYesterday) / brechaYesterday * 100;
                if (brechaDifferential > 0) {
                  brechaDif.textContent = '+%' + brechaDifferential.toFixed(2);
                } else {
                  if (brechaDifferential < 0) {
                    brechaDifferential = brechaDifferential * -1;
                    brechaDif.textContent = '-%' + brechaDifferential.toFixed(2);
                    brechaDif.classList.remove('text-emerald-500');
                    brechaDif.classList.add('text-red-500');
                  } else {
                    if (brechaDifferential == 0) {
                      brechaDif.textContent = 'Igual ';
                      brechaDif.classList.remove('text-emerald-500');
                    }
                  }
                }
                blueDifferential = ((blue - blueYesterday) / blueYesterday) * 100;
                officialDifferential = ((official - officialYesterday) / officialYesterday) * 100;
                if (blueDifferential > 0) {
                  blueDif.textContent = '+%' + blueDifferential.toFixed(2);
                } else {
                  if (blueDifferential < 0) {
                    blueDifferential = blueDifferential * -1;
                    blueDif.textContent = '-%' + blueDifferential.toFixed(2);
                    blueDif.classList.remove('text-emerald-500');
                    blueDif.classList.add('text-red-500');
                  } else {
                    if (blueDifferential == 0) {
                      blueDif.textContent = 'Igual ';
                      blueDif.classList.remove('text-emerald-500');

                    }
                  }
                }
                if (officialDifferential > 0) {
                  ofiDif.textContent = '+%' + officialDifferential.toFixed(2);
                } else {
                  if (officialDifferential < 0) {
                    officialDifferential = officialDifferential * -1;
                    ofiDif.textContent = '-%' + officialDifferential.toFixed(2);
                    ofiDif.classList.remove('text-emerald-500');
                    ofiDif.classList.add('text-red-500');
                  } else {
                    if (officialDifferential == 0) {
                      ofiDif.textContent = 'Igual ';
                      ofiDif.classList.remove('text-emerald-500');
                    }
                  }
                }
              })
              .catch(error => console.error('Error al obtener el valor del dólar oficial de ayer:', error));
          })
          .catch(error => console.error('Error al obtener el valor del dólar blue de ayer:', error));
      })
      .catch(error => console.error('Error al obtener el valor del dólar oficial de hoy:', error));
  })
  .catch(error => console.error('Error al obtener el valor del dólar blue de hoy:', error));
getDate()
  fetch(euroURL)
  .then(response => response.json())
  .then(data => {
    euro = (data.venta).toFixed(0);
    eurovalor.textContent = '$' + euro;
  });

fetch(realURL)
  .then(response => response.json())
  .then(data => {
    real = (data.venta).toFixed(0);
    realvalor.textContent = '$' + real;
  });

fetch(uruURL)
  .then(response => response.json())
  .then(data => {
    uru = (data.venta).toFixed(0);
    uruvalor.textContent = '$' + uru;
  });
fetch(chileURL)
  .then(response => response.json())
  .then(data => {
    chile = (data.venta).toFixed(0);
    chilevalor.textContent = '$' + chile;
  });
