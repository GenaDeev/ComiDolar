export interface Subject {
  code: string;
  name: string;
}

export interface Career {
  id: string;
  name: string;
  quantityTotal: number;
  quantityToChoose: number;
  compulsorySubjects: string[];
  electiveSubjects: string[];
  sixthYearPath: {
    cnba: {
      orientation: string;
      coveredCompulsory: string[];
      notCoveredCompulsory: string[];
      coveredElectives: string[];
      notCoveredElectives: string[];
      notes?: string;
    };
    pelle: {
      orientation: string;
      coveredCompulsory: string[];
      notCoveredCompulsory: string[];
      coveredElectives: string[];
      notCoveredElectives: string[];
      notes?: string;
    };
  };
}

export interface Faculty {
  name: string;
  careers: Career[];
}

export const CBC_SUBJECTS: Record<string, Subject> = {
  "14": {
    "code": "14",
    "name": "Sociología"
  },
  "15": {
    "code": "15",
    "name": "Psicología"
  },
  "16": {
    "code": "16",
    "name": "Antropología"
  },
  "21": {
    "code": "21",
    "name": "Economía"
  },
  "22": {
    "code": "22",
    "name": "Ciencia Política"
  },
  "24": {
    "code": "24",
    "name": "Introducción al Conocimiento de la Sociedad y el Estado (ICSE)"
  },
  "27": {
    "code": "27",
    "name": "Álgebra para Ciencias Exactas"
  },
  "40": {
    "code": "40",
    "name": "Introducción al Pensamiento Científico (IPC)"
  },
  "42": {
    "code": "42",
    "name": "Filosofía"
  },
  "43": {
    "code": "43",
    "name": "Semiología"
  },
  "46": {
    "code": "46",
    "name": "Introducción al Conocimiento Proyectual I"
  },
  "47": {
    "code": "47",
    "name": "Introducción al Conocimiento Proyectual II"
  },
  "48": {
    "code": "48",
    "name": "Taller de Dibujo"
  },
  "50": {
    "code": "50",
    "name": "Principios de Derechos Humanos y Derecho Constitucional"
  },
  "51": {
    "code": "51",
    "name": "Matemática"
  },
  "53": {
    "code": "53",
    "name": "Física e Introducción a la Biofísica"
  },
  "54": {
    "code": "54",
    "name": "Biología e Introducción a la Biología Celular"
  },
  "61": {
    "code": "61",
    "name": "Matemática (9H)"
  },
  "62": {
    "code": "62",
    "name": "Álgebra A para Ingeniería"
  },
  "66": {
    "code": "66",
    "name": "Análisis Matemático A para Ciencias Exactas e Ingeniería"
  },
  "70": {
    "code": "70",
    "name": "Trabajo y Sociedad"
  },
  "71": {
    "code": "71",
    "name": "Álgebra para Ciencias Económicas"
  },
  "72": {
    "code": "72",
    "name": "Análisis Matemático para Ciencias Económicas"
  },
  "73": {
    "code": "73",
    "name": "Metodología de las Ciencias Sociales"
  },
  "74": {
    "code": "74",
    "name": "Historia Económica y Social General"
  },
  "86": {
    "code": "86",
    "name": "Administración General"
  },
  "89": {
    "code": "89",
    "name": "Principios Generales de Derecho Privado"
  },
  "90": {
    "code": "90",
    "name": "Pensamiento Computacional"
  },
  "91": {
    "code": "91",
    "name": "Biología Celular B"
  },
  "92": {
    "code": "92",
    "name": "Análisis Contable"
  },
  "93": {
    "code": "93",
    "name": "IGEP"
  },
  "94": {
    "code": "94",
    "name": "Sociología de las Organizaciones"
  },
  "03": {
    "code": "03",
    "name": "Física"
  },
  "05": {
    "code": "05",
    "name": "Química"
  },
  "08": {
    "code": "08",
    "name": "Biología"
  }
};

export const CNBA_APPROVED_5TH = ["08", "21", "42", "03", "74", "24", "40", "51", "61", "50", "15", "05", "70"];
export const PELLE_APPROVED_5TH = ["86", "92", "08", "21", "42", "03", "74", "24", "40", "51", "61", "50", "89", "15", "05", "14", "94", "70"];

export const UBA_FACULTIES: Faculty[] = [
  {
    "name": "Facultad de Agronomía",
    "careers": [
      {
        "id": "agronomia",
        "name": "Agronomía",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "08",
          "24",
          "40",
          "53",
          "61"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "08",
              "24",
              "40",
              "53"
            ],
            "notCoveredCompulsory": [
              "61"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Matemática (9H)."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "08",
              "24",
              "40",
              "53",
              "61"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_economia_y_administracion_agrarias",
        "name": "Lic. en Economía y Administración Agrarias",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "21",
          "71",
          "72",
          "74",
          "86",
          "93"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [],
            "notCoveredCompulsory": [
              "21",
              "71",
              "72",
              "74",
              "86",
              "93"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Economía, Álgebra para Ciencias Económicas, Análisis Matemático para Ciencias Económicas, Historia Económica y Social General, Administración General, IGEP."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [],
            "notCoveredCompulsory": [
              "21",
              "71",
              "72",
              "74",
              "86",
              "93"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Economía, Álgebra para Ciencias Económicas, Análisis Matemático para Ciencias Económicas, Historia Económica y Social General, Administración General, IGEP."
          }
        }
      },
      {
        "id": "lic_en_cs_ambientales",
        "name": "Lic. en Cs. Ambientales",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "08",
          "24",
          "40",
          "53",
          "61"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "08",
              "24",
              "40",
              "53"
            ],
            "notCoveredCompulsory": [
              "61"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Matemática (9H)."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "08",
              "24",
              "40",
              "53",
              "61"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "prof_de_ensenanza_sec_y_superior_en_cs_ambientales",
        "name": "Prof. de Enseñanza Sec. y Superior en Cs. Ambientales",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "08",
          "24",
          "40",
          "53",
          "61"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "08",
              "24",
              "40",
              "53"
            ],
            "notCoveredCompulsory": [
              "61"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Matemática (9H)."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "08",
              "24",
              "40",
              "53",
              "61"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "tec_univ_en_turismo_rural",
        "name": "Tec. Univ. en Turismo rural",
        "quantityTotal": 3,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "21",
          "40",
          "70"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "40"
            ],
            "notCoveredCompulsory": [
              "21",
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Economía, Trabajo y Sociedad."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "40"
            ],
            "notCoveredCompulsory": [
              "21",
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Economía, Trabajo y Sociedad."
          }
        }
      },
      {
        "id": "licenciatura_en_biotecnologia",
        "name": "Licenciatura en Biotecnología",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "24",
          "40",
          "53",
          "54",
          "61"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "53",
              "54"
            ],
            "notCoveredCompulsory": [
              "61"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Matemática (9H)."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "53",
              "54",
              "61"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "tec_univ_en_produccion_florihorticola",
        "name": "Tec. Univ. en Producción Florihortícola",
        "quantityTotal": 3,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "08",
          "70"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "08"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Trabajo y Sociedad."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "08"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Trabajo y Sociedad."
          }
        }
      },
      {
        "id": "tec_univ_jardineria",
        "name": "Tec. Univ. Jardinería",
        "quantityTotal": 3,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "08",
          "70"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "08"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Trabajo y Sociedad."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "08"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Trabajo y Sociedad."
          }
        }
      },
      {
        "id": "tec_univ_en_produccion_vegetal_organica",
        "name": "Tec. Univ. en Producción Vegetal Orgánica",
        "quantityTotal": 3,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "08",
          "70"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "08"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Trabajo y Sociedad."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "08"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Trabajo y Sociedad."
          }
        }
      }
    ]
  },
  {
    "name": "Facultad de Arquitectura, Diseño y Urbanismo",
    "careers": [
      {
        "id": "arquitectura",
        "name": "Arquitectura",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "24",
          "40",
          "42",
          "46",
          "47",
          "48",
          "51"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial FADU",
            "coveredCompulsory": [
              "24",
              "40",
              "42",
              "48",
              "51"
            ],
            "notCoveredCompulsory": [
              "46",
              "47"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias proyectuales (Proyectual I y II) se deben cursar en la sede de Ciudad Universitaria."
          },
          "pelle": {
            "orientation": "Orientación Sociales/Exactas con extras",
            "coveredCompulsory": [
              "24",
              "40",
              "42",
              "51"
            ],
            "notCoveredCompulsory": [
              "46",
              "47",
              "48"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias proyectuales (Proyectual I, II) y Taller de Dibujo se deben cursar en la sede de Ciudad Universitaria."
          }
        }
      },
      {
        "id": "diseno_grafico",
        "name": "Diseño Gráfico",
        "quantityTotal": 7,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "24",
          "40",
          "43",
          "46",
          "47",
          "48",
          "51"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial FADU",
            "coveredCompulsory": [
              "24",
              "40",
              "43",
              "48",
              "51"
            ],
            "notCoveredCompulsory": [
              "46",
              "47"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias proyectuales (Proyectual I y II) se deben cursar en la sede de Ciudad Universitaria."
          },
          "pelle": {
            "orientation": "Orientación Sociales/Exactas con extras",
            "coveredCompulsory": [
              "24",
              "40",
              "51"
            ],
            "notCoveredCompulsory": [
              "43",
              "46",
              "47",
              "48"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias proyectuales (Proyectual I, II) y Taller de Dibujo se deben cursar en la sede de Ciudad Universitaria."
          }
        }
      },
      {
        "id": "diseno_industrial",
        "name": "Diseño Industrial",
        "quantityTotal": 7,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "24",
          "40",
          "43",
          "46",
          "47",
          "48",
          "51"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial FADU",
            "coveredCompulsory": [
              "24",
              "40",
              "43",
              "48",
              "51"
            ],
            "notCoveredCompulsory": [
              "46",
              "47"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias proyectuales (Proyectual I y II) se deben cursar en la sede de Ciudad Universitaria."
          },
          "pelle": {
            "orientation": "Orientación Sociales/Exactas con extras",
            "coveredCompulsory": [
              "24",
              "40",
              "51"
            ],
            "notCoveredCompulsory": [
              "43",
              "46",
              "47",
              "48"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias proyectuales (Proyectual I, II) y Taller de Dibujo se deben cursar en la sede de Ciudad Universitaria."
          }
        }
      },
      {
        "id": "diseno_de_imagen_y_sonido",
        "name": "Diseño de Imagen y Sonido",
        "quantityTotal": 7,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "24",
          "40",
          "43",
          "46",
          "47",
          "48",
          "51"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial FADU",
            "coveredCompulsory": [
              "24",
              "40",
              "43",
              "48",
              "51"
            ],
            "notCoveredCompulsory": [
              "46",
              "47"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias proyectuales (Proyectual I y II) se deben cursar en la sede de Ciudad Universitaria."
          },
          "pelle": {
            "orientation": "Orientación Sociales/Exactas con extras",
            "coveredCompulsory": [
              "24",
              "40",
              "51"
            ],
            "notCoveredCompulsory": [
              "43",
              "46",
              "47",
              "48"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias proyectuales (Proyectual I, II) y Taller de Dibujo se deben cursar en la sede de Ciudad Universitaria."
          }
        }
      },
      {
        "id": "lic_en_planificacion_y_diseno_del_paisaje",
        "name": "Lic. en Planificación y Diseño del Paisaje",
        "quantityTotal": 7,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "08",
          "24",
          "40",
          "46",
          "47",
          "48",
          "51"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial FADU",
            "coveredCompulsory": [
              "24",
              "40",
              "48",
              "51"
            ],
            "notCoveredCompulsory": [
              "08",
              "46",
              "47"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias proyectuales (Proyectual I y II) se deben cursar en la sede de Ciudad Universitaria."
          },
          "pelle": {
            "orientation": "Orientación Sociales/Exactas con extras",
            "coveredCompulsory": [
              "24",
              "40",
              "51"
            ],
            "notCoveredCompulsory": [
              "08",
              "46",
              "47",
              "48"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias proyectuales (Proyectual I, II) y Taller de Dibujo se deben cursar en la sede de Ciudad Universitaria."
          }
        }
      },
      {
        "id": "diseno_de_indumentaria",
        "name": "Diseño de Indumentaria",
        "quantityTotal": 7,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "24",
          "40",
          "43",
          "46",
          "47",
          "48",
          "51"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial FADU",
            "coveredCompulsory": [
              "24",
              "40",
              "43",
              "48",
              "51"
            ],
            "notCoveredCompulsory": [
              "46",
              "47"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias proyectuales (Proyectual I y II) se deben cursar en la sede de Ciudad Universitaria."
          },
          "pelle": {
            "orientation": "Orientación Sociales/Exactas con extras",
            "coveredCompulsory": [
              "24",
              "40",
              "51"
            ],
            "notCoveredCompulsory": [
              "43",
              "46",
              "47",
              "48"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias proyectuales (Proyectual I, II) y Taller de Dibujo se deben cursar en la sede de Ciudad Universitaria."
          }
        }
      },
      {
        "id": "diseno_textil",
        "name": "Diseño Textil",
        "quantityTotal": 7,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "24",
          "40",
          "43",
          "46",
          "47",
          "48",
          "51"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial FADU",
            "coveredCompulsory": [
              "24",
              "40",
              "43",
              "48",
              "51"
            ],
            "notCoveredCompulsory": [
              "46",
              "47"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias proyectuales (Proyectual I y II) se deben cursar en la sede de Ciudad Universitaria."
          },
          "pelle": {
            "orientation": "Orientación Sociales/Exactas con extras",
            "coveredCompulsory": [
              "24",
              "40",
              "51"
            ],
            "notCoveredCompulsory": [
              "43",
              "46",
              "47",
              "48"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias proyectuales (Proyectual I, II) y Taller de Dibujo se deben cursar en la sede de Ciudad Universitaria."
          }
        }
      }
    ]
  },
  {
    "name": "Facultad de Ciencias Económicas",
    "careers": [
      {
        "id": "contador_publico",
        "name": "Contador Público",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "14",
          "21",
          "71",
          "72",
          "73",
          "74"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial Económicas",
            "coveredCompulsory": [
              "14",
              "21",
              "71",
              "72",
              "74"
            ],
            "notCoveredCompulsory": [
              "73"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Metodología de las Ciencias Sociales."
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "14",
              "21",
              "71",
              "72",
              "74"
            ],
            "notCoveredCompulsory": [
              "73"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Metodología de las Ciencias Sociales."
          }
        }
      },
      {
        "id": "lic_en_administracion",
        "name": "Lic. en Administración",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "21",
          "71",
          "72",
          "74",
          "86",
          "94"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial Económicas",
            "coveredCompulsory": [
              "21",
              "71",
              "72",
              "74"
            ],
            "notCoveredCompulsory": [
              "86",
              "94"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Administración General, Sociología de las Organizaciones."
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "21",
              "71",
              "72",
              "74"
            ],
            "notCoveredCompulsory": [
              "86",
              "94"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Administración General, Sociología de las Organizaciones."
          }
        }
      },
      {
        "id": "lic_en_economia",
        "name": "Lic. en Economía",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "21",
          "71",
          "72",
          "74",
          "92",
          "93"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial Económicas",
            "coveredCompulsory": [
              "21",
              "71",
              "72",
              "74"
            ],
            "notCoveredCompulsory": [
              "92",
              "93"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Análisis Contable, IGEP."
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "21",
              "71",
              "72",
              "74"
            ],
            "notCoveredCompulsory": [
              "92",
              "93"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Análisis Contable, IGEP."
          }
        }
      },
      {
        "id": "lic_en_sistemas_de_informacion_de_las_organizaciones",
        "name": "Lic. en Sistemas de Información de las Organizaciones",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "21",
          "71",
          "72",
          "74",
          "86",
          "94"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial Económicas",
            "coveredCompulsory": [
              "21",
              "71",
              "72",
              "74"
            ],
            "notCoveredCompulsory": [
              "86",
              "94"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Administración General, Sociología de las Organizaciones."
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "21",
              "71",
              "72",
              "74"
            ],
            "notCoveredCompulsory": [
              "86",
              "94"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Administración General, Sociología de las Organizaciones."
          }
        }
      },
      {
        "id": "tecnicatura_universitaria_en_gestion_y_analisis_de_datos_en_organizaciones",
        "name": "Tecnicatura Universitaria en Gestión y Análisis de Datos en Organizaciones",
        "quantityTotal": 3,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "70",
          "71",
          "72"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial Económicas",
            "coveredCompulsory": [
              "71",
              "72"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Trabajo y Sociedad."
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "71",
              "72"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Trabajo y Sociedad."
          }
        }
      },
      {
        "id": "actuario",
        "name": "Actuario",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "21",
          "71",
          "72",
          "74",
          "92",
          "93"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial Económicas",
            "coveredCompulsory": [
              "21",
              "71",
              "72",
              "74"
            ],
            "notCoveredCompulsory": [
              "92",
              "93"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Análisis Contable, IGEP."
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "21",
              "71",
              "72",
              "74"
            ],
            "notCoveredCompulsory": [
              "92",
              "93"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Análisis Contable, IGEP."
          }
        }
      }
    ]
  },
  {
    "name": "Facultad de Ciencias Exactas y Naturales",
    "careers": [
      {
        "id": "lic_en_ciencias_biologicas",
        "name": "Lic. en Ciencias Biológicas",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "05",
          "08",
          "24",
          "40",
          "61"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "40"
            ],
            "notCoveredCompulsory": [
              "08",
              "61"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Biología, Matemática (9H)."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "05",
              "08",
              "24",
              "40",
              "61"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_cs_de_la_computacion",
        "name": "Lic. en Cs. de la Computación",
        "quantityTotal": 6,
        "quantityToChoose": 2,
        "compulsorySubjects": [
          "24",
          "27",
          "40",
          "66"
        ],
        "electiveSubjects": [
          "03",
          "05",
          "90"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "03",
              "05"
            ],
            "notCoveredElectives": [
              "90"
            ]
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "03",
              "05"
            ],
            "notCoveredElectives": [
              "90"
            ]
          }
        }
      },
      {
        "id": "lic_en_cs_fisicas",
        "name": "Lic. en Cs. Físicas",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "05",
          "24",
          "27",
          "40",
          "66"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_cs_geologicas",
        "name": "Lic. en Cs. Geológicas",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "05",
          "24",
          "27",
          "40",
          "66"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_cs_matematicas",
        "name": "Lic. en Cs. Matemáticas",
        "quantityTotal": 6,
        "quantityToChoose": 2,
        "compulsorySubjects": [
          "24",
          "27",
          "40",
          "66"
        ],
        "electiveSubjects": [
          "03",
          "05",
          "90"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "03",
              "05"
            ],
            "notCoveredElectives": [
              "90"
            ]
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "03",
              "05"
            ],
            "notCoveredElectives": [
              "90"
            ]
          }
        }
      },
      {
        "id": "lic_en_cs_de_la_atmosfera",
        "name": "Lic. en Cs. de la Atmósfera",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "05",
          "24",
          "27",
          "40",
          "66"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_cs_quimicas",
        "name": "Lic. en Cs. Químicas",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "05",
          "24",
          "27",
          "40",
          "66"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_cs_oceanograficas",
        "name": "Lic. en  Cs. Oceanográficas",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "05",
          "24",
          "27",
          "40",
          "66"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_paleontologia",
        "name": "Lic. en Paleontología",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "05",
          "08",
          "24",
          "40",
          "66"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [
              "08"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Biología."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "05",
              "08",
              "24",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "prof_de_ensenanza_media_y_superior_en_cs_biologicas",
        "name": "Prof. de Enseñanza Media y Superior en Cs. Biológicas",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "05",
          "08",
          "24",
          "40",
          "61"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "40"
            ],
            "notCoveredCompulsory": [
              "08",
              "61"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Biología, Matemática (9H)."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "05",
              "08",
              "24",
              "40",
              "61"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "prof_de_ensenanza_media_y_superior_en_cs_de_la_atmosfera",
        "name": "Prof. de Enseñanza Media y Superior en Cs. de la Atmósfera",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "05",
          "24",
          "27",
          "40",
          "66"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "prof_de_ensenanza_media_y_superior_en_cs_de_la_computacion",
        "name": "Prof. de Enseñanza Media y Superior en Cs. de la Computación",
        "quantityTotal": 6,
        "quantityToChoose": 2,
        "compulsorySubjects": [
          "24",
          "27",
          "40",
          "66"
        ],
        "electiveSubjects": [
          "03",
          "05",
          "90"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "03",
              "05"
            ],
            "notCoveredElectives": [
              "90"
            ]
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "03",
              "05"
            ],
            "notCoveredElectives": [
              "90"
            ]
          }
        }
      },
      {
        "id": "prof_de_ensenanza_media_y_superior_en_fisica",
        "name": "Prof. de Enseñanza Media y Superior en Física",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "05",
          "24",
          "27",
          "40",
          "66"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "prof_de_ensenanza_media_y_superior_en_cs_geologicas",
        "name": "Prof. de Enseñanza Media y Superior en Cs. Geológicas",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "05",
          "24",
          "27",
          "40",
          "66"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "prof_de_ensenanza_media_y_superior_en_matematica",
        "name": "Prof. de Enseñanza Media y Superior en Matemática",
        "quantityTotal": 6,
        "quantityToChoose": 2,
        "compulsorySubjects": [
          "24",
          "27",
          "40",
          "66"
        ],
        "electiveSubjects": [
          "03",
          "05",
          "90"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "03",
              "05"
            ],
            "notCoveredElectives": [
              "90"
            ]
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "03",
              "05"
            ],
            "notCoveredElectives": [
              "90"
            ]
          }
        }
      },
      {
        "id": "prof_de_ensenanza_media_y_superior_en_quimica",
        "name": "Prof. de Enseñanza Media y Superior en Química",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "05",
          "24",
          "27",
          "40",
          "66"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_ciencia_y_tecnologia_de_alimentos",
        "name": "Lic. en Ciencia y Tecnología de Alimentos",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "05",
          "24",
          "40",
          "54",
          "66"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [
              "54"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Biología e Introducción a la Biología Celular."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "05",
              "24",
              "40",
              "54",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_ciencias_de_datos",
        "name": "Lic. en Ciencias de Datos",
        "quantityTotal": 6,
        "quantityToChoose": 2,
        "compulsorySubjects": [
          "24",
          "27",
          "40",
          "66"
        ],
        "electiveSubjects": [
          "03",
          "05",
          "90"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "03",
              "05"
            ],
            "notCoveredElectives": [
              "90"
            ]
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "24",
              "27",
              "40",
              "66"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "03",
              "05"
            ],
            "notCoveredElectives": [
              "90"
            ]
          }
        }
      },
      {
        "id": "licenciatura_en_biotecnologia",
        "name": "Licenciatura en Biotecnología",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "24",
          "40",
          "53",
          "54",
          "61"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "05",
              "24",
              "40"
            ],
            "notCoveredCompulsory": [
              "53",
              "54",
              "61"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Física e Introducción a la Biofísica, Biología e Introducción a la Biología Celular, Matemática (9H)."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "53",
              "54",
              "61"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      }
    ]
  },
  {
    "name": "Facultad de Ciencias Sociales",
    "careers": [
      {
        "id": "lic_en_relaciones_del_trabajo",
        "name": "Lic. en Relaciones del Trabajo",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "14",
          "15",
          "21",
          "22",
          "24",
          "40"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "14",
              "15",
              "21",
              "22",
              "24",
              "40"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "14",
              "15",
              "21",
              "22",
              "24",
              "40"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_trabajo_social",
        "name": "Lic. en Trabajo Social",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "14",
          "15",
          "16",
          "21",
          "24",
          "40"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "14",
              "15",
              "16",
              "21",
              "24",
              "40"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "14",
              "15",
              "16",
              "21",
              "24",
              "40"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "sociologia",
        "name": "Sociología",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "14",
          "16",
          "21",
          "22",
          "24",
          "40"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "14",
              "16",
              "21",
              "22",
              "24",
              "40"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "14",
              "16",
              "21",
              "22",
              "24",
              "40"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_ciencia_politica",
        "name": "Lic. en Ciencia Política",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "14",
          "16",
          "21",
          "22",
          "24",
          "40"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "14",
              "16",
              "21",
              "22",
              "24",
              "40"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "14",
              "16",
              "21",
              "22",
              "24",
              "40"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_cs_de_la_comunicacion_social",
        "name": "Lic. en Cs. de la Comunicación Social",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "14",
          "15",
          "21",
          "24",
          "40",
          "43"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "14",
              "15",
              "21",
              "24",
              "40",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "14",
              "15",
              "21",
              "24",
              "40",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      }
    ]
  },
  {
    "name": "Facultad de Ciencias Veterinarias",
    "careers": [
      {
        "id": "veterinaria",
        "name": "Veterinaria",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "08",
          "24",
          "40",
          "51",
          "53"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "08",
              "24",
              "40",
              "51",
              "53"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "08",
              "24",
              "40",
              "51",
              "53"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_gestion_de_agroalimentos",
        "name": "Lic. en Gestion de Agroalimentos",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "08",
          "24",
          "40",
          "53",
          "61"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "08",
              "24",
              "40",
              "53"
            ],
            "notCoveredCompulsory": [
              "61"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Matemática (9H)."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "08",
              "24",
              "40",
              "53",
              "61"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "licenciatura_en_biotecnologia",
        "name": "Licenciatura en Biotecnología",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "24",
          "40",
          "53",
          "54",
          "61"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "53",
              "54"
            ],
            "notCoveredCompulsory": [
              "61"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Matemática (9H)."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "53",
              "54",
              "61"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      }
    ]
  },
  {
    "name": "Facultad de Derecho",
    "careers": [
      {
        "id": "abogacia",
        "name": "Abogacía",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "14",
          "22",
          "24",
          "40",
          "50",
          "89"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial Derecho",
            "coveredCompulsory": [
              "14",
              "22",
              "24",
              "40"
            ],
            "notCoveredCompulsory": [
              "50",
              "89"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias de Derecho (89 y 50) se deben rendir en una sede del CBC."
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "14",
              "22",
              "24",
              "40",
              "50",
              "89"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "caligrafo_publico",
        "name": "Calígrafo Público",
        "quantityTotal": 3,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "40",
          "70",
          "89"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial Derecho",
            "coveredCompulsory": [
              "40"
            ],
            "notCoveredCompulsory": [
              "70",
              "89"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias de Derecho (89 y 50) se deben rendir en una sede del CBC."
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "40",
              "89"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Trabajo y Sociedad."
          }
        }
      },
      {
        "id": "traductorado_publico",
        "name": "Traductorado Público",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "14",
          "24",
          "40",
          "43",
          "50",
          "89"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial Derecho",
            "coveredCompulsory": [
              "14",
              "24",
              "40",
              "43"
            ],
            "notCoveredCompulsory": [
              "50",
              "89"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Las materias de Derecho (89 y 50) se deben rendir en una sede del CBC."
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "14",
              "24",
              "40",
              "43",
              "50",
              "89"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      }
    ]
  },
  {
    "name": "Facultad de Farmacia y Bioquímica",
    "careers": [
      {
        "id": "bioquimica",
        "name": "Bioquímica",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "24",
          "40",
          "51",
          "53",
          "54"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53",
              "54"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53",
              "54"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "farmacia",
        "name": "Farmacia",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "24",
          "40",
          "51",
          "53",
          "54"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53",
              "54"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53",
              "54"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "tecnicatura_universitaria_en_optica_y_contactologia",
        "name": "Tecnicatura Universitaria en Óptica y Contactología",
        "quantityTotal": 3,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "51",
          "54",
          "70"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "51",
              "54"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Trabajo y Sociedad."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "51",
              "54"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Trabajo y Sociedad."
          }
        }
      },
      {
        "id": "tecnicatura_universitaria_en_medicina_nuclear",
        "name": "Tecnicatura Universitaria en Medicina Nuclear",
        "quantityTotal": 3,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "54",
          "70"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "54"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Trabajo y Sociedad."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "54"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Trabajo y Sociedad."
          }
        }
      },
      {
        "id": "tec_univ_en_gestion_integral_de_bioterios",
        "name": "Tec. Univ. en Gestión Integral de Bioterios",
        "quantityTotal": 4,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "08",
          "40",
          "70"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "08",
              "40"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Trabajo y Sociedad."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "08",
              "40"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Trabajo y Sociedad."
          }
        }
      },
      {
        "id": "licenciatura_en_biotecnologia",
        "name": "Licenciatura en Biotecnología",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "24",
          "40",
          "53",
          "54",
          "61"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "53",
              "54"
            ],
            "notCoveredCompulsory": [
              "61"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Matemática (9H)."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "53",
              "54",
              "61"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      }
    ]
  },
  {
    "name": "Facultad de Filosofía y Letras",
    "careers": [
      {
        "id": "cs_antropologicas",
        "name": "Cs. Antropológicas",
        "quantityTotal": 6,
        "quantityToChoose": 2,
        "compulsorySubjects": [
          "16",
          "24",
          "40",
          "42"
        ],
        "electiveSubjects": [
          "14",
          "15",
          "21",
          "43"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "16",
              "24",
              "40",
              "42"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "15",
              "21",
              "43"
            ],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "16",
              "24",
              "40",
              "42"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "15",
              "21",
              "43"
            ],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_cs_de_la_educacion",
        "name": "Lic. en Cs. de la Educación",
        "quantityTotal": 6,
        "quantityToChoose": 1,
        "compulsorySubjects": [
          "14",
          "15",
          "24",
          "40",
          "42"
        ],
        "electiveSubjects": [
          "16",
          "21",
          "22",
          "43",
          "50"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "14",
              "15",
              "24",
              "40",
              "42"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "16",
              "21",
              "22",
              "43"
            ],
            "notCoveredElectives": [
              "50"
            ]
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "14",
              "15",
              "24",
              "40",
              "42"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "16",
              "21",
              "22",
              "43",
              "50"
            ],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_filosofia",
        "name": "Lic. en Filosofía",
        "quantityTotal": 6,
        "quantityToChoose": 3,
        "compulsorySubjects": [
          "24",
          "40",
          "42"
        ],
        "electiveSubjects": [
          "03",
          "05",
          "08",
          "14",
          "15",
          "16",
          "21",
          "22",
          "43",
          "51",
          "61",
          "62",
          "66",
          "89"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "24",
              "40",
              "42"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "15",
              "16",
              "21",
              "22",
              "43"
            ],
            "notCoveredElectives": [
              "03",
              "05",
              "08",
              "51",
              "61",
              "62",
              "66",
              "89"
            ]
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "24",
              "40",
              "42"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "05",
              "14",
              "15",
              "16",
              "21",
              "22",
              "43",
              "89"
            ],
            "notCoveredElectives": [
              "03",
              "08",
              "51",
              "61",
              "62",
              "66"
            ]
          }
        }
      },
      {
        "id": "geografia",
        "name": "Geografía",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "14",
          "16",
          "21",
          "24",
          "40",
          "43"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "14",
              "16",
              "21",
              "24",
              "40",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "14",
              "16",
              "21",
              "24",
              "40",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_historia",
        "name": "Lic. en Historia",
        "quantityTotal": 6,
        "quantityToChoose": 2,
        "compulsorySubjects": [
          "15",
          "24",
          "40",
          "43"
        ],
        "electiveSubjects": [
          "14",
          "16",
          "21",
          "22",
          "42",
          "50",
          "89"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "15",
              "24",
              "40",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "16",
              "21",
              "22",
              "42"
            ],
            "notCoveredElectives": [
              "50",
              "89"
            ]
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "15",
              "24",
              "40",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "16",
              "21",
              "22",
              "42",
              "50",
              "89"
            ],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_artes",
        "name": "Lic. en Artes",
        "quantityTotal": 6,
        "quantityToChoose": 2,
        "compulsorySubjects": [
          "24",
          "40",
          "42",
          "43"
        ],
        "electiveSubjects": [
          "14",
          "15",
          "16",
          "21",
          "22"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "24",
              "40",
              "42",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "15",
              "16",
              "21",
              "22"
            ],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "24",
              "40",
              "42",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "15",
              "16",
              "21",
              "22"
            ],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "letras",
        "name": "Letras",
        "quantityTotal": 6,
        "quantityToChoose": 1,
        "compulsorySubjects": [
          "15",
          "24",
          "40",
          "42",
          "43"
        ],
        "electiveSubjects": [
          "14",
          "16",
          "21",
          "22"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "15",
              "24",
              "40",
              "42",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "16",
              "21",
              "22"
            ],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "15",
              "24",
              "40",
              "42",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "16",
              "21",
              "22"
            ],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "edicion",
        "name": "Edición",
        "quantityTotal": 2,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "24",
          "40",
          "43"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "24",
              "40",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "24",
              "40",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "prof_de_ensenanza_media_y_superior_en_filosofia",
        "name": "Prof. de Enseñanza Media y Superior en Filosofía",
        "quantityTotal": 6,
        "quantityToChoose": 2,
        "compulsorySubjects": [
          "15",
          "24",
          "40",
          "42"
        ],
        "electiveSubjects": [
          "03",
          "05",
          "08",
          "14",
          "16",
          "21",
          "22",
          "43",
          "51",
          "61",
          "62",
          "66",
          "89"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "15",
              "24",
              "40",
              "42"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "16",
              "21",
              "22",
              "43"
            ],
            "notCoveredElectives": [
              "03",
              "05",
              "08",
              "51",
              "61",
              "62",
              "66",
              "89"
            ]
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "15",
              "24",
              "40",
              "42"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "05",
              "14",
              "16",
              "21",
              "22",
              "43",
              "89"
            ],
            "notCoveredElectives": [
              "03",
              "08",
              "51",
              "61",
              "62",
              "66"
            ]
          }
        }
      },
      {
        "id": "prof_de_ensenanza_secundaria_y_superior_en_cs_de_la_educacion",
        "name": "Prof. de Enseñanza Secundaria y Superior en Cs. de la Educación",
        "quantityTotal": 6,
        "quantityToChoose": 1,
        "compulsorySubjects": [
          "14",
          "15",
          "24",
          "40",
          "42"
        ],
        "electiveSubjects": [
          "16",
          "21",
          "22",
          "43",
          "50"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "14",
              "15",
              "24",
              "40",
              "42"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "16",
              "21",
              "22",
              "43"
            ],
            "notCoveredElectives": [
              "50"
            ]
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "14",
              "15",
              "24",
              "40",
              "42"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "16",
              "21",
              "22",
              "43",
              "50"
            ],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "profesorado_en_ensenanza_secundaria_y_superior_en_artes",
        "name": "Profesorado en Enseñanza Secundaria y Superior en Artes",
        "quantityTotal": 6,
        "quantityToChoose": 2,
        "compulsorySubjects": [
          "24",
          "40",
          "42",
          "43"
        ],
        "electiveSubjects": [
          "14",
          "15",
          "16",
          "21",
          "22"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "24",
              "40",
              "42",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "15",
              "16",
              "21",
              "22"
            ],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "24",
              "40",
              "42",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "15",
              "16",
              "21",
              "22"
            ],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "profesorado_de_ensenanza_secundaria_y_superior_en_geografia",
        "name": "Profesorado de Enseñanza Secundaria y Superior en Geografía",
        "quantityTotal": 6,
        "quantityToChoose": 1,
        "compulsorySubjects": [
          "15",
          "21",
          "24",
          "40",
          "43"
        ],
        "electiveSubjects": [
          "14",
          "16"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "15",
              "21",
              "24",
              "40",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "16"
            ],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "15",
              "21",
              "24",
              "40",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "16"
            ],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "prof_de_ensenanza_secundaria_y_superior_en_letras",
        "name": "Prof. de Enseñanza Secundaria y Superior en Letras",
        "quantityTotal": 6,
        "quantityToChoose": 1,
        "compulsorySubjects": [
          "15",
          "24",
          "40",
          "42",
          "43"
        ],
        "electiveSubjects": [
          "14",
          "16",
          "21",
          "22"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "15",
              "24",
              "40",
              "42",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "16",
              "21",
              "22"
            ],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "15",
              "24",
              "40",
              "42",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "16",
              "21",
              "22"
            ],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "prof_de_ensenanza_secundarias_y_superior_en_cs_antropologicas",
        "name": "Prof. de Enseñanza Secundarias y Superior en Cs. Antropológicas",
        "quantityTotal": 6,
        "quantityToChoose": 2,
        "compulsorySubjects": [
          "16",
          "24",
          "40",
          "42"
        ],
        "electiveSubjects": [
          "14",
          "15",
          "21",
          "43"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "16",
              "24",
              "40",
              "42"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "15",
              "21",
              "43"
            ],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "16",
              "24",
              "40",
              "42"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "15",
              "21",
              "43"
            ],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "prof_en_historia",
        "name": "Prof. en Historia",
        "quantityTotal": 6,
        "quantityToChoose": 2,
        "compulsorySubjects": [
          "15",
          "24",
          "40",
          "43"
        ],
        "electiveSubjects": [
          "14",
          "16",
          "21",
          "22",
          "42",
          "50",
          "89"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "15",
              "24",
              "40",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "16",
              "21",
              "22",
              "42"
            ],
            "notCoveredElectives": [
              "50",
              "89"
            ]
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "15",
              "24",
              "40",
              "43"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "14",
              "16",
              "21",
              "22",
              "42",
              "50",
              "89"
            ],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "tec_universitaria_en_produccion_y_gestion_de_las_artes",
        "name": "Tec. Universitaria en Producción y Gestión de las Artes",
        "quantityTotal": 3,
        "quantityToChoose": 2,
        "compulsorySubjects": [
          "70"
        ],
        "electiveSubjects": [
          "14",
          "16",
          "21",
          "22",
          "42",
          "43"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [
              "14",
              "16",
              "21",
              "22",
              "42",
              "43"
            ],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Trabajo y Sociedad."
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [
              "14",
              "16",
              "21",
              "22",
              "42",
              "43"
            ],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Trabajo y Sociedad."
          }
        }
      },
      {
        "id": "tec_universitaria_en_archivistica",
        "name": "Tec. Universitaria en Archivística",
        "quantityTotal": 3,
        "quantityToChoose": 1,
        "compulsorySubjects": [
          "43",
          "70"
        ],
        "electiveSubjects": [
          "14",
          "15",
          "16",
          "42"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "43"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [
              "14",
              "15",
              "16",
              "42"
            ],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Trabajo y Sociedad."
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "43"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [
              "14",
              "15",
              "16",
              "42"
            ],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Trabajo y Sociedad."
          }
        }
      },
      {
        "id": "tec_universitaria_en_bibliotecologia",
        "name": "Tec. Universitaria en Bibliotecología",
        "quantityTotal": 3,
        "quantityToChoose": 1,
        "compulsorySubjects": [
          "43",
          "70"
        ],
        "electiveSubjects": [
          "14",
          "15",
          "16",
          "42"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "43"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [
              "14",
              "15",
              "16",
              "42"
            ],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Trabajo y Sociedad."
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "43"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [
              "14",
              "15",
              "16",
              "42"
            ],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Trabajo y Sociedad."
          }
        }
      },
      {
        "id": "tecnicatura_universitaria_en_acompanamiento_de_trayectorias_educativas",
        "name": "Tecnicatura Universitaria en Acompañamiento de Trayectorias Educativas",
        "quantityTotal": 4,
        "quantityToChoose": 2,
        "compulsorySubjects": [
          "15",
          "70"
        ],
        "electiveSubjects": [
          "14",
          "43"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 1: Ciencias Sociales y Humanas",
            "coveredCompulsory": [
              "15"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [
              "14",
              "43"
            ],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Trabajo y Sociedad."
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "15"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [
              "14",
              "43"
            ],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Trabajo y Sociedad."
          }
        }
      }
    ]
  },
  {
    "name": "Facultad de Ingeniería",
    "careers": [
      {
        "id": "lic_en_analisis_de_sistemas",
        "name": "Lic. en Análisis de Sistemas",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "24",
          "40",
          "62",
          "66",
          "90"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Pensamiento Computacional."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Pensamiento Computacional."
          }
        }
      },
      {
        "id": "ingenieria_civil",
        "name": "Ingeniería Civil",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "24",
          "40",
          "62",
          "66",
          "90"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Pensamiento Computacional."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Pensamiento Computacional."
          }
        }
      },
      {
        "id": "ingenieria_electricista",
        "name": "Ingeniería Electricista",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "24",
          "40",
          "62",
          "66",
          "90"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Pensamiento Computacional."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Pensamiento Computacional."
          }
        }
      },
      {
        "id": "ingenieria_electronica",
        "name": "Ingeniería Electrónica",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "24",
          "40",
          "62",
          "66",
          "90"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Pensamiento Computacional."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Pensamiento Computacional."
          }
        }
      },
      {
        "id": "ingenieria_mecanica",
        "name": "Ingeniería Mecánica",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "24",
          "40",
          "62",
          "66",
          "90"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Pensamiento Computacional."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Pensamiento Computacional."
          }
        }
      },
      {
        "id": "ingenieria_industrial",
        "name": "Ingeniería Industrial",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "24",
          "40",
          "62",
          "66",
          "90"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Pensamiento Computacional."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Pensamiento Computacional."
          }
        }
      },
      {
        "id": "ingenieria_quimica",
        "name": "Ingeniería Química",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "24",
          "40",
          "62",
          "66",
          "90"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Pensamiento Computacional."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Pensamiento Computacional."
          }
        }
      },
      {
        "id": "ingenieria_en_agrimensura",
        "name": "Ingeniería en Agrimensura",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "24",
          "40",
          "62",
          "66",
          "90"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Pensamiento Computacional."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Pensamiento Computacional."
          }
        }
      },
      {
        "id": "ingenieria_en_informatica",
        "name": "Ingeniería en Informática",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "24",
          "40",
          "62",
          "66",
          "90"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Pensamiento Computacional."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Pensamiento Computacional."
          }
        }
      },
      {
        "id": "ingenieria_en_petroleo",
        "name": "Ingeniería en Petróleo",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "24",
          "40",
          "62",
          "66",
          "90"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Pensamiento Computacional."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Pensamiento Computacional."
          }
        }
      },
      {
        "id": "ingenieria_de_alimentos",
        "name": "Ingeniería de Alimentos",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "24",
          "40",
          "62",
          "66",
          "90"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Pensamiento Computacional."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Pensamiento Computacional."
          }
        }
      },
      {
        "id": "bioingenieria",
        "name": "Bioingeniería",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "24",
          "40",
          "62",
          "66",
          "90"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Pensamiento Computacional."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Pensamiento Computacional."
          }
        }
      },
      {
        "id": "ingenieria_naval",
        "name": "Ingeniería Naval",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "03",
          "24",
          "40",
          "62",
          "66",
          "90"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 2: Ciencias Exactas, Naturales e Ingeniería",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Pensamiento Computacional."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "03",
              "24",
              "40",
              "62",
              "66"
            ],
            "notCoveredCompulsory": [
              "90"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Pensamiento Computacional."
          }
        }
      }
    ]
  },
  {
    "name": "Facultad de Medicina",
    "careers": [
      {
        "id": "lic_en_fonoaudiologia",
        "name": "Lic. en Fonoaudiología",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "24",
          "40",
          "51",
          "53",
          "91"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53"
            ],
            "notCoveredCompulsory": [
              "91"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Biología Celular B."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53",
              "91"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_kinesiologia_y_fisiatria",
        "name": "Lic. en Kinesiología y Fisiatría",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "24",
          "40",
          "51",
          "53",
          "91"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53"
            ],
            "notCoveredCompulsory": [
              "91"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Biología Celular B."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53",
              "91"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "medicina",
        "name": "Medicina",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "24",
          "40",
          "51",
          "53",
          "91"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53"
            ],
            "notCoveredCompulsory": [
              "91"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Biología Celular B."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53",
              "91"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_nutricion",
        "name": "Lic. en Nutrición",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "24",
          "40",
          "51",
          "53",
          "91"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53"
            ],
            "notCoveredCompulsory": [
              "91"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Biología Celular B."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53",
              "91"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_obstetricia",
        "name": "Lic. en Obstetricia",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "24",
          "40",
          "51",
          "53",
          "91"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53"
            ],
            "notCoveredCompulsory": [
              "91"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Biología Celular B."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53",
              "91"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "enfermero_universitario",
        "name": "Enfermero Universitario",
        "quantityTotal": 2,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "24",
          "40"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "24",
              "40"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "24",
              "40"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "tec_univ_en_podologia",
        "name": "Tec. Univ. en Podología",
        "quantityTotal": 3,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "40",
          "42",
          "70"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "40"
            ],
            "notCoveredCompulsory": [
              "42",
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Filosofía, Trabajo y Sociedad."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "40"
            ],
            "notCoveredCompulsory": [
              "42",
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Filosofía, Trabajo y Sociedad."
          }
        }
      },
      {
        "id": "tec_radiologo_universitario",
        "name": "Téc. Radiólogo Universitario",
        "quantityTotal": 3,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "24",
          "40"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "24",
              "40"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "24",
              "40"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "lic_en_produccion_de_bioimagenes",
        "name": "Lic. en  Producción de Bioimágenes",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "24",
          "40",
          "51",
          "53",
          "91"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53"
            ],
            "notCoveredCompulsory": [
              "91"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Biología Celular B."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53",
              "91"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      },
      {
        "id": "tec_univ_en_hemoterapia_e_inmunohematologia",
        "name": "Tec. Univ. en Hemoterapia e Inmunohematología",
        "quantityTotal": 3,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "70",
          "91"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05"
            ],
            "notCoveredCompulsory": [
              "70",
              "91"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Trabajo y Sociedad, Biología Celular B."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "91"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Trabajo y Sociedad."
          }
        }
      },
      {
        "id": "lic_en_enfermeria",
        "name": "Lic. en Enfermería",
        "quantityTotal": 6,
        "quantityToChoose": 4,
        "compulsorySubjects": [
          "24",
          "40"
        ],
        "electiveSubjects": [
          "05",
          "14",
          "15",
          "16",
          "21",
          "22",
          "42",
          "43",
          "51",
          "53",
          "91"
        ],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "24",
              "40"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "05",
              "51",
              "53"
            ],
            "notCoveredElectives": [
              "14",
              "15",
              "16",
              "21",
              "22",
              "42",
              "43",
              "91"
            ]
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "24",
              "40"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [
              "05",
              "51",
              "53",
              "91"
            ],
            "notCoveredElectives": [
              "14",
              "15",
              "16",
              "21",
              "22",
              "42",
              "43"
            ]
          }
        }
      },
      {
        "id": "tec_univ_en_cosmetologia_facial_y_corporal",
        "name": "Tec. Univ. en Cosmetología Facial y Corporal",
        "quantityTotal": 3,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "53",
          "70"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "53"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Trabajo y Sociedad."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "53"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Trabajo y Sociedad."
          }
        }
      },
      {
        "id": "tec_univ_en_instrumentacion_quirurgica",
        "name": "Tec. Univ. en Instrumentación Quirúrgica",
        "quantityTotal": 3,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "53",
          "70"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "53"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Trabajo y Sociedad."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "53"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Trabajo y Sociedad."
          }
        }
      },
      {
        "id": "tec_univ_en_practicas_cardiologicas",
        "name": "Tec. Univ. en Prácticas Cardiológicas",
        "quantityTotal": 3,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "53",
          "70",
          "91"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "53"
            ],
            "notCoveredCompulsory": [
              "70",
              "91"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben rendir en sede del CBC: Trabajo y Sociedad, Biología Celular B."
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "53",
              "91"
            ],
            "notCoveredCompulsory": [
              "70"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Trabajo y Sociedad."
          }
        }
      }
    ]
  },
  {
    "name": "Facultad de Odontología",
    "careers": [
      {
        "id": "odontologia",
        "name": "Odontología",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "05",
          "24",
          "40",
          "51",
          "53",
          "54"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Orientación 3: Ciencias Biológicas y de la Salud",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53",
              "54"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Exactas",
            "coveredCompulsory": [
              "05",
              "24",
              "40",
              "51",
              "53",
              "54"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          }
        }
      }
    ]
  },
  {
    "name": "Facultad de Psicología",
    "careers": [
      {
        "id": "lic_en_psicologia",
        "name": "Lic. en Psicología",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "08",
          "15",
          "24",
          "40",
          "43",
          "51"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial Psicología",
            "coveredCompulsory": [
              "08",
              "15",
              "24",
              "40",
              "43",
              "51"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "15",
              "24",
              "40",
              "43"
            ],
            "notCoveredCompulsory": [
              "08",
              "51"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Biología, Matemática."
          }
        }
      },
      {
        "id": "terapia_ocupacional",
        "name": "Terapia Ocupacional",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "08",
          "14",
          "15",
          "24",
          "40",
          "51"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial Psicología",
            "coveredCompulsory": [
              "08",
              "14",
              "15",
              "24",
              "40",
              "51"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "14",
              "15",
              "24",
              "40"
            ],
            "notCoveredCompulsory": [
              "08",
              "51"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Biología, Matemática."
          }
        }
      },
      {
        "id": "lic_en_musicoterapia",
        "name": "Lic. en Musicoterapia",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "08",
          "15",
          "24",
          "40",
          "43",
          "51"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial Psicología",
            "coveredCompulsory": [
              "08",
              "15",
              "24",
              "40",
              "43",
              "51"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "15",
              "24",
              "40",
              "43"
            ],
            "notCoveredCompulsory": [
              "08",
              "51"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Biología, Matemática."
          }
        }
      },
      {
        "id": "prof_de_ensenanza_media_y_superior_en_psicologia",
        "name": "Prof. de Enseñanza Media y Superior en Psicología",
        "quantityTotal": 6,
        "quantityToChoose": 0,
        "compulsorySubjects": [
          "08",
          "15",
          "24",
          "40",
          "43",
          "51"
        ],
        "electiveSubjects": [],
        "sixthYearPath": {
          "cnba": {
            "orientation": "Trayecto Especial Psicología",
            "coveredCompulsory": [
              "08",
              "15",
              "24",
              "40",
              "43",
              "51"
            ],
            "notCoveredCompulsory": [],
            "coveredElectives": [],
            "notCoveredElectives": []
          },
          "pelle": {
            "orientation": "Orientación Sociales",
            "coveredCompulsory": [
              "15",
              "24",
              "40",
              "43"
            ],
            "notCoveredCompulsory": [
              "08",
              "51"
            ],
            "coveredElectives": [],
            "notCoveredElectives": [],
            "notes": "Se deben cursar en sede del CBC: Biología, Matemática."
          }
        }
      }
    ]
  }
];
