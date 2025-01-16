type Lore = Array<LoreSection>;

interface LoreSection {
  h3: string;
  p: string[];
  ul?: ListElements;
}

type ListElements = Array<ListElement>;

interface ListElement {
  bold?: string;
  text?: string;
}

export const homeLore: Lore = [
  {
    h3: "Bienvenidos a Comi Dólar",
    p: ["Comi Dólar es la Comisión de Dólar del Colegio Nacional de Buenos Aires (CNBA). Fundada el 5 de octubre de 2022 por Genaro Febbo Yapur, esta comisión ha crecido rápidamente y actualmente cuenta con 1025 miembros en su grupo de WhatsApp, el límite máximo permitido. Nuestro objetivo es proporcionar información precisa y actualizada sobre las diversas cotizaciones del dólar en Argentina."],
  },
  {
    h3: "¿Qué es Comi Dólar?",
    p: ["Comi Dólar, o Comisión de Dólar del CNBA, es un espacio dedicado a la discusión y difusión de las diferentes cotizaciones del dólar, incluyendo:"],
    ul: [
      {
        bold: "Dólar Blue:",
        text: "La cotización del dólar en el mercado paralelo, una referencia común en la economía informal.",
      },
      {
        bold: "Dólar Oficial:",
        text: "La cotización establecida por el Banco Central de la República Argentina, usada en transacciones oficiales.",
      },
      {
        bold: "Dólar Tarjeta:",
        text: "La cotización aplicable a compras realizadas en el exterior con tarjetas de crédito.",
      },
      {
        bold: "Contado con Liquidación:",
        text: "El valor del dólar en operaciones de compra y venta de bonos o acciones para transferir capitales al exterior.",
      },
      {
        bold: "Dólar Mayorista:",
        text: "La cotización en transacciones comerciales entre grandes operadores, bancos y empresas.",
      },
      {
        bold: "Dólar Cripto:",
        text: "La cotización del dólar en el mercado de criptomonedas, una alternativa digital en crecimiento.",
      },
    ],
  },
  {
    h3: "Historia y Fundación de Comi Dólar",
    p: ["Comi Dólar nació de la necesidad de tener un espacio confiable y actualizado para discutir las diversas cotizaciones del dólar en Argentina. Genaro Febbo Yapur, fundador de la comisión, identificó esta necesidad y lanzó el grupo de WhatsApp el 5 de octubre de 2022. Desde entonces, la comisión ha crecido hasta alcanzar su límite de 1025 miembros, convirtiéndose en una fuente esencial de información para los alumnos del CNBA.", "En Comi Dólar, nos comprometemos a proporcionar datos precisos y análisis detallados sobre las fluctuaciones del dólar. Nuestro objetivo es ayudar a los miembros a comprender mejor las dinámicas del mercado cambiario y tomar decisiones informadas."],
  },
  {
    h3: "Participación en Comi Dólar",
    p: ["Los miembros de Comi Dólar participan activamente en el grupo de WhatsApp, compartiendo información sobre las cotizaciones del dólar, analizando tendencias del mercado, y discutiendo sobre el impacto económico de estas variaciones. Además, ofrecemos informes regulares y gráficos actualizados que permiten a los miembros visualizar las tendencias de las diferentes cotizaciones del dólar.", "Si bien el grupo de WhatsApp ha alcanzado su límite de miembros, estamos trabajando en expandir nuestra presencia a través de otras plataformas para que más personas puedan beneficiarse de nuestra comunidad y los recursos que ofrecemos."],
  },
  {
    h3: "Visión y Futuro de Comi Dólar",
    p: ["Comi Dólar se ha consolidado como un referente en el seguimiento de las cotizaciones del dólar en Argentina. A medida que avanzamos, planeamos expandir nuestras actividades, incluyendo la implementación de una plataforma en línea que proporcione datos en tiempo real y análisis en profundidad.", "El dominio comidolar.com.ar será el centro de nuestra presencia digital, ofreciendo a los usuarios un acceso fácil y rápido a la información más reciente sobre las cotizaciones del dólar blue, oficial, tarjeta, contado con liquidación, mayorista y cripto.", "Nuestro compromiso con la transparencia y la precisión seguirá siendo la piedra angular de Comi Dólar, y estamos entusiasmados por el crecimiento y la evolución futura de nuestra comunidad."],
  },
];

export const calcuLore: Lore = [
    {
        h3: "Calculadora Dólar Tarjeta",
        p: ["Introduce los valores en USD que desees convertir a pesos argentinos y la calculadora hará el resto!", "Calcula las 24hs tus compras favoritas en USD y sabras exactamente cuanto valdra en ARS con impuestos."],
        ul: [
            {
                bold: "Precio en USD:",
                text: "La cotización del dólar en el mercado paralelo, una referencia común en la economía informal."
            },
            {
                bold: "Precio FINAL en ARS con Impuestos:",
                text: "La cotización del dólar en el mercado paralelo, una referencia común en la economía informal."
            },
        ]
    }
];
export const wspLore: Lore = [
    {
        h3: "Grupo de Whatsapp de Comi Dólar",
        p: ["El grupo de Whatsapp de Comi Dólar es un espacio de intercambio de información y análisis sobre las cotizaciones del dólar en Argentina. Este grupo se ha creado para facilitar la comunicación y la colaboración entre los miembros de Comi Dólar, así como para brindar información actualizada y precisa sobre las diversas cotizaciones del dólar."],
    }
];