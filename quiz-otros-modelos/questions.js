/* ==============================
   Questions DB — Otros Modelos + Medición
   Quiz ACL 2026
   ============================== */

const CATEGORIES = [
  { id: 'spice',         name: 'SPICE / ISO 15504',            icon: '🔬' },
  { id: 'mmis',          name: 'MMIS V.2',                     icon: '🧩' },
  { id: 'itmark',        name: 'ITmark',                       icon: '🏅' },
  { id: 'swtqm',         name: 'SwTQM y Software de Cuenta',   icon: '🏢' },
  { id: 'medicion',      name: 'Medición y Escalas',           icon: '📏' },
  { id: 'metricas',      name: 'Tipos de Métrica',             icon: '📊' },
  { id: 'gqm-psm',       name: 'GQM, PSM y Herramientas',     icon: '🎯' },
  { id: 'trampas',       name: 'Trampas de Examen',            icon: '⚠️' },
];

const QUESTIONS = [

  // =============================================
  // ===== CATEGORÍA: SPICE / ISO 15504 =====
  // =============================================

  {
    category: 'spice',
    type: 'multi',
    question: '¿Qué significan las siglas SPICE?',
    options: [
      'Systematic Process for Integrated Compliance Evaluation',
      'Software Product Inspection and Certification Entity',
      'Standard Process for International Capability Evaluation',
      'Software Process Improvement and Capability dEtermination'
    ],
    correct: 3,
    justification: 'SPICE = Software Process Improvement and Capability dEtermination. Es un modelo de evaluación de procesos genérico (NO específico de software). Para aplicarlo al software se combina con ISO 12207.',
    trap: false
  },
  {
    category: 'spice',
    type: 'vf',
    question: 'SPICE es un modelo específico para procesos de software.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. SPICE NO es un modelo específico para software. Es GENÉRICO: hay que elegir un modelo de procesos. Para software se usa ISO 12207 (modelo de procesos) + ISO 15504 (modelo de evaluación).',
    trap: true
  },
  {
    category: 'spice',
    type: 'multi',
    question: '¿Cuáles son las dos dimensiones de SPICE?',
    options: [
      'Modelo de desarrollo (CMMI) y Modelo de servicios (ITIL)',
      'Modelo de calidad (ISO 9001) y Modelo de certificación (ISO 17021)',
      'Modelo de procesos (ISO 12207) y Modelo de evaluación (ISO 15504)',
      'Modelo técnico y Modelo organizativo'
    ],
    correct: 2,
    justification: 'SPICE tiene dos dimensiones: el Modelo de procesos (¿Qué procesos hay? → ISO 12207 para software) y el Modelo de evaluación (¿Cómo se valoran? → ISO 15504, sustituida por ISO 33000).',
    trap: false
  },
  {
    category: 'spice',
    type: 'vf',
    question: 'ISO 15504 es el modelo de PROCESOS de SPICE.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. ISO 15504 es el modelo de EVALUACIÓN, no el de procesos. El modelo de procesos para software es ISO 12207. Esta confusión entre las dos dimensiones es una trampa frecuente de examen.',
    trap: true
  },
  {
    category: 'spice',
    type: 'vf',
    question: 'El primer nivel con calidad en SPICE es el 0.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. El primer nivel CON calidad en SPICE es el 1, no el 0. El nivel 0 es "incompleto", sin reconocimiento de calidad.',
    trap: true
  },
  {
    category: 'spice',
    type: 'multi',
    question: '¿Cuántas partes tiene la norma ISO/IEC 15504?',
    options: [
      '5 partes',
      '10 partes',
      '7 partes',
      '3 partes'
    ],
    correct: 2,
    justification: 'ISO/IEC 15504 tiene 7 partes: 1-Conceptos y vocabulario, 2-Realización de la evaluación, 3-Guía de evaluación, 4-Guía de mejora, 5-Ejemplo de modelo de evaluación, 6-Ejemplo de evaluación del ciclo de vida, 7-Evaluación de la madurez.',
    trap: false
  },
  {
    category: 'spice',
    type: 'multi',
    question: '¿Cuáles son los dos esquemas de aplicación de SPICE?',
    options: [
      'Benchmark y Evaluation',
      'SCAMPI A y SCAMPI B',
      'AENOR (ligero) y PathFinder (pesado)',
      'ISO 9001 y ISO 14001'
    ],
    correct: 2,
    justification: 'Los dos esquemas son PathFinder (pesado, basado en ISO 12207:1995) y AENOR (ligero, basado en ISO 12207:2008). NO son equivalentes entre sí: difieren en coste, rigor y aplicación.',
    trap: false
  },
  {
    category: 'spice',
    type: 'vf',
    question: 'AENOR y PathFinder son esquemas equivalentes de aplicación de SPICE.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. NO son equivalentes. PathFinder es pesado (basado en ISO 12207:1995) y AENOR es ligero (basado en ISO 12207:2008). Difieren en coste, rigor y aplicación.',
    trap: true
  },
  {
    category: 'spice',
    type: 'multi',
    question: '¿Cuántos procesos evalúa el esquema AENOR en cada nivel? (mnemónico clave)',
    options: [
      '2 / 5 / 8',
      '5 / 10 / 15',
      '3 / 7 / 11',
      '4 / 8 / 12'
    ],
    correct: 2,
    justification: 'Mnemónico clave: 3 procesos en nivel 1, 7 en nivel 2, 11 en nivel 3. Es un dato que suele caer en examen.',
    trap: false
  },
  {
    category: 'spice',
    type: 'multi',
    question: '¿Cuáles son los 3 procesos del Nivel 1 del esquema AENOR?',
    options: [
      'PP, ECP, GC',
      'RQU, RQSIS, MED',
      'ACS, GC, MED',
      'SUM, MCV, GCS'
    ],
    correct: 3,
    justification: 'Nivel 1 del esquema AENOR: SUM (Suministro), MCV (Gestión del Modelo del Ciclo de Vida), GCS (Gestión de la Configuración del Software). Solo 3 procesos.',
    trap: false
  },
  {
    category: 'spice',
    type: 'multi',
    question: '¿Cuáles son los 7 procesos del Nivel 2 del esquema AENOR?',
    options: [
      'SUM, MCV, GCS, PP, ECP, GC, MED',
      'RQU, RQSIS, PP, ECP, GC, MED, ACS',
      'Todos los del nivel 1 más 4 adicionales',
      'Análisis, Diseño, Integración, Verificación, Validación, Gestión, Riesgos'
    ],
    correct: 1,
    justification: 'Nivel 2: RQU (Definición de Requisitos de Usuario), RQSIS (Análisis de Requisitos del Sistema), PP (Planificación del Proyecto), ECP (Evaluación y Control del Proyecto), GC (Gestión de la Configuración), MED (Medición), ACS (Aseguramiento de la Calidad Software).',
    trap: false
  },
  {
    category: 'spice',
    type: 'vf',
    question: 'Para aplicar SPICE al software se combina ISO 12207 (modelo de procesos) con ISO 15504 (modelo de evaluación).',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. SPICE es genérico. Para software se necesita un modelo de procesos (ISO 12207) combinado con el modelo de evaluación (ISO 15504). Son dos normas diferentes con roles distintos.',
    trap: false
  },
  {
    category: 'spice',
    type: 'multi',
    question: '¿Qué norma ha sustituido a ISO 15504 como modelo de evaluación?',
    options: [
      'ISO 9001',
      'ISO 33000',
      'ISO 25000',
      'ISO 27000'
    ],
    correct: 1,
    justification: 'ISO 15504 ha sido sustituida por la familia ISO 33000 como modelo de evaluación de procesos. MMIS V.2 ya utiliza ISO 33000 en lugar de ISO 15504.',
    trap: false
  },

  // =============================================
  // ===== CATEGORÍA: MMIS V.2 =====
  // =============================================

  {
    category: 'mmis',
    type: 'multi',
    question: '¿Qué combina MMIS V.2?',
    options: [
      'ISO 9001 + ISO 27001',
      'CMMI-DEV + EFQM',
      'SPICE + CMMI',
      'ISO/IEC 12207:2017 (modelo de procesos) + familia ISO/IEC 33000 (modelo de evaluación)'
    ],
    correct: 3,
    justification: 'MMIS V.2 combina ISO/IEC 12207:2017 (modelo de procesos, 21 procesos) con la familia ISO/IEC 33000 (modelo de evaluación, que sustituye a ISO 15504). Es el sucesor de SPICE.',
    trap: false
  },
  {
    category: 'mmis',
    type: 'vf',
    question: 'MMIS V.2 reemplaza ISO 15504 por ISO 33000 como modelo de evaluación.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. MMIS V.2 utiliza la familia ISO/IEC 33000 (33002, 33003, 33020) en lugar de ISO 15504 como modelo de evaluación.',
    trap: false
  },
  {
    category: 'mmis',
    type: 'multi',
    question: '¿Cuántos procesos define ISO/IEC 12207:2017 que usa MMIS V.2?',
    options: [
      '21 procesos',
      '25 procesos',
      '16 procesos',
      '11 procesos'
    ],
    correct: 0,
    justification: 'ISO/IEC 12207:2017 define 21 procesos, que MMIS V.2 usa como modelo de procesos (la dimensión "qué procesos hay").',
    trap: false
  },
  {
    category: 'mmis',
    type: 'multi',
    question: '¿Cuáles son los componentes de ISO 33000 que usa MMIS V.2?',
    options: [
      'ISO 33001, ISO 33010, ISO 33050',
      'ISO 33100, ISO 33200, ISO 33300',
      'ISO 33002 (proceso de evaluación), ISO 33003 (requisitos de medición), ISO 33020 (marco de medición)',
      'Solo ISO 33000 como norma única'
    ],
    correct: 2,
    justification: 'MMIS V.2 usa tres componentes de ISO 33000: ISO 33002 (proceso de evaluación), ISO 33003 (requisitos de medición) e ISO 33020 (marco de medición — métricas para valorar evidencias).',
    trap: false
  },
  {
    category: 'mmis',
    type: 'multi',
    question: '¿Cuántos niveles de madurez tiene MMIS V.2?',
    options: [
      '4 niveles',
      '5 niveles (Básico, Gestionado, Establecido, Predecible, Innovado)',
      '3 niveles',
      '6 niveles'
    ],
    correct: 1,
    justification: 'MMIS V.2 tiene 5 niveles de madurez: 1-Básico, 2-Gestionado, 3-Establecido, 4-Predecible, 5-Innovado. Usa una estructura de "capas de cebolla": niveles de madurez (organización) + niveles de capacidad (por proceso).',
    trap: false
  },
  {
    category: 'mmis',
    type: 'multi',
    question: '¿Qué estructura tiene MMIS V.2 para combinar niveles de madurez y capacidad?',
    options: [
      'Estructura piramidal (como CMMI Staged)',
      'Estructura de "capas de cebolla": niveles de madurez (organización) + niveles de capacidad (por proceso)',
      'Estructura matricial 2D',
      'Estructura plana sin niveles'
    ],
    correct: 1,
    justification: 'MMIS V.2 utiliza una estructura de "capas de cebolla" que combina niveles de madurez (a nivel de organización) con niveles de capacidad (por proceso individual).',
    trap: false
  },
  {
    category: 'mmis',
    type: 'vf',
    question: 'MMIS V.2 es el sucesor de SPICE / ISO 15504.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. MMIS V.2 es el sucesor de SPICE, actualizando tanto el modelo de procesos (ISO 12207:2017) como el de evaluación (ISO 33000 en lugar de ISO 15504).',
    trap: false
  },

  // =============================================
  // ===== CATEGORÍA: ITmark =====
  // =============================================

  {
    category: 'itmark',
    type: 'multi',
    question: '¿Para qué tipo de empresas está diseñado ITmark?',
    options: [
      'Solo para empresas del sector público',
      'PYMEs y micro-empresas (<10 empleados), aunque también es aplicable a grandes',
      'Solo para grandes corporaciones multinacionales',
      'Solo para empresas del sector bancario'
    ],
    correct: 1,
    justification: 'ITmark está diseñado para PYMEs y micro-empresas (<10 empleados), aunque también es aplicable a empresas grandes. Sirve como pasarela previa a CMMI: ITmark primero, CMMI después.',
    trap: false
  },
  {
    category: 'itmark',
    type: 'vf',
    question: 'ITmark está diseñado exclusivamente para micro-empresas de menos de 10 empleados.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Aunque está diseñado especialmente para micro-empresas (<10 empleados), también es aplicable a empresas grandes. No es exclusivo de micro-empresas.',
    trap: true
  },
  {
    category: 'itmark',
    type: 'multi',
    question: '¿Cuáles son las 3 áreas que evalúa ITmark?',
    options: [
      'Procesos de gestión y desarrollo de software (CMMI-DEV), Gestión del negocio (EFQM/ISO 9000), Gestión de la seguridad (ISO 27000)',
      'Producto, Proyecto, Proceso',
      'Desarrollo, Testing, Despliegue',
      'Calidad, Coste, Tiempo'
    ],
    correct: 0,
    justification: 'ITmark evalúa 3 áreas: 1) Procesos de gestión y desarrollo de software (modelo: CMMI-DEV niveles 2 y 3), 2) Procesos de gestión del negocio (EFQM / ISO 9000), 3) Procesos de gestión de la seguridad (ISO/IEC 27000).',
    trap: false
  },
  {
    category: 'itmark',
    type: 'vf',
    question: 'ITmark cubre solo procesos de desarrollo de software.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. ITmark cubre 3 áreas: desarrollo de software (CMMI-DEV) + gestión del negocio (EFQM/ISO 9000) + gestión de la seguridad (ISO/IEC 27000). No solo desarrollo.',
    trap: true
  },
  {
    category: 'itmark',
    type: 'multi',
    question: '¿Cuáles son los 3 niveles de ITmark y su equivalencia aproximada con CMMI?',
    options: [
      'Básico (~CMMI 1), Premium (~CMMI 2), Élite (~CMMI 3)',
      'I.T. Mark Básico (~mitad del nivel 2 CMMI), Premium (~casi nivel 2), Élite (~casi nivel 3)',
      'Bronce (~CMMI 2), Plata (~CMMI 3), Oro (~CMMI 4)',
      'Nivel I (~CMMI 2), Nivel II (~CMMI 3), Nivel III (~CMMI 5)'
    ],
    correct: 1,
    justification: 'Los 3 niveles son: I.T. Mark Básico (~mitad del nivel 2 CMMI), I.T. Mark Premium (~casi nivel 2 CMMI), I.T. Mark Élite (~casi nivel 3 CMMI). Son equivalencias aproximadas, no oficiales.',
    trap: false
  },
  {
    category: 'itmark',
    type: 'vf',
    question: 'ITmark Élite equivale exactamente a CMMI nivel 3 oficial.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. ITmark Élite es CASI nivel 3 CMMI, pero NO es acreditación CMMI oficial. En concursos públicos puede aceptarse como equivalente, pero no es una certificación CMMI.',
    trap: true
  },
  {
    category: 'itmark',
    type: 'vf',
    question: 'ITmark Élite es incompatible con CMMI nivel 2.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. ITmark Élite y CMMI nivel 2 son COMPATIBLES y COMPLEMENTARIOS. Son independientes entre sí: una empresa puede tener ambos.',
    trap: true
  },
  {
    category: 'itmark',
    type: 'multi',
    question: 'ITmark sirve como…',
    options: [
      'Modelo exclusivo para el sector público',
      'Pasarela previa a CMMI: ITmark primero, CMMI después',
      'Sustituto definitivo de CMMI',
      'Alternativa a ISO 9001 en auditorías oficiales'
    ],
    correct: 1,
    justification: 'ITmark sirve como pasarela previa a CMMI: primero se obtiene ITmark y después se puede avanzar hacia CMMI. Es un reconocimiento de Excelencia en TI diseñado para PYMEs.',
    trap: false
  },
  {
    category: 'itmark',
    type: 'multi',
    question: 'En concursos públicos que piden "nivel 3 CMMI o equivalente", ¿qué papel juega ITmark Élite?',
    options: [
      'No puede usarse en ningún caso',
      'Puede aceptarse como equivalente, pero NO es acreditación CMMI oficial',
      'Solo sirve para empresas con más de 100 empleados',
      'Es exactamente igual que CMMI nivel 3'
    ],
    correct: 1,
    justification: 'ITmark Élite PUEDE aceptarse como equivalente en concursos públicos que piden "nivel 3 CMMI o equivalente", pero NO es una acreditación CMMI oficial. Son modelos independientes y complementarios.',
    trap: false
  },

  // =============================================
  // ===== CATEGORÍA: SwTQM Y SOFTWARE DE CUENTA =====
  // =============================================

  {
    category: 'swtqm',
    type: 'multi',
    question: '¿Qué modelos combina SwTQM?',
    options: [
      'ISO 15504 y ISO 12207',
      'CMMI (mejora de procesos) + EFQM (excelencia en gestión del negocio)',
      'ISO 9001 y ISO 27001',
      'SPICE y ITmark'
    ],
    correct: 1,
    justification: 'SwTQM combina CMMI (mejora de procesos de desarrollo, adquisición y mantenimiento) con EFQM (excelencia en gestión del negocio — European Quality Award). Lema: atención a resultados del negocio sin olvidar la operativa de los procesos.',
    trap: false
  },
  {
    category: 'swtqm',
    type: 'vf',
    question: 'SwTQM combina CMMI y EFQM.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. SwTQM (Software Total Quality Management) combina CMMI para la mejora de procesos de desarrollo con EFQM para la excelencia en gestión del negocio.',
    trap: false
  },
  {
    category: 'swtqm',
    type: 'multi',
    question: '¿Para qué tipo de organizaciones está pensado SwTQM?',
    options: [
      'Grandes corporaciones multinacionales',
      'SIOs (Software Intensive Organizations) — PYMEs intensivas en software',
      'Solo administraciones públicas',
      'Solo empresas de hardware'
    ],
    correct: 1,
    justification: 'SwTQM está pensado para SIOs (Software Intensive Organizations), es decir, PYMEs intensivas en software. Es un proyecto europeo del ESI (European Software Institute) + EFQM.',
    trap: false
  },
  {
    category: 'swtqm',
    type: 'vf',
    question: 'SwTQM es un proyecto americano del SEI.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. SwTQM es un proyecto EUROPEO del ESI (European Software Institute) + EFQM, no americano del SEI. El SEI es el que desarrolló CMMI.',
    trap: true
  },

  // =============================================
  // ===== CATEGORÍA: MEDICIÓN Y ESCALAS =====
  // =============================================

  {
    isEnumeration: true,
    category: 'medicion',
    type: 'multi',
    question: '¿Cuáles son los 4 objetivos de medir según la teoría?',
    options: [
      'Analizar, Controlar, Predecir, Mejorar',
      'Planificar, Ejecutar, Verificar, Actuar',
      'Medir, Comparar, Optimizar, Certificar',
      'Documentar, Archivar, Reportar, Presentar'
    ],
    correct: 0,
    justification: 'Los 4 objetivos de medir son: 1) Analizar (entender qué ocurre), 2) Controlar (controlar qué ocurre), 3) Predecir (estimar tiempo, coste, esfuerzo), 4) Mejorar (mejorar procesos y productos con datos).',
    trap: false
  },
  {
    category: 'medicion',
    type: 'multi',
    question: '¿Cuál es la diferencia entre "Medida" y "Medición"?',
    options: [
      'Medida es el proceso; Medición es el resultado',
      'Son sinónimos',
      'Medida se aplica a software; Medición a hardware',
      'Medida es el RESULTADO; Medición es el PROCESO/ALGORITMO para obtenerlo'
    ],
    correct: 3,
    justification: 'Medida = el RESULTADO (indicación sobre un atributo, ej: "50 errores"). Medición = el PROCESO/ALGORITMO (conjunto de operaciones para obtener la medida, ej: ejecutar la herramienta de recuento).',
    trap: false
  },
  {
    category: 'medicion',
    type: 'multi',
    question: '¿Cuál es la diferencia entre "Métrica" e "Indicador"?',
    options: [
      'La métrica es cualitativa; el indicador es cuantitativo',
      'El indicador es la fórmula; la métrica incluye la interpretación',
      'Son sinónimos, no hay diferencia',
      'La métrica es la FÓRMULA; el indicador es la métrica + criterios de análisis (interpretación y acciones)'
    ],
    correct: 3,
    justification: 'Métrica = la FÓRMULA que describe un atributo (ej: "25% de desviación"). Indicador = métrica + criterios de análisis (ej: "25% desviación; si <20% continuar, 20–50% replanificar, >50% cancelar").',
    trap: false
  },
  {
    category: 'medicion',
    type: 'vf',
    question: 'Indicador es sinónimo de métrica.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. El indicador NO es sinónimo de métrica. Indicador = métrica + criterios de análisis (interpretación y acciones a tomar). La métrica es el dato bruto; el indicador añade el significado.',
    trap: true
  },
  {
    isEnumeration: true,
    category: 'medicion',
    type: 'multi',
    question: '¿Cuáles son las 4 escalas de medida?',
    options: [
      'Continua, Discreta, Categórica, Temporal',
      'Nominal, Ordinal, Intervalo, Razón (Ratio)',
      'Alta, Media, Baja, Nula',
      'Binaria, Decimal, Hexadecimal, Octal'
    ],
    correct: 1,
    justification: 'Las 4 escalas de medida son: 1) Nominal (categorías, solo = y ≠), 2) Ordinal (orden, <, >), 3) Intervalo (+ y −, 0 es valor real), 4) Razón/Ratio (todas las operaciones, 0 = ausencia).',
    trap: false
  },
  {
    category: 'medicion',
    type: 'multi',
    question: '¿Qué operaciones permite la escala Nominal?',
    options: [
      '=, ≠, +, − (suma y resta)',
      'Todas: =, ≠, <, >, +, −, ×, ÷',
      '=, ≠, <, > (orden)',
      'Solo = y ≠ (igualdad y desigualdad)'
    ],
    correct: 3,
    justification: 'La escala Nominal solo permite clasificar en categorías exclusivas con operaciones = y ≠ (igualdad y desigualdad). No hay orden ni operaciones matemáticas. Ej: tipo de ciclo (Scrum/Waterfall).',
    trap: false
  },
  {
    category: 'medicion',
    type: 'multi',
    question: '¿Qué operaciones permite la escala Ordinal?',
    options: [
      'Solo = y ≠',
      '=, ≠, +, − (suma y resta)',
      'Todas las operaciones',
      '=, ≠, <, > (orden, pero NO suma ni resta)'
    ],
    correct: 3,
    justification: 'La escala Ordinal permite: =, ≠, <, > (orden). NO permite operaciones matemáticas como suma o resta. No se puede afirmar que CMMI4−CMMI3 = CMMI5−CMMI4. Ej: niveles CMMI 1<2<3<4<5.',
    trap: false
  },
  {
    category: 'medicion',
    type: 'vf',
    question: 'En la escala ordinal se pueden hacer operaciones matemáticas como suma y resta.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. En ordinal NO se pueden hacer operaciones matemáticas, solo ordenar. No se puede afirmar que la diferencia CMMI4–CMMI3 sea igual a CMMI5–CMMI4.',
    trap: true
  },
  {
    category: 'medicion',
    type: 'multi',
    question: '¿Qué diferencia hay entre la escala de Intervalo y la de Razón (Ratio)?',
    options: [
      'No hay diferencia',
      'En Intervalo el 0 indica ausencia; en Ratio el 0 es un valor real',
      'Intervalo permite multiplicación; Ratio no',
      'En Intervalo el 0 es un valor real; en Ratio el 0 significa AUSENCIA de valor'
    ],
    correct: 3,
    justification: 'En Intervalo el 0 es un VALOR REAL (ej: 0°C = temperatura existente). En Ratio el 0 significa AUSENCIA de valor (ej: 0 errores = no hay errores). Ratio permite todas las operaciones (+, −, ×, ÷); Intervalo solo + y −.',
    trap: false
  },
  {
    category: 'medicion',
    type: 'vf',
    question: 'En la escala de intervalo, el 0 indica ausencia de valor.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. En la escala de INTERVALO el 0 es un valor REAL (ej: 0°C = una temperatura que existe). Es en la escala de RAZÓN/RATIO donde el 0 indica AUSENCIA de valor.',
    trap: true
  },
  {
    category: 'medicion',
    type: 'vf',
    question: 'En la escala de razón (ratio), el 0 indica ausencia de valor.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. En la escala de razón/ratio, el 0 significa AUSENCIA de valor (0 absoluto). Ej: 0 LOC = no hay código, 0 defectos = no hay defectos, 0 tiempo = no ha pasado tiempo.',
    trap: false
  },
  {
    category: 'medicion',
    type: 'multi',
    question: '¿Qué escala de medida representan los niveles de CMMI (1, 2, 3, 4, 5)?',
    options: [
      'Nominal (solo categorías)',
      'Ordinal (hay orden pero no se pueden sumar/restar niveles)',
      'Intervalo (se pueden sumar y restar)',
      'Razón (0 absoluto y todas las operaciones)'
    ],
    correct: 1,
    justification: 'Los niveles CMMI son escala ORDINAL: hay un orden (1<2<3<4<5) pero NO se pueden hacer operaciones matemáticas. No se puede afirmar que la diferencia entre nivel 4 y 3 sea igual que entre nivel 5 y 4.',
    trap: false
  },
  {
    category: 'medicion',
    type: 'multi',
    question: '¿Qué es un catálogo de métricas?',
    options: [
      'Una colección organizada de las métricas que usa una organización, típicamente en categorías Producto/Proyecto/Proceso',
      'Un estándar ISO que obliga a usar métricas específicas',
      'Una base de datos de errores del software',
      'Un listado de certificaciones de calidad'
    ],
    correct: 0,
    justification: 'Un catálogo de métricas es una colección organizada de las métricas que usa la organización. La organización habitual es en 3 categorías (Producto/Proyecto/Proceso), pero NO es obligatoria: cada empresa decide cómo organizarlo.',
    trap: false
  },
  {
    category: 'medicion',
    type: 'vf',
    question: 'El catálogo de métricas DEBE organizarse obligatoriamente en las categorías Producto, Proyecto y Proceso.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. La organización en Producto/Proyecto/Proceso es la más habitual, pero NO es obligatoria. Cada empresa decide cómo organizar su catálogo de métricas según sus necesidades.',
    trap: true
  },
  {
    isEnumeration: true,
    category: 'medicion',
    type: 'multi',
    question: '¿Qué es la Ficha de Indicador del INCIBE?',
    options: [
      'Un certificado de calidad del software',
      'Un formulario obligatorio de la administración pública',
      'Una plantilla habitual (~20 campos) para documentar indicadores, pero NO es un estándar ISO oficial',
      'Un estándar ISO oficial para definir métricas'
    ],
    correct: 2,
    justification: 'La Ficha de Indicador es una plantilla del INCIBE (Instituto Nacional de Ciberseguridad) con ~20 campos para documentar indicadores. NO es un estándar ISO oficial. Es la plantilla más habitual y cada empresa decide qué campos usa.',
    trap: false
  },
  {
    isEnumeration: true,
    category: 'medicion',
    type: 'vf',
    question: 'La Ficha de Indicador del INCIBE es un estándar ISO oficial.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. La Ficha de Indicador es una plantilla del INCIBE, NO un estándar ISO oficial. Es la plantilla más habitual para documentar indicadores, pero cada empresa adapta los campos según sus necesidades.',
    trap: true
  },
  {
    category: 'medicion',
    type: 'multi',
    question: '¿Qué son los KPIs?',
    options: [
      'Key Product Indicators — métricas de calidad del producto',
      'Key Performance Indicators — factores críticos para el éxito del negocio',
      'Key Project Items — entregables del proyecto',
      'Key Process Inspections — auditorías de procesos'
    ],
    correct: 1,
    justification: 'KPIs = Key Performance Indicators (Indicadores Clave de Rendimiento). Son los factores críticos para el éxito del negocio. Se monitorizan mediante el Cuadro de Mando integral (Balanced Scorecard).',
    trap: false
  },
  {
    category: 'medicion',
    type: 'multi',
    question: '¿Qué es un Cuadro de Mando integral (Balanced Scorecard)?',
    options: [
      'Un informe de auditoría externa',
      'Un documento de requisitos del software',
      'Un certificado de calidad ISO',
      'Una herramienta que monitoriza, controla y gestiona procesos a través de KPIs'
    ],
    correct: 3,
    justification: 'El Cuadro de Mando integral (Balanced Scorecard) monitoriza, controla y gestiona procesos a través de KPIs. En empresas de software suele ser un proyecto interno hecho a medida.',
    trap: false
  },
  {
    category: 'medicion',
    type: 'vf',
    question: 'El Cuadro de Mando integral monitoriza KPIs.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. El Cuadro de Mando integral (Balanced Scorecard) monitoriza, controla y gestiona procesos a través de KPIs (Key Performance Indicators). Toda empresa debe definir sus metas y medir el progreso hacia ellas.',
    trap: false
  },

  // =============================================
  // ===== CATEGORÍA: TIPOS DE MÉTRICA =====
  // =============================================

  {
    category: 'metricas',
    type: 'multi',
    question: '¿Qué diferencia hay entre una métrica directa y una indirecta?',
    options: [
      'Directa es para productos; indirecta es para procesos',
      'Directa se mide en campo; indirecta se calcula en oficina',
      'Directa no depende de otras métricas y se mide directamente; indirecta es combinación matemática de varias directas',
      'Directa es objetiva; indirecta es subjetiva'
    ],
    correct: 2,
    justification: 'Directa (simple): no depende de otras métricas, se mide directamente (ej: LOC, nº requisitos). Indirecta (compuesta): combinación matemática de varias directas (ej: Satisfacción = f(tiempo + quejas + clientes perdidos)).',
    trap: false
  },
  {
    category: 'metricas',
    type: 'multi',
    question: '¿Qué diferencia hay entre una métrica estática y una dinámica?',
    options: [
      'No hay diferencia, son sinónimos',
      'Estática es para código; dinámica es para procesos',
      'Estática cambia con el tiempo; dinámica no',
      'Estática mide un atributo en un momento específico; dinámica mide el cambio de una cantidad por unidad de otra variable'
    ],
    correct: 3,
    justification: 'Estática: atributo en un momento específico (ej: mido 1,72 m hoy). Dinámica: cambio de una cantidad por unidad de otra variable, mide evolución. Índice temporal: caso particular de dinámica donde la otra variable es el tiempo.',
    trap: false
  },
  {
    category: 'metricas',
    type: 'vf',
    question: 'Toda métrica dinámica mide evolución temporal.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Las métricas dinámicas miden cambio por unidad de otra variable, que NO siempre es el tiempo. Los índices temporales son solo un CASO PARTICULAR de las dinámicas. Toda métrica dinámica temporal es dinámica, pero no toda dinámica es temporal.',
    trap: true
  },
  {
    category: 'metricas',
    type: 'vf',
    question: 'Toda métrica indirecta es dinámica.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Directa/indirecta y estática/dinámica son DIMENSIONES INDEPENDIENTES. Una métrica puede ser indirecta y estática a la vez, o directa y dinámica, etc.',
    trap: true
  },
  {
    category: 'metricas',
    type: 'multi',
    question: '¿Qué diferencia hay entre "Ratio" y "Proporción" (ambas estáticas)?',
    options: [
      'Ratio es directa; Proporción es indirecta',
      'Son sinónimos',
      'Ratio se mide en %; Proporción en números enteros',
      'En un Ratio, numerador y denominador son EXCLUYENTES; en una Proporción, el numerador es PARTE del denominador'
    ],
    correct: 3,
    justification: 'Ratio: numerador y denominador son EXCLUYENTES (sin intersección), NO se convierte en %. Ej: personas en pruebas / personas en desarrollo. Proporción: numerador es PARTE del denominador, SÍ se puede expresar en %. Ej: clientes satisfechos / total clientes.',
    trap: false
  },
  {
    category: 'metricas',
    type: 'vf',
    question: 'Ratio y Proporción son lo mismo.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. En un Ratio, numerador y denominador son EXCLUYENTES (no se convierte en %). En una Proporción, el numerador es PARTE del denominador (sí se puede expresar en %).',
    trap: true
  },
  {
    category: 'metricas',
    type: 'vf',
    question: 'En una proporción, el numerador es parte del denominador.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. En una proporción, el numerador es PARTE del denominador (ej: clientes satisfechos / total clientes). Por eso se puede expresar como porcentaje.',
    trap: false
  },
  {
    category: 'metricas',
    type: 'multi',
    question: '¿Cuál de estos es un ejemplo de métrica directa?',
    options: [
      'Densidad de defectos (defectos / KLOC)',
      'LOC (líneas de código) — se mide directamente sin depender de otras',
      'DRE (Defect Removal Efficiency)',
      'Satisfacción del cliente (combinación de encuesta + quejas + fidelización)'
    ],
    correct: 1,
    justification: 'LOC es una métrica directa (simple): se mide directamente sin depender de otras métricas. Las demás opciones son indirectas (compuestas): combinan varias métricas directas mediante fórmulas.',
    trap: false
  },
  {
    category: 'metricas',
    type: 'multi',
    question: '¿A qué se dedica ISO 25000 (SQuaRE)?',
    options: [
      'Es un estándar de seguridad informática',
      'Define métricas de calidad del proceso de desarrollo',
      'Define métricas para medir la calidad del PRODUCTO software (no proceso, no proyecto)',
      'Define procesos de gestión de proyectos'
    ],
    correct: 2,
    justification: 'ISO 25000 (SQuaRE = System and Software Quality Requirements and Evaluation) define métricas para medir la calidad del PRODUCTO software. Es evolución de ISO 9126 e ISO 14598. No mide procesos ni proyectos.',
    trap: false
  },
  {
    category: 'metricas',
    type: 'vf',
    question: 'ISO 25000 (SQuaRE) es evolución de ISO 9126 e ISO 14598.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. ISO 25000 (SQuaRE) es la evolución de ISO 9126 (modelo de calidad del producto) e ISO 14598 (evaluación del producto software).',
    trap: false
  },
  {
    category: 'metricas',
    type: 'vf',
    question: 'ISO 25000 define métricas de calidad del PROCESO de desarrollo.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. ISO 25000 define métricas de calidad del PRODUCTO software, no del proceso ni del proyecto. La calidad del producto incluye 8 macro-características: Funcionalidad, Eficiencia, Compatibilidad, Usabilidad, Fiabilidad, Seguridad, Mantenibilidad, Portabilidad.',
    trap: true
  },

  // =============================================
  // ===== CATEGORÍA: GQM, PSM Y HERRAMIENTAS =====
  // =============================================

  // =============================================
  // ===== CATEGORÍA: TRAMPAS DE EXAMEN =====
  // =============================================

  {
    category: 'trampas',
    type: 'vf',
    question: 'SPICE es un modelo específico para procesos de software.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. SPICE es GENÉRICO, no específico para software. Para aplicarlo al software hay que combinarlo con ISO 12207 (modelo de procesos del ciclo de vida del software).',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'ISO 15504 es el modelo de procesos de SPICE.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. ISO 15504 es el modelo de EVALUACIÓN de SPICE, no el de procesos. El modelo de procesos (para software) es ISO 12207.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'El primer nivel con calidad en SPICE es el nivel 0.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. El primer nivel CON calidad en SPICE es el nivel 1, no el 0. El nivel 0 es "incompleto".',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'PathFinder y AENOR son esquemas equivalentes de SPICE.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. NO son equivalentes. PathFinder es pesado (ISO 12207:1995), AENOR es ligero (ISO 12207:2008). Difieren en coste, rigor y aplicación.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'ITmark está diseñado exclusivamente para micro-empresas.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Diseñado para PYMEs y micro-empresas (<10 empleados), pero también aplicable a empresas grandes.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'ITmark Élite equivale exactamente a CMMI nivel 3 oficial.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. ITmark Élite es CASI nivel 3 CMMI, pero NO es acreditación CMMI oficial. En concursos públicos puede aceptarse como equivalente.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'ITmark cubre solo procesos de desarrollo de software.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. ITmark cubre 3 áreas: desarrollo (CMMI-DEV) + gestión del negocio (EFQM/ISO 9000) + gestión de la seguridad (ISO/IEC 27000).',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'Indicador es sinónimo de métrica.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Indicador = métrica + criterios de análisis (interpretación y acciones). La métrica es el dato bruto; el indicador le añade el significado y las acciones a tomar.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'En la escala de intervalo el 0 indica ausencia de valor.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. En INTERVALO el 0 es un valor REAL (ej: 0°C). En RATIO el 0 sí indica AUSENCIA. Confundir esto puede ser desastroso.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'En la escala ordinal se pueden hacer operaciones matemáticas.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. En ordinal solo se puede ORDENAR (=, ≠, <, >). NO se pueden hacer operaciones matemáticas como suma o resta.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'Toda métrica dinámica mide evolución temporal.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Los índices temporales son solo un CASO PARTICULAR de las métricas dinámicas. Una métrica dinámica mide cambio por unidad de otra variable, que no siempre es el tiempo.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'Toda métrica indirecta es dinámica.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Directa/indirecta y estática/dinámica son dimensiones INDEPENDIENTES. Una métrica puede ser indirecta y estática, o directa y dinámica.',
    trap: true
  },
  {
    isEnumeration: true,
    category: 'trampas',
    type: 'vf',
    question: 'La Ficha de Indicador del INCIBE es un estándar ISO oficial.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Es una plantilla del INCIBE (Instituto Nacional de Ciberseguridad), NO un estándar ISO oficial. Es la plantilla más habitual pero no es normativa.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'El catálogo de métricas DEBE organizarse en Producto/Proyecto/Proceso.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Es la organización más HABITUAL, pero NO es obligatoria. Cada empresa decide cómo organizar su catálogo.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'multi',
    question: '¿Cuál de estas afirmaciones es CORRECTA?',
    options: [
      'SPICE es específico para software',
      'ITmark cubre solo desarrollo',
      'MMIS V.2 reemplaza ISO 15504 por ISO 33000',
      'ISO 25000 define métricas de calidad del proceso'
    ],
    correct: 2,
    justification: 'MMIS V.2 efectivamente reemplaza ISO 15504 por ISO 33000. Las demás son falsas: SPICE es genérico, ITmark cubre 3 áreas, e ISO 25000 define métricas del PRODUCTO (no proceso).',
    trap: true
  },
  {
    category: 'trampas',
    type: 'multi',
    question: '¿Cuál de estas afirmaciones sobre escalas de medida es FALSA?',
    options: [
      'Ratio: el 0 es un valor real (no ausencia)',
      'Ordinal permite <, > pero no suma/resta',
      'Intervalo: el 0 es un valor real',
      'Nominal solo permite = y ≠'
    ],
    correct: 0,
    justification: 'En Ratio el 0 indica AUSENCIA de valor (0 absoluto), no es "un valor real". El 0 como valor real es propio de la escala de Intervalo (ej: 0°C existe como temperatura).',
    trap: true
  },
  {
    isEnumeration: true,
    category: 'trampas',
    type: 'multi',
    question: 'Un profesor dice: "nº de errores en pruebas = 0". ¿Qué escala usa si 0 = pruebas ejecutadas sin errores?',
    options: [
      'Nominal',
      'Ordinal',
      'Ratio (0 = ausencia, pruebas no ejecutadas)',
      'Intervalo (0 = resultado válido, pruebas ejecutadas)'
    ],
    correct: 3,
    justification: 'Si 0 = pruebas ejecutadas sin errores, el 0 es un RESULTADO VÁLIDO → escala de Intervalo. Si 0 = pruebas aún no ejecutadas (ausencia), sería Ratio. Confundir esto puede ser desastroso.',
    trap: true
  },

  // ===== TRAMPAS ENUMERACIONES: OTROS MODELOS Y MEDICION =====
  {
    isEnumeration: true,
    category: 'itmark',
    type: 'multi',
    question: 'Según el modelo ITmark para PYMEs, ¿cuáles son las tres áreas principales de gestión que se evalúan?',
    options: [
      'Desarrollo ágil (Scrum), Gestión del negocio (EFQM) y Mantenimiento (ITIL).',
      'Desarrollo de software (CMMI), Gestión del negocio (EFQM/ISO 9000) y Seguridad de la información (ISO 27000).',
      'Calidad del producto (ISO 25000), Gestión del negocio (ISO 9000) y Seguridad (ISO 27000).',
      'Desarrollo de software (CMMI), Recursos Humanos (People CMM) y Riesgos Financieros (ISO 31000).'
    ],
    correct: 1,
    justification: 'ITmark evalúa desarrollo (basado en CMMI), negocio (EFQM/ISO 9000) y seguridad de la información (ISO 27000).',
    trap: false
  },
  {
    isEnumeration: true,
    category: 'itmark',
    type: 'multi',
    question: '¿Cuáles son los tres niveles de certificación que propone el modelo ITmark en orden ascendente?',
    options: [
      'Plata, Oro y Platino.',
      'Básico, Premium y Élite.',
      'Nivel 1, Nivel 2 y Nivel 3.',
      'Inicial, Gestionado y Optimizado.'
    ],
    correct: 1,
    justification: 'ITmark tiene tres niveles: Básico (I.T. Mark), Premium y Élite.',
    trap: false
  },
  {
    isEnumeration: true,
    category: 'medicion',
    type: 'multi',
    question: '¿Cuáles son los 4 objetivos fundamentales de la medición en ingeniería del software?',
    options: [
      'Analizar, Codificar, Testear y Desplegar.',
      'Planificar, Hacer, Verificar y Actuar (PDCA).',
      'Medir, Auditar, Certificar y Facturar.',
      'Analizar, Controlar, Predecir y Mejorar.'
    ],
    correct: 3,
    justification: 'Los 4 objetivos según Deming/PSM son: Analizar, Controlar, Predecir (estimar) y Mejorar.',
    trap: false
  },
  {
    isEnumeration: true,
    category: 'medicion',
    type: 'multi',
    question: '¿Cuáles son las 4 escalas de medida estandarizadas en orden de menor a mayor capacidad matemática?',
    options: [
      'Nominal, Ordinal, Intervalo y Razón (Ratio).',
      'Numérica, Alfabética, Binaria y Compleja.',
      'Discreta, Continua, Estática y Dinámica.',
      'Absoluta, Relativa, Porcentual y Fraccionaria.'
    ],
    correct: 0,
    justification: 'Nominal (sólo igualdad), Ordinal (orden), Intervalo (restas, el 0 es real), Razón/Ratio (división, el 0 es ausencia absoluta).',
    trap: false
  },
  {
    category: 'medicion',
    type: 'vf',
    question: 'La norma ISO/IEC 25000 (SQuaRE) define un conjunto de métricas dedicadas a medir la calidad del PROCESO de desarrollo de software.',
    options: ['Falso', 'Verdadero'],
    correct: 0,
    justification: 'FALSO. La ISO 25000 mide la calidad del PRODUCTO software (funcionalidad, usabilidad, seguridad, etc.), no del proceso.',
    trap: true
  },
  {
    category: 'medicion',
    type: 'vf',
    question: 'Para aplicar un catálogo de métricas en un SGC, el examen exige conocer y memorizar las fórmulas complejas de todas las métricas ISO/IEC.',
    options: ['Falso', 'Verdadero'],
    correct: 0,
    justification: 'FALSO. Del catálogo de métricas sólo hay que entender el concepto y su utilidad como herramienta de Measurement & Analysis, no memorizar las fórmulas concretas.',
    trap: true
  },
  {
    isEnumeration: true,
    category: 'medicion',
    type: 'vf',
    question: 'La "Ficha de Indicador" (como el modelo de INCIBE) es un concepto que define una plantilla para documentar rigurosamente cómo se recoge, calcula y analiza una métrica.',
    options: ['Falso', 'Verdadero'],
    correct: 1,
    justification: 'VERDADERO. Define campos como objetivo, fórmula, escala, frecuencia y responsables. No hace falta memorizar los 20 campos, pero sí saber qué es.',
    trap: false
  },
];
