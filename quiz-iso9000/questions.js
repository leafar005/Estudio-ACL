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
    type: 'vf',
    question: 'La medición de la satisfacción del cliente debe hacerse obligatoriamente mediante encuestas.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. ISO 9001 exige medir la satisfacción del cliente (apartado 8.2.1), pero NO obliga a hacerlo mediante encuestas. Puede medirse con cuota de mercado, quejas, fidelidad, informes comerciales, etc.',
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
    question: '¿Cuántos campos estándar debe tener una ficha de métrica?',
    options: [
      '8: Nombre, Objetivo, Fórmula, Unidad de medida, Origen de datos, Datos de entrada, Periodo, Criterio de análisis.',
      '5: Nombre, Fórmula, Unidad, Origen, Periodo.',
      '3: Nombre, Fórmula, Criterio.',
      '10: incluyendo responsable y presupuesto.'
    ],
    correct: 0,
    justification: 'Una ficha tiene 8 campos: Nombre, Objetivo, Fórmula, Unidad de medida, Origen de datos, Datos de entrada, Periodo y Criterio de análisis. El más olvidado en examen: Criterio de análisis (sin él la métrica no es accionable).',
    trap: false
  },
  {
    category: 'metricas',
    type: 'multi',
    question: '¿Cuál es el campo más olvidado en examen al definir una métrica?',
    options: [
      'Criterio de análisis — sin él la métrica no es accionable.',
      'Nombre — se olvida dar un identificador.',
      'Fórmula — no se especifica el cálculo.',
      'Unidad de medida.'
    ],
    correct: 0,
    justification: 'El campo más olvidado es el Criterio de análisis. Sin él no se sabe qué significa un valor bueno o malo ni cuál es el umbral aceptable, haciendo la métrica inútil para tomar decisiones.',
    trap: false
  },
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
    question: '¿Cuál es la fórmula de "Satisfacción del cliente"?',
    options: [
      'Nº respuestas "satisfecho" o "muy satisfecho" / Nº total de respuestas × 100.',
      'Nº de reclamaciones / Nº total de clientes × 100.',
      'Puntuación media en encuesta de 1 a 10.',
      'Nº de clientes que repiten / Nº total de clientes × 100.'
    ],
    correct: 0,
    justification: 'Fórmula: Nº respuestas positivas / Nº total × 100 (%). Criterio: ≥ 80% aceptable, 60-79% revisar, < 60% acción correctiva inmediata. Exigida por el apartado 8.',
    trap: false
  },
  {
    category: 'metricas',
    type: 'multi',
    question: '¿Cuál es el criterio de análisis para "% de hitos cumplidos"?',
    options: [
      '≥ 90% = en control; 70-89% = revisar planificación; < 70% = replanificar y escalar.',
      '100% es el único valor aceptable.',
      '≥ 50% = aceptable.',
      '≥ 80% = aceptable.'
    ],
    correct: 0,
    justification: '≥ 90% = en control. 70-89% = revisar planificación. < 70% = replanificar y escalar al responsable de calidad. Fórmula: Hitos cumplidos en plazo / Hitos planificados × 100.',
    trap: false
  },
  {
    category: 'metricas',
    type: 'multi',
    question: '¿Cuál es el criterio para "Desviación de esfuerzo"?',
    options: [
      '±10% = aceptable; +10% a +30% = revisar; > +30% = acción correctiva.',
      '0% es lo único aceptable.',
      '±5% = aceptable.',
      '±20% = aceptable.'
    ],
    correct: 0,
    justification: '±10% = aceptable. +10% a +30% = revisar estimaciones. > +30% = acción correctiva y replanificación. Fórmula: (Esfuerzo real − estimado) / estimado × 100.',
    trap: false
  },
  {
    category: 'metricas',
    type: 'multi',
    question: '¿Cuál es la fórmula de "Densidad de defectos"?',
    options: [
      'Nº defectos detectados / KLOC entregadas.',
      'Nº defectos / Nº total de pruebas ejecutadas.',
      'Nº defectos / Nº de módulos.',
      'Nº defectos resueltos / Nº defectos totales × 100.'
    ],
    correct: 0,
    justification: 'Densidad de defectos = Nº defectos / KLOC, en defectos por KLOC. Criterio: ≤ 5 defectos/KLOC = aceptable. > 5 = revisar proceso de codificación y pruebas.',
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
];
