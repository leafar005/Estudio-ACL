/**
 * BANCO DE PREGUNTAS — Calidad e ISO 9000
 * Temario: Calidad del software · ISO 9001:2015 · Certificación
 * Fuentes: apuntes de clase, banco V/F, preguntas cortas, flashcards, análisis de exámenes
 * ============================================================
 */

const CATEGORIES = [
  { id: 'calidad',        name: 'Qué es Calidad',               icon: '🎯' },
  { id: 'qa-qc',          name: 'QA vs QC / V&V',               icon: '🔍' },
  { id: 'crisis',         name: 'Crisis del Software',           icon: '💥' },
  { id: 'iso-familia',    name: 'Familia ISO 9000',              icon: '📘' },
  { id: 'iso-estructura', name: 'Estructura ISO 9001',           icon: '🏗️' },
  { id: 'certificacion',  name: 'Certificación y Auditorías',    icon: '✅' },
  { id: 'metricas',       name: 'Métricas de Calidad',           icon: '📊' },
];

const QUESTIONS = [

  // =============================================
  // ===== CATEGORÍA: QUÉ ES CALIDAD =====
  // =============================================
  {
    category: 'calidad',
    type: 'multi',
    question: '¿Cuál es la definición de calidad según ISO 9000:2015?',
    options: [
      'La satisfacción subjetiva del cliente con el producto.',
      'La ausencia total de defectos en un producto.',
      'El grado en que un conjunto de características inherentes de un objeto cumple con los requisitos.',
      'El cumplimiento de todos los estándares internacionales aplicables.'
    ],
    correct: 2,
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
      'Deben ser baratos, rápidos y fiables.',
      'Deben acordarse entre desarrolladores, ser dinámicos y revisables.',
      'Deben ser subjetivos, flexibles y medibles.',
      'Deben establecerse por anticipado, ser cuantificables y ser verificables.'
    ],
    correct: 3,
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
      'Satisfacción del usuario con la funcionalidad.',
      'Tiempo medio transcurrido entre fallos (MTBF).',
      'Opinión personal del programador sobre la elegancia del código.',
      'Número de errores incluidos.'
    ],
    correct: 2,
    justification: 'La opinión personal del programador no es un parámetro cuantificable ni verificable. Los parámetros válidos incluyen satisfacción del usuario, número de errores y MTBF, que sí pueden medirse objetivamente.',
    trap: false
  },
  {
    category: 'calidad',
    type: 'multi',
    question: '¿Cómo debe situarse la función de calidad dentro de una organización?',
    options: [
      'Integrada dentro del equipo de desarrollo, sin independencia.',
      'Bajo el responsable de producción para mayor eficiencia.',
      'Como un staff directamente vinculado a dirección, con visión independiente.',
      'Externalizada siempre a una empresa auditora.'
    ],
    correct: 2,
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
      'La capacidad de un producto para funcionar sin errores durante un año.',
      'Conjunto de propiedades y características que confieren aptitud para satisfacer necesidades explícitas o implícitas.',
      'La conformidad con los requisitos legales del país de producción.',
      'El nivel de satisfacción alcanzado por los usuarios finales.'
    ],
    correct: 1,
    justification: 'ISO 8402 define calidad como "conjunto de propiedades y características de un producto o servicio que le confieren aptitud para satisfacer unas necesidades explícitas o implícitas".',
    trap: false
  },
  {
    category: 'calidad',
    type: 'multi',
    question: '¿Quién percibe y juzga la calidad?',
    options: [
      'El programador.',
      'El departamento de calidad.',
      'El cliente (quien la recibe).',
      'El jefe de proyecto.'
    ],
    correct: 2,
    justification: 'Quien percibe la calidad es quien la recibe: el cliente. La calidad no es un concepto absoluto; el consumidor la juzga con todo relativismo en un producto o servicio concreto.',
    trap: false
  },
  {
    category: 'calidad',
    type: 'multi',
    question: '¿Cuál es la diferencia entre "eficaz" y "eficiente"?',
    options: [
      'Eficaz y eficiente significan lo mismo.',
      'Eficaz logra el objetivo (sin importar coste). Eficiente logra el objetivo con uso óptimo de recursos.',
      'Eficaz se refiere a procesos y eficiente a productos.',
      'Eficiente logra el objetivo y eficaz optimiza recursos.'
    ],
    correct: 1,
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
      '¿Se han cumplido los plazos?',
      '¿El producto está bien hecho?',
      '¿Se ha desarrollado el producto correcto?'
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
      '¿Se está siguiendo el proceso?',
      '¿Se han respetado los estándares?',
      '¿El cliente está satisfecho?',
      '¿El producto está bien hecho?'
    ],
    correct: 3,
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
      '¿Se están siguiendo los estándares?',
      '¿Se está desarrollando el producto correctamente?',
      '¿Se ha desarrollado el producto correcto?',
      '¿El cliente está satisfecho con el producto?'
    ],
    correct: 1,
    justification: 'Verificación: "¿Se está desarrollando el producto correctamente?". Garantiza consistencia interna: que el resultado de cada fase corresponde con las entradas. Ejemplo: revisión del diseño vs ERS.',
    trap: false
  },
  {
    category: 'qa-qc',
    type: 'multi',
    question: '¿Cuál es la pregunta clave de la validación?',
    options: [
      '¿Se ha desarrollado el producto correcto?',
      '¿Se han documentado todos los requisitos?',
      '¿Se está desarrollando el producto correctamente?',
      '¿Se han seguido todos los procedimientos?'
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
      'Control estadístico.',
      'Validación.',
      'Aseguramiento de calidad (QA).',
      'Verificación.'
    ],
    correct: 1,
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
      'Todas las pruebas son validación.',
      'Unitarias = verificación. Integración, sistema y aceptación = validación.'
    ],
    correct: 0,
    justification: 'Pruebas unitarias, de integración y de sistema = verificación (¿se construye correctamente?). Pruebas de aceptación = validación (¿se construyó el producto correcto?, la hace el usuario/cliente).',
    trap: false
  },
  {
    isEnumeration: true,
    category: 'qa-qc',
    type: 'multi',
    question: '¿Cómo se insertan QA y QC en el ciclo de desarrollo?',
    options: [
      'QA se aplica solo al final. QC se aplica al principio.',
      'QA es transversal/horizontal (todo el ciclo). QC es vertical sobre cada salida de fase.',
      'Ambas son transversales a todo el ciclo.',
      'QA solo se aplica en las fases de pruebas.'
    ],
    correct: 1,
    justification: 'QA es transversal/horizontal: abarca todo el ciclo de desarrollo. QC es vertical: se aplica sobre cada salida de fase (pruebas, inspecciones, revisiones de entregables).',
    trap: false
  },
  {
    category: 'qa-qc',
    type: 'multi',
    question: 'Una auditoría de fin de fase es un ejemplo de:',
    options: [
      'Aseguramiento de Calidad (QA).',
      'Validación.',
      'Certificación.',
      'Control de Calidad (QC).'
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
    options: [
      '16%',
      '48%',
      '29%',
      '35%'
    ],
    correct: 1,
    justification: 'DoD 1979: 48% entregado pero nunca usado, 29% pagado pero nunca entregado, solo ~1% usado tal como se entregó. Coste: $6.8M.',
    trap: false
  },
  {
    category: 'crisis',
    type: 'multi',
    question: 'Según el informe Standish Chaos de 1994, ¿qué porcentaje de proyectos fueron exitosos?',
    options: [
      '16%',
      '5%',
      '35%',
      '28%'
    ],
    correct: 0,
    justification: 'Standish Chaos 1994: 16% exitosos, 31% completamente fallidos. Mejoró a 28% en 2000 y 35% en 2006.',
    trap: false
  },
  {
    category: 'crisis',
    type: 'multi',
    question: '¿Cuántos defectos comete un programador experto por cada KLOC?',
    options: [
      '~200 defectos',
      '~50 defectos',
      '~10 defectos',
      '~100 defectos'
    ],
    correct: 3,
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
      '~1.5$ por cada 1$ invertido.',
      '~2$ por cada 1$ invertido.',
      '~10$ por cada 1$ invertido.'
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
      '16% exitosos, 53% challenged, 31% fallidos.',
      '50% exitosos, 30% challenged, 20% fallidos.',
      '35% exitosos, 46% challenged, 19% fallidos.',
      '28% exitosos, 49% challenged, 23% fallidos.'
    ],
    correct: 2,
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
      'Todas son certificables.',
      'ISO 9000 — Vocabulario y fundamentos.',
      'ISO 9004 — Mejora y éxito sostenido.',
      'ISO 9001 — Requisitos del SGC.'
    ],
    correct: 3,
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
      'Una norma certificable específica para empresas de software.',
      'Un estándar de métricas de calidad de software.',
      'Un sustituto de ISO 9001 para proyectos de software.',
      'Una guía para la aplicación de ISO 9001 al software informático.'
    ],
    correct: 3,
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
      'Planificación, Ejecución, Control, Mejora, Liderazgo, Documentación, Satisfacción.',
      'Enfoque al cliente, Liderazgo, Trabajo en equipo, Enfoque de procesos, Mejora continua, Documentación, Gestión de relaciones.',
      'Eficiencia, Liderazgo, Compromiso, Procesos, Mejora, Evidencia, Comunicación.',
      'Enfoque al cliente, Liderazgo, Compromiso de las personas, Enfoque de procesos, Mejora, Toma de decisiones basada en evidencia, Gestión de relaciones.'
    ],
    correct: 3,
    justification: 'Los 7 principios: (1) Enfoque al cliente, (2) Liderazgo, (3) Compromiso de las personas, (4) Enfoque de procesos, (5) Mejora, (6) Toma de decisiones basada en la evidencia, (7) Gestión de las relaciones.',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'multi',
    question: '¿Qué principios se fusionaron en ISO 9001:2015?',
    options: [
      '"Enfoque basado en procesos" y "Enfoque de sistema para la gestión" → "Enfoque de procesos".',
      '"Mejora continua" y "Toma de decisiones" → "Mejora basada en evidencia".',
      '"Liderazgo" y "Compromiso de las personas" → "Liderazgo comprometido".',
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
      'Eliminación del Manual de Calidad.',
      'Incorporación de gestión de riesgos.',
      'Enfoque por procesos (PDCA).',
      'Reducción de 8 a 7 principios.'
    ],
    correct: 2,
    justification: 'La revisión 2000 introdujo el enfoque por procesos (PDCA). Los otros cambios corresponden a la versión 2015.',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'multi',
    question: '¿En qué año se publicó la primera versión de la familia ISO 9000?',
    options: [
      '2000.',
      '1979.',
      '1987.',
      '1994.'
    ],
    correct: 2,
    justification: 'Primera publicación: 1987. Primera revisión: 1994. Revisión importante (procesos): 2000. Cambios menores: 2008. Vigente: 2015.',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'multi',
    question: '¿Qué modelo de calidad fue la respuesta europea a CMM?',
    options: [
      'Bootstrap.',
      'ISO 90003.',
      'SPICE / ISO 15504.',
      'TickIT.'
    ],
    correct: 0,
    justification: 'Bootstrap fue la respuesta europea a CMM, alineado con ISO 9000. SPICE/ISO 15504 surgió después para unificar CMM, Trillium, TickIT y Bootstrap.',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'multi',
    question: '¿Cuál es la estrategia habitual para implantar modelos de calidad en Europa?',
    options: [
      'Solo SPICE.',
      'Primero ISO 9000, luego CMMI.',
      'Solo ISO 90003.',
      'Primero CMMI, luego ISO 9000.'
    ],
    correct: 1,
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
      '1900–1950: organización taylorista.',
      'Siglo XVIII: artesanos.',
      'Años 50: normas y estándares en el entorno militar de EE.UU.',
      'Años 60: Total Quality Management.'
    ],
    correct: 2,
    justification: 'El aseguramiento de calidad surge en los años 50, con normas y estándares en el entorno militar de EE.UU. La calidad se centró en el proceso.',
    trap: false
  },
  {
    category: 'iso-familia',
    type: 'multi',
    question: '¿Qué caracteriza al TQM (Total Quality Management)?',
    options: [
      'Se basa únicamente en el control estadístico.',
      'Todos los departamentos tienen responsabilidad en alcanzar la calidad; se centra en todo el sistema empresarial.',
      'Solo el departamento de calidad es responsable.',
      'Se centra exclusivamente en el producto final.'
    ],
    correct: 1,
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
      'Auditorías internas y mejora continua.',
      'Compromiso de la dirección y política de calidad.',
      'Recursos humanos, infraestructura y ambiente de trabajo.',
      'Identificar procesos del SGC, su secuencia e interacción, documentación y control de documentos/registros.'
    ],
    correct: 3,
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
      'Apartado 7 — Realización del producto (el más extenso, pero no el más importante).',
      'Apartado 5 — Responsabilidad de la dirección.',
      'Apartado 8 — Medición, análisis y mejora.',
      'Apartado 4 — Sistema de gestión de la calidad.'
    ],
    correct: 2,
    justification: 'El apartado 8 (Medición, análisis y mejora) es el más importante. El apartado 7 es el más extenso, pero no el más importante. Cuidado con esta trampa.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'multi',
    question: '¿Qué exige el apartado 8 de ISO 9001?',
    options: [
      'Documentación del SGC y política de calidad.',
      'Auditorías internas, seguimiento/medición de procesos y productos, control de no conformidades, acciones correctivas/preventivas, mejora continua.',
      'Planificación y procesos con el cliente.',
      'Recursos humanos con competencia adecuada.'
    ],
    correct: 1,
    justification: 'Apartado 8: auditorías internas, seguimiento y medición, control de no conformidades, acciones correctivas y preventivas, satisfacción del cliente y mejora continua.',
    trap: false
  },
  {
    category: 'iso-estructura',
    type: 'multi',
    question: '¿Qué es el ciclo PDCA (ciclo de Deming)?',
    options: [
      'Process-Design-Control-Audit.',
      'Produce-Document-Check-Archive.',
      'Plan-Develop-Certify-Approve.',
      'Plan-Do-Check-Act: planificar, realizar, comprobar y actuar para mejorar continuamente.'
    ],
    correct: 3,
    justification: 'PDCA: Plan (planificar), Do (realizar), Check (comprobar resultados), Act (actuar para modificar y replanificar). Es la base de la mejora continua del SGC. Si se viola el principio, te quitan el certificado.',
    trap: false
  },
  {
    category: 'iso-estructura',
    type: 'multi',
    question: 'En ISO 9001:2015, ¿qué se incorpora como aspecto central dentro del PDCA?',
    options: [
      'El Manual de Calidad obligatorio.',
      'La gestión de riesgos, reemplazando las acciones preventivas.',
      'Las pruebas de software obligatorias.',
      'La designación de un Representante de la Dirección.'
    ],
    correct: 1,
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
      'Excepciones.',
      'Aplicabilidad.',
      'Omisiones justificadas.',
      'Dispensas.'
    ],
    correct: 1,
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
      'Pruebas unitarias, de integración y de sistema.',
      'Solo las pruebas de aceptación.',
      'No se exigen pruebas específicas.',
      'Todas las pruebas son obligatorias.'
    ],
    correct: 1,
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
      'Se archiva y se ignora.',
      'Acciones correctivas para arreglarlo, entrega con autorización del cliente y empresa, o inhabilitar lo que da problemas.',
      'Solo se puede desechar el producto.',
      'Se devuelve automáticamente al proveedor.'
    ],
    correct: 1,
    justification: 'Ante producto no conforme (8.3): (1) acciones correctivas para arreglarlo, (2) entrega/uso con autorización explícita del cliente Y la empresa, (3) inhabilitar lo que da problemas.',
    trap: false
  },
  {
    category: 'iso-estructura',
    type: 'multi',
    question: '¿Cuál es la diferencia entre acción correctiva y acción preventiva?',
    options: [
      'Correctiva viene de auditorías, preventiva viene de pruebas.',
      'Correctiva: ataja la causa raíz. Preventiva: ataja la no conformidad.',
      'Correctiva: ataja la no conformidad real. Preventiva: ataja la causa raíz / problema potencial.',
      'Son lo mismo, solo cambia el momento de aplicación.'
    ],
    correct: 2,
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
    isEnumeration: true,
    category: 'certificacion',
    type: 'multi',
    question: '¿Cuáles son las 3 fases del proceso de certificación ISO 9001?',
    options: [
      'Planificación, ejecución y cierre.',
      'Auditoría de evaluación previa (opcional), auditoría de certificación (obligatoria), auditorías de seguimiento (obligatorias).',
      'Documentación, implementación y verificación.',
      'Evaluación interna, evaluación externa y renovación.'
    ],
    correct: 1,
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
    options: [
      '2 años.',
      '5 años.',
      '3 años.',
      '1 año.'
    ],
    correct: 2,
    justification: 'Ciclo de 3 años con auditorías de seguimiento cada 6-12 meses. Tras 3 años: renovación completa o se pierde el certificado.',
    trap: false
  },
  {
    category: 'certificacion',
    type: 'multi',
    question: '¿Cuál es la misión de ENAC?',
    options: [
      'Certificar directamente a las empresas con ISO 9001.',
      'Desarrollar las normas ISO para España.',
      'Formar auditores de calidad.',
      'Acreditar la competencia técnica de entidades para certificar o inspeccionar.'
    ],
    correct: 3,
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
      'El Ministerio de Industria.',
      'Solo AENOR.',
      'AENOR, Lloyd\'s Register (LRQA), Bureau Veritas (BVQI).',
      'Solo ENAC puede certificar.'
    ],
    correct: 2,
    justification: 'Certifican: AENOR, LRQA, BVQI, entre otras. ENAC no certifica: acredita a las certificadoras. AENOR fue designada por el Ministerio de Industria y Energía.',
    trap: false
  },
  {
    category: 'certificacion',
    type: 'multi',
    question: '¿Cuántas fases tiene la auditoría de certificación?',
    options: [
      '2 fases.',
      '4 fases.',
      '3 fases.',
      '6 fases: plan, documentación, reunión inaugural, realización, reunión de clausura, informe.'
    ],
    correct: 3,
    justification: '6 fases: (1) Plan de auditoría, (2) Auditoría de documentación, (3) Reunión inaugural, (4) Realización (entrevistas, observación, evidencias), (5) Reunión de clausura, (6) Informe (2-4 semanas después).',
    trap: false
  },
  {
    category: 'certificacion',
    type: 'multi',
    question: '¿Cuándo se recibe el informe formal de la auditoría de certificación?',
    options: [
      'Dentro de 24 horas.',
      '2-4 semanas después de la reunión de clausura.',
      '6 meses después.',
      'Inmediatamente al finalizar.'
    ],
    correct: 1,
    justification: 'El informe formal se recibe 2-4 semanas después de la reunión de clausura, con la decisión de certificación.',
    trap: false
  },
  {
    category: 'certificacion',
    type: 'multi',
    question: '¿Qué plazo tiene una empresa para resolver no conformidades mayores?',
    options: [
      '12 meses.',
      '1 mes.',
      '3 meses.',
      '6 meses.'
    ],
    correct: 3,
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
      'Ser técnico especializado, conocer el producto, tener título universitario.',
      'Ajeno/independiente del área auditada, conocimientos y experiencia en auditar, conocimientos y experiencia en lo auditado.',
      'Ser externo a la empresa, ser imparcial, conocer la norma.',
      'Ser el director de calidad, tener certificación ISO, tener 5 años de experiencia.'
    ],
    correct: 1,
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
      'Solo las métricas de producto.',
      'Solo la documentación del SGC.',
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
      'AENOR publica → ISO la aprueba → CEN la distribuye.',
      'CEN publica → ISO la certifica → AENOR la aplica.',
      'ISO publica → CEN/CENELEC adapta a Europa (EN) → AENOR adapta a España (UNE-EN-ISO).',
      'ENAC normaliza → AENOR certifica → ISO publica.'
    ],
    correct: 2,
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
      'Planificación, Diseño, Codificación, Pruebas y Entrega.',
      'Personal, Infraestructura, Documentación, Software y Hardware.',
      'Coste, Tiempo, Alcance, Calidad y Riesgo.',
      'Proyecto, Producto, Proceso, Cliente y Mantenimiento.'
    ],
    correct: 3,
    justification: 'Las 5 áreas: Proyecto, Producto, Proceso, Cliente y Mantenimiento. Estrategia PYME: métricas baratas, automatizables, alineadas con el apartado 8.',
    trap: false
  },
  {
    category: 'metricas',
    type: 'multi',
    question: '¿Qué métrica mide la eficacia del SGC en resolución de hallazgos?',
    options: [
      'Densidad de defectos.',
      '% de no conformidades cerradas a tiempo.',
      'Satisfacción del cliente.',
      '% de hitos cumplidos.'
    ],
    correct: 1,
    justification: '% de NCs cerradas a tiempo: Nº NCs cerradas en plazo / Nº total × 100. Criterio: ≥ 90% eficaz, 70-89% revisar, < 70% problema sistémico → escalar a dirección.',
    trap: false
  },
  {
    category: 'metricas',
    type: 'multi',
    question: 'Al recomendar métricas a una PYME para ISO 9000, ¿qué estrategia seguir?',
    options: [
      'Métricas exclusivamente técnicas sin relación con ISO.',
      'Solo métricas financieras.',
      'Métricas complejas y exhaustivas.',
      'Métricas baratas de recoger, automatizables, alineadas con el apartado 8 de ISO 9001.'
    ],
    correct: 3,
    justification: 'Para una PYME: métricas baratas, automatizables, alineadas con §8 (Medición, análisis y mejora). En examen: con 2-3 bien definidas y justificadas es suficiente. Mencionar que cubres Cliente, Producto, Proyecto y Proceso demuestra visión completa.',
    trap: false
  },
  {
    category: 'metricas',
    type: 'multi',
    question: 'Para la métrica "Tasa de defectos en pruebas de sistema", ¿cuál es el criterio?',
    options: [
      'No existe criterio estándar.',
      '≤ 5 defectos/KLOC = aceptable; > 5 = fuera de control → análisis de causa raíz.',
      '0 defectos/KLOC.',
      '≤ 10 defectos/KLOC = aceptable.'
    ],
    correct: 1,
    justification: '≤ 5 defectos/KLOC = aceptable. > 5 defectos/KLOC = fuera de control → análisis de causa raíz y revisión de fases previas.',
    trap: false
  },

  // ===== MÁS PREGUNTAS: APARTADO 7 y 8 (ISO 9001) =====
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'Las exclusiones a la norma ISO 9001:2008 pueden darse en el apartado 8 de Medición, análisis y mejora.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Sólo se admiten en el apartado 7 (Realización del producto) y de forma justificada.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'Según el apartado 7.4 de ISO 9001, una empresa puede comprar a cualquier proveedor siempre que el producto sea de calidad demostrable.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Sólo se puede comprar a proveedores evaluados y aprobados que estén en una lista oficial de proveedores.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'El término "exclusiones" de ISO 9001:2008 pasa a llamarse "aplicabilidad" en la versión 2015.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. Es el mismo concepto con otro nombre, ya que en 2015 no todo aplica de igual forma a todas las organizaciones.',
    trap: false
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'Si un cliente me cede temporalmente un servidor para hacer pruebas, no necesito registrarlo ni controlarlo porque sigue siendo de su propiedad.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. El apartado 7.5 obliga a identificar, registrar y mantener los bienes propiedad del cliente como si estuvieran en casa del cliente.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'Una acción preventiva (en ISO 9001:2008) se aplica sobre un problema real detectado durante una auditoría.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Se aplica sobre un problema potencial; si el problema es real (no conformidad), se aplica una acción correctiva.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'En el apartado 7 de ISO 9001, las exclusiones (o aplicabilidad en 2015) pueden hacerse incluso si merman la capacidad de cumplir los requisitos legales.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Las exclusiones sólo se admiten si NO merman la capacidad de la organización de cumplir los requisitos del cliente y los legales/reglamentarios.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'multi',
    question: 'En el apartado 7.2 (Procesos relacionados con el cliente), ¿cuáles de los siguientes requisitos se deben cumplir siempre, aunque el cliente no los haya pedido explícitamente?',
    options: [
      'El uso del lenguaje de programación favorito del cliente.',
      'El diseño de interfaz más moderno del mercado.',
      'Los requisitos legales y reglamentarios (ej. LOPD, normativas de seguridad).',
      'Las preferencias estéticas del director comercial.'
    ],
    correct: 2,
    justification: 'Los requisitos legales y reglamentarios (como leyes de protección de datos) aplican siempre y de forma obligatoria, los pida o no el cliente explícitamente.',
    trap: false
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'El apartado 7.4 (Compras) aplica únicamente cuando hay un intercambio monetario con el proveedor.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Aplica a cualquier "producto adquirido", lo que incluye el freeware, shareware y código bajado de internet que se incorpore al producto final. Todo ello requiere validar al proveedor.',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'multi',
    question: 'Según el apartado 7.5 (Producción y prestación del servicio), ¿cuándo es obligatoria la "validación" de un proceso en lugar de sólo su "verificación"?',
    options: [
      'Siempre, en todo proceso que desarrolle software.',
      'Cuando el resultado del proceso NO se puede verificar mediante seguimiento o medición antes de la entrega.',
      'Nunca, la verificación es siempre suficiente.',
      'Únicamente cuando el cliente es de la administración pública.'
    ],
    correct: 1,
    justification: 'La validación de procesos es obligatoria para aquellos procesos cuyos resultados no pueden verificarse mediante seguimiento o medición previa a la entrega (ej. software de vuelo espacial o algoritmos de alta complejidad no simulables 100%).',
    trap: false
  },
  {
    category: 'iso-estructura',
    type: 'multi',
    question: '¿Qué tres condiciones debe cumplir obligatoriamente un auditor interno (apartado 8.2.2)?',
    options: [
      'Externo al área auditada, conocimientos/experiencia en lo que audita y conocimientos/experiencia en cómo auditar.',
      'Ser técnico desarrollador, conocer al cliente y ser imparcial.',
      'Ser externo a la empresa, certificado por AENOR y conocer el proyecto.',
      'Pertenecer al departamento de calidad, tener un máster oficial y 5 años de experiencia.'
    ],
    correct: 0,
    justification: 'Un auditor interno (según ISO) debe ser: 1. Externo/independiente al área auditada. 2. Tener conocimientos teóricos y experiencia práctica en LO QUE audita. 3. Tener conocimientos y experiencia en CÓMO auditar.',
    trap: false
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'Para medir la satisfacción del cliente (apartado 8.2.1), es absolutamente obligatorio realizar encuestas de satisfacción anuales.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. La norma obliga a MEDIR/RECOPILAR información sobre la satisfacción, pero el método es totalmente libre (pueden ser quejas, cuota de mercado, reuniones comerciales o encuestas).',
    trap: true
  },
  {
    category: 'iso-estructura',
    type: 'vf',
    question: 'Un código fuente descargado de un repositorio público en internet no se considera un proveedor porque es de código abierto.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Ese código pasa a ser parte de tu producto, asumiendo tú la responsabilidad. Para la norma, eso te convierte en cliente de ese "proveedor", y debes validarlo como producto adquirido (7.4).',
    trap: true
  },

  // ===== TRAMPAS EXAMEN: BANCO V/F ISO9000 =====
  {
    category: 'seccion7',
    type: 'vf',
    question: 'En ISO 9001 sólo se puede adquirir software o materiales a proveedores que hayan sido previamente evaluados y aceptados en la base de datos de la organización.',
    options: ['Falso', 'Verdadero'],
    correct: 1,
    justification: 'VERDADERO. El apartado 7.4 exige que la organización evalúe y seleccione a los proveedores en función de su capacidad, manteniendo un registro de los aprobados.',
    trap: true
  },
  {
    category: 'seccion7',
    type: 'vf',
    question: 'El software freeware u Open Source no se considera producto adquirido porque no implica un intercambio monetario o transacción.',
    options: ['Falso', 'Verdadero'],
    correct: 0,
    justification: 'FALSO. Sí se considera producto adquirido. Lo vas a incorporar a tu producto final y asumes responsabilidad sobre su calidad ante el cliente, aunque sea gratuito.',
    trap: true
  },
  {
    category: 'seccion8',
    type: 'vf',
    question: 'ISO 9001 exige recopilar datos sobre la satisfacción del cliente, pero permite que el método utilizado (encuestas, entrevistas, etc.) sea de libre elección.',
    options: ['Falso', 'Verdadero'],
    correct: 1,
    justification: 'VERDADERO. La norma no impone el uso de encuestas; se puede usar el análisis de reclamaciones, retención de clientes u otras vías.',
    trap: true
  },
  {
    category: 'seccion8',
    type: 'vf',
    question: 'La validación de los procesos de producción es necesaria únicamente cuando el resultado resultante no puede verificarse mediante actividades de seguimiento o medición posteriores.',
    options: ['Falso', 'Verdadero'],
    correct: 1,
    justification: 'VERDADERO. Esta es la definición literal del apartado de validación de procesos de producción (ej: soldadura o fraguado de hormigón, donde no puedes medir la calidad hasta que el producto está terminado y a veces destruyéndolo).',
    trap: false
  },
  {
    category: 'familia',
    type: 'vf',
    question: 'La norma UNE-EN ISO 9000 contiene y especifica todos los requisitos obligatorios de gestión de calidad.',
    options: ['Falso', 'Verdadero'],
    correct: 0,
    justification: 'FALSO. ISO 9000 es la norma de VOCABULARIO y fundamentos. La que contiene los requisitos obligatorios y certificables es ISO 9001.',
    trap: true
  },
  {
    category: 'familia',
    type: 'vf',
    question: 'La guía ISO 90003 (antes 9003) puede utilizarse como criterio oficial para emitir un certificado de calidad a una empresa de software.',
    options: ['Falso', 'Verdadero'],
    correct: 0,
    justification: 'FALSO. Es una guía de interpretación para aplicar ISO 9001 al desarrollo de software. No se certifica ISO 90003, te certificas por ISO 9001.',
    trap: true
  },
];
