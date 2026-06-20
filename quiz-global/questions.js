const CATEGORIES = [
  { id: 'calidad',        name: 'Qué es Calidad',               icon: '🎯' },
  { id: 'qa-qc',          name: 'QA vs QC / V&V',               icon: '🔍' },
  { id: 'crisis',         name: 'Crisis del Software',           icon: '💥' },
  { id: 'iso-familia',    name: 'Familia ISO 9000',              icon: '📘' },
  { id: 'iso-estructura', name: 'Estructura ISO 9001',           icon: '🏗️' },
  { id: 'certificacion',  name: 'Certificación y Auditorías',    icon: '✅' },
  { id: 'metricas',       name: 'Métricas de Calidad',           icon: '📊' },
  { id: 'cmmi-intro',     name: 'Qué es CMMI',                icon: '🏛️' },
  { id: 'versiones',      name: 'Versiones y Evolución',       icon: '🔄' },
  { id: 'estructura',     name: 'Estructura de una PA',        icon: '🧱' },
  { id: 'staged-cont',    name: 'Staged vs Continuous',        icon: '⚖️' },
  { id: 'pas-ciclo',      name: 'PAs y Ciclo de Vida',         icon: '♻️' },
  { id: 'scampi',         name: 'SCAMPI y Tipos',              icon: '📋' },
  { id: 'evaluacion',     name: 'Evaluación CMMI',             icon: '🔎' },
  { id: 'trampas',        name: 'Trampas de Examen',           icon: '⚠️' },
  { id: 'spice',         name: 'SPICE / ISO 15504',            icon: '🔬' },
  { id: 'mmis',          name: 'MMIS V.2',                     icon: '🧩' },
  { id: 'itmark',        name: 'ITmark',                       icon: '🏅' },
  { id: 'swtqm',         name: 'SwTQM y Software de Cuenta',   icon: '🏢' },
  { id: 'medicion',      name: 'Medición y Escalas',           icon: '📏' },
  { id: 'metricas',      name: 'Tipos de Métrica',             icon: '📊' },
  { id: 'gqm-psm',       name: 'GQM, PSM y Herramientas',     icon: '🎯' },
  { id: 'trampas',       name: 'Trampas de Examen',            icon: '⚠️' },
  { id: 'conceptos',       name: 'Conceptos Base',                icon: '📘' },
  { id: 'criterios',       name: '5 Criterios del Auditor',       icon: '🔍' },
  { id: 'roles',           name: 'Roles y Responsabilidades',     icon: '👥' },
  { id: 'vf',              name: 'Verificación de Fase',          icon: '🔬' },
  { id: 'ag',              name: 'Auditoría General',             icon: '🏢' },
  { id: 'nc',              name: 'No Conformidades',              icon: '⚠️' },
  { id: 'informes',        name: 'Informes y Documentación',      icon: '📋' },
  { id: 'entradas-salidas', name: 'Entradas, Salidas y Métricas', icon: '📊' },
  { id: 'diferencias',     name: 'Diferencias Clave (Examen)',    icon: '🎯' }
];

let QUESTIONS = [
  // =============================================
  // ===== CATEGORÍA: QUÉ ES CALIDAD =====
  // =============================================
  {
    category: 'calidad',
    type: 'multi',
    question: '¿Cuál es la definición de calidad según ISO 9000:2015?',
    options: [
      'El grado en que un conjunto de características inherentes de un objeto cumple con los requisitos.',
      'La ausencia total de defectos en un producto.',
      'La satisfacción subjetiva del cliente con el producto.',
      'El cumplimiento de todos los estándares internacionales aplicables.'
    ],
    correct: 0,
    justification: 'Según ISO 9000:2015, calidad se define como "el grado en el que un conjunto de características inherentes de un objeto cumple con los requisitos". El objeto puede ser un producto, servicio, proceso, recurso, sistema u organización.',
    trap: false
  },
  {
    category: 'calidad',
    type: 'vf',
    question: 'La calidad del software no puede definirse simplemente como "fácil de usar" o "rápido", sino que debe definirse por anticipado y ser medible.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. La calidad debe definirse por anticipado, con parámetros cuantificables (medibles) y verificables (existe un procedimiento objetivo para comprobarlo).',
    trap: false
  },
  {
    category: 'calidad',
    type: 'multi',
    question: '¿Qué tres restricciones deben cumplir los parámetros usados para definir calidad?',
    options: [
      'Deben establecerse por anticipado, ser cuantificables y ser verificables.',
      'Deben ser subjetivos, flexibles y medibles.',
      'Deben ser baratos, rápidos y fiables.',
      'Deben acordarse entre desarrolladores, ser dinámicos y revisables.'
    ],
    correct: 0,
    justification: 'Los parámetros de calidad deben: (1) establecerse por anticipado (antes del desarrollo), (2) ser cuantificables (poder medirse) y (3) ser verificables (existir un procedimiento objetivo y establecido para comprobar su valor).',
    trap: false
  },
  {
    category: 'calidad',
    type: 'vf',
    question: 'Para hablar de calidad, los parámetros deben ser cuantificables, verificables y estar definidos por anticipado.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. Las tres restricciones son necesarias simultáneamente para definir un parámetro de calidad válido.',
    trap: false
  },
  {
    category: 'calidad',
    type: 'multi',
    question: '¿Cuál de los siguientes NO es un ejemplo válido de parámetro de calidad en software?',
    options: [
      'Opinión personal del programador sobre la elegancia del código.',
      'Satisfacción del usuario con la funcionalidad.',
      'Número de errores incluidos.',
      'Tiempo medio transcurrido entre fallos (MTBF).'
    ],
    correct: 0,
    justification: 'La opinión personal del programador no es un parámetro cuantificable ni verificable. Los parámetros válidos incluyen satisfacción del usuario, número de errores y MTBF, que sí pueden medirse objetivamente.',
    trap: false
  },
  {
    category: 'calidad',
    type: 'multi',
    question: '¿Cómo debe situarse la función de calidad dentro de una organización?',
    options: [
      'Como un staff directamente vinculado a dirección, con visión independiente.',
      'Integrada dentro del equipo de desarrollo, sin independencia.',
      'Externalizada siempre a una empresa auditora.',
      'Bajo el responsable de producción para mayor eficiencia.'
    ],
    correct: 0,
    justification: 'La función de calidad debe ser un staff directamente vinculado a dirección y dependiente exclusivamente de ella, con una visión independiente. Su función es velar por el buen hacer según el sistema de calidad.',
    trap: false
  },
  {
    category: 'calidad',
    type: 'vf',
    question: 'La calidad no es un concepto absoluto, sino que el consumidor la juzga con relativismo dependiendo del contexto y el producto.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. La calidad depende del contexto, los requisitos y las expectativas. El consumidor la juzga con todo relativismo en un producto o servicio concreto.',
    trap: false
  },
  {
    category: 'calidad',
    type: 'multi',
    question: 'Según ISO 8402, la calidad es:',
    options: [
      'Conjunto de propiedades y características que confieren aptitud para satisfacer necesidades explícitas o implícitas.',
      'La capacidad de un producto para funcionar sin errores durante un año.',
      'El nivel de satisfacción alcanzado por los usuarios finales.',
      'La conformidad con los requisitos legales del país de producción.'
    ],
    correct: 0,
    justification: 'ISO 8402 define calidad como "conjunto de propiedades y características de un producto o servicio que le confieren aptitud para satisfacer unas necesidades explícitas o implícitas".',
    trap: false
  },
  {
    category: 'calidad',
    type: 'multi',
    question: '¿Quién percibe y juzga la calidad?',
    options: [
      'El cliente (quien la recibe).',
      'El programador.',
      'El jefe de proyecto.',
      'El departamento de calidad.'
    ],
    correct: 0,
    justification: 'Quien percibe la calidad es quien la recibe: el cliente. La calidad no es un concepto absoluto; el consumidor la juzga con todo relativismo en un producto o servicio concreto.',
    trap: false
  },
  {
    category: 'calidad',
    type: 'multi',
    question: '¿Cuál es la diferencia entre "eficaz" y "eficiente"?',
    options: [
      'Eficaz logra el objetivo (sin importar coste). Eficiente logra el objetivo con uso óptimo de recursos.',
      'Eficaz y eficiente significan lo mismo.',
      'Eficiente logra el objetivo y eficaz optimiza recursos.',
      'Eficaz se refiere a procesos y eficiente a productos.'
    ],
    correct: 0,
    justification: 'Eficaz = logra el objetivo (sin importar coste). Eficiente = eficaz + uso óptimo de recursos. ISO 9001 se centra en la eficacia, mientras que ISO 9004 se centra en la eficiencia.',
    trap: false
  },
  {
    category: 'calidad',
    type: 'vf',
    question: 'ISO 9001 se centra en la eficacia, mientras que ISO 9004 va más allá y se centra en la eficiencia.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. ISO 9001 busca asegurar la eficacia (lograr objetivos), mientras que ISO 9004 busca el éxito sostenido mediante la eficiencia (uso óptimo de recursos).',
    trap: false
  },

  // =============================================
  // ===== CATEGORÍA: QA vs QC / V&V =====
  // =============================================
  {
    category: 'qa-qc',
    type: 'vf',
    question: 'Una auditoría interna es control de calidad (QC).',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Una auditoría interna es aseguramiento de calidad (QA), NO control de calidad (QC). Regla de oro: "Una auditoría = aseguramiento de la calidad", sin excepciones. QA verifica que se sigue el proceso.',
    trap: true
  },
  {
    category: 'qa-qc',
    type: 'multi',
    question: '¿Cuál es la pregunta clave que define el Aseguramiento de Calidad (QA)?',
    options: [
      '¿Se está siguiendo el proceso?',
      '¿El producto está bien hecho?',
      '¿Se ha desarrollado el producto correcto?',
      '¿Se han cumplido los plazos?'
    ],
    correct: 0,
    justification: 'QA se pregunta "¿Se está siguiendo el proceso?". Asegura que se sigue el proceso definido y verifica que se usan los estándares y herramientas marcados. Es preventivo y no requiere técnico especializado (basta con checklist).',
    trap: false
  },
  {
    category: 'qa-qc',
    type: 'multi',
    question: '¿Cuál es la pregunta clave que define el Control de Calidad (QC)?',
    options: [
      '¿El producto está bien hecho?',
      '¿Se está siguiendo el proceso?',
      '¿El cliente está satisfecho?',
      '¿Se han respetado los estándares?'
    ],
    correct: 0,
    justification: 'QC se pregunta "¿El producto está bien hecho?". Controla la calidad técnica de los productos obtenidos, revisando entregables. Es detectivo y SÍ requiere técnico especializado.',
    trap: false
  },
  {
    category: 'qa-qc',
    type: 'vf',
    question: 'Una actividad de control de calidad (QC) requiere un técnico especializado para revisar los entregables.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. El QC requiere un técnico especializado porque evalúa la calidad técnica del producto. En cambio, QA NO requiere técnico especializado (basta con usar un checklist para verificar procesos).',
    trap: false
  },
  {
    category: 'qa-qc',
    type: 'vf',
    question: 'Una auditoría de fin de fase es considerada como una actividad de aseguramiento de calidad (QA).',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. Una auditoría de fin de fase es aseguramiento de calidad (QA) porque verifica que se sigue el proceso definido. Una revisión peer-to-peer sería control de calidad (QC).',
    trap: false
  },
  {
    category: 'qa-qc',
    type: 'multi',
    question: 'Una revisión de productos entregables es un ejemplo de:',
    options: [
      'Control de Calidad (QC).',
      'Aseguramiento de Calidad (QA).',
      'Validación del software.',
      'Auditoría de certificación.'
    ],
    correct: 0,
    justification: 'Una revisión de productos entregables es QC: controla la calidad técnica de los productos. En cambio, una auditoría de fin de fase sería QA.',
    trap: false
  },
  {
    category: 'qa-qc',
    type: 'vf',
    question: 'La validación comprueba que se ha desarrollado el producto correcto (lo que el cliente quiere), mientras que la verificación comprueba que se está construyendo correctamente.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. La validación responde a "¿Se ha desarrollado el producto correcto?", mientras que la verificación comprueba la consistencia interna ("¿Se está desarrollando correctamente?").',
    trap: false
  },
  {
    category: 'qa-qc',
    type: 'multi',
    question: '¿Cuál es la pregunta clave de la verificación?',
    options: [
      '¿Se está desarrollando el producto correctamente?',
      '¿Se ha desarrollado el producto correcto?',
      '¿El cliente está satisfecho con el producto?',
      '¿Se están siguiendo los estándares?'
    ],
    correct: 0,
    justification: 'Verificación: "¿Se está desarrollando el producto correctamente?". Garantiza consistencia interna: que el resultado de cada fase corresponde con las entradas. Ejemplo: revisión del diseño vs ERS.',
    trap: false
  },
  {
    category: 'qa-qc',
    type: 'multi',
    question: '¿Cuál es la pregunta clave de la validación?',
    options: [
      '¿Se ha desarrollado el producto correcto?',
      '¿Se está desarrollando el producto correctamente?',
      '¿Se han seguido todos los procedimientos?',
      '¿Se han documentado todos los requisitos?'
    ],
    correct: 0,
    justification: 'Validación: "¿Se ha desarrollado el producto correcto?". Asegura que el software corresponde con los requisitos del cliente. Se realiza sobre el producto terminado (pruebas de aceptación).',
    trap: false
  },
  {
    category: 'qa-qc',
    type: 'multi',
    question: 'Las pruebas de aceptación son un ejemplo de:',
    options: [
      'Validación.',
      'Verificación.',
      'Aseguramiento de calidad (QA).',
      'Control estadístico.'
    ],
    correct: 0,
    justification: 'Las pruebas de aceptación son validación: comprueban que el software corresponde con los requisitos del cliente. Son las únicas pruebas obligatorias por ISO 9001.',
    trap: false
  },
  {
    category: 'qa-qc',
    type: 'vf',
    question: 'Las pruebas de unidad son una actividad de validación.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Las pruebas de unidad son verificación, no validación. Las pruebas unitarias, de integración y de sistema son verificación. Solo las pruebas de aceptación son validación.',
    trap: true
  },
  {
    category: 'qa-qc',
    type: 'multi',
    question: '¿Qué niveles de pruebas son verificación y cuáles validación?',
    options: [
      'Unitarias, integración y sistema = verificación. Aceptación = validación.',
      'Todas las pruebas son verificación.',
      'Unitarias = verificación. Integración, sistema y aceptación = validación.',
      'Todas las pruebas son validación.'
    ],
    correct: 0,
    justification: 'Pruebas unitarias, de integración y de sistema = verificación (¿se construye correctamente?). Pruebas de aceptación = validación (¿se construyó el producto correcto?, la hace el usuario/cliente).',
    trap: false
  },
  {
    category: 'qa-qc',
    type: 'multi',
    question: '¿Cómo se insertan QA y QC en el ciclo de desarrollo?',
    options: [
      'QA es transversal/horizontal (todo el ciclo). QC es vertical sobre cada salida de fase.',
      'QA se aplica solo al final. QC se aplica al principio.',
      'Ambas son transversales a todo el ciclo.',
      'QA solo se aplica en las fases de pruebas.'
    ],
    correct: 0,
    justification: 'QA es transversal/horizontal: abarca todo el ciclo de desarrollo. QC es vertical: se aplica sobre cada salida de fase (pruebas, inspecciones, revisiones de entregables).',
    trap: false
  },
  {
    category: 'qa-qc',
    type: 'multi',
    question: 'Una auditoría de fin de fase es un ejemplo de:',
    options: [
      'Aseguramiento de Calidad (QA).',
      'Control de Calidad (QC).',
      'Validación.',
      'Certificación.'
    ],
    correct: 0,
    justification: 'Una auditoría de fin de fase es QA. Regla de oro: "auditoría = aseguramiento de la calidad". Ejemplo de QA: ¿se usó Erwin?, ¿lo revisó el director técnico? Ejemplo de QC: revisión peer-to-peer, formas normales.',
    trap: false
  },

  // =============================================
  // ===== CATEGORÍA: CRISIS DEL SOFTWARE =====
  // =============================================
  {
    category: 'crisis',
    type: 'multi',
    question: 'Según el DoD Americano (1979), ¿qué porcentaje del software fue entregado pero nunca usado?',
    options: ['48%', '29%', '16%', '35%'],
    correct: 0,
    justification: 'DoD 1979: 48% entregado pero nunca usado, 29% pagado pero nunca entregado, solo ~1% usado tal como se entregó. Coste: $6.8M.',
    trap: false
  },
  {
    category: 'crisis',
    type: 'multi',
    question: 'Según el informe Standish Chaos de 1994, ¿qué porcentaje de proyectos fueron exitosos?',
    options: ['16%', '28%', '35%', '5%'],
    correct: 0,
    justification: 'Standish Chaos 1994: 16% exitosos, 31% completamente fallidos. Mejoró a 28% en 2000 y 35% en 2006.',
    trap: false
  },
  {
    category: 'crisis',
    type: 'multi',
    question: '¿Cuántos defectos comete un programador experto por cada KLOC?',
    options: ['~100 defectos', '~10 defectos', '~50 defectos', '~200 defectos'],
    correct: 0,
    justification: 'Un programador experto comete ~100 defectos por KLOC (dato de Capers Jones). Bajo presión, la tasa se multiplica por 5 (estudio IBM). Las pruebas detectan menos del 50%.',
    trap: false
  },
  {
    category: 'crisis',
    type: 'vf',
    question: 'La calidad no se puede garantizar solo con pruebas exhaustivas al final del proyecto, sino que requiere trabajar con calidad en todo el proceso.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. Las pruebas detectan menos del 50% de los defectos. Hay que trabajar con calidad a lo largo de todo el ciclo de vida como prevención.',
    trap: false
  },
  {
    category: 'crisis',
    type: 'vf',
    question: 'Los datos reales demuestran que, a mayor madurez del proceso (como CMM/CMMI), aumentan tanto la calidad como la productividad.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. Los datos reales demuestran lo contrario al mito clásico: a mayor nivel CMM/CMMI, aumentan tanto calidad como productividad.',
    trap: false
  },
  {
    category: 'crisis',
    type: 'multi',
    question: '¿Cuáles son las "4 Ps" para salir de la crisis del software?',
    options: [
      'Producto, Proceso, Personas, Problema.',
      'Planificación, Producción, Pruebas, Presupuesto.',
      'Proceso, Pruebas, Personas, Planificación.',
      'Producto, Programación, Proceso, Pruebas.'
    ],
    correct: 0,
    justification: 'Las 4 Ps: Producto (métricas, metodologías), Proceso (CMM/CMMI, SPICE, ISO 9000-3), Personas (formación, capacidad) y Problema (conceptualizar lo que hay que hacer). Apostar por el Proceso es la estrategia principal.',
    trap: false
  },
  {
    category: 'crisis',
    type: 'multi',
    question: 'De las 4 Ps, ¿cuál es la estrategia principal para obtener productos de calidad?',
    options: [
      'Proceso — un buen proceso implica un buen producto.',
      'Producto — centrarse en el software como producto.',
      'Personas — la formación es lo más importante.',
      'Problema — entender perfectamente lo que hay que hacer.'
    ],
    correct: 0,
    justification: 'La estrategia principal es mejorar el Proceso. Hipótesis: un buen proceso → un buen producto (no demostrada pero asumida). De aquí surgieron CMM/CMMI, SPICE, ISO 9000-3.',
    trap: false
  },
  {
    category: 'crisis',
    type: 'multi',
    question: 'Según Herbsleb et al. (1994), ¿cuál era el ROI por cada dólar invertido en mejora?',
    options: [
      '~5$ por cada 1$ invertido.',
      '~2$ por cada 1$ invertido.',
      '~10$ por cada 1$ invertido.',
      '~1.5$ por cada 1$ invertido.'
    ],
    correct: 0,
    justification: 'ROI ~5:1. Incremento anual de productividad ~35%. Reducción "time to market" ~20%. Reducción de errores ~40%. Inversión por ingeniero ~1.300$. Años mejorando ~3.',
    trap: false
  },
  {
    category: 'crisis',
    type: 'vf',
    question: 'El concepto de "proyecto exitoso" en el Chaos Report incluye haber acabado en el esfuerzo estimado.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. "Proyecto exitoso" en el Chaos Report incluye: tiempo, presupuesto y funcionalidades. NO incluye esfuerzo como criterio independiente.',
    trap: true
  },
  {
    category: 'crisis',
    type: 'multi',
    question: '¿Dónde y cuándo se acuñó el término "crisis del software"?',
    options: [
      'Garmisch (Alemania), conferencia de la OTAN, 1967-1968.',
      'Silicon Valley (EEUU), conferencia ACM, 1975.',
      'Tokio (Japón), conferencia ISO, 1980.',
      'Londres (UK), conferencia IEEE, 1970.'
    ],
    correct: 0,
    justification: 'La crisis del software se acuñó en Garmisch (Alemania) durante una conferencia de la OTAN en 1967 (algunas fuentes dicen 1968).',
    trap: false
  },
  {
    category: 'crisis',
    type: 'multi',
    question: 'Según el Standish Chaos 2006, ¿qué porcentaje de proyectos fueron exitosos?',
    options: [
      '35% exitosos, 46% challenged, 19% fallidos.',
      '16% exitosos, 53% challenged, 31% fallidos.',
      '50% exitosos, 30% challenged, 20% fallidos.',
      '28% exitosos, 49% challenged, 23% fallidos.'
    ],
    correct: 0,
    justification: 'Standish Chaos 2006: 35% exitosos, 46% challenged, 19% fallidos. Mejora progresiva desde 1994 (16%). Conclusión: "There is less chaos in software development today."',
    trap: false
  },

  // =============================================
  // ===== CATEGORÍA: FAMILIA ISO 9000 =====
  // =============================================
  {
    category: 'iso-familia',
    type: 'vf',
    question: 'ISO 9004 puede usarse para certificar a una empresa.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Solo ISO 9001 es certificable. ISO 9004 orienta sobre gestión para el éxito sostenido (eficiencia, cuota de mercado). No tiene requisitos de certificación.',
    trap: true
  },
  {
    category: 'iso-familia',
    type: 'multi',
    question: '¿Cuál de las tres normas de la familia ISO 9000 es certificable?',
    options: [
      'ISO 9001 — Requisitos del SGC.',
      'ISO 9000 — Vocabulario y fundamentos.',
      'ISO 9004 — Mejora y éxito sostenido.',
      'Todas son certificables.'
    ],
    correct: 0,
    justification: 'Solo ISO 9001 es certificable. ISO 9000 = vocabulario/fundamentos (no certificable). ISO 9004 = mejora/éxito sostenido (no certificable).',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'vf',
    question: 'Una empresa puede certificarse en ISO 9000 directamente.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. No se certifica "en ISO 9000", se certifica en ISO 9001. ISO 9000 solo contiene vocabulario y fundamentos. La trampa está en confundir la familia (ISO 9000) con la norma certificable (ISO 9001).',
    trap: true
  },
  {
    category: 'iso-familia',
    type: 'vf',
    question: 'ISO 9000 contiene los requisitos certificables del SGC.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. ISO 9000 contiene vocabulario y los 7 principios, NO los requisitos certificables. Los requisitos (~20 requisitos certificables) están en ISO 9001.',
    trap: true
  },
  {
    category: 'iso-familia',
    type: 'vf',
    question: 'ISO 90003 añade requisitos específicos para el software sobre ISO 9001.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. ISO 90003 NO añade ni cambia requisitos. Solo proporciona una guía de aplicación de ISO 9001 al software. Sus directrices NO están enfocadas a ser usadas como criterios de evaluación en la certificación.',
    trap: true
  },
  {
    category: 'iso-familia',
    type: 'vf',
    question: 'ISO 90003 puede usarse como criterio de certificación del SGC.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Las directrices de ISO 90003 NO están enfocadas a ser usadas como criterios de evaluación en la certificación del SGC. Es solo una guía de aplicación de ISO 9001 al software.',
    trap: true
  },
  {
    category: 'iso-familia',
    type: 'multi',
    question: '¿Qué es ISO 90003?',
    options: [
      'Una guía para la aplicación de ISO 9001 al software informático.',
      'Una norma certificable específica para empresas de software.',
      'Un sustituto de ISO 9001 para proyectos de software.',
      'Un estándar de métricas de calidad de software.'
    ],
    correct: 0,
    justification: 'ISO/IEC/IEEE 90003:2018 es una guía para la aplicación de ISO 9001:2015 al software. No añade requisitos, no es certificable, y surge porque ISO 9001 es excesivamente general para el software.',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'vf',
    question: 'Los 7 principios de ISO 9001:2015 son los mismos que los 8 anteriores pero se eliminó uno.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. No se eliminó ningún principio. Los principios 4º ("Enfoque basado en procesos") y 5º ("Enfoque de sistema para la gestión") se fusionaron en uno: "Enfoque de procesos". Por eso pasó de 8 a 7.',
    trap: true
  },
  {
    category: 'iso-familia',
    type: 'vf',
    question: 'La norma ISO 9000 actualmente tiene 8 principios de gestión de la calidad.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Desde 2015 tiene 7 principios (no 8). Los antiguos principios 4º y 5º se fusionaron en "Enfoque de procesos".',
    trap: true
  },
  {
    category: 'iso-familia',
    type: 'multi',
    question: '¿Cuáles son los 7 principios de ISO 9001:2015?',
    options: [
      'Enfoque al cliente, Liderazgo, Compromiso de las personas, Enfoque de procesos, Mejora, Toma de decisiones basada en evidencia, Gestión de relaciones.',
      'Enfoque al cliente, Liderazgo, Trabajo en equipo, Enfoque de procesos, Mejora continua, Documentación, Gestión de relaciones.',
      'Eficiencia, Liderazgo, Compromiso, Procesos, Mejora, Evidencia, Comunicación.',
      'Planificación, Ejecución, Control, Mejora, Liderazgo, Documentación, Satisfacción.'
    ],
    correct: 0,
    justification: 'Los 7 principios: (1) Enfoque al cliente, (2) Liderazgo, (3) Compromiso de las personas, (4) Enfoque de procesos, (5) Mejora, (6) Toma de decisiones basada en la evidencia, (7) Gestión de las relaciones.',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'multi',
    question: '¿Qué principios se fusionaron en ISO 9001:2015?',
    options: [
      '"Enfoque basado en procesos" y "Enfoque de sistema para la gestión" → "Enfoque de procesos".',
      '"Liderazgo" y "Compromiso de las personas" → "Liderazgo comprometido".',
      '"Mejora continua" y "Toma de decisiones" → "Mejora basada en evidencia".',
      '"Enfoque al cliente" y "Gestión de relaciones" → "Gestión de stakeholders".'
    ],
    correct: 0,
    justification: 'Se fusionaron los principios 4º ("Enfoque basado en procesos") y 5º ("Enfoque de sistema para la gestión") en uno: "Enfoque de procesos".',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'multi',
    question: '¿Cuál fue el cambio más importante de la revisión ISO 9001:2000?',
    options: [
      'Enfoque por procesos (PDCA).',
      'Eliminación del Manual de Calidad.',
      'Incorporación de gestión de riesgos.',
      'Reducción de 8 a 7 principios.'
    ],
    correct: 0,
    justification: 'La revisión 2000 introdujo el enfoque por procesos (PDCA). Los otros cambios corresponden a la versión 2015.',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'multi',
    question: '¿En qué año se publicó la primera versión de la familia ISO 9000?',
    options: ['1987.', '1994.', '2000.', '1979.'],
    correct: 0,
    justification: 'Primera publicación: 1987. Primera revisión: 1994. Revisión importante (procesos): 2000. Cambios menores: 2008. Vigente: 2015.',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'multi',
    question: '¿Qué modelo de calidad fue la respuesta europea a CMM?',
    options: ['Bootstrap.', 'SPICE / ISO 15504.', 'ISO 90003.', 'TickIT.'],
    correct: 0,
    justification: 'Bootstrap fue la respuesta europea a CMM, alineado con ISO 9000. SPICE/ISO 15504 surgió después para unificar CMM, Trillium, TickIT y Bootstrap.',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'multi',
    question: '¿Cuál es la estrategia habitual para implantar modelos de calidad en Europa?',
    options: [
      'Primero ISO 9000, luego CMMI.',
      'Primero CMMI, luego ISO 9000.',
      'Solo ISO 90003.',
      'Solo SPICE.'
    ],
    correct: 0,
    justification: 'Estrategia habitual: primero certificación ISO 9001 (binaria, ~8.000€) → luego progresar a CMMI (escala 1-5). ISO 9000 se usó más en Europa, CMMI más en EE.UU.',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'vf',
    question: 'La norma ISO 9001 es descriptiva.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. ISO 9001 es prescriptiva: dice QUÉ hay que hacer (requisitos), pero no CÓMO hacerlo. Es genérica y aplicable a cualquier empresa de cualquier sector y tamaño.',
    trap: true
  },
  {
    category: 'iso-familia',
    type: 'vf',
    question: '"Di lo que haces, haz lo que dices" es el lema de ISO 9000.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. "Di lo que haces, haz lo que dices" es efectivamente el lema de ISO 9000. El auditor compara los procedimientos documentados con lo que realmente se hace en los proyectos.',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'vf',
    question: 'Las normas ISO se revisan obligatoriamente cada 5 años.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. Las normas ISO se revisan obligatoriamente cada 5 años para asegurar que siguen siendo relevantes y actualizadas.',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'multi',
    question: '¿Qué época se asocia con el "Aseguramiento de calidad" como concepto?',
    options: [
      'Años 50: normas y estándares en el entorno militar de EE.UU.',
      '1900–1950: organización taylorista.',
      'Años 60: Total Quality Management.',
      'Siglo XVIII: artesanos.'
    ],
    correct: 0,
    justification: 'El aseguramiento de calidad surge en los años 50, con normas y estándares en el entorno militar de EE.UU. La calidad se centró en el proceso.',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'multi',
    question: '¿Qué caracteriza al TQM (Total Quality Management)?',
    options: [
      'Todos los departamentos tienen responsabilidad en alcanzar la calidad; se centra en todo el sistema empresarial.',
      'Solo el departamento de calidad es responsable.',
      'Se centra exclusivamente en el producto final.',
      'Se basa únicamente en el control estadístico.'
    ],
    correct: 0,
    justification: 'TQM (desde los años 60): todos los departamentos son responsables de la calidad. Se centra en todo el sistema empresarial para eliminar derroches y minimizar costes.',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'vf',
    question: 'CMMI es aplicable a cualquier sector empresarial.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. CMMI es aplicable solo al sector TIC (Tecnologías de la Información y Comunicación). ISO 9001 es la norma genérica aplicable a cualquier sector empresarial.',
    trap: true
  },

  // =============================================
  // ===== CATEGORÍA: ESTRUCTURA ISO 9001 =====
  // =============================================
  {
    category: 'iso-estructura',
    type: 'multi',
    question: '¿Qué exige el apartado 4 de ISO 9001 (Sistema de gestión de la calidad)?',
    options: [
      'Identificar procesos del SGC, su secuencia e interacción, documentación y control de documentos/registros.',
      'Compromiso de la dirección y política de calidad.',
      'Recursos humanos, infraestructura y ambiente de trabajo.',
      'Auditorías internas y mejora continua.'
    ],
    correct: 0,
    justification: 'Apartado 4: procesos del SGC, mapa de procesos, documentación (política, manual, procedimientos, registros) y mecanismos de control de documentos y registros.',
    trap: false
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'El apartado 7 de ISO 9001 (Realización del producto) no permite exclusiones.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. El apartado 7 es el ÚNICO donde están permitidas exclusiones. Las exclusiones NO pueden disminuir la capacidad de satisfacer los requisitos del cliente.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'Las exclusiones a ISO 9001 se admiten en cualquier apartado.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Las exclusiones SOLO se admiten en el apartado 7 (Realización del producto). El resto de apartados (4, 5, 6, 8) no admiten exclusiones.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'multi',
    question: '¿Qué apartado de ISO 9001 es el más importante?',
    options: [
      'Apartado 8 — Medición, análisis y mejora.',
      'Apartado 7 — Realización del producto (el más extenso, pero no el más importante).',
      'Apartado 4 — Sistema de gestión de la calidad.',
      'Apartado 5 — Responsabilidad de la dirección.'
    ],
    correct: 0,
    justification: 'El apartado 8 (Medición, análisis y mejora) es el más importante. El apartado 7 es el más extenso, pero no el más importante. Cuidado con esta trampa.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'multi',
    question: '¿Qué exige el apartado 8 de ISO 9001?',
    options: [
      'Auditorías internas, seguimiento/medición de procesos y productos, control de no conformidades, acciones correctivas/preventivas, mejora continua.',
      'Recursos humanos con competencia adecuada.',
      'Planificación y procesos con el cliente.',
      'Documentación del SGC y política de calidad.'
    ],
    correct: 0,
    justification: 'Apartado 8: auditorías internas, seguimiento y medición, control de no conformidades, acciones correctivas y preventivas, satisfacción del cliente y mejora continua.',
    trap: false
  },
  {
    category: 'iso-estructura',
    type: 'multi',
    question: '¿Qué es el ciclo PDCA (ciclo de Deming)?',
    options: [
      'Plan-Do-Check-Act: planificar, realizar, comprobar y actuar para mejorar continuamente.',
      'Process-Design-Control-Audit.',
      'Plan-Develop-Certify-Approve.',
      'Produce-Document-Check-Archive.'
    ],
    correct: 0,
    justification: 'PDCA: Plan (planificar), Do (realizar), Check (comprobar resultados), Act (actuar para modificar y replanificar). Es la base de la mejora continua del SGC. Si se viola el principio, te quitan el certificado.',
    trap: false
  },
  {
    category: 'iso-estructura',
    type: 'multi',
    question: 'En ISO 9001:2015, ¿qué se incorpora como aspecto central dentro del PDCA?',
    options: [
      'La gestión de riesgos, reemplazando las acciones preventivas.',
      'El Manual de Calidad obligatorio.',
      'La designación de un Representante de la Dirección.',
      'Las pruebas de software obligatorias.'
    ],
    correct: 0,
    justification: 'En 2015, la gestión de riesgos se incorpora al PDCA (especialmente en PLAN), reemplazando las antiguas "acciones preventivas".',
    trap: false
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'ISO 9001:2015 exige un Manual de Calidad.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. En 2015 ya no se exige Manual de Calidad formalmente. Se usa "información documentada" (cualquier formato y medio). El contenido sí es necesario, pero no como documento formal.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'ISO 9001:2015 exige nombrar un Representante de la Dirección para el SGC.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. En ISO 9001:2008 era obligatorio. En 2015 ya no se exige; la Alta Dirección decide cómo repartir funciones. La figura del representante de la dirección desaparece como requisito obligatorio.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'En ISO 9001:2008, el responsable de calidad tiene que ser miembro de la Dirección.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. En ISO 9001:2008 era obligatorio que el responsable de calidad fuera miembro de la dirección. En 2015 desaparece esta figura obligatoria.',
    trap: false
  },
  {
    category: 'iso-estructura',
    type: 'multi',
    question: 'En ISO 9001:2015, ¿qué término reemplaza al de "exclusiones"?',
    options: [
      'Aplicabilidad.',
      'Excepciones.',
      'Dispensas.',
      'Omisiones justificadas.'
    ],
    correct: 0,
    justification: 'En 2015: "exclusiones" → "aplicabilidad". También: "productos" → "productos y servicios". "Manual de calidad" → "información documentada".',
    trap: false
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'Los registros de calidad se pueden modificar si se documenta el cambio.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Un registro de calidad NO se modifica NUNCA. Es histórico: aporta evidencia objetiva de actividades realizadas. Solo se puede anular y reemitir con trazabilidad.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'multi',
    question: 'Según ISO 9001, ¿cuáles son las únicas pruebas obligatorias?',
    options: [
      'Solo las pruebas de aceptación.',
      'Pruebas unitarias, de integración y de sistema.',
      'Todas las pruebas son obligatorias.',
      'No se exigen pruebas específicas.'
    ],
    correct: 0,
    justification: 'Las únicas pruebas obligatorias por ISO 9001 son las de aceptación. El resto de pruebas (unitarias, integración, sistema) se justifican por análisis de coste/beneficio.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'El software freeware no se considera producto adquirido porque no implica intercambio monetario.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. El freeware y shareware SÍ se consideran "producto adquirido" según ISO. No hace falta intercambio monetario. Deben pasar por el proceso de evaluación de proveedores (apartado 7.4).',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'En ISO 9001, se puede comprar a cualquier proveedor libremente.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. ISO 9001 (apartado 7.4) exige que solo se compre a proveedores evaluados y aprobados. Debe haber una lista oficial de proveedores aprobados con reevaluación periódica.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'multi',
    question: '¿Con qué se manejan las 3 opciones ante un producto no conforme (apartado 8.3)?',
    options: [
      'Acciones correctivas para arreglarlo, entrega con autorización del cliente y empresa, o inhabilitar lo que da problemas.',
      'Solo se puede desechar el producto.',
      'Se devuelve automáticamente al proveedor.',
      'Se archiva y se ignora.'
    ],
    correct: 0,
    justification: 'Ante producto no conforme (8.3): (1) acciones correctivas para arreglarlo, (2) entrega/uso con autorización explícita del cliente Y la empresa, (3) inhabilitar lo que da problemas.',
    trap: false
  },
  {
    category: 'iso-estructura',
    type: 'multi',
    question: '¿Cuál es la diferencia entre acción correctiva y acción preventiva?',
    options: [
      'Correctiva: ataja la no conformidad real. Preventiva: ataja la causa raíz / problema potencial.',
      'Correctiva: ataja la causa raíz. Preventiva: ataja la no conformidad.',
      'Son lo mismo, solo cambia el momento de aplicación.',
      'Correctiva viene de auditorías, preventiva viene de pruebas.'
    ],
    correct: 0,
    justification: 'Correctiva: origen en no conformidad REAL detectada en auditoría, ataja la NC en sí. Preventiva: origen en problema POTENCIAL (sugerencias, estadísticas, quejas), ataja la CAUSA RAÍZ. En 2015, la preventiva se sustituye por gestión de riesgos.',
    trap: false
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'Una acción correctiva busca eliminar la causa raíz de la no conformidad.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. La acción correctiva ataja la no conformidad en sí. Es la acción PREVENTIVA la que busca eliminar la causa raíz / origen del problema potencial.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'Una sugerencia de mejora del SGC origina una acción correctiva.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Una sugerencia de mejora origina una acción preventiva (problema potencial), no correctiva. La acción correctiva solo se origina ante una no conformidad REAL detectada en auditoría.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'La evaluación de la eficacia de la formación se mide con encuestas de satisfacción del curso.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. La eficacia de la formación (apartado 6) NO se mide con encuestas. Se mide por el efecto real: ¿la persona hace ahora lo que antes no podía hacer? Se evalúa la competencia adquirida, no la opinión sobre el curso.',
    trap: true
  },

  // =============================================
  // ===== CATEGORÍA: CERTIFICACIÓN Y AUDITORÍAS =====
  // =============================================
  {
    category: 'certificacion',
    type: 'vf',
    question: 'La certificación ISO 9001 certifica que el software es de calidad.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Certifica que la empresa tiene un PROCESO organizado que con alta probabilidad dará productos de calidad. NO certifica el producto en sí.',
    trap: true
  },
  {
    category: 'certificacion',
    type: 'vf',
    question: 'La certificación ISO 9001 es obligatoria para empresas que desarrollan software para las AAPP.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. La certificación ISO 9001 es VOLUNTARIA. No es obligatoria ni siquiera para empresas que trabajan con Administraciones Públicas.',
    trap: true
  },
  {
    category: 'certificacion',
    type: 'multi',
    question: '¿Cuáles son las 3 fases del proceso de certificación ISO 9001?',
    options: [
      'Auditoría de evaluación previa (opcional), auditoría de certificación (obligatoria), auditorías de seguimiento (obligatorias).',
      'Documentación, implementación y verificación.',
      'Planificación, ejecución y cierre.',
      'Evaluación interna, evaluación externa y renovación.'
    ],
    correct: 0,
    justification: 'Las 3 fases: (1) Auditoría de evaluación previa (OPCIONAL, 2-3 meses antes), (2) Auditoría de certificación (OBLIGATORIA, auditores externos), (3) Auditorías de seguimiento (OBLIGATORIAS, cada 6-12 meses, ciclo 3 años).',
    trap: false
  },
  {
    category: 'certificacion',
    type: 'vf',
    question: 'La auditoría de evaluación previa es obligatoria para la certificación ISO 9001.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. La auditoría de evaluación previa es OPCIONAL. Se realiza 2-3 meses antes para determinar preparación y mitigar riesgos. La obligatoria es la auditoría de certificación.',
    trap: true
  },
  {
    category: 'certificacion',
    type: 'vf',
    question: 'Las auditorías de seguimiento ISO 9001 se realizan anualmente.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Suelen ser cada 6 meses y NUNCA en períodos mayores de 12 meses. Ciclo completo: 3 años → nueva auditoría de certificación completa.',
    trap: true
  },
  {
    category: 'certificacion',
    type: 'multi',
    question: '¿Cuánto dura el ciclo completo de certificación ISO 9001?',
    options: ['3 años.', '1 año.', '5 años.', '2 años.'],
    correct: 0,
    justification: 'Ciclo de 3 años con auditorías de seguimiento cada 6-12 meses. Tras 3 años: renovación completa o se pierde el certificado.',
    trap: false
  },
  {
    category: 'certificacion',
    type: 'multi',
    question: '¿Cuál es la misión de ENAC?',
    options: [
      'Acreditar la competencia técnica de entidades para certificar o inspeccionar.',
      'Certificar directamente a las empresas con ISO 9001.',
      'Desarrollar las normas ISO para España.',
      'Formar auditores de calidad.'
    ],
    correct: 0,
    justification: 'ENAC acredita certificadoras (no certifica empresas, no emite normas). Supervisada por la Administración según Ley de Industria 21/1992.',
    trap: false
  },
  {
    category: 'certificacion',
    type: 'vf',
    question: 'ENAC puede certificar empresas en ISO 9001.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. ENAC NO certifica empresas. ENAC ACREDITA a las entidades certificadoras (AENOR, LRQA, BVQI, etc.) para que estas puedan certificar empresas.',
    trap: true
  },
  {
    category: 'certificacion',
    type: 'vf',
    question: 'AENOR solo normaliza, no certifica.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. AENOR tiene doble rol: normaliza (normas UNE) Y certifica. Es la Asociación Española de Normalización y Certificación.',
    trap: true
  },
  {
    category: 'certificacion',
    type: 'multi',
    question: '¿Qué entidades pueden certificar con ISO 9001? Ejemplos:',
    options: [
      'AENOR, Lloyd\'s Register (LRQA), Bureau Veritas (BVQI).',
      'Solo ENAC puede certificar.',
      'Solo AENOR.',
      'El Ministerio de Industria.'
    ],
    correct: 0,
    justification: 'Certifican: AENOR, LRQA, BVQI, entre otras. ENAC no certifica: acredita a las certificadoras. AENOR fue designada por el Ministerio de Industria y Energía.',
    trap: false
  },
  {
    category: 'certificacion',
    type: 'multi',
    question: '¿Cuántas fases tiene la auditoría de certificación?',
    options: [
      '6 fases: plan, documentación, reunión inaugural, realización, reunión de clausura, informe.',
      '3 fases.',
      '4 fases.',
      '2 fases.'
    ],
    correct: 0,
    justification: '6 fases: (1) Plan de auditoría, (2) Auditoría de documentación, (3) Reunión inaugural, (4) Realización (entrevistas, observación, evidencias), (5) Reunión de clausura, (6) Informe (2-4 semanas después).',
    trap: false
  },
  {
    category: 'certificacion',
    type: 'multi',
    question: '¿Cuándo se recibe el informe formal de la auditoría de certificación?',
    options: [
      '2-4 semanas después de la reunión de clausura.',
      'Inmediatamente al finalizar.',
      'Dentro de 24 horas.',
      '6 meses después.'
    ],
    correct: 0,
    justification: 'El informe formal se recibe 2-4 semanas después de la reunión de clausura, con la decisión de certificación.',
    trap: false
  },
  {
    category: 'certificacion',
    type: 'multi',
    question: '¿Qué plazo tiene una empresa para resolver no conformidades mayores?',
    options: ['6 meses.', '1 mes.', '3 meses.', '12 meses.'],
    correct: 0,
    justification: 'Las no conformidades mayores deben resolverse en un plazo de 6 meses. Las menores se revisan en el próximo seguimiento.',
    trap: false
  },
  {
    category: 'certificacion',
    type: 'vf',
    question: 'Las auditorías de seguimiento pueden ser por sorpresa.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Ni las auditorías de seguimiento ni las internas pueden ser por sorpresa. SIEMPRE se comunican con antelación.',
    trap: true
  },
  {
    category: 'certificacion',
    type: 'vf',
    question: 'Las auditorías internas pueden ser realizadas por personal externo a la empresa.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Las auditorías internas las realiza personal propio de la empresa (pero ajeno al área auditada). Las externas sí las hacen auditores externos.',
    trap: true
  },
  {
    category: 'certificacion',
    type: 'multi',
    question: '¿Cuáles son las 3 características de un auditor interno?',
    options: [
      'Ajeno/independiente del área auditada, conocimientos y experiencia en auditar, conocimientos y experiencia en lo auditado.',
      'Ser el director de calidad, tener certificación ISO, tener 5 años de experiencia.',
      'Ser externo a la empresa, ser imparcial, conocer la norma.',
      'Ser técnico especializado, conocer el producto, tener título universitario.'
    ],
    correct: 0,
    justification: 'Las 3 características: (1) Ajeno/independiente del área auditada (imparcialidad), (2) Conocimientos Y experiencia en AUDITAR (cómo auditar), (3) Conocimientos Y experiencia en LO AUDITADO (qué se audita). Esta pregunta ha caído tal cual en exámenes.',
    trap: false
  },
  {
    category: 'certificacion',
    type: 'vf',
    question: 'El auditor de un procedimiento puede coincidir con el revisor del mismo procedimiento.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. El auditor debe ser ajeno/independiente del área auditada. No puede coincidir con el revisor del procedimiento, ya que perdería la imparcialidad.',
    trap: true
  },
  {
    category: 'certificacion',
    type: 'vf',
    question: 'Una auditoría interna puede ser realizada por personal del propio departamento auditado si tiene competencia.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. El auditor debe ser AJENO al área auditada, incluso siendo personal interno de la empresa. La imparcialidad es un requisito fundamental.',
    trap: true
  },
  {
    category: 'certificacion',
    type: 'multi',
    question: '¿Qué aspectos se auditan en TODAS las auditorías de seguimiento?',
    options: [
      'Revisiones por la dirección, auditorías internas, acciones correctivas/preventivas, reclamaciones del cliente, control de documentos, impacto de cambios, uso de certificados.',
      'Solo la documentación del SGC.',
      'Solo las métricas de producto.',
      'Solo la satisfacción del cliente.'
    ],
    correct: 0,
    justification: 'En TODAS las auditorías de seguimiento se auditan: revisiones por la dirección, auditorías internas, acciones correctivas/preventivas, reclamaciones, control de documentos, impacto de cambios en SGC, uso adecuado de certificados.',
    trap: false
  },
  {
    category: 'certificacion',
    type: 'multi',
    question: '¿Cómo es el proceso de normalización ISO → EN → UNE?',
    options: [
      'ISO publica → CEN/CENELEC adapta a Europa (EN) → AENOR adapta a España (UNE-EN-ISO).',
      'AENOR publica → ISO la aprueba → CEN la distribuye.',
      'CEN publica → ISO la certifica → AENOR la aplica.',
      'ENAC normaliza → AENOR certifica → ISO publica.'
    ],
    correct: 0,
    justification: 'Flujo: ISO publica norma internacional → CEN/CENELEC la adapta a Europa (EN ISO) → AENOR la adapta a España (UNE-EN-ISO). Ejemplo: UNE-EN ISO 9001:2015.',
    trap: false
  },
  {
    category: 'certificacion',
    type: 'vf',
    question: 'Los auditores externos entregan directamente el certificado ISO 9001 a la empresa.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Los auditores NO entregan el certificado: solo emiten una RECOMENDACIÓN a la entidad certificadora. Es la certificadora la que extiende el certificado.',
    trap: true
  },

  // =============================================
  // ===== CATEGORÍA: MÉTRICAS =====
  // =============================================
  {
    category: 'metricas',
    type: 'multi',
    question: '¿Qué 5 áreas deben cubrir las métricas para una PYME con ISO 9000?',
    options: [
      'Proyecto, Producto, Proceso, Cliente y Mantenimiento.',
      'Coste, Tiempo, Alcance, Calidad y Riesgo.',
      'Planificación, Diseño, Codificación, Pruebas y Entrega.',
      'Personal, Infraestructura, Documentación, Software y Hardware.'
    ],
    correct: 0,
    justification: 'Las 5 áreas: Proyecto, Producto, Proceso, Cliente y Mantenimiento. Estrategia PYME: métricas baratas, automatizables, alineadas con el apartado 8.',
    trap: false
  },
  {
    category: 'metricas',
    type: 'multi',
    question: '¿Qué métrica mide la eficacia del SGC en resolución de hallazgos?',
    options: [
      '% de no conformidades cerradas a tiempo.',
      'Satisfacción del cliente.',
      'Densidad de defectos.',
      '% de hitos cumplidos.'
    ],
    correct: 0,
    justification: '% de NCs cerradas a tiempo: Nº NCs cerradas en plazo / Nº total × 100. Criterio: ≥ 90% eficaz, 70-89% revisar, < 70% problema sistémico → escalar a dirección.',
    trap: false
  },
  {
    category: 'metricas',
    type: 'multi',
    question: 'Al recomendar métricas a una PYME para ISO 9000, ¿qué estrategia seguir?',
    options: [
      'Métricas baratas de recoger, automatizables, alineadas con el apartado 8 de ISO 9001.',
      'Métricas complejas y exhaustivas.',
      'Solo métricas financieras.',
      'Métricas exclusivamente técnicas sin relación con ISO.'
    ],
    correct: 0,
    justification: 'Para una PYME: métricas baratas, automatizables, alineadas con §8 (Medición, análisis y mejora). En examen: con 2-3 bien definidas y justificadas es suficiente. Mencionar que cubres Cliente, Producto, Proyecto y Proceso demuestra visión completa.',
    trap: false
  },
  {
    category: 'metricas',
    type: 'multi',
    question: 'Para la métrica "Tasa de defectos en pruebas de sistema", ¿cuál es el criterio?',
    options: [
      '≤ 5 defectos/KLOC = aceptable; > 5 = fuera de control → análisis de causa raíz.',
      '≤ 10 defectos/KLOC = aceptable.',
      '0 defectos/KLOC.',
      'No existe criterio estándar.'
    ],
    correct: 0,
    justification: '≤ 5 defectos/KLOC = aceptable. > 5 defectos/KLOC = fuera de control → análisis de causa raíz y revisión de fases previas.',
    trap: false
  },
  {
    category: 'cmmi-intro',
    type: 'multi',
    question: '¿Qué significan las siglas CMMI?',
    options: [
      'Capability Maturity Model Integration',
      'Certified Maturity Management Institute',
      'Continuous Measurement Model for Integration',
      'Computer-based Maturity Model Infrastructure'
    ],
    correct: 0,
    justification: 'CMMI = Capability Maturity Model Integration. Fue desarrollado por el SEI (Software Engineering Institute) de Carnegie Mellon, financiado por el Departamento de Defensa de EEUU.',
    trap: false
  },
  {
    category: 'cmmi-intro',
    type: 'multi',
    question: '¿Quién desarrolló originalmente CMMI?',
    options: [
      'IEEE (Institute of Electrical and Electronics Engineers)',
      'SEI (Software Engineering Institute) de Carnegie Mellon',
      'ISACA (Information Systems Audit and Control Association)',
      'ISO (International Organization for Standardization)'
    ],
    correct: 1,
    justification: 'CMMI fue desarrollado por el SEI (Software Engineering Institute) de la Universidad Carnegie Mellon, financiado por el Departamento de Defensa de EEUU. ISACA compró el CMMI Institute posteriormente (V2.0), pero el desarrollo original fue del SEI.',
    trap: false
  },
  {
    category: 'cmmi-intro',
    type: 'vf',
    question: 'CMMI dice QUÉ hay que hacer (prácticas), mientras que los métodos y metodologías dicen CÓMO hacerlo.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. Esta es una idea clave del modelo: CMMI establece QUÉ prácticas se deben realizar, pero no prescribe CÓMO implementarlas. Los métodos y metodologías concretas (Scrum, XP, RUP, etc.) son los que dicen el CÓMO.',
    trap: false
  },
  {
    category: 'cmmi-intro',
    type: 'vf',
    question: 'CMMI fue desarrollado por el IEEE (Institute of Electrical and Electronics Engineers).',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. CMMI fue desarrollado por el SEI (Software Engineering Institute) de Carnegie Mellon, NO por el IEEE. El SEI fue financiado por el Departamento de Defensa de EEUU.',
    trap: true
  },
  {
    category: 'cmmi-intro',
    type: 'multi',
    question: '¿Cuál es el ROI medio reportado por las organizaciones que implementan CMMI?',
    options: [
      '2:1',
      '4:1',
      '10:1',
      '1:1'
    ],
    correct: 1,
    justification: 'El ROI medio de CMMI es de 4:1, con un incremento de productividad del 10-50%. Esto significa que por cada euro invertido en la mejora, se recuperan 4 euros.',
    trap: false
  },
  {
    category: 'cmmi-intro',
    type: 'multi',
    question: '¿Qué guía CMMI a las organizaciones a mejorar?',
    options: [
      'Los procesos de contabilidad y finanzas',
      'Los procesos asociados al desarrollo y mantenimiento de software',
      'Los procesos de marketing y ventas',
      'Exclusivamente los procesos de recursos humanos'
    ],
    correct: 1,
    justification: 'CMMI guía a las organizaciones en cómo mejorar los procesos asociados al desarrollo y mantenimiento de software. Aunque existen vistas para servicios (SVC) y gestión de proveedores (SPM), su origen y foco principal es el desarrollo de software.',
    trap: false
  },
  {
    category: 'cmmi-intro',
    type: 'vf',
    question: 'CMMI prescribe metodologías específicas como Scrum o RUP para implementar sus prácticas.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. CMMI dice QUÉ hay que hacer, no CÓMO. No prescribe metodologías concretas. Las organizaciones son libres de elegir los métodos que mejor se adapten a su contexto.',
    trap: true
  },
  {
    category: 'cmmi-intro',
    type: 'multi',
    question: '¿Quién financió originalmente el desarrollo de CMMI?',
    options: [
      'La Unión Europea',
      'El Departamento de Defensa de EEUU',
      'La ONU',
      'Empresas privadas del Silicon Valley'
    ],
    correct: 1,
    justification: 'El Departamento de Defensa de EEUU (DoD) financió el desarrollo de CMMI a través del SEI de Carnegie Mellon. El objetivo era asegurar la calidad del software en proyectos de defensa.',
    trap: false
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Cuántas constelaciones independientes tenía CMMI V1.3?',
    options: [
      '2 (DEV y SVC)',
      '3 (DEV, ACQ, SVC)',
      '4 (DEV, ACQ, SVC, PPL)',
      '1 (modelo único)'
    ],
    correct: 1,
    justification: 'CMMI V1.3 tenía 3 constelaciones independientes: CMMI-DEV (desarrollo), CMMI-ACQ (adquisición/subcontratación) y CMMI-SVC (servicios a clientes). Cada constelación tenía PAs base comunes más PAs específicas.',
    trap: false
  },
  {
    category: 'versiones',
    type: 'vf',
    question: 'CMMI V1.3 tiene 3 constelaciones: DEV, ACQ y SVC.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. V1.3 tiene exactamente 3 constelaciones: CMMI-DEV (desarrollo), CMMI-ACQ (adquisición/subcontratación) y CMMI-SVC (servicios a clientes).',
    trap: false
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Cuántas prácticas en total tiene CMMI V1.3?',
    options: [
      '196',
      '325',
      '431',
      '500'
    ],
    correct: 2,
    justification: 'CMMI V1.3 contiene 431 prácticas en total. La V2.0 redujo este número a 196 prácticas, simplificando significativamente el modelo.',
    trap: false
  },
  {
    category: 'versiones',
    type: 'vf',
    question: 'CMMI V2.0 tiene 431 prácticas, igual que la V1.3.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. V1.3 tiene 431 prácticas, pero V2.0 redujo el número a 196 prácticas. V2.0 simplificó significativamente el modelo.',
    trap: true
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Quién compró el CMMI Institute para crear la V2.0?',
    options: [
      'IEEE',
      'ISACA',
      'ISO',
      'Microsoft'
    ],
    correct: 1,
    justification: 'ISACA (Information Systems Audit and Control Association) compró el CMMI Institute. Bajo ISACA se creó un modelo único con arquitectura flexible, eliminando las constelaciones separadas de V1.3.',
    trap: false
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Cuántas PAs tiene CMMI V2.0 en total?',
    options: [
      '16 PAs',
      '20 PAs',
      '25 PAs (18 comunes)',
      '30 PAs'
    ],
    correct: 2,
    justification: 'V2.0 tiene 25 PAs totales, de las cuales 18 son comunes a todas las vistas. La vista CMMI-DEV contiene 20 PAs. La V2.0 también introdujo vistas predefinidas para evaluación (CMMI-DEV, CMMI-SVC, CMMI-SPM, CMMI-PPL).',
    trap: false
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Qué PAs añade CMMI-DEV (V1.3) sobre las 16 PAs base?',
    options: [
      'GOV, II, EST, PLAN',
      'PI, RD, SAM, TS, VAL, VER',
      'CM, MC, PQA, PR',
      'CAR, DAR, MPM, OT'
    ],
    correct: 1,
    justification: 'CMMI-DEV añade 6 PAs específicas: PI (Product Integration), RD (Requirements Development), SAM (Supplier Agreement Management), TS (Technical Solution), VAL (Validation) y VER (Verification). Total: 22 PAs en CMMI-DEV V1.3.',
    trap: false
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Cuántas PAs base (comunes a todas las constelaciones) tiene CMMI V1.3?',
    options: [
      '10',
      '16',
      '20',
      '22'
    ],
    correct: 1,
    justification: 'V1.3 tiene 16 PAs base compartidas por todas las constelaciones (DEV, ACQ, SVC). Cada constelación añade PAs específicas adicionales.',
    trap: false
  },
  {
    category: 'versiones',
    type: 'vf',
    question: 'En V2.0, las PAs se dividen en Practice Groups (PG) numerados del 1 al 5, equivalentes al CL antiguo.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. En V2.0 cada PA se divide en Practice Groups (PG) numerados de 1 a 5, que equivalen al CL (Capability Level) de la versión antigua continua. Cada PG contiene Practices (prácticas concretas).',
    trap: false
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Qué dominios introduce CMMI V3.0?',
    options: [
      'Solo DEV y SVC',
      'DATA, DEV, PPL, SAF, SEC, SVC, SPM, VRT',
      'DEV, ACQ, SVC (igual que V1.3)',
      'DEV, QA, PM, HR'
    ],
    correct: 1,
    justification: 'V3.0 introduce 8 dominios o dimensiones: DATA (Data Management), DEV (Development), PPL (People), SAF (Safety), SEC (Security), SVC (Services), SPM (Supplier Management) y VRT (Virtual/Remote Work).',
    trap: false
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Qué nuevas PAs introduce el dominio DATA en V3.0?',
    options: [
      'TS y PI',
      'DM y DQ',
      'ESEC y MST',
      'EVW y WE'
    ],
    correct: 1,
    justification: 'El dominio DATA introduce DM (Data Management) y DQ (Data Quality). SEC introduce ESEC y MST, SAF introduce ESAF, VRT introduce EVW, y PPL introduce WE.',
    trap: false
  },
  {
    category: 'versiones',
    type: 'vf',
    question: 'En V2.0 la arquitectura es totalmente Staged y elimina la representación continua.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. Es al revés: V2.0 tiene arquitectura totalmente CONTINUA. La representación Staged desaparece formalmente, aunque existe un mecanismo de equivalencia para comparar con niveles de madurez.',
    trap: true
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Cuáles son las vistas predefinidas de V2.0 para evaluación?',
    options: [
      'DEV, ACQ, SVC (como V1.3)',
      'CMMI-DEV, CMMI-SVC, CMMI-SPM, CMMI-PPL',
      'DATA, SEC, SAF, VRT',
      'Solo CMMI-DEV'
    ],
    correct: 1,
    justification: 'V2.0 tiene vistas predefinidas: CMMI-DEV (desarrollo), CMMI-SVC (servicios), CMMI-SPM (gestión de proveedores) y CMMI-PPL (People Management). La vista CMMI-DEV contiene 20 PAs.',
    trap: false
  },
  {
    category: 'versiones',
    type: 'vf',
    question: 'V1.3 tenía dos representaciones: Staged y Continuous.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. V1.3 ofrecía dos representaciones: Staged (escalonada, niveles de madurez 1-5 globales) y Continuous (continua, niveles de capacidad 0-5 por PA). En V2.0 solo queda la continua.',
    trap: false
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Cuántas PAs contiene la vista CMMI-DEV en V2.0?',
    options: [
      '16 PAs',
      '18 PAs',
      '20 PAs',
      '25 PAs'
    ],
    correct: 2,
    justification: 'La vista CMMI-DEV en V2.0 contiene 20 PAs. Del total de 25 PAs, 18 son comunes (Core) a todas las vistas, y la vista DEV añade TS y PI.',
    trap: false
  },
  {
    category: 'versiones',
    type: 'vf',
    question: 'En V2.0 desaparecen las Metas Genéricas (GG) y las Prácticas Genéricas (GP), que se centralizan en GOV e II.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. En V2.0/V3.0 las metas y prácticas genéricas se eliminan de cada PA y se centralizan en dos PAs nuevas: GOV (Governance) e II (Implementation Infrastructure). Solo quedan prácticas específicas dentro de cada PA.',
    trap: false
  },
  {
    category: 'estructura',
    type: 'multi',
    question: '¿Cuáles son los elementos REQUERIDOS de una PA en V1.3?',
    options: [
      'Prácticas específicas (SP) y Prácticas genéricas (GP)',
      'Metas específicas (SG) y Metas genéricas (GG)',
      'Declaración del propósito y Notas introductorias',
      'Subprácticas y Elaboraciones'
    ],
    correct: 1,
    justification: 'Los elementos REQUERIDOS son las Metas Específicas (SG) y las Metas Genéricas (GG). Los elementos ESPERADOS son las prácticas (SP y GP). Los elementos INFORMATIVOS son la declaración del propósito, notas, subprácticas, ejemplos, etc.',
    trap: false
  },
  {
    category: 'estructura',
    type: 'vf',
    question: 'Los SG (Specific Goals) y GG (Generic Goals) son elementos Esperados de una PA.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. Los SG y GG son elementos REQUERIDOS, no Esperados. Los elementos Esperados son las prácticas (SP y GP). Los Requeridos son las metas (SG y GG). Los Informativos son todo lo demás.',
    trap: true
  },
  {
    category: 'estructura',
    type: 'vf',
    question: 'Las SP (Specific Practices) y GP (Generic Practices) son elementos Requeridos de una PA.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. Las SP y GP son elementos ESPERADOS, no Requeridos. Los Requeridos son las metas (SG y GG). Las prácticas son el cómo alcanzar esas metas, y son esperadas pero no obligatorias en su forma exacta.',
    trap: true
  },
  {
    category: 'estructura',
    type: 'multi',
    question: '¿Qué tipo de elemento es la \'Declaración del propósito\' de una PA?',
    options: [
      'Requerido',
      'Esperado',
      'Informativo',
      'Obligatorio'
    ],
    correct: 2,
    justification: 'La Declaración del propósito es un elemento INFORMATIVO. Describe para qué sirve la PA pero no es obligatorio cumplirlo literalmente. Requeridos = metas, Esperados = prácticas, Informativos = todo lo demás.',
    trap: false
  },
  {
    category: 'estructura',
    type: 'multi',
    question: 'En el diagrama de estructura de una PA, ¿qué formas geométricas representan cada tipo de elemento?',
    options: [
      'Requerido = elipse, Esperado = rectángulo, Informativo = diamante',
      'Requerido = rectángulo, Esperado = diamante, Informativo = elipse',
      'Requerido = diamante, Esperado = elipse, Informativo = rectángulo',
      'Todos se representan con rectángulos'
    ],
    correct: 1,
    justification: 'La leyenda del diagrama es: Requerido = rectángulo, Esperado = diamante, Informativo = elipse. Esto ayuda a identificar visualmente la importancia de cada componente.',
    trap: false
  },
  {
    category: 'estructura',
    type: 'multi',
    question: '¿Qué elementos de una PA son \'Esperados\'?',
    options: [
      'Metas específicas (SG) y Metas genéricas (GG)',
      'Prácticas específicas (SP) y Prácticas genéricas (GP)',
      'Subprácticas y Elaboraciones',
      'Declaración del propósito y PAs relacionadas'
    ],
    correct: 1,
    justification: 'Los elementos ESPERADOS son las Prácticas Específicas (SP) y las Prácticas Genéricas (GP). Describen CÓMO alcanzar las metas. No son obligatorias en su forma exacta, pero se espera que se implementen.',
    trap: false
  },
  {
    category: 'estructura',
    type: 'vf',
    question: 'Las subprácticas y los ejemplos de productos de trabajo son elementos Informativos de una PA.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. Las subprácticas, ejemplos de productos de trabajo, elaboraciones, declaración del propósito, notas introductorias y PAs relacionadas son todos elementos Informativos. Sirven de orientación adicional.',
    trap: false
  },
  {
    category: 'estructura',
    type: 'multi',
    question: 'En V2.0/V3.0, ¿cómo se estructura internamente una PA?',
    options: [
      'SG → SP → Subprácticas (igual que V1.3)',
      'PA → Practice Group (PG) → Practice',
      'PA → GG → GP',
      'PA → Módulos → Tareas'
    ],
    correct: 1,
    justification: 'En V2.0/V3.0, cada PA se divide en Practice Groups (PG) numerados del 1 al 5, y cada PG contiene Practices (prácticas concretas). Se eliminan SG/GG/SP/GP de V1.3, y las genéricas se centralizan en GOV e II.',
    trap: false
  },
  {
    category: 'estructura',
    type: 'vf',
    question: 'Las Metas Genéricas (GG) son objetivos de institucionalización que aplican a todas las PAs.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. Las GG son objetivos de institucionalización que se aplican a TODAS las PAs. Definen el grado en que una PA está institucionalizada (integrada en la organización de forma estable y repetible).',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'multi',
    question: '¿Cuántos niveles de madurez tiene el modelo Staged?',
    options: [
      '3 niveles (1-3)',
      '4 niveles (1-4)',
      '5 niveles (1-5)',
      '6 niveles (0-5)'
    ],
    correct: 2,
    justification: 'El modelo Staged tiene 5 niveles de madurez: 1-Inicial, 2-Gestionado, 3-Definido, 4-Gestionado Cuantitativamente, 5-Optimizado. No hay nivel 0 en Staged (eso es del modelo Continuous).',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'vf',
    question: 'En el modelo Staged (escalonado) es posible saltarse niveles si se cumplen todos los requisitos del nivel superior.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. NO es posible saltarse niveles en el modelo escalonado. El modelo es incremental: hay que pasar por cada nivel secuencialmente. No se puede obtener nivel 3 sin haber obtenido primero el nivel 2.',
    trap: true
  },
  {
    category: 'staged-cont',
    type: 'multi',
    question: '¿Qué resultado produce el modelo Staged?',
    options: [
      'Un perfil de CLs por PA',
      'Un nivel de madurez global de la organización',
      'Una lista de prácticas implementadas',
      'Un porcentaje de cumplimiento'
    ],
    correct: 1,
    justification: 'El modelo Staged produce un nivel de madurez GLOBAL de la organización (del 1 al 5). En cambio, el modelo Continuous produce un PERFIL de niveles de capacidad (CLs) por PA.',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'vf',
    question: 'El modelo Continuous produce un nivel de madurez global de la organización.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. El modelo Continuous produce un PERFIL de CLs (Capability Levels) por PA, no un nivel global. El nivel de madurez global es propio del modelo Staged (o del mecanismo de equivalencia en V2.0).',
    trap: true
  },
  {
    category: 'staged-cont',
    type: 'multi',
    question: '¿Cuáles son las PAs del Nivel 2 (Gestionado) en el modelo Staged?',
    options: [
      'DR, TS, VAL, VER, PI, IPM, DAR',
      'REQM, PP, PMC, PPQA, MA, CM, SAM',
      'OPP, QPM',
      'OPM, CAR'
    ],
    correct: 1,
    justification: 'Nivel 2 (Gestionado): REQM (Requirements Management), PP (Project Planning), PMC (Project Monitoring and Control), PPQA (Process and Product Quality Assurance), MA (Measurement and Analysis), CM (Configuration Management), SAM (Supplier Agreement Management).',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'multi',
    question: '¿Qué PAs corresponden al Nivel 4 (Gestionado Cuantitativamente) en Staged?',
    options: [
      'OPM, CAR',
      'OPP, QPM',
      'REQM, PP, PMC',
      'DR, TS, VAL, VER'
    ],
    correct: 1,
    justification: 'Nivel 4 (Gestionado Cuantitativamente): OPP (Organizational Process Performance) y QPM (Quantitative Project Management). Son solo 2 PAs centradas en técnicas cuantitativas/estadísticas.',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'multi',
    question: '¿Qué PAs corresponden al Nivel 5 (Optimizado) en Staged?',
    options: [
      'OPP, QPM',
      'OPM, CAR',
      'REQM, PP, PMC',
      'DR, TS, VAL, VER'
    ],
    correct: 1,
    justification: 'Nivel 5 (Optimizado): OPM (Organizational Performance Management) y CAR (Causal Analysis and Resolution). Se centran en la mejora continua y la prevención de defectos.',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'vf',
    question: 'Un nivel CL0 en el modelo Continuous equivale a \'Incompleto\'.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. CL0 = Incompleto significa que el proceso no se realiza o se realiza parcialmente. Es el nivel más bajo del modelo Continuous y no existe equivalente en el modelo Staged.',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'multi',
    question: '¿Qué riesgo principal tiene el modelo Staged según la profesora?',
    options: [
      'Es demasiado simple',
      'La \titulitis\: mejorar áreas no críticas solo para subir de nivel',
      'No permite evaluación',
      'Es demasiado caro'
    ],
    correct: 1,
    justification: 'El modelo Staged puede provocar \titulitis\: mejorar áreas no críticas solo para subir de nivel, ignorando los problemas reales. La profesora lo compara con \'tratar una pierna rota haciéndose la manicura\'.',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'vf',
    question: 'La representación Staged favorece la \'titulitis\', es decir, perseguir el nivel aunque los problemas reales estén en otras áreas.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. El modelo escalonado puede provocar \'titulitis\' porque obliga a mejorar PAs agrupadas por nivel, que pueden no ser las que la organización realmente necesita. El modelo Continuous evita esto al permitir elegir qué PAs mejorar.',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'multi',
    question: '¿Qué ventaja principal tiene el modelo Continuous sobre el Staged?',
    options: [
      'Es más barato de implementar',
      'Produce un nivel de madurez global',
      'Permite elegir qué PAs mejorar según la necesidad real del negocio',
      'Tiene menos niveles'
    ],
    correct: 2,
    justification: 'El modelo Continuous permite a la organización elegir qué PAs mejorar y hasta qué CL, según la necesidad real del negocio. Esto evita la \'titulitis\' del modelo Staged y ofrece un enfoque más flexible.',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'vf',
    question: 'El Nivel 1 (Inicial) del modelo Staged no tiene PAs asociadas.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. El Nivel 1 (Inicial) no tiene PAs asociadas. Es un nivel caótico donde los procesos son ad hoc. No tiene diploma ni reconocimiento de calidad. El primer nivel con reconocimiento es el Nivel 2.',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'multi',
    question: '¿Cuál es el primer nivel de madurez con reconocimiento de calidad (diploma)?',
    options: [
      'Nivel 1 — Inicial',
      'Nivel 2 — Gestionado',
      'Nivel 3 — Definido',
      'Nivel 4 — Gestionado Cuantitativamente'
    ],
    correct: 1,
    justification: 'El Nivel 2 (Gestionado) es el primer nivel con reconocimiento de calidad. El Nivel 1 (Inicial) no tiene diploma. El Nivel 3 es requerido frecuentemente en contratos públicos.',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'vf',
    question: 'SAM (Supplier Agreement Management) es la ÚNICA PA que puede estar exenta del Nivel 2 si la organización no tiene proveedores significativos.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. SAM es la única PA del Nivel 2 que puede eximirse si la organización no tiene proveedores externos significativos. El resto de PAs del N2 son siempre obligatorias.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué cubre la PA \'RDM\' (Requirements Development & Management)?',
    options: [
      'Diseño y construcción de la solución técnica',
      'Extracción, análisis, trazabilidad bidireccional y control de requisitos',
      'Supervisar resultados reales vs planes',
      'Control de versiones e integridad de productos'
    ],
    correct: 1,
    justification: 'RDM cubre la gestión de requisitos: extracción, análisis, trazabilidad bidireccional y control de requisitos. Desde necesidades del cliente hasta requisitos priorizados y comprometidos.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA se encarga de la \'Estimación\' (calcular tamaño, esfuerzo, duración y coste)?',
    options: [
      'PLAN — Planning',
      'EST — Estimating',
      'MC — Monitor and Control',
      'MPM — Managing Performance & Measurement'
    ],
    correct: 1,
    justification: 'EST (Estimating) se encarga de calcular tamaño, esfuerzo, duración y coste basándose en datos históricos y métodos formales. PLAN se encarga de la planificación general del proyecto.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué diferencia hay entre VER (Verification) y VAL (Validation)?',
    options: [
      'VER comprueba requisitos del cliente; VAL comprueba que funciona en su entorno',
      'VER comprueba que los requisitos se implementan correctamente; VAL que la solución funciona en su entorno de destino',
      'Son sinónimos, no hay diferencia',
      'VER es para documentos; VAL es para código'
    ],
    correct: 1,
    justification: 'VER (Verification) comprueba que los requisitos se implementan correctamente (\'¿estamos construyendo el producto correctamente?\'). VAL (Validation) verifica que la solución funciona en su entorno de destino (\'¿estamos construyendo el producto correcto?\'). En V2.0 se unificaron en VV.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'vf',
    question: 'TS (Technical Solution) y PI (Product Integration) son PAs del Core de CMMI, comunes a todas las vistas.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. TS y PI son PAs específicas del dominio DEV (Development), NO del Core. El Core contiene las PAs comunes a todas las vistas. TS y PI se añaden solo en la vista CMMI-DEV.',
    trap: true
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA se encarga de \'Ensamblar componentes, gestionar interfaces y entregar la solución integrada\'?',
    options: [
      'TS — Technical Solution',
      'PI — Product Integration',
      'CM — Configuration Management',
      'VV — Verification and Validation'
    ],
    correct: 1,
    justification: 'PI (Product Integration) se encarga de ensamblar componentes, gestionar interfaces y entregar la solución integrada al cliente. TS se ocupa del diseño y construcción, PI de la integración.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA cubre \'Revisiones entre pares para detectar defectos de forma temprana\'?',
    options: [
      'PQA — Process Quality Assurance',
      'PR — Peer Reviews',
      'VV — Verification and Validation',
      'DAR — Decision Analysis & Resolution'
    ],
    correct: 1,
    justification: 'PR (Peer Reviews) cubre las revisiones entre pares: revisar productos de trabajo por compañeros para detectar defectos de forma temprana antes de pruebas formales.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA se describe como \'la fábrica\' (crear y mantener activos de procesos organizacionales)?',
    options: [
      'PCM — Process Management',
      'PAD — Process Asset Development',
      'OT — Organizational Training',
      'GOV — Governance'
    ],
    correct: 1,
    justification: 'PAD (Process Asset Development) es \la fábrica\: crea y mantiene los activos de procesos organizacionales. PCM (Process Management) es \la estrategia\: planificación e implementación de mejoras.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'vf',
    question: 'PAD es \'la fábrica\' (activos de proceso) y PCM es \'la estrategia\' (mejora de procesos).',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. PAD = Process Asset Development (fábrica de procesos). PCM = Process Management (estrategia de mejora). PAD crea y mantiene los activos, PCM planifica e implementa las mejoras.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA se encarga del \'Análisis Causal y Resolución\' (identificar causas raíz de defectos)?',
    options: [
      'DAR — Decision Analysis & Resolution',
      'CAR — Causal Analysis & Resolution',
      'RSK — Risk Opportunity Management',
      'PQA — Process Quality Assurance'
    ],
    correct: 1,
    justification: 'CAR (Causal Analysis & Resolution) identifica causas raíz de defectos y problemas para prevenirlos en el futuro. DAR (Decision Analysis & Resolution) es para toma de decisiones formales con criterios y alternativas.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA cubre el \'Control de versiones, líneas base, control de cambios y auditorías de configuración\'?',
    options: [
      'PQA — Process Quality Assurance',
      'CM — Configuration Management',
      'MC — Monitor and Control',
      'GOV — Governance'
    ],
    correct: 1,
    justification: 'CM (Configuration Management) cubre el control de versiones e integridad de productos: líneas base, control de cambios y auditorías de configuración.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA realiza \'Evaluaciones objetivas del cumplimiento de procesos y productos respecto a estándares\'?',
    options: [
      'CM — Configuration Management',
      'PQA — Process Quality Assurance',
      'PR — Peer Reviews',
      'GOV — Governance'
    ],
    correct: 1,
    justification: 'PQA (Process Quality Assurance) realiza evaluaciones objetivas del cumplimiento de procesos y productos respecto a los estándares establecidos. PQA es aseguramiento (QA), no control (QC).',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA cubre la \'Gestión de Riesgos y Oportunidades\' a lo largo de todo el proyecto?',
    options: [
      'MC — Monitor and Control',
      'RSK — Risk Opportunity Management',
      'PLAN — Planning',
      'DAR — Decision Analysis & Resolution'
    ],
    correct: 1,
    justification: 'RSK (Risk Opportunity Management) identifica, registra, analiza y mitiga riesgos y oportunidades a lo largo de todo el proyecto.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'vf',
    question: 'RDM cubre la trazabilidad bidireccional de los requisitos.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. RDM (Requirements Development & Management) incluye la trazabilidad bidireccional de requisitos, lo que permite rastrear cada requisito desde su origen hasta su implementación y viceversa.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA se encarga de la \'Responsabilidad y patrocinio de la alta dirección en los procesos de mejora\'?',
    options: [
      'II — Implementation Infrastructure',
      'GOV — Governance',
      'PCM — Process Management',
      'MPM — Managing Performance & Measurement'
    ],
    correct: 1,
    justification: 'GOV (Governance) se ocupa de la responsabilidad y patrocinio de la alta dirección en los procesos de mejora. II (Implementation Infrastructure) aporta herramientas y recursos para la implementación.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'vf',
    question: 'CAR (Causal Analysis & Resolution) identifica causas raíz de defectos para prevenirlos en el futuro.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. CAR analiza las causas raíz de los defectos y problemas, con el objetivo de implementar acciones preventivas para evitar que vuelvan a ocurrir.',
    trap: false
  },
  {
    category: 'scampi',
    type: 'multi',
    question: '¿Qué significan las siglas SCAMPI?',
    options: [
      'Standard CMMI Analysis Method for Process Integration',
      'Standard CMMI Appraisal Method for Process Improvement',
      'Software Capability Maturity Process Inspection',
      'Systematic Capability Assessment for Model Performance Indicators'
    ],
    correct: 1,
    justification: 'SCAMPI = Standard CMMI Appraisal Method for Process Improvement. Es el método oficial de evaluación de CMMI. Existen 3 tipos (A, B, C) según el momento del programa de mejora.',
    trap: false
  },
  {
    category: 'scampi',
    type: 'multi',
    question: '¿Cuántos tipos de SCAMPI existen?',
    options: [
      '2 tipos (A y B)',
      '3 tipos (A, B, C)',
      '4 tipos (A, B, C, D)',
      '1 solo tipo'
    ],
    correct: 1,
    justification: 'Existen 3 tipos de SCAMPI: A (Benchmark), B (Sustainment) y C (Evaluation). Se aplican en diferentes momentos del programa de mejora y tienen diferente rigor y coste.',
    trap: false
  },
  {
    category: 'scampi',
    type: 'multi',
    question: '¿Cuál es el tipo de SCAMPI que genera diploma oficial CMMI?',
    options: [
      'SCAMPI C — Evaluation',
      'SCAMPI B — Sustainment',
      'SCAMPI A — Benchmark',
      'Todos generan diploma'
    ],
    correct: 2,
    justification: 'Solo SCAMPI A (Benchmark appraisal) genera diploma oficial CMMI. SCAMPI B y C NO generan diploma. SCAMPI A es el más riguroso y caro, con muestreo aleatorio de evidencias.',
    trap: false
  },
  {
    category: 'scampi',
    type: 'multi',
    question: '¿En qué momento del programa de mejora se aplica SCAMPI A?',
    options: [
      'Al INICIO del programa',
      'DURANTE el programa',
      'Al FINAL del programa',
      'En cualquier momento'
    ],
    correct: 2,
    justification: 'SCAMPI A se aplica al FINAL del programa de mejora. SCAMPI C al INICIO (foto rápida del estado actual). SCAMPI B DURANTE el programa (mantener la madurez lograda).',
    trap: false
  },
  {
    category: 'scampi',
    type: 'vf',
    question: 'SCAMPI A se aplica al inicio del programa de mejora como primera evaluación.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. SCAMPI A se aplica al FINAL del programa de mejora, no al inicio. El que se aplica al INICIO es SCAMPI C (Evaluation). SCAMPI B se aplica DURANTE el programa.',
    trap: true
  },
  {
    category: 'scampi',
    type: 'multi',
    question: '¿Cuánto tiempo es válido el diploma del SCAMPI A?',
    options: [
      '1 año',
      '2 años',
      '3 años',
      '5 años'
    ],
    correct: 2,
    justification: 'El diploma del SCAMPI A es válido 3 años. Se puede extender con SCAMPI B (Sustainment) que añade +2 años cada uno, con un máximo de 3 SCAMPI B antes de necesitar un nuevo SCAMPI A.',
    trap: false
  },
  {
    category: 'scampi',
    type: 'vf',
    question: 'SCAMPI A tiene validez de 5 años.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. SCAMPI A tiene validez de 3 años (no 5). Se puede extender con SCAMPI B (+2 años cada uno, máximo 3 B). Así la validez máxima sería 3 + (3×2) = 9 años teóricos.',
    trap: true
  },
  {
    category: 'scampi',
    type: 'multi',
    question: '¿Cuántos SCAMPI B se pueden hacer como máximo antes de necesitar un nuevo SCAMPI A?',
    options: [
      '1',
      '2',
      '3',
      'Sin límite'
    ],
    correct: 2,
    justification: 'Se pueden hacer un máximo de 3 SCAMPI B antes de necesitar un nuevo SCAMPI A. Cada SCAMPI B extiende el resultado de A por +2 años.',
    trap: false
  },
  {
    category: 'scampi',
    type: 'vf',
    question: 'SCAMPI B genera diploma oficial CMMI.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. SCAMPI B (Sustainment) NO genera diploma. Solo SCAMPI A genera diploma oficial. SCAMPI B sirve para mantener la madurez lograda y extender el resultado del SCAMPI A.',
    trap: true
  },
  {
    category: 'scampi',
    type: 'vf',
    question: 'SCAMPI C es el menos riguroso y el más barato de los tres tipos.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. SCAMPI C (Evaluation appraisal) es el menos riguroso y más barato. Se aplica al INICIO del programa de mejora como una \'foto rápida\' del estado actual, para planificar la mejora.',
    trap: false
  },
  {
    category: 'scampi',
    type: 'vf',
    question: 'Se pueden hacer máximo 3 SCAMPI B antes de un nuevo SCAMPI A.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. Máximo 3 SCAMPI B (Sustainment) antes de un nuevo SCAMPI A (Benchmark). Cada B extiende +2 años la validez del diploma.',
    trap: false
  },
  {
    category: 'scampi',
    type: 'vf',
    question: 'SCAMPI B extiende el resultado de SCAMPI A en +2 años.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. Cada SCAMPI B extiende la validez del SCAMPI A por 2 años adicionales. Es una auditoría más reducida cuyo objetivo es verificar que la madurez se mantiene.',
    trap: false
  },
  {
    category: 'scampi',
    type: 'vf',
    question: 'El Sustainment appraisal (SCAMPI B) tiene la misma extensión que el Benchmark (SCAMPI A).',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. El Sustainment (SCAMPI B) es una auditoría MUCHO más reducida que el Benchmark (SCAMPI A). Su objetivo es solo verificar que la madurez alcanzada se mantiene, no volver a evaluar todo.',
    trap: true
  },
  {
    category: 'evaluacion',
    type: 'multi',
    question: '¿Qué es un \'Proyecto objetivo\' en la muestra de evaluación?',
    options: [
      'Un proyecto que ha terminado satisfactoriamente',
      'Un proyecto que proporciona evidencia para TODAS las PAs a evaluar',
      'Un proyecto que solo aporta evidencia de alguna PA',
      'Un proyecto que se creó específicamente para la evaluación'
    ],
    correct: 1,
    justification: 'Un proyecto objetivo proporciona evidencia para TODAS las PAs a evaluar. No importa si ha terminado o no. Se requiere al menos 1 proyecto objetivo. Los proyectos no objetivos aportan evidencia de solo algunas PAs.',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'multi',
    question: '¿Cuáles son los dos tipos de evidencia objetiva en una evaluación CMMI?',
    options: [
      'Documentos y entrevistas',
      'Artefactos y Afirmaciones',
      'Informes y auditorías',
      'Métricas y certificados'
    ],
    correct: 1,
    justification: 'Los dos tipos de evidencia objetiva son: Artefactos (salidas directas o indirectas de la implementación de prácticas, recogidos pre on-site) y Afirmaciones (confirmaciones verbales o escritas en entrevistas, recogidas on-site).',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'multi',
    question: '¿Cuál es la \'regla de oro\' para validar una practice?',
    options: [
      'Solo se necesita un Artefacto directo',
      'Solo se necesita una Afirmación positiva',
      'Artefacto AND Afirmación positiva',
      'Artefacto OR Afirmación positiva'
    ],
    correct: 2,
    justification: 'La regla de oro para validar una practice es: Artefacto AND Afirmación positiva. No basta con solo uno de los dos. Se necesitan ambos tipos de evidencia para confirmar la implementación.',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'vf',
    question: 'Para validar una practice basta con tener un Artefacto directo sin necesidad de Afirmación.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. La regla de oro establece que se necesita Artefacto AND Afirmación positiva. No basta con solo uno de los dos. Ambos tipos de evidencia son necesarios.',
    trap: true
  },
  {
    category: 'evaluacion',
    type: 'vf',
    question: 'Una afirmación negativa en una entrevista no puede usarse como evidencia.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. Las afirmaciones también pueden ser negativas y CUENTAN como evidencia. Una afirmación negativa (por ejemplo, \'no seguimos ese proceso\') es una evidencia válida que puede indicar que una práctica no se implementa.',
    trap: true
  },
  {
    category: 'evaluacion',
    type: 'multi',
    question: '¿Qué significa FI (Fully Implemented) en la calificación de una practice?',
    options: [
      'Artefactos directos inadecuados o inexistentes',
      'Artefactos directos presentes con debilidades significativas',
      'Artefactos directos presentes y adecuados, apoyados por evidencias, sin debilidades significativas',
      'Sin evidencia alguna'
    ],
    correct: 2,
    justification: 'FI (Fully Implemented): Artefactos directos presentes y adecuados, apoyados por artefactos indirectos y/o afirmaciones. No se detectan debilidades significativas.',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'multi',
    question: '¿Qué diferencia hay entre FI y LI?',
    options: [
      'No hay diferencia, son sinónimos',
      'FI no tiene debilidades significativas; LI tiene una o más debilidades',
      'FI es parcial; LI es completo',
      'FI es para artefactos; LI es para afirmaciones'
    ],
    correct: 1,
    justification: 'FI (Fully Implemented) no tiene debilidades significativas. LI (Largely Implemented) tiene artefactos directos presentes y adecuados, pero se han notado una o más debilidades (ej.: criterios de análisis ambiguos).',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'multi',
    question: '¿Qué significa PI (Partially Implemented)?',
    options: [
      'Artefactos directos presentes sin debilidades',
      'Sin evidencia alguna',
      'Artefactos directos inadecuados o inexistentes, pero evidencia parcial de implementación',
      'Artefactos directos presentes con debilidades menores'
    ],
    correct: 2,
    justification: 'PI (Partially Implemented): Artefactos directos inadecuados o inexistentes. Artefactos indirectos y/o afirmaciones indican que PARTE de la práctica ha sido implementada.',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'vf',
    question: 'Un PG se considera satisfecho si TODAS sus practices son FI o LI.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. Un PG se considera satisfecho si TODAS sus practices son FI o LI. Sin embargo, existe un matiz: aunque todas sean FI o LI, si la mayoría tienen debilidades podría considerarse que el PG NO ha sido satisfecho.',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'vf',
    question: 'Para que un PG esté satisfecho basta con que la MAYORÍA de sus practices sean FI o LI.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. Deben ser TODAS las practices FI o LI, no la mayoría. Si alguna practice es PI o NI, el PG automáticamente NO está satisfecho.',
    trap: true
  },
  {
    category: 'evaluacion',
    type: 'vf',
    question: 'Si alguna practice de un PG es PI o NI, el PG puede estar satisfecho si el resto son FI.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. Si alguna practice es PI o NI, el PG NO está satisfecho. No importa que el resto sean FI. La regla es que TODAS deben ser FI o LI.',
    trap: true
  },
  {
    category: 'evaluacion',
    type: 'vf',
    question: 'La evaluación CMMI es bottom-up: practice → PG → PA.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. La evaluación sigue un enfoque bottom-up: primero se evalúan las practices (FI/LI/PI/NI), luego los PGs (satisfecho/no satisfecho), y finalmente las PAs.',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'multi',
    question: '¿Cuánto dura aproximadamente la fase Pre On-Site?',
    options: [
      '1 mes',
      '2 meses',
      '6 meses (aproximadamente)',
      '1 año'
    ],
    correct: 2,
    justification: 'La fase Pre On-Site comienza al menos 6 meses antes de la evaluación. Incluye: Presentar (6m antes), Planificar (4m antes) y Preparar (4m a 2 semanas antes).',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'multi',
    question: '¿Cuánto dura la fase On-Site?',
    options: [
      '1-2 días',
      '5-10 días',
      '1 mes',
      '3 meses'
    ],
    correct: 1,
    justification: 'La fase On-Site dura entre 5 y 10 días. Incluye revisión documental, entrevistas y cuestionarios, con reuniones inicial, de resultados preliminares y de resultados finales.',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'vf',
    question: 'Durante el On-Site, la empresa puede añadir documentación nueva si el evaluador la solicita.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. Durante el On-Site solo se puede añadir información que YA EXISTÍA previamente y que el evaluador solicita. Documentación de NUEVA creación durante el On-Site no es válida y puede causar el FIN de la evaluación.',
    trap: true
  },
  {
    category: 'evaluacion',
    type: 'multi',
    question: '¿Qué es la BDEO?',
    options: [
      'Base de Datos de Evaluación Organizacional',
      'Base de Datos de Evidencias Objetivas',
      'Base de Datos de Estándares Operativos',
      'Base de Datos de Evaluadores Oficiales'
    ],
    correct: 1,
    justification: 'BDEO = Base de Datos de Evidencias Objetivas. Contiene los artefactos (directos e indirectos) que evidencian la implementación de las prácticas. Se completa durante el Pre On-Site y se copia a un repositorio aislado durante el On-Site.',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'vf',
    question: '\'Lo que sucede en la evaluación, se queda en la evaluación.\' La confidencialidad es un principio clave del On-Site.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. La confidencialidad es un principio fundamental del On-Site. Las entrevistas y los detalles específicos de la evaluación son confidenciales para proteger a los participantes.',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'vf',
    question: 'FI significa que no se detectan debilidades significativas en la implementación de la práctica.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. FI (Fully Implemented) implica que los artefactos directos están presentes y son adecuados, apoyados por evidencias, y NO se detectan debilidades significativas.',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'vf',
    question: 'LI (Largely Implemented) indica que los artefactos directos están presentes pero se han notado debilidades.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. LI indica que los artefactos directos están presentes y adecuados, apoyados por evidencias, pero se han notado una o más debilidades (ej.: criterios de análisis ambiguos).',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'vf',
    question: 'Las evidencias objetivas son Artefactos (pre on-site) y Afirmaciones (on-site).',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. Los Artefactos son salidas de la implementación de prácticas, recogidos durante el Pre On-Site (van a la BDEO). Las Afirmaciones son confirmaciones verbales/escritas recogidas durante el On-Site (entrevistas, cuestionarios).',
    trap: false
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'V2.0 es totalmente continuo y elimina la representación staged.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. La arquitectura de V2.0 es totalmente continua. La representación staged desaparece formalmente, pero existe un mecanismo de equivalencia para comparar con niveles de madurez.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'TS y PI son PAs del dominio DEV, no del Core.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. TS (Technical Solution) y PI (Product Integration) son específicas del dominio Development (DEV). El resto de PAs son Core (comunes a todas las vistas).',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'En el modelo Staged se pueden saltar niveles si la empresa demuestra competencia suficiente.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. NO es posible saltarse niveles en el modelo escalonado, bajo ninguna circunstancia. El modelo es estrictamente incremental: 1 → 2 → 3 → 4 → 5.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'El modelo Continuous produce un nivel de madurez global de la organización.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. El modelo Continuous produce un PERFIL de niveles de capacidad (CLs) por PA, NO un nivel global. El nivel de madurez global es del modelo Staged (o del mecanismo de equivalencia en V2.0).',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'Una afirmación negativa en una entrevista no puede usarse como evidencia en una evaluación CMMI.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. Las afirmaciones TAMBIÉN pueden ser negativas y cuentan como evidencia. Una afirmación negativa (ej.: \'no seguimos ese proceso\') es evidencia válida de que la práctica no se implementa.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'Durante el On-Site, la empresa puede crear documentación nueva si el evaluador la necesita.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. Solo se puede añadir información que YA EXISTÍA previamente. Documentación de nueva creación durante el On-Site NO es válida y puede causar el FIN de la evaluación.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'Para que un PG esté satisfecho basta con que la mayoría de sus practices sean FI o LI.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. Deben ser TODAS las practices FI o LI, no la mayoría. Si alguna es PI o NI, el PG NO está satisfecho. Además, incluso si todas son FI/LI, demasiadas debilidades podrían invalidar el PG.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'CMMI es un método que indica CÓMO implementar procesos de desarrollo de software.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. CMMI dice QUÉ hay que hacer (prácticas), no CÓMO. Los métodos y metodologías (Scrum, XP, RUP, etc.) son los que dicen CÓMO hacerlo. CMMI es un modelo de referencia, no una metodología.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'El Sustainment appraisal (SCAMPI B) tiene la misma extensión y rigor que el Benchmark (SCAMPI A).',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. El Sustainment es una auditoría mucho más REDUCIDA que el Benchmark. Su objetivo es solo verificar que la madurez se mantiene, no reevaluar todo el modelo.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'multi',
    question: '¿Cuál de estas afirmaciones sobre CMMI es CORRECTA?',
    options: [
      'El SEI certifica directamente a las empresas',
      'En Staged se pueden saltar niveles con justificación',
      'SCAMPI A se aplica al inicio del programa de mejora',
      'V2.0 tiene arquitectura totalmente continua con mecanismo de equivalencia'
    ],
    correct: 3,
    justification: 'V2.0 tiene arquitectura totalmente CONTINUA con un mecanismo de equivalencia para comparar con niveles. Las demás opciones son falsas: el SEI no certifica, no se pueden saltar niveles, y SCAMPI A se aplica al FINAL.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'multi',
    question: 'Un evaluador encuentra que en un PG hay 8 practices: 5 son FI, 2 son LI y 1 es PI. ¿Está satisfecho el PG?',
    options: [
      'Sí, porque la mayoría (7 de 8) son FI o LI',
      'Sí, porque al menos el 50% son FI',
      'No, porque hay 1 practice en PI',
      'No, porque hay practices en LI'
    ],
    correct: 2,
    justification: 'NO está satisfecho. Si ALGUNA practice es PI o NI, el PG automáticamente no está satisfecho. No importa que 7 de 8 sean FI o LI: con solo 1 PI, el PG falla. TODAS deben ser FI o LI.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'multi',
    question: 'En una evaluación CMMI, la empresa presenta un documento creado el día anterior al On-Site para completar evidencias. ¿Es válido?',
    options: [
      'Sí, porque lo creó antes del On-Site',
      'Sí, si el evaluador lo solicita',
      'No, si fue creado específicamente para la evaluación y no refleja la práctica real',
      'Siempre es válido si existe antes del On-Site'
    ],
    correct: 2,
    justification: 'Los artefactos deben ser salidas REALES de la implementación de las prácticas, no documentos creados ad hoc para la evaluación. Un documento creado el día anterior podría no ser válido si no refleja la práctica habitual de la organización.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'multi',
    question: '¿Qué sucede si durante el On-Site se detecta que la empresa ha creado documentación nueva?',
    options: [
      'Se acepta como evidencia adicional',
      'Se ignora pero la evaluación continúa normalmente',
      'Puede causar el FIN de la evaluación',
      'Se le da una advertencia sin consecuencias'
    ],
    correct: 2,
    justification: 'El incumplimiento de la regla de \'no añadir nueva documentación durante el On-Site\' puede causar el FIN de la evaluación. Solo se puede añadir información que ya existía previamente.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'multi',
    question: 'Una empresa tiene nivel CMMI 2 y quiere obtener nivel 4. ¿Puede hacerlo directamente?',
    options: [
      'Sí, si demuestra cumplir todos los requisitos del nivel 4',
      'Sí, con un SCAMPI A que cubra niveles 2, 3 y 4',
      'No, debe pasar primero por el nivel 3',
      'Sí, pero solo en el modelo Continuous'
    ],
    correct: 2,
    justification: 'No, en el modelo Staged NO se pueden saltar niveles. Debe pasar por el nivel 3 antes de obtener el 4. El modelo es estrictamente incremental: cada nivel se construye sobre el anterior.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'vf',
    question: 'El CMMI Institute es parte del SEI (Software Engineering Institute).',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. El CMMI Institute fue comprado por ISACA y ya NO es parte del SEI. Desde V2.0, el CMMI Institute (ISACA) mantiene y evoluciona el modelo de forma independiente al SEI.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'multi',
    question: '¿Cuántas PAs tiene en total CMMI-DEV V1.3?',
    options: [
      '16 PAs',
      '18 PAs',
      '22 PAs (16 base + 6 específicas)',
      '25 PAs'
    ],
    correct: 2,
    justification: 'CMMI-DEV V1.3 tiene 22 PAs: 16 base (comunes a todas las constelaciones) + 6 específicas de desarrollo (PI, RD, SAM, TS, VAL, VER). Las otras constelaciones (ACQ, SVC) tienen sus propias PAs adicionales.',
    trap: false
  },
  {
    category: 'cmmi-intro',
    type: 'multi',
    question: '¿Qué incremento de productividad reportan las organizaciones con CMMI?',
    options: [
      '1-5%',
      '10-50%',
      '50-100%',
      '100-200%'
    ],
    correct: 1,
    justification: 'Las organizaciones reportan un incremento de productividad del 10-50% con la implementación de CMMI, además de un ROI medio de 4:1.',
    trap: false
  },
  {
    category: 'versiones',
    type: 'vf',
    question: 'Safety (SAF) y Security (SEC) son dominios diferentes en CMMI V3.0: Safety protege al usuario del sistema, Security protege al sistema.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. Safety (SAF) se refiere a la seguridad funcional que protege al USUARIO del sistema (evitar daños físicos). Security (SEC) protege al SISTEMA de amenazas externas (ciberseguridad). Son conceptos distintos.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA aporta \'herramientas y recursos para soportar la implementación de los procesos\'?',
    options: [
      'GOV — Governance',
      'II — Implementation Infrastructure',
      'PAD — Process Asset Development',
      'OT — Organizational Training'
    ],
    correct: 1,
    justification: 'II (Implementation Infrastructure) aporta herramientas y recursos para soportar la implementación de los procesos. GOV se centra en la responsabilidad y patrocinio de la alta dirección.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA desarrolla \'habilidades y conocimientos críticos en los equipos\'?',
    options: [
      'OT — Organizational Training',
      'PAD — Process Asset Development',
      'MPM — Managing Performance & Measurement',
      'GOV — Governance'
    ],
    correct: 0,
    justification: 'OT (Organizational Training) se encarga de desarrollar habilidades y conocimientos críticos en los equipos para soportar los procesos.',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'multi',
    question: '¿Qué PAs incluye el Nivel 3 (Definido) en el modelo Staged?',
    options: [
      'REQM, PP, PMC, PPQA, MA, CM, SAM',
      'DR, TS, VAL, VER, PI, IPM, DAR, OPD, OPF, OT, RISQM',
      'OPP, QPM',
      'OPM, CAR'
    ],
    correct: 1,
    justification: 'Nivel 3 (Definido): DR, TS, VAL, VER, PI, IPM, DAR, OPD, OPF, OT, RISQM. Es el nivel con más PAs y el que suele requerirse en contratos públicos. Incluye la calidad en la construcción del software.',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'multi',
    question: '¿Qué técnicas de auditoría se usan en SCAMPI?',
    options: [
      'Solo análisis de código fuente',
      'Entrevistas y revisión documental',
      'Solo encuestas online',
      'Solo auditorías financieras'
    ],
    correct: 1,
    justification: 'Las técnicas de auditoría SCAMPI incluyen entrevistas (para recoger afirmaciones) y revisión documental (para verificar artefactos). Ambas son necesarias según la regla de oro.',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'vf',
    question: 'En el modelo Continuous, la organización elige qué PAs mejorar y hasta qué CL.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. En el modelo Continuous, la organización tiene la flexibilidad de elegir qué PAs mejorar y hasta qué nivel de capacidad (CL), según las necesidades reales del negocio.',
    trap: false
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Cuál es la principal diferencia entre \'Área de Proceso\' (V1.3) y \'Área de Práctica\' (V2.0)?',
    options: [
      'Solo cambió el nombre, son idénticas',
      'En V1.3 usa SG/SP/GG/GP; en V2.0 usa Practice Groups (PG) con Practices',
      'V2.0 elimina todas las áreas de práctica',
      'V1.3 no tiene áreas de proceso'
    ],
    correct: 1,
    justification: 'En V1.3, un \'Área de Proceso\' usa SG (Specific Goals), SP (Specific Practices), GG y GP. En V2.0, un \'Área de Práctica\' usa Practice Groups (PG) numerados 1-5, cada uno con Practices concretas. Las GG/GP desaparecen y se centralizan en GOV e II.',
    trap: false
  },
  {
    category: 'estructura',
    type: 'vf',
    question: 'Las PAs relacionadas son un elemento Requerido de la estructura de una PA.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 1,
    justification: 'FALSO. Las PAs relacionadas son un elemento INFORMATIVO, no Requerido. Los únicos elementos Requeridos son las Metas Específicas (SG) y las Metas Genéricas (GG).',
    trap: true
  },
  {
    category: 'evaluacion',
    type: 'multi',
    question: '¿Cuál es la escala de calificación NI (Not Implemented)?',
    options: [
      'Artefactos directos presentes con debilidades menores',
      'Artefactos directos presentes y adecuados sin debilidades',
      'Artefactos directos inexistentes o inadecuados, sin otra evidencia de soporte',
      'Solo falta la afirmación pero los artefactos están presentes'
    ],
    correct: 2,
    justification: 'NI (Not Implemented): Artefactos directos inexistentes o inadecuados. No se encuentra otra evidencia (artefactos indirectos ni afirmaciones) que soporte la implementación de la práctica.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA establece \'métricas de rendimiento y objetivos empresariales\' y analiza datos para mejora continua?',
    options: [
      'PQA — Process Quality Assurance',
      'MPM — Managing Performance & Measurement',
      'MC — Monitor and Control',
      'CAR — Causal Analysis & Resolution'
    ],
    correct: 1,
    justification: 'MPM (Managing Performance & Measurement) establece métricas de rendimiento y objetivos empresariales, y analiza datos para mejora continua. Es una de las pocas PAs que alcanzan CL5.',
    trap: false
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Qué dominio de CMMI V3.0 cubre el \'Trabajo en equipos distribuidos o virtuales\'?',
    options: [
      'PPL (People)',
      'SVC (Services)',
      'VRT (Virtual/Remote Work)',
      'SPM (Supplier Management)'
    ],
    correct: 2,
    justification: 'VRT (Virtual/Remote Work) cubre el trabajo en equipos distribuidos o virtuales. Su PA asociada es EVW. PPL cubre gestión de personas en general, no específicamente el trabajo remoto.',
    trap: false
  },
  {
    category: 'scampi',
    type: 'multi',
    question: '¿Cuál es la equivalencia de los tipos de evaluación entre V1.3 y V2.0?',
    options: [
      'SCAMPI A ≈ Evaluation, SCAMPI B ≈ Benchmark',
      'SCAMPI A ≈ Benchmark, SCAMPI B/C ≈ Evaluation, nuevo: Sustainment',
      'Son idénticos, no hay cambios',
      'V2.0 elimina todos los tipos de SCAMPI'
    ],
    correct: 1,
    justification: 'En V2.0: Benchmark ≈ SCAMPI A (oficial, diploma, 3 años). Sustainment es NUEVO (mantener, +2 años, máx 3). Evaluation ≈ SCAMPI B/C (foto rápida, sin diploma).',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA usa \'metodologías estructuradas para la toma de decisiones formales con criterios y alternativas\'?',
    options: [
      'CAR — Causal Analysis & Resolution',
      'DAR — Decision Analysis & Resolution',
      'RSK — Risk Opportunity Management',
      'MC — Monitor and Control'
    ],
    correct: 1,
    justification: 'DAR (Decision Analysis & Resolution) usa metodologías estructuradas para la toma de decisiones formales con criterios y alternativas definidos. CAR se centra en causas raíz, no en decisiones.',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'vf',
    question: 'En V2.0 existe la escala NY (Not Yet) que permite excluir una práctica de la evaluación.',
    options: [
      'Verdadero',
      'Falso'
    ],
    correct: 0,
    justification: 'VERDADERO. V2.0 introduce NY (Not Yet) como escala adicional para prácticas que aún no aplican al estado actual del proyecto. Permite excluirlas de la evaluación sin penalizar el resultado.',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'multi',
    question: '¿Qué nivel de madurez es requerido frecuentemente en contratos públicos?',
    options: [
      'Nivel 1 — Inicial',
      'Nivel 2 — Gestionado',
      'Nivel 3 — Definido',
      'Nivel 5 — Optimizado'
    ],
    correct: 2,
    justification: 'El Nivel 3 (Definido) es frecuentemente requerido en contratos públicos. Es el nivel donde la organización tiene procesos estandarizados para la construcción del software (TS, VER, VAL, PI).',
    trap: false
  },
  // =============================================
  // ===== CATEGORÍA: SPICE / ISO 15504 =====
  // =============================================

  {
    category: 'spice',
    type: 'multi',
    question: '¿Qué significan las siglas SPICE?',
    options: [
      'Software Process Improvement and Capability dEtermination',
      'Standard Process for International Capability Evaluation',
      'Software Product Inspection and Certification Entity',
      'Systematic Process for Integrated Compliance Evaluation'
    ],
    correct: 0,
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
      'Modelo de procesos (ISO 12207) y Modelo de evaluación (ISO 15504)',
      'Modelo de calidad (ISO 9001) y Modelo de certificación (ISO 17021)',
      'Modelo de desarrollo (CMMI) y Modelo de servicios (ITIL)',
      'Modelo técnico y Modelo organizativo'
    ],
    correct: 0,
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
      '3 partes',
      '5 partes',
      '7 partes',
      '10 partes'
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
      'AENOR (ligero) y PathFinder (pesado)',
      'SCAMPI A y SCAMPI B',
      'ISO 9001 y ISO 14001',
      'Benchmark y Evaluation'
    ],
    correct: 0,
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
      '3 / 7 / 11',
      '5 / 10 / 15',
      '4 / 8 / 12'
    ],
    correct: 1,
    justification: 'Mnemónico clave: 3 procesos en nivel 1, 7 en nivel 2, 11 en nivel 3. Es un dato que suele caer en examen.',
    trap: false
  },
  {
    category: 'spice',
    type: 'multi',
    question: '¿Cuáles son los 3 procesos del Nivel 1 del esquema AENOR?',
    options: [
      'PP, ECP, GC',
      'SUM, MCV, GCS',
      'RQU, RQSIS, MED',
      'ACS, GC, MED'
    ],
    correct: 1,
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
      'CMMI-DEV + EFQM',
      'ISO/IEC 12207:2017 (modelo de procesos) + familia ISO/IEC 33000 (modelo de evaluación)',
      'ISO 9001 + ISO 27001',
      'SPICE + CMMI'
    ],
    correct: 1,
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
      '11 procesos',
      '16 procesos',
      '21 procesos',
      '25 procesos'
    ],
    correct: 2,
    justification: 'ISO/IEC 12207:2017 define 21 procesos, que MMIS V.2 usa como modelo de procesos (la dimensión "qué procesos hay").',
    trap: false
  },
  {
    category: 'mmis',
    type: 'multi',
    question: '¿Cuáles son los componentes de ISO 33000 que usa MMIS V.2?',
    options: [
      'ISO 33001, ISO 33010, ISO 33050',
      'ISO 33002 (proceso de evaluación), ISO 33003 (requisitos de medición), ISO 33020 (marco de medición)',
      'ISO 33100, ISO 33200, ISO 33300',
      'Solo ISO 33000 como norma única'
    ],
    correct: 1,
    justification: 'MMIS V.2 usa tres componentes de ISO 33000: ISO 33002 (proceso de evaluación), ISO 33003 (requisitos de medición) e ISO 33020 (marco de medición — métricas para valorar evidencias).',
    trap: false
  },
  {
    category: 'mmis',
    type: 'multi',
    question: '¿Cuántos niveles de madurez tiene MMIS V.2?',
    options: [
      '3 niveles',
      '4 niveles',
      '5 niveles (Básico, Gestionado, Establecido, Predecible, Innovado)',
      '6 niveles'
    ],
    correct: 2,
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
      'Estructura plana sin niveles',
      'Estructura matricial 2D'
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
      'Solo para grandes corporaciones multinacionales',
      'PYMEs y micro-empresas (<10 empleados), aunque también es aplicable a grandes',
      'Solo para empresas del sector público',
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
      'Desarrollo, Testing, Despliegue',
      'Procesos de gestión y desarrollo de software (CMMI-DEV), Gestión del negocio (EFQM/ISO 9000), Gestión de la seguridad (ISO 27000)',
      'Calidad, Coste, Tiempo',
      'Producto, Proyecto, Proceso'
    ],
    correct: 1,
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
      'Sustituto definitivo de CMMI',
      'Pasarela previa a CMMI: ITmark primero, CMMI después',
      'Alternativa a ISO 9001 en auditorías oficiales',
      'Modelo exclusivo para el sector público'
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
      'Es exactamente igual que CMMI nivel 3',
      'Solo sirve para empresas con más de 100 empleados'
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
      'ISO 9001 y ISO 27001',
      'CMMI (mejora de procesos) + EFQM (excelencia en gestión del negocio)',
      'SPICE y ITmark',
      'ISO 15504 y ISO 12207'
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
    category: 'medicion',
    type: 'multi',
    question: '¿Cuáles son los 4 objetivos de medir según la teoría?',
    options: [
      'Documentar, Archivar, Reportar, Presentar',
      'Analizar, Controlar, Predecir, Mejorar',
      'Planificar, Ejecutar, Verificar, Actuar',
      'Medir, Comparar, Optimizar, Certificar'
    ],
    correct: 1,
    justification: 'Los 4 objetivos de medir son: 1) Analizar (entender qué ocurre), 2) Controlar (controlar qué ocurre), 3) Predecir (estimar tiempo, coste, esfuerzo), 4) Mejorar (mejorar procesos y productos con datos).',
    trap: false
  },
  {
    category: 'medicion',
    type: 'multi',
    question: '¿Cuál es la diferencia entre "Medida" y "Medición"?',
    options: [
      'Son sinónimos',
      'Medida es el RESULTADO; Medición es el PROCESO/ALGORITMO para obtenerlo',
      'Medida es el proceso; Medición es el resultado',
      'Medida se aplica a software; Medición a hardware'
    ],
    correct: 1,
    justification: 'Medida = el RESULTADO (indicación sobre un atributo, ej: "50 errores"). Medición = el PROCESO/ALGORITMO (conjunto de operaciones para obtener la medida, ej: ejecutar la herramienta de recuento).',
    trap: false
  },
  {
    category: 'medicion',
    type: 'multi',
    question: '¿Cuál es la diferencia entre "Métrica" e "Indicador"?',
    options: [
      'Son sinónimos, no hay diferencia',
      'La métrica es la FÓRMULA; el indicador es la métrica + criterios de análisis (interpretación y acciones)',
      'El indicador es la fórmula; la métrica incluye la interpretación',
      'La métrica es cualitativa; el indicador es cuantitativo'
    ],
    correct: 1,
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
    category: 'medicion',
    type: 'multi',
    question: '¿Cuáles son las 4 escalas de medida?',
    options: [
      'Binaria, Decimal, Hexadecimal, Octal',
      'Nominal, Ordinal, Intervalo, Razón (Ratio)',
      'Alta, Media, Baja, Nula',
      'Continua, Discreta, Categórica, Temporal'
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
      'Todas: =, ≠, <, >, +, −, ×, ÷',
      'Solo = y ≠ (igualdad y desigualdad)',
      '=, ≠, <, > (orden)',
      '=, ≠, +, − (suma y resta)'
    ],
    correct: 1,
    justification: 'La escala Nominal solo permite clasificar en categorías exclusivas con operaciones = y ≠ (igualdad y desigualdad). No hay orden ni operaciones matemáticas. Ej: tipo de ciclo (Scrum/Waterfall).',
    trap: false
  },
  {
    category: 'medicion',
    type: 'multi',
    question: '¿Qué operaciones permite la escala Ordinal?',
    options: [
      'Solo = y ≠',
      '=, ≠, <, > (orden, pero NO suma ni resta)',
      '=, ≠, +, − (suma y resta)',
      'Todas las operaciones'
    ],
    correct: 1,
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
      'En Intervalo el 0 es un valor real; en Ratio el 0 significa AUSENCIA de valor',
      'En Intervalo el 0 indica ausencia; en Ratio el 0 es un valor real',
      'Intervalo permite multiplicación; Ratio no'
    ],
    correct: 1,
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
      'Un estándar ISO que obliga a usar métricas específicas',
      'Una colección organizada de las métricas que usa una organización, típicamente en categorías Producto/Proyecto/Proceso',
      'Una base de datos de errores del software',
      'Un listado de certificaciones de calidad'
    ],
    correct: 1,
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
    category: 'medicion',
    type: 'multi',
    question: '¿Qué es la Ficha de Indicador del INCIBE?',
    options: [
      'Un estándar ISO oficial para definir métricas',
      'Una plantilla habitual (~20 campos) para documentar indicadores, pero NO es un estándar ISO oficial',
      'Un formulario obligatorio de la administración pública',
      'Un certificado de calidad del software'
    ],
    correct: 1,
    justification: 'La Ficha de Indicador es una plantilla del INCIBE (Instituto Nacional de Ciberseguridad) con ~20 campos para documentar indicadores. NO es un estándar ISO oficial. Es la plantilla más habitual y cada empresa decide qué campos usa.',
    trap: false
  },
  {
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
      'Key Process Inspections — auditorías de procesos',
      'Key Project Items — entregables del proyecto'
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
      'Un certificado de calidad ISO',
      'Una herramienta que monitoriza, controla y gestiona procesos a través de KPIs',
      'Un documento de requisitos del software',
      'Un informe de auditoría externa'
    ],
    correct: 1,
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
      'Directa se mide en campo; indirecta se calcula en oficina',
      'Directa no depende de otras métricas y se mide directamente; indirecta es combinación matemática de varias directas',
      'Directa es objetiva; indirecta es subjetiva',
      'Directa es para productos; indirecta es para procesos'
    ],
    correct: 1,
    justification: 'Directa (simple): no depende de otras métricas, se mide directamente (ej: LOC, nº requisitos). Indirecta (compuesta): combinación matemática de varias directas (ej: Satisfacción = f(tiempo + quejas + clientes perdidos)).',
    trap: false
  },
  {
    category: 'metricas',
    type: 'multi',
    question: '¿Qué diferencia hay entre una métrica estática y una dinámica?',
    options: [
      'Estática cambia con el tiempo; dinámica no',
      'Estática mide un atributo en un momento específico; dinámica mide el cambio de una cantidad por unidad de otra variable',
      'Estática es para código; dinámica es para procesos',
      'No hay diferencia, son sinónimos'
    ],
    correct: 1,
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
      'Son sinónimos',
      'En un Ratio, numerador y denominador son EXCLUYENTES; en una Proporción, el numerador es PARTE del denominador',
      'Ratio se mide en %; Proporción en números enteros',
      'Ratio es directa; Proporción es indirecta'
    ],
    correct: 1,
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
      'Satisfacción del cliente (combinación de encuesta + quejas + fidelización)',
      'LOC (líneas de código) — se mide directamente sin depender de otras',
      'Densidad de defectos (defectos / KLOC)',
      'DRE (Defect Removal Efficiency)'
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
      'Define métricas de calidad del proceso de desarrollo',
      'Define métricas para medir la calidad del PRODUCTO software (no proceso, no proyecto)',
      'Es un estándar de seguridad informática',
      'Define procesos de gestión de proyectos'
    ],
    correct: 1,
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
      'ISO 25000 define métricas de calidad del proceso',
      'MMIS V.2 reemplaza ISO 15504 por ISO 33000'
    ],
    correct: 3,
    justification: 'MMIS V.2 efectivamente reemplaza ISO 15504 por ISO 33000. Las demás son falsas: SPICE es genérico, ITmark cubre 3 áreas, e ISO 25000 define métricas del PRODUCTO (no proceso).',
    trap: true
  },
  {
    category: 'trampas',
    type: 'multi',
    question: '¿Cuál de estas afirmaciones sobre escalas de medida es FALSA?',
    options: [
      'Nominal solo permite = y ≠',
      'Ordinal permite <, > pero no suma/resta',
      'Intervalo: el 0 es un valor real',
      'Ratio: el 0 es un valor real (no ausencia)'
    ],
    correct: 3,
    justification: 'En Ratio el 0 indica AUSENCIA de valor (0 absoluto), no es "un valor real". El 0 como valor real es propio de la escala de Intervalo (ej: 0°C existe como temperatura).',
    trap: true
  },
  {
    category: 'trampas',
    type: 'multi',
    question: 'Un profesor dice: "nº de errores en pruebas = 0". ¿Qué escala usa si 0 = pruebas ejecutadas sin errores?',
    options: [
      'Nominal',
      'Ordinal',
      'Intervalo (0 = resultado válido, pruebas ejecutadas)',
      'Ratio (0 = ausencia, pruebas no ejecutadas)'
    ],
    correct: 2,
    justification: 'Si 0 = pruebas ejecutadas sin errores, el 0 es un RESULTADO VÁLIDO → escala de Intervalo. Si 0 = pruebas aún no ejecutadas (ausencia), sería Ratio. Confundir esto puede ser desastroso.',
    trap: true
  },
  // =============================================
  // ===== CATEGORÍA: CONCEPTOS BASE =====
  // =============================================
  {
    category: 'conceptos',
    type: 'vf',
    question: 'Una auditoría interna es aseguramiento de calidad.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. Una auditoría interna es aseguramiento de calidad (QA). Verifica que se siguen los procesos, procedimientos, plantillas y registros del SGC. NO comprueba si el producto está técnicamente bien — eso es control de calidad (QC).',
    trap: true
  },
  {
    category: 'conceptos',
    type: 'multi',
    question: '¿Qué verifica una auditoría interna?',
    options: [
      'Que el código cumple con los estándares de codificación.',
      'Que el producto software no tiene defectos técnicos.',
      'Que las pruebas unitarias tienen cobertura suficiente.',
      'Que se siguen los procesos, procedimientos, plantillas y registros del SGC.'
    ],
    correct: 3,
    justification: 'Una auditoría interna verifica que se siguen los procesos, procedimientos, plantillas y registros del SGC. Es aseguramiento de calidad, no control de calidad. No comprueba la calidad técnica del producto.',
    trap: false
  },
  {
    category: 'conceptos',
    type: 'multi',
    question: '¿Cuáles son las dos modalidades de auditoría interna?',
    options: [
      'Auditoría de certificación y Auditoría de seguimiento.',
      'Auditoría técnica y Auditoría administrativa.',
      'Auditoría interna y Auditoría externa.',
      'Verificación de fase (VF) y Auditoría general (AG).'
    ],
    correct: 3,
    justification: 'Las dos modalidades complementarias son: Verificación de fase (VF), que cubre fases del ciclo de vida de un proyecto, y Auditoría general (AG), que cubre áreas/departamentos fuera de los proyectos (marketing, RRHH, compras...).',
    trap: false
  },
  {
    category: 'conceptos',
    type: 'vf',
    question: 'Las auditorías internas nunca se realizan por sorpresa y deben planificarse con antelación.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 1,
    justification: 'VERDADERO. Las auditorías NUNCA son por sorpresa. Deben planificarse con antelación y comunicarse a los afectados. El auditado necesita preparar documentación y dedicar tiempo (3+ horas, entrevistas, etc.).',
    trap: true
  },
  {
    category: 'conceptos',
    type: 'vf',
    question: 'Una auditoría interna puede ser por sorpresa si el auditor es personal interno de la empresa.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. Las auditorías NUNCA son por sorpresa, independientemente de si el auditor es interno o externo. Siempre deben planificarse con antelación y comunicarse a los afectados.',
    trap: true
  },
  {
    category: 'conceptos',
    type: 'multi',
    question: '¿Qué tipo de auditoría interna cubre las fases del ciclo de vida de un proyecto?',
    options: [
      'Auditoría de certificación.',
      'Auditoría general (AG).',
      'Auditoría de seguimiento.',
      'Verificación de fase (VF).'
    ],
    correct: 3,
    justification: 'La Verificación de fase (VF) cubre las fases del ciclo de vida de un proyecto software. La Auditoría general (AG), en cambio, cubre áreas o departamentos fuera de los proyectos.',
    trap: false
  },
  {
    category: 'conceptos',
    type: 'multi',
    question: '¿Qué tipo de auditoría interna cubre áreas como RRHH, marketing o compras?',
    options: [
      'Auditoría de procesos.',
      'Verificación de fase (VF).',
      'Auditoría de producto.',
      'Auditoría general (AG).'
    ],
    correct: 3,
    justification: 'La Auditoría general (AG) cubre áreas/departamentos fuera de los proyectos, como marketing, RRHH o compras. La VF se centra en las fases del ciclo de vida de los proyectos software.',
    trap: false
  },
  {
    category: 'conceptos',
    type: 'vf',
    question: 'Para auditar departamentos como RRHH, que no están proyectizados, es necesario realizar Auditorías Generales (AG).',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. Si solo auditas proyectos (VF), los departamentos nunca se auditan, lo que constituiría una no conformidad mayúscula. Por eso existen las Auditorías Generales (AG), para cubrir áreas no proyectizadas.',
    trap: true
  },

  // =============================================
  // ===== CATEGORÍA: 5 CRITERIOS DEL AUDITOR =====
  // =============================================
  {
    category: 'criterios',
    type: 'multi',
    question: '¿Cuáles son los 5 criterios que debe cumplir cualquier auditor interno?',
    options: [
      'Competencia técnica, experiencia laboral, certificación oficial, antigüedad y liderazgo.',
      'Certificación ISO, experiencia laboral, independencia, formación y liderazgo.',
      'Independencia, formación universitaria, certificación ISO, experiencia de gestión y objetividad.',
      'Independencia, objetividad, experiencia auditando, competencia técnica y experiencia en el área.'
    ],
    correct: 3,
    justification: 'Los 5 criterios son: (1) Ser independiente del área/proyecto/proceso que va a auditar, (2) Ser objetivo (juicio basado en evidencias), (3) Tener experiencia auditando, (4) Ser competente en el ámbito técnico/funcional que va a auditar, (5) Tener experiencia en el área que va a evaluar.',
    trap: false
  },
  {
    category: 'criterios',
    type: 'vf',
    question: 'Un auditor nunca puede auditar su propio departamento, independientemente de su experiencia en auditorías.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. El primer criterio del auditor es ser independiente del área, proyecto o proceso que va a auditar. La experiencia en auditorías no exime del requisito de independencia.',
    trap: true
  },
  {
    category: 'criterios',
    type: 'vf',
    question: 'Los 5 criterios del auditor aplican solo al Auditor Técnico de verificación de fase.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. Los 5 criterios aplican a CUALQUIER auditor, tanto Técnico (VF) como de Sistemas (AG). No se puede saltar ningún criterio.',
    trap: true
  },
  {
    category: 'criterios',
    type: 'multi',
    question: '¿Qué significa "ser objetivo" como criterio del auditor?',
    options: [
      'Haber realizado auditorías previamente.',
      'Tener conocimientos técnicos del área auditada.',
      'No tener relación personal con el auditado.',
      'Juicio basado en evidencias, sin sesgo ni interés en el resultado.'
    ],
    correct: 3,
    justification: 'Ser objetivo significa que el juicio debe estar basado en evidencias, sin sesgo ni interés personal en el resultado de la auditoría.',
    trap: false
  },
  {
    category: 'criterios',
    type: 'vf',
    question: 'El auditor de un procedimiento no puede coincidir con el revisor del mismo procedimiento.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. El auditor debe ser ajeno/independiente del área auditada. Si es revisor del procedimiento, pierde la imparcialidad requerida por el criterio de independencia.',
    trap: true
  },
  {
    category: 'criterios',
    type: 'multi',
    question: '¿Cuál es la forma corta (3 características) de los requisitos del auditor, tal como ha caído en examen?',
    options: [
      'Formado, experimentado y objetivo.',
      'Independiente, certificado y técnico.',
      'Externo, imparcial y competente.',
      'Ajeno al área auditada, conocimientos y experiencia en auditar, conocimientos y experiencia en lo auditado.'
    ],
    correct: 3,
    justification: 'La forma corta (3 características) que ha caído en examen es: (1) Ajeno al área/fase/proyecto auditado, (2) Conocimientos y experiencia EN AUDITAR, (3) Conocimientos y experiencia EN LO AUDITADO.',
    trap: false
  },
  {
    category: 'criterios',
    type: 'vf',
    question: 'Una auditoría interna puede ser realizada por personal del propio departamento auditado si tiene competencia técnica.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. El auditor debe ser AJENO al área auditada, incluso siendo personal interno de la empresa. La imparcialidad es un requisito fundamental irrenunciable.',
    trap: true
  },
  {
    category: 'criterios',
    type: 'multi',
    question: '¿Qué diferencia de perfil existe entre el auditor de VF y el de AG?',
    options: [
      'Ambos necesitan exactamente los mismos conocimientos técnicos.',
      'El de VF no necesita ser técnico; el de AG sí necesita ser ingeniero.',
      'El de AG siempre debe ser externo a la empresa; el de VF es interno.',
      'El de VF necesita conocimientos en desarrollo software; el de AG necesita conocimientos del área que audita (no necesariamente software).'
    ],
    correct: 3,
    justification: 'El Auditor Técnico de VF debe tener conocimientos en desarrollo software. El Auditor de Sistemas (AG) necesita conocimientos del área que audita (RRHH, contabilidad, etc.), pero no necesita saber de software.',
    trap: false
  },

  // =============================================
  // ===== CATEGORÍA: ROLES Y RESPONSABILIDADES =====
  // =============================================
  {
    category: 'roles',
    type: 'multi',
    question: '¿Quién aprueba el programa anual de auditorías?',
    options: [
      'El Auditor de Sistemas.',
      'El Responsable de Calidad.',
      'El Jefe de Proyecto.',
      'El Director General.'
    ],
    correct: 3,
    justification: 'El Director General aprueba el programa anual de auditorías, así como las versiones y modificaciones del PAI, y asegura la disponibilidad de recursos.',
    trap: false
  },
  {
    category: 'roles',
    type: 'multi',
    question: '¿Quién elabora el programa anual de auditorías?',
    options: [
      'El Auditor de Sistemas.',
      'El Director General.',
      'El Jefe de Proyecto.',
      'El Responsable de Calidad.'
    ],
    correct: 3,
    justification: 'El Responsable de Calidad elabora el programa anual de auditorías. El Director General solo lo aprueba.',
    trap: false
  },
  {
    category: 'roles',
    type: 'multi',
    question: '¿Quién designa al auditor garantizando su independencia?',
    options: [
      'El Jefe de Proyecto.',
      'El Director General.',
      'El propio auditor se autodesigna.',
      'El Responsable de Calidad.'
    ],
    correct: 3,
    justification: 'El Responsable de Calidad designa al auditor, garantizando su independencia respecto al área o proyecto auditado.',
    trap: false
  },
  {
    category: 'roles',
    type: 'multi',
    question: '¿Quién revisa y aprueba el informe de auditoría (tanto VF como AG)?',
    options: [
      'El Auditor que realizó la auditoría.',
      'El Director General.',
      'El Jefe de Proyecto.',
      'El Responsable de Calidad.'
    ],
    correct: 3,
    justification: 'El Responsable de Calidad revisa y aprueba el informe de auditoría. El auditor lo elabora y lo remite al RC, pero no lo aprueba. El RC también envía copia al destinatario.',
    trap: false
  },
  {
    category: 'roles',
    type: 'vf',
    question: 'El informe de auditoría lo elabora y lo aprueba el Responsable de Calidad.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. El informe lo ELABORA el auditor (Técnico o de Sistemas) y lo remite al Responsable de Calidad. El RC lo REVISA y APRUEBA, pero no lo elabora. Son funciones distintas.',
    trap: true
  },
  {
    category: 'roles',
    type: 'multi',
    question: '¿Quién realiza el seguimiento y cierre formal de las acciones correctivas?',
    options: [
      'El Auditor que detectó la no conformidad.',
      'El Jefe de Proyecto (solo en VF).',
      'El Director General.',
      'El Responsable de Calidad (en ambos casos, VF y AG).'
    ],
    correct: 3,
    justification: 'El Responsable de Calidad realiza el seguimiento y cierre formal de acciones correctivas en AMBOS casos (VF y AG). El JP supervisa la ejecución en VF, y el Responsable del área en AG, pero el cierre formal es del RC.',
    trap: false
  },
  {
    category: 'roles',
    type: 'multi',
    question: '¿Quién incluye las verificaciones de fase en el plan de proyecto con fechas?',
    options: [
      'El Auditor Técnico.',
      'El Responsable de Calidad.',
      'El Director Técnico.',
      'El Jefe de Proyecto.'
    ],
    correct: 3,
    justification: 'El Jefe de Proyecto incluye las VFs en el plan de proyecto con fechas concretas. También facilita acceso a documentación y personal, y acuerda acciones correctivas con el Auditor Técnico.',
    trap: false
  },
  {
    category: 'roles',
    type: 'multi',
    question: '¿Quién convoca y dirige la reunión inicial y final en una AG?',
    options: [
      'El responsable del área auditada.',
      'El Responsable de Calidad.',
      'El Director General.',
      'El Auditor de Sistemas.'
    ],
    correct: 3,
    justification: 'El Auditor de Sistemas convoca y dirige la reunión inicial y final en las auditorías generales. Presenta objetivo, alcance, técnicas, pasos y calendario en la reunión inicial.',
    trap: false
  },
  {
    category: 'roles',
    type: 'vf',
    question: 'El procedimiento de auditorías internas lo aprueba el Responsable de Calidad.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. El Responsable de Calidad REVISA el procedimiento (PAI). Quien lo APRUEBA es el Director General, que tiene potestad sobre la empresa.',
    trap: true
  },
  {
    category: 'roles',
    type: 'multi',
    question: '¿Quién supervisa la ejecución de acciones correctivas en una verificación de fase?',
    options: [
      'El Auditor Técnico.',
      'El Responsable de Calidad.',
      'El Director General.',
      'El Jefe de Proyecto.'
    ],
    correct: 3,
    justification: 'En VF, el Jefe de Proyecto supervisa la ejecución de las acciones correctivas. En AG, es el Responsable del área. El cierre formal siempre es del Responsable de Calidad.',
    trap: false
  },
  {
    category: 'roles',
    type: 'multi',
    question: '¿Quién acuerda las acciones correctivas con el Auditor de Sistemas en una AG?',
    options: [
      'El Responsable de Calidad.',
      'El Jefe de Proyecto.',
      'El Director General.',
      'El Responsable del área auditada.'
    ],
    correct: 3,
    justification: 'En AG, el Auditor de Sistemas acuerda acciones correctivas con el Responsable del área auditada (en la reunión final). En VF, es el Auditor Técnico con el Jefe de Proyecto.',
    trap: false
  },

  // =============================================
  // ===== CATEGORÍA: VERIFICACIÓN DE FASE =====
  // =============================================
  {
    category: 'vf',
    type: 'multi',
    question: '¿Cuántas verificaciones de fase establece YOMALUSAKE por proyecto?',
    options: [
      '1 verificación al final del proyecto.',
      '2 verificaciones de fase.',
      '13 verificaciones (una por cada fase).',
      '4 verificaciones de fase.'
    ],
    correct: 3,
    justification: 'YOMALUSAKE establece 4 verificaciones de fase por proyecto: VF-1 (Requisitos), VF-2 (Tras pruebas unitarias), VF-3 (Tras pruebas de sistema), VF-4 (Cierre del proyecto).',
    trap: false
  },
  {
    category: 'vf',
    type: 'multi',
    question: '¿En qué momento se realiza la VF-1?',
    options: [
      'Tras las pruebas de sistema.',
      'Tras las pruebas unitarias.',
      'Al cierre del proyecto.',
      'Tras la fase de requisitos.'
    ],
    correct: 3,
    justification: 'La VF-1 (Requisitos) se realiza tras la fase de requisitos, antes de empezar a diseñar. Asegura que los requisitos del cliente están bien capturados.',
    trap: false
  },
  {
    category: 'vf',
    type: 'multi',
    question: '¿En qué momento se realiza la VF-2 (PU)?',
    options: [
      'Tras las pruebas de sistema.',
      'Tras la fase de requisitos.',
      'Al cierre del proyecto.',
      'Tras las pruebas unitarias.'
    ],
    correct: 3,
    justification: 'La VF-2 (PU) se realiza tras las pruebas unitarias. Comprueba el código antes de integrarlo en el entorno común de pruebas.',
    trap: false
  },
  {
    category: 'vf',
    type: 'multi',
    question: '¿Cuál es el mínimo de VFs para proyectos pequeños?',
    options: [
      '4 VFs (sin excepción).',
      '1 VF al cierre.',
      'Ninguna, están exentos.',
      '2 VFs (una en cada mitad del ciclo).'
    ],
    correct: 3,
    justification: 'Para proyectos pequeños, el mínimo es 2 VFs (una en cada mitad del ciclo). Debe justificarse en el plan de proyecto y aprobarlo el Responsable de Calidad.',
    trap: false
  },
  {
    category: 'vf',
    type: 'vf',
    question: 'La reducción a 2 VFs en proyectos pequeños no requiere ninguna aprobación especial.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. La reducción a 2 VFs debe justificarse en el plan de proyecto y requiere la aprobación del Responsable de Calidad.',
    trap: true
  },
  {
    category: 'vf',
    type: 'multi',
    question: '¿Quién planifica las verificaciones de fase?',
    options: [
      'El Auditor Técnico.',
      'El Responsable de Calidad (en el programa anual).',
      'El Director General.',
      'El Jefe de Proyecto (las incluye en el plan de proyecto).'
    ],
    correct: 3,
    justification: 'El Jefe de Proyecto planifica las VFs incluyéndolas en el plan de proyecto con fechas concretas. El Responsable de Calidad planifica las AG (programa anual), no las VFs.',
    trap: false
  },
  {
    category: 'vf',
    type: 'vf',
    question: 'En una verificación de fase se realiza reunión inicial y reunión final.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. En las verificaciones de fase NO hay reunión inicial ni reunión final. Las reuniones son exclusivas de las Auditorías Generales (AG). En VF, la frecuencia es alta y el equipo ya conoce el proceso.',
    trap: true
  },
  {
    category: 'vf',
    type: 'multi',
    question: '¿Cuáles son las técnicas de obtención de evidencias en una VF?',
    options: [
      'Solo entrevistas al personal.',
      'Solo revisión de código fuente.',
      'Solo análisis de métricas de producto.',
      'Examen de documentación, análisis de registros de calidad, entrevistas al personal y observación directa.'
    ],
    correct: 3,
    justification: 'El Auditor Técnico obtiene evidencias mediante: examen de documentación (entregables, planes, especificaciones), análisis de registros de calidad, entrevistas al personal y observación directa.',
    trap: false
  },
  {
    category: 'vf',
    type: 'multi',
    question: '¿Cuál es el paso 6 del flujo completo de una VF?',
    options: [
      'El Auditor Técnico elabora el informe de VF.',
      'El Responsable de Calidad designa al Auditor Técnico.',
      'El RC envía copia al JP.',
      'Acuerdo entre Auditor Técnico y Jefe de Proyecto sobre acciones correctivas, responsables y fechas límite.'
    ],
    correct: 3,
    justification: 'El paso 6 del flujo de VF es que el Auditor Técnico acuerda con el Jefe de Proyecto las acciones correctivas, responsables y fechas límite para cada no conformidad detectada.',
    trap: false
  },
  {
    category: 'vf',
    type: 'multi',
    question: '¿A quién remite el informe de VF el Auditor Técnico?',
    options: [
      'Al Director General.',
      'Directamente al Jefe de Proyecto.',
      'Al Director Técnico.',
      'Al Responsable de Calidad, que lo revisa y aprueba.'
    ],
    correct: 3,
    justification: 'El Auditor Técnico elabora el Informe de VF y lo remite al Responsable de Calidad, quien lo revisa y aprueba. Luego el RC envía copia al Jefe de Proyecto.',
    trap: false
  },
  {
    category: 'vf',
    type: 'vf',
    question: 'El informe de VF se elabora completamente al final de la auditoría, tras reunir todas las evidencias.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. El informe se va construyendo DURANTE la auditoría, anotando cada no conformidad con su evidencia objetiva EN EL MOMENTO. Si se espera al final, se corre el riesgo de perder evidencias.',
    trap: true
  },
  {
    category: 'vf',
    type: 'multi',
    question: '¿Quién recibe la copia del informe de VF aprobado?',
    options: [
      'El Director General.',
      'El responsable del área auditada.',
      'El Auditor Técnico.',
      'El Jefe de Proyecto.'
    ],
    correct: 3,
    justification: 'En VF, la copia del informe aprobado va al Jefe de Proyecto. En AG, va al Responsable del área auditada.',
    trap: false
  },

  // =============================================
  // ===== CATEGORÍA: AUDITORÍA GENERAL =====
  // =============================================
  {
    category: 'ag',
    type: 'multi',
    question: '¿Quién planifica las auditorías generales?',
    options: [
      'El Auditor de Sistemas.',
      'El Jefe de Proyecto.',
      'El Director General.',
      'El Responsable de Calidad (programa anual).'
    ],
    correct: 3,
    justification: 'El Responsable de Calidad elabora el programa anual de auditorías generales (que aprueba el Director General). Es su iniciativa, no hay plan de proyecto involucrado.',
    trap: false
  },
  {
    category: 'ag',
    type: 'multi',
    question: '¿Con cuánta antelación se comunica la fecha de AG al responsable del área?',
    options: [
      '1 mes de antelación.',
      '1 día de antelación.',
      'No requiere antelación, puede ser por sorpresa.',
      '1 semana de antelación.'
    ],
    correct: 3,
    justification: 'El RC comunica la fecha al responsable del área con 1 semana de antelación. Si la fecha no conviene, se acuerda otra entre ambos.',
    trap: false
  },
  {
    category: 'ag',
    type: 'vf',
    question: 'En una auditoría general, la fecha es inamovible y no se puede negociar.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. Si la fecha comunicada no conviene al área, se puede acordar otra entre el Responsable de Calidad y el responsable del área auditada.',
    trap: true
  },
  {
    category: 'ag',
    type: 'multi',
    question: '¿Qué se presenta en la reunión inicial de una AG?',
    options: [
      'Las acciones correctivas acordadas.',
      'Los resultados y hallazgos de la auditoría.',
      'El informe final de auditoría.',
      'Objetivo, alcance, técnicas, pasos y calendario de la auditoría.'
    ],
    correct: 3,
    justification: 'En la reunión inicial (convocada por el Auditor de Sistemas), se presenta el objetivo, alcance, técnicas, pasos y calendario. Es una reunión organizativa, previa al trabajo de campo.',
    trap: false
  },
  {
    category: 'ag',
    type: 'multi',
    question: '¿Quiénes asisten a la reunión inicial de una AG?',
    options: [
      'El Director General y el Responsable de Calidad.',
      'Solo el Auditor de Sistemas.',
      'Todo el personal de la empresa.',
      'El responsable del área y el personal implicado.'
    ],
    correct: 3,
    justification: 'A la reunión inicial asisten el responsable del área auditada y el personal implicado. El Auditor de Sistemas convoca y dirige la reunión.',
    trap: false
  },
  {
    category: 'ag',
    type: 'multi',
    question: '¿Qué ocurre en la reunión final de una AG?',
    options: [
      'Se decide si se repite la auditoría.',
      'Solo se entrega el informe firmado.',
      'Se celebra la finalización exitosa de la auditoría.',
      'El Auditor presenta resultados y se acuerdan acciones correctivas, responsables y fechas límite.'
    ],
    correct: 3,
    justification: 'En la reunión final, el Auditor de Sistemas presenta formalmente los resultados. Junto con el responsable del área, acuerdan acciones correctivas, responsables y fechas límite.',
    trap: false
  },
  {
    category: 'ag',
    type: 'vf',
    question: 'La auditoría general no requiere reunión inicial porque el área ya conoce sus procesos.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. La AG SÍ requiere reunión inicial (convocada por el Auditor de Sistemas). La frecuencia menor de las AG hace que el personal pueda no estar familiarizado con el proceso de auditoría.',
    trap: true
  },
  {
    category: 'ag',
    type: 'multi',
    question: '¿Qué técnicas de obtención de evidencias usa el Auditor de Sistemas en el trabajo de campo?',
    options: [
      'Solo entrevistas al responsable del área.',
      'Solo inspección visual de las instalaciones.',
      'Solo revisión de los informes financieros.',
      'Examen de documentación y registros, entrevistas al personal y observación directa.'
    ],
    correct: 3,
    justification: 'El Auditor de Sistemas obtiene evidencias objetivas mediante: examen de documentación y registros del área, entrevistas al personal del área auditada y observación directa.',
    trap: false
  },
  {
    category: 'ag',
    type: 'multi',
    question: '¿Quién supervisa que el equipo ejecute las acciones correctivas en una AG?',
    options: [
      'El Responsable de Calidad.',
      'El Auditor de Sistemas.',
      'El Director General.',
      'El Responsable del área auditada.'
    ],
    correct: 3,
    justification: 'En AG, el Responsable del área supervisa que su equipo ejecute las acciones correctivas. El Responsable de Calidad hace el seguimiento y cierre formal.',
    trap: false
  },
  {
    category: 'ag',
    type: 'multi',
    question: '¿Cuál es el último paso del flujo completo de una AG?',
    options: [
      'El Director General aprueba los resultados.',
      'El Auditor de Sistemas elabora el informe.',
      'Se comunica la fecha al responsable del área.',
      'El Responsable de Calidad hace el seguimiento y cierre formal.'
    ],
    correct: 3,
    justification: 'El último paso del flujo de AG es que el Responsable de Calidad hace el seguimiento y cierre formal de las acciones correctivas, igual que en las VFs.',
    trap: false
  },
  {
    category: 'ag',
    type: 'multi',
    question: '¿A quién se envía la copia del informe de AG aprobado?',
    options: [
      'Al Director General.',
      'Al Jefe de Proyecto.',
      'Al Auditor de Sistemas.',
      'Al responsable del área auditada.'
    ],
    correct: 3,
    justification: 'En AG, la copia del informe aprobado se envía al responsable del área auditada. En VF, se envía al Jefe de Proyecto.',
    trap: false
  },

  // =============================================
  // ===== CATEGORÍA: NO CONFORMIDADES =====
  // =============================================
  {
    category: 'nc',
    type: 'multi',
    question: '¿Qué es una No Conformidad (NC) Grave?',
    options: [
      'Una sugerencia de mejora del auditor.',
      'Un incumplimiento menor sin consecuencias.',
      'Un defecto técnico en el producto.',
      'Un incumplimiento de un requisito del SGC que paraliza el proyecto/actividad.'
    ],
    correct: 3,
    justification: 'NC Grave: incumple un requisito del SGC. Consecuencia: paralización del proyecto o actividad hasta resolverla + acciones correctivas inmediatas.',
    trap: false
  },
  {
    category: 'nc',
    type: 'multi',
    question: '¿Qué es una No Conformidad (NC) Leve?',
    options: [
      'Una sugerencia de mejora.',
      'Un incumplimiento que paraliza el proyecto.',
      'Un error en el informe de auditoría.',
      'Un incumplimiento que no compromete directamente el SGC y se corrige en plazo sin paralización.'
    ],
    correct: 3,
    justification: 'NC Leve: incumplimiento que no compromete directamente el SGC. Consecuencia: corrección en plazo establecido. Sin paralización.',
    trap: false
  },
  {
    category: 'nc',
    type: 'vf',
    question: 'Una observación de auditoría se clasifica como no conformidad leve.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. Una observación NO es no conformidad. Es una situación que podría derivar en incumplimiento, o una oportunidad de mejora. No tiene la clasificación grave/leve.',
    trap: true
  },
  {
    category: 'nc',
    type: 'multi',
    question: '¿Qué consecuencia tiene una NC Grave?',
    options: [
      'Notificación al Director General sin más.',
      'Solo corrección en plazo establecido sin paralización.',
      'Pérdida inmediata de la certificación ISO.',
      'Paralización del proyecto o actividad hasta resolverla + acciones correctivas inmediatas.'
    ],
    correct: 3,
    justification: 'Una NC Grave implica paralización del proyecto o actividad hasta resolverla, más acciones correctivas inmediatas. Es el nivel más crítico de hallazgo.',
    trap: false
  },
  {
    category: 'nc',
    type: 'vf',
    question: 'Ante una NC Grave, el proyecto continúa normalmente mientras se planifica la corrección.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. Si la NC es Grave, se PARA el proyecto o actividad hasta arreglarla. Si es necesaria replanificación, se genera una nueva versión del plan.',
    trap: true
  },
  {
    category: 'nc',
    type: 'multi',
    question: '¿Qué debe registrarse por cada no conformidad detectada?',
    options: [
      'Solo el nombre del auditor que la detectó.',
      'Solo la descripción de la no conformidad.',
      'Solo la clasificación grave/leve.',
      'Acción correctiva acordada + responsable + fecha límite + clasificación (grave/leve).'
    ],
    correct: 3,
    justification: 'Por cada NC se debe registrar: la acción correctiva acordada, el responsable de ejecutarla, la fecha límite y la clasificación como grave o leve.',
    trap: false
  },
  {
    category: 'nc',
    type: 'vf',
    question: 'Las no conformidades las clasifica unilateralmente el auditor, sin consultar al auditado.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. Las acciones correctivas se ACUERDAN entre el auditor y el auditado (JP en VF, responsable del área en AG). No es una decisión unilateral del auditor.',
    trap: true
  },
  {
    category: 'nc',
    type: 'vf',
    question: 'La acción correctiva busca eliminar la causa raíz de la no conformidad.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. La acción correctiva ataja la no conformidad EN SÍ. Es la acción PREVENTIVA la que busca eliminar la causa raíz. En ISO 9001:2015, la preventiva se sustituye por gestión de riesgos.',
    trap: true
  },
  {
    category: 'nc',
    type: 'multi',
    question: '¿Cuál es la diferencia entre acción correctiva y acción preventiva?',
    options: [
      'Son sinónimos con distinto nombre.',
      'Correctiva: ataja la causa raíz. Preventiva: ataja la no conformidad.',
      'Correctiva se aplica antes y preventiva después.',
      'Correctiva: ataja la no conformidad real detectada. Preventiva: ataja la causa raíz / problema potencial.'
    ],
    correct: 3,
    justification: 'Correctiva: origen en no conformidad REAL detectada en auditoría, ataja la NC en sí. Preventiva: origen en problema POTENCIAL (sugerencias, estadísticas, quejas), ataja la CAUSA RAÍZ. En 2015, la preventiva se sustituye por gestión de riesgos.',
    trap: false
  },
  {
    category: 'nc',
    type: 'vf',
    question: 'Una sugerencia de mejora del SGC origina una acción correctiva.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. Una sugerencia de mejora origina una acción PREVENTIVA (problema potencial), no correctiva. La acción correctiva solo se origina ante una no conformidad REAL detectada en auditoría.',
    trap: true
  },

  // =============================================
  // ===== CATEGORÍA: INFORMES Y DOCUMENTACIÓN =====
  // =============================================
  {
    category: 'informes',
    type: 'multi',
    question: '¿Cuál es el código del formulario del informe de Verificación de Fase?',
    options: [
      'PAI-F01.',
      'PAI-F04.',
      'PAI-F02.',
      'PAI-F03.'
    ],
    correct: 3,
    justification: 'El Informe de Verificación de Fase es el formulario PAI-F03. El Informe de Auditoría General es el PAI-F04.',
    trap: false
  },
  {
    category: 'informes',
    type: 'multi',
    question: '¿Cuál es el código del formulario del informe de Auditoría General?',
    options: [
      'PAI-F01.',
      'PAI-F03.',
      'PAI-F02.',
      'PAI-F04.'
    ],
    correct: 3,
    justification: 'El Informe de Auditoría General es el formulario PAI-F04. El Informe de Verificación de Fase es el PAI-F03.',
    trap: false
  },
  {
    category: 'informes',
    type: 'multi',
    question: '¿Qué contenido mínimo tiene el informe PAI-F03 (VF) que NO tiene el PAI-F04 (AG)?',
    options: [
      'Actas de reunión inicial y final.',
      'Nombre del responsable del área.',
      'El nombre del auditor de sistemas.',
      'Fases del ciclo de vida comprendidas en el bloque.'
    ],
    correct: 3,
    justification: 'El informe de VF (PAI-F03) incluye las fases del ciclo de vida comprendidas en el bloque, dato que no aparece en el informe de AG (PAI-F04), ya que las AG no se organizan por fases del ciclo de vida.',
    trap: false
  },
  {
    category: 'informes',
    type: 'multi',
    question: '¿Qué campos comunes tienen los informes PAI-F03 y PAI-F04?',
    options: [
      'Solo las no conformidades.',
      'Solo la fecha de realización.',
      'Solo el nombre del auditor.',
      'Identificación del proyecto/área, nombre del responsable, fecha, nombre del auditor, NCs con clasificación y acciones correctivas.'
    ],
    correct: 3,
    justification: 'Ambos informes comparten: identificación (proyecto o área), nombre del responsable (JP o del área), fecha, nombre del auditor, NCs con clasificación (grave/leve) y acciones correctivas con responsable y fecha límite.',
    trap: false
  },
  {
    category: 'informes',
    type: 'vf',
    question: 'El informe de auditoría lo firma el auditor junto al Responsable de Calidad.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. El auditor NO lo firma junto a Calidad. Lo elabora solo y lo remite al Responsable de Calidad para revisión y aprobación. Son pasos separados.',
    trap: true
  },
  {
    category: 'informes',
    type: 'multi',
    question: '¿Qué contiene el informe de VF (PAI-F03)?',
    options: [
      'Solo las métricas del proyecto.',
      'Solo las NCs detectadas.',
      'Solo la firma del Director General.',
      'Identificación del proyecto, JP, fecha, auditor técnico, fases comprendidas, NCs con clasificación y acciones correctivas.'
    ],
    correct: 3,
    justification: 'PAI-F03 contiene: identificación del proyecto auditado, nombre del JP, fecha, nombre del auditor técnico, fases del ciclo comprendidas, NCs con clasificación (grave/leve) y acciones correctivas con responsable y fecha límite.',
    trap: false
  },
  {
    category: 'informes',
    type: 'vf',
    question: 'Las actas de reunión inicial y final son salidas tanto de VF como de AG.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. Las actas de reunión inicial y final son salidas SOLO de AG. En VF no hay reunión inicial ni final.',
    trap: true
  },

  // =============================================
  // ===== CATEGORÍA: ENTRADAS, SALIDAS Y MÉTRICAS =====
  // =============================================
  {
    category: 'entradas-salidas',
    type: 'multi',
    question: '¿Cuál de las siguientes es una ENTRADA del proceso de auditoría interna?',
    options: [
      'Plan de acciones correctivas.',
      'Informe de auditoría.',
      'Acta de reunión final.',
      'Resultados de auditorías anteriores.'
    ],
    correct: 3,
    justification: 'Las entradas incluyen: norma ISO 9001 vigente, programa anual aprobado, resultados de auditorías anteriores, documentación del SGC, NCs abiertas de períodos anteriores y retroalimentación de clientes.',
    trap: false
  },
  {
    category: 'entradas-salidas',
    type: 'multi',
    question: '¿Cuál de las siguientes es una SALIDA del proceso de auditoría interna?',
    options: [
      'Documentación del SGC.',
      'Norma ISO 9001 vigente.',
      'Retroalimentación de clientes.',
      'Plan de acciones correctivas con responsables y plazos.'
    ],
    correct: 3,
    justification: 'Las salidas incluyen: informe de auditoría, registro de NCs, plan de acciones correctivas con responsables y plazos, programa anual actualizado, actas de reunión (solo AG) e información para la revisión por la dirección.',
    trap: false
  },
  {
    category: 'entradas-salidas',
    type: 'multi',
    question: '¿Qué entrada del proceso incluye "no conformidades abiertas de períodos anteriores"?',
    options: [
      'Es un mecanismo de control.',
      'Es una salida del proceso.',
      'No forma parte del proceso de auditorías.',
      'Es una entrada del proceso de auditoría interna.'
    ],
    correct: 3,
    justification: 'Las NCs abiertas de períodos anteriores son una entrada al proceso de auditoría interna. Permiten hacer seguimiento de hallazgos previos.',
    trap: false
  },
  {
    category: 'entradas-salidas',
    type: 'vf',
    question: 'La "información de entrada para la revisión por la dirección" es una salida del proceso de auditorías internas.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 1,
    justification: 'VERDADERO. Los resultados de las auditorías y la efectividad de las acciones correctivas se agregan como información de entrada para la revisión periódica del SGC por la dirección.',
    trap: false
  },
  {
    category: 'entradas-salidas',
    type: 'multi',
    question: '¿Cuál es la fórmula de "% de auditorías ejecutadas vs planificadas"?',
    options: [
      'Ejecutadas − Planificadas.',
      'Planificadas / Ejecutadas × 100.',
      '(Planificadas − Ejecutadas) / Planificadas × 100.',
      'Ejecutadas / Planificadas × 100.'
    ],
    correct: 3,
    justification: 'La métrica "% de auditorías ejecutadas vs planificadas" se calcula como: auditorías ejecutadas / auditorías planificadas × 100.',
    trap: false
  },
  {
    category: 'entradas-salidas',
    type: 'multi',
    question: '¿Cómo se calcula el "Nº de NC por auditoría"?',
    options: [
      'NC graves / NC leves.',
      'Auditorías realizadas / NC detectadas.',
      'NC detectadas × Auditorías realizadas.',
      'NC detectadas / Auditorías realizadas.'
    ],
    correct: 3,
    justification: 'El indicador "Nº de NC por auditoría" se calcula como: NC detectadas / auditorías realizadas. Es un indicador de rendimiento del proceso de auditoría.',
    trap: false
  },
  {
    category: 'entradas-salidas',
    type: 'multi',
    question: '¿Cómo se calcula el "Tiempo medio de cierre de acciones correctivas"?',
    options: [
      'Fecha_cierre − fecha_apertura × 100.',
      'Nº NC cerradas / Nº NC abiertas.',
      'Nº NC / tiempo total × 100.',
      'Σ(fecha_cierre − fecha_apertura) / nº NC.'
    ],
    correct: 3,
    justification: 'El tiempo medio de cierre se calcula como: Σ(fecha_cierre − fecha_apertura) / nº NC. Mide la agilidad del proceso de resolución de hallazgos.',
    trap: false
  },
  {
    category: 'entradas-salidas',
    type: 'multi',
    question: '¿Cómo se calcula la "Tasa de NC recurrentes"?',
    options: [
      'NC graves / NC totales × 100.',
      'NC nuevas / NC totales × 100.',
      'NC cerradas / NC totales × 100.',
      'NC repetidas / NC totales × 100.'
    ],
    correct: 3,
    justification: 'La tasa de NC recurrentes se calcula como: NC repetidas / NC totales × 100. Un valor alto indica que las acciones correctivas no están siendo efectivas.',
    trap: false
  },
  {
    category: 'entradas-salidas',
    type: 'multi',
    question: '¿Cuál de las siguientes NO es una métrica del PAI?',
    options: [
      'Nº de NC por auditoría.',
      '% auditorías ejecutadas vs planificadas.',
      'Tasa de NC recurrentes.',
      'Densidad de defectos por KLOC.'
    ],
    correct: 3,
    justification: 'La densidad de defectos por KLOC es una métrica de producto/calidad de software, NO una métrica del PAI. Las métricas del PAI son: % ejecutadas vs planificadas, Nº NC por auditoría, tiempo medio de cierre y tasa de NC recurrentes.',
    trap: false
  },
  {
    category: 'entradas-salidas',
    type: 'vf',
    question: 'El mecanismo de control del procedimiento de auditorías internas es que el Responsable de Calidad proporciona datos a la dirección para la revisión periódica anual del SGC.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 1,
    justification: 'VERDADERO. Este es el ÚNICO mecanismo de control: el RC agrega resultados de auditorías (VF + AG) y efectividad de acciones correctivas, y los presenta en la revisión anual del SGC por la dirección.',
    trap: false
  },

  // =============================================
  // ===== CATEGORÍA: DIFERENCIAS CLAVE (EXAMEN) =====
  // =============================================
  {
    category: 'diferencias',
    type: 'multi',
    question: '¿Quién planifica las VF y quién planifica las AG?',
    options: [
      'Ambas las planifica el Responsable de Calidad.',
      'VF: Responsable de Calidad. AG: Jefe de Proyecto.',
      'Ambas las planifica el Jefe de Proyecto.',
      'VF: Jefe de Proyecto (plan de proyecto). AG: Responsable de Calidad (programa anual).'
    ],
    correct: 3,
    justification: 'Diferencia clave de examen: las VF las planifica el Jefe de Proyecto (en el plan de proyecto). Las AG las planifica el Responsable de Calidad (en el programa anual).',
    trap: false
  },
  {
    category: 'diferencias',
    type: 'multi',
    question: '¿Quién acuerda las acciones correctivas en VF y en AG?',
    options: [
      'En ambos: el Responsable de Calidad.',
      'VF: RC + JP. AG: RC + Responsable del área.',
      'En ambos: el Auditor con el Director General.',
      'VF: Auditor Técnico + JP. AG: Auditor de Sistemas + Responsable del área.'
    ],
    correct: 3,
    justification: 'En VF, las acciones correctivas las acuerdan el Auditor Técnico y el Jefe de Proyecto. En AG, las acuerdan el Auditor de Sistemas y el Responsable del área (en la reunión final).',
    trap: false
  },
  {
    category: 'diferencias',
    type: 'multi',
    question: '¿Quién supervisa la ejecución de acciones correctivas en VF y en AG?',
    options: [
      'VF: Auditor Técnico. AG: Auditor de Sistemas.',
      'En ambos: el Responsable de Calidad.',
      'En ambos: el Director General.',
      'VF: Jefe de Proyecto. AG: Responsable del área.'
    ],
    correct: 3,
    justification: 'Diferencia clave: en VF, el JP supervisa la ejecución. En AG, el Responsable del área supervisa. El seguimiento y cierre formal en AMBOS casos es del RC.',
    trap: false
  },
  {
    category: 'diferencias',
    type: 'vf',
    question: 'Las verificaciones de fase tienen reunión inicial y final, igual que las auditorías generales.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. Las VF NO tienen reunión inicial ni final (frecuencia alta, el equipo ya conoce el proceso). Las AG SÍ tienen ambas reuniones (frecuencia menor, el personal puede no estar familiarizado).',
    trap: true
  },
  {
    category: 'diferencias',
    type: 'multi',
    question: '¿Por qué las VF no tienen reunión inicial ni final?',
    options: [
      'Porque no es obligatorio por ISO 9001.',
      'Porque el Jefe de Proyecto no tiene tiempo.',
      'Porque las VF son opcionales.',
      'Porque la frecuencia es alta y el equipo ya conoce el proceso.'
    ],
    correct: 3,
    justification: 'Las VF no tienen reunión inicial ni final porque su frecuencia es alta (4 por proyecto) y el equipo del proyecto ya conoce el proceso de auditoría. Las AG, con frecuencia menor, sí las necesitan.',
    trap: false
  },
  {
    category: 'diferencias',
    type: 'multi',
    question: '¿Quién ejecuta las VF y quién ejecuta las AG?',
    options: [
      'Ambas: el Responsable de Calidad.',
      'VF: Auditor de Sistemas. AG: Auditor Técnico.',
      'Ambas: el mismo tipo de auditor.',
      'VF: Auditor Técnico. AG: Auditor de Sistemas.'
    ],
    correct: 3,
    justification: 'Las VF las ejecuta el Auditor Técnico (con conocimientos en desarrollo software). Las AG las ejecuta el Auditor de Sistemas (con conocimientos del área auditada, no necesariamente software).',
    trap: false
  },
  {
    category: 'diferencias',
    type: 'vf',
    question: 'El mismo auditor puede hacer tanto verificaciones de fase como auditorías generales.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. Son perfiles distintos: el Auditor Técnico (VF) necesita conocimientos en desarrollo software, mientras que el Auditor de Sistemas (AG) necesita conocimientos del área que audita. No son intercambiables.',
    trap: true
  },
  {
    category: 'diferencias',
    type: 'vf',
    question: 'El seguimiento y cierre formal de acciones correctivas lo realiza el Responsable de Calidad solo en las VF, no en las AG.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. El seguimiento y cierre formal lo realiza el Responsable de Calidad en AMBOS casos (VF y AG). Es una responsabilidad constante del RC.',
    trap: true
  },
  {
    category: 'diferencias',
    type: 'vf',
    question: 'Las auditorías internas (tanto VF como AG) nunca son por sorpresa.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 1,
    justification: 'VERDADERO. Ni las VF ni las AG pueden ser por sorpresa. Siempre se planifican con antelación y se comunican a los afectados.',
    trap: false
  },
  {
    category: 'diferencias',
    type: 'multi',
    question: 'En una VF, la copia del informe va al ___. En una AG, va al ___.',
    options: [
      'En ambos: al Director General.',
      'VF: Responsable del área. AG: Jefe de Proyecto.',
      'En ambos: al Responsable de Calidad.',
      'VF: Jefe de Proyecto. AG: Responsable del área auditada.'
    ],
    correct: 3,
    justification: 'La copia del informe va al principal interesado: en VF es el Jefe de Proyecto, y en AG es el Responsable del área auditada.',
    trap: false
  },
  {
    category: 'diferencias',
    type: 'vf',
    question: 'Si auditor y auditado no se ponen de acuerdo en las acciones correctivas, escalan al Director General.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. El acuerdo SE ASUME en el procedimiento. NO se debe documentar la opción de escalar a dirección. Si se pone, se ejecutará y desacredita al responsable de calidad.',
    trap: true
  },
  {
    category: 'diferencias',
    type: 'vf',
    question: 'El perfil del Auditor de VF requiere conocimientos en desarrollo software, mientras que el de AG requiere conocimientos del área auditada.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 1,
    justification: 'VERDADERO. El Auditor Técnico (VF) necesita conocimientos en desarrollo software. El Auditor de Sistemas (AG) necesita conocimientos del área que audita (RRHH, compras, etc.), no necesariamente de software.',
    trap: false
  },
  {
    category: 'diferencias',
    type: 'multi',
    question: '¿En qué caso se generan actas de reunión inicial y final?',
    options: [
      'En ambos tipos de auditoría.',
      'Solo en Verificaciones de Fase (VF).',
      'En ningún tipo de auditoría interna.',
      'Solo en Auditorías Generales (AG).'
    ],
    correct: 3,
    justification: 'Las actas de reunión inicial y final se generan SOLO en las AG. Las VF no tienen reuniones formales.',
    trap: false
  },
  {
    category: 'diferencias',
    type: 'multi',
    question: 'El informe de auditoría lo elabora el ___ y lo revisa/aprueba el ___.',
    options: [
      'El Jefe de Proyecto lo elabora. El auditor lo aprueba.',
      'El Responsable de Calidad lo elabora. El Director General lo aprueba.',
      'El Director General lo elabora y aprueba.',
      'El auditor (Técnico o de Sistemas) lo elabora. El Responsable de Calidad lo revisa y aprueba.'
    ],
    correct: 3,
    justification: 'El informe lo ELABORA el auditor (no Calidad) y lo REMITE al RC para revisión y aprobación. El auditor no lo firma junto a Calidad — lo elabora solo.',
    trap: false
  },
  {
    category: 'diferencias',
    type: 'vf',
    question: 'Las plantillas de auditoría obligan a usarlas: cuantas más se aporten, mejor preparada estará la organización.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. Las plantillas obligan a usarlas, por lo tanto cuantas más pongas, más te atas. Se recomienda usar solo las plantillas mínimas necesarias (portada del informe).',
    trap: true
  },
  {
    category: 'diferencias',
    type: 'vf',
    question: 'Las evidencias en auditoría deben anotarse con su no conformidad EN EL MOMENTO, no al final.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 1,
    justification: 'VERDADERO. Cada NC se anota con su evidencia objetiva EN EL MOMENTO durante la ejecución de la auditoría. Si se espera al final, se corre el riesgo de perder evidencias.',
    trap: false
  },
  {
    category: 'diferencias',
    type: 'vf',
    question: 'Los registros de calidad se pueden modificar si se documenta adecuadamente el cambio.',
    options: [
      'Falso',
      'Verdadero'
    ],
    correct: 0,
    justification: 'FALSO. Un registro de calidad NO se modifica NUNCA. Es histórico: aporta evidencia objetiva de actividades realizadas. Solo se puede anular y reemitir con trazabilidad.',
    trap: true
  }
];
