const CATEGORIES = [
  { id: 'procedimientos', name: 'Procedimientos y Documentación', icon: '📄' },
  { id: 'mapas',          name: 'Mapas de Proceso (IDEF0)',     icon: '🗺️' },
  { id: 'ciclo-pruebas',  name: 'Ciclo Operativo y Pruebas',     icon: '♻️' },
  { id: 'colaterales',    name: 'Procesos Colaterales (Compras, Formación, Cliente)', icon: '🤝' },
  { id: 'conceptos',      name: 'Conceptos Generales SGCS',      icon: '🧠' }
];

const QUESTIONS = [
  // ===== PROCEDIMIENTOS Y DOCUMENTACIÓN =====
  {
    category: 'procedimientos',
    type: 'vf',
    question: 'El Manual de Procedimientos es el documento público que se suele entregar a cualquier cliente o auditor que lo solicite para demostrar el nivel del SGC.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. El Manual de Procedimientos es PRIVADO (know-how de la empresa). El documento que es PÚBLICO y puede entregarse es el Manual de Calidad.',
    trap: true
  },
  {
    category: 'procedimientos',
    type: 'vf',
    question: 'Un registro de calidad puede ser modificado posteriormente si el jefe de proyecto detecta que se omitió información en el momento de su creación.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Un registro de calidad evidencia algo que ya ocurrió y es histórico. NUNCA se modifica; como mucho se anula y se crea uno nuevo referenciando al anterior (trazabilidad) o se añade un anexo.',
    trap: true
  },
  {
    category: 'procedimientos',
    type: 'multi',
    question: '¿Qué es una desviación concertada y dónde se documenta?',
    options: [
      'Es un error de programación documentado en el SIE.',
      'Es un cambio en la normativa ISO documentado en el Manual de Procedimientos.',
      'Es una no conformidad del cliente documentada en el Manual de Calidad.',
      'Es un cambio autorizado sobre los procedimientos estándar del SGC para un proyecto en particular, y se documenta en el Plan de Calidad (o Plan de Realización) de ese proyecto.'
    ],
    correct: 3,
    justification: 'Las desviaciones concertadas son excepciones autorizadas al SGC (por ejemplo, usar herramientas impuestas por el cliente) y deben constar en el Plan de Calidad del proyecto.',
    trap: false
  },
  {
    category: 'procedimientos',
    type: 'vf',
    question: 'El informe de seguimiento de un proyecto software se va versionando progresivamente (V1.0, V1.1...) cada semana a medida que el proyecto avanza.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. El informe de seguimiento no tiene versiones; cada informe es un documento distinto de una fecha concreta. Lo que SÍ se versiona en caso de cambios es el Plan de Proyecto.',
    trap: true
  },
  {
    category: 'procedimientos',
    type: 'multi',
    question: 'En Gestión de Proyectos, ¿cuál es el ÚNICO entregable de gestión que tiene un control estricto de VERSIONES a lo largo del proyecto?',
    options: [
      'El Plan de Proyecto.',
      'Las Actas de Reunión.',
      'El Informe de Seguimiento.',
      'El Informe de Cierre.'
    ],
    correct: 0,
    justification: 'El Plan de Proyecto es la línea base que se va actualizando mediante versiones cuando hay replanificaciones. Los informes de seguimiento o actas no tienen "versiones" de sí mismos, son reportes puntuales (únicos).',
    trap: false
  },

  // ===== MAPAS DE PROCESO =====
  {
    category: 'mapas',
    type: 'multi',
    question: 'En un mapa de procesos orientado según la norma IDEF0 (usado en SGCS), ¿qué representan las entradas, salidas, controles y mecanismos (perfil)?',
    options: [
      'Arriba = entradas. Abajo = salidas. Izquierda = proceso. Derecha = responsable.',
      'Izquierda = entradas. Derecha = salidas. Arriba = controles/estándares. Abajo = mecanismos/perfil responsable.',
      'No hay una estructura fija, siempre que se ponga texto explicativo está bien.',
      'Caja central = entrada. Izquierda = proceso. Derecha = salidas. Abajo = controles.'
    ],
    correct: 1,
    justification: 'El esquema clásico: ENTRADAS por la izquierda, SALIDAS por la derecha, CONTROLES (políticas, directrices) por arriba y MECANISMOS (perfil responsable, herramientas, checklists) por abajo.',
    trap: false
  },
  {
    category: 'mapas',
    type: 'vf',
    question: 'Es muy recomendable incluir rombos (IF) en los mapas de proceso del SGCS para representar todas las decisiones posibles en una sola gráfica compleja.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. El profesor advierte específicamente de "NO abusar del IF". Si el flujo se divide mucho, es mejor crear dos flujos paralelos o dividir el proceso para mantener la claridad.',
    trap: true
  },
  {
    category: 'mapas',
    type: 'vf',
    question: 'Añadir una nota al pie extensa en un mapa de procesos es una buena práctica para documentar cómo se realiza un paso complejo.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. El profesor recalca: "Si tenéis que poner una nota a pie de página, el mapa NO está claro". El nivel de detalle en la caja debe ser suficiente o se debe dividir el proceso.',
    trap: true
  },
  {
    category: 'mapas',
    type: 'vf',
    question: 'En un mapa de procesos del SGC, los checklists o listas de chequeo se consideran siempre una de las entradas.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Son mecanismos / controles, NUNCA entradas.',
    trap: true
  },

  // ===== CICLO OPERATIVO Y PRUEBAS =====
  {
    category: 'ciclo-pruebas',
    type: 'multi',
    question: 'En el ciclo operativo de desarrollo, ¿cuáles son los 3 niveles de flexibilidad que se pueden contemplar para adaptarse al proyecto?',
    options: [
      'Verificación, Validación y Auditoría.',
      'Por fase, por salida/entregable, y por revisión formal obligatoria u opcional.',
      'Por presupuesto, por plazos, y por tamaño de equipo.',
      'Nivel de madurez, nivel de capacidad y nivel de optimización.'
    ],
    correct: 1,
    justification: 'El SGCS prevé flexibilidad: 1) Por fase (puede omitirse una fase entera si no aplica), 2) Por salida (un entregable puede ser opcional dentro de una fase), 3) Por revisión (un entregable puede no requerir revisión formal).',
    trap: false
  },
  {
    category: 'ciclo-pruebas',
    type: 'multi',
    question: '¿Qué justificación económica/práctica se le da a un auditor para NO registrar los errores de pruebas unitarias y de integración en el SIE de una PYME?',
    options: [
      'La relación coste/beneficio es mala; cuesta más el esfuerzo de documentarlos formalmente que el beneficio obtenido de analizarlos a tan bajo nivel.',
      'El cliente no quiere ver esos errores.',
      'Los programadores se negarían a hacerlo por privacidad.',
      'La norma prohíbe documentar errores antes de la fase de sistema.'
    ],
    correct: 0,
    justification: 'Para una PYME, documentar cada punto y coma fallido o cada error de tipado (unitarias) en un SIE formal genera una burocracia inasumible. El auditor acepta esto si se justifica por mala relación coste/beneficio.',
    trap: false
  },
  {
    category: 'ciclo-pruebas',
    type: 'multi',
    question: '¿Cuáles son las únicas pruebas obligatorias explícitamente por ISO 9001 y por qué?',
    options: [
      'Las pruebas de aceptación, porque corresponden al principio de que el cliente es el rey.',
      'Las pruebas unitarias, porque son la base de la calidad técnica.',
      'Las pruebas de sistema, porque establecen la línea base del producto.',
      'Las pruebas de integración, porque verifican la arquitectura del software.'
    ],
    correct: 0,
    justification: 'Las de aceptación son las únicas obligatorias porque corresponden al primer principio de la calidad ("el cliente es el rey"). El resto se hacen por sentido común técnico (coste/beneficio).',
    trap: false
  },
  {
    category: 'ciclo-pruebas',
    type: 'multi',
    question: '¿En qué momento se establece habitualmente la línea base de producto?',
    options: [
      'Al firmar el contrato inicial con el cliente.',
      'Al finalizar las pruebas unitarias y de integración.',
      'Al pasar satisfactoriamente las pruebas de sistema.',
      'En la fase de diseño de bajo nivel.'
    ],
    correct: 2,
    justification: 'Se establece al pasar satisfactoriamente las pruebas de sistema. A partir de este momento, cualquier cambio requiere la involucración del cliente y el jefe de proyecto.',
    trap: false
  },
  {
    category: 'ciclo-pruebas',
    type: 'vf',
    question: 'En la vía A (sin reunión) de revisión de entregables, los correos electrónicos de ida y vuelta sirven como evidencia técnica (registro) y se deben archivar en la carpeta del proyecto.',
    options: ['Verdadero', 'Falso'],
    correct: 0,
    justification: 'VERDADERO. Los correos con el "OK" o las sugerencias de cambios son la evidencia objetiva de la revisión. Guardarlos en el buzón personal es incorrecto; deben ir al archivo del proyecto.',
    trap: false
  },

  // ===== COLATERALES =====
  {
    category: 'colaterales',
    type: 'vf',
    question: 'Según el procedimiento de Atención al Cliente, si un cliente presenta una reclamación técnica y él fue quien cometió el error, la reclamación se rechaza de inmediato sin más trámites.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. NUNCA se rechaza de entrada. Se recepciona, se escala, se estudia y, si no tiene razón, se le comunica educadamente. Pero siempre hay que seguir el flujo y responder formalmente.',
    trap: true
  },
  {
    category: 'colaterales',
    type: 'multi',
    question: 'En el procedimiento de Compras (apartado 7.4), ¿qué tipo de criterios es obligatorio definir para la Base de Datos de Proveedores?',
    options: [
      'Criterios de auditoría, certificación ISO y proximidad geográfica.',
      'Criterios de entrada, de mantenimiento y de salida.',
      'Criterios económicos, técnicos y comerciales.',
      'No hay criterios obligatorios si el proveedor es muy conocido (ej. Microsoft).'
    ],
    correct: 1,
    justification: 'La norma exige mantener evaluados a los proveedores. Hay que tener 3 criterios definidos: de entrada (cómo ser admitido), de mantenimiento (cómo se revisa en cada pedido) y de salida (qué penalización causa expulsión).',
    trap: false
  },
  {
    category: 'colaterales',
    type: 'vf',
    question: 'La formación en una empresa que implementa ISO se valora únicamente demostrando que el empleado asistió al curso con un certificado de presencia.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. La norma exige que la organización evalúe la EFICACIA de la formación para conseguir la competencia. A veces la simple asistencia no sirve; debe ser certificado de "aprovechamiento" o evidenciarse.',
    trap: true
  },

  // ===== CONCEPTOS =====
  {
    category: 'conceptos',
    type: 'multi',
    question: '¿Qué 3 características de gestión definen formalmente a un "Proyecto"?',
    options: [
      'Es discreto (inicio y fin), no rutinario y complejo.',
      'Tiene un plazo, un coste y un esfuerzo determinados.',
      'Requiere un equipo de personas, un presupuesto y objetivos medibles.',
      'Se basa en tecnología, es innovador y satisface al cliente.'
    ],
    correct: 0,
    justification: 'Atención a esta trampa: tiempo/coste/esfuerzo son atributos, no características. Las 3 características de un proyecto son: discreto (con inicio/fin claro), no rutinario (no es operación de cadena de montaje) y complejo.',
    trap: true
  },
  {
    category: 'conceptos',
    type: 'vf',
    question: 'Si un equipo de proyecto (GCS) detecta un área del proceso que funciona bien pero que podría ser optimizada para ahorrar tiempo, debe levantar una Acción Correctiva.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Al no haber un problema o fallo (no conformidad), no cabe acción correctiva. Se trata de una mejora potencial, por lo que origina una Acción Preventiva o sugerencia de mejora.',
    trap: true
  },

  // ===== MÁS PREGUNTAS SGCS (Revisión completa Tema 07) =====
  {
    category: 'ciclo-pruebas',
    type: 'vf',
    question: 'El ciclo de desarrollo operativo obligatorio en la práctica de ACL es en cascada estricta.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. El profesor rechaza el ciclo en cascada puro. Pide incremental + prototipado para requisitos + ciclo en V para el núcleo del desarrollo.',
    trap: true
  },
  {
    category: 'ciclo-pruebas',
    type: 'multi',
    question: 'En el ciclo en V, ¿cuándo se preparan los planes de pruebas?',
    options: [
      'Al hacer diseño Alto Nivel se preparan las de integración; al hacer diseño Bajo Nivel se preparan las unitarias.',
      'Al finalizar la programación se preparan todas las pruebas juntas.',
      'Al hacer diseño Alto Nivel se preparan las unitarias; al hacer diseño Bajo Nivel se preparan las de integración.',
      'En la fase de requisitos se preparan todos los planes de prueba.'
    ],
    correct: 0,
    justification: 'En V: Diseño Alto Nivel (arquitectura) -> Pruebas de Integración. Diseño Bajo Nivel (módulos) -> Pruebas Unitarias. "El mejor momento para pensar cómo probar algo es cuando lo acabas de hacer".',
    trap: false
  },
  {
    category: 'ciclo-pruebas',
    type: 'vf',
    question: 'El prototipo de interfaz de usuario se suele desarrollar durante la fase de Diseño de Bajo Nivel.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. El prototipo se hace SOLO en la fase de Especificación de Requisitos, para asegurar con el cliente lo que se va a construir. No en diseño.',
    trap: true
  },
  {
    category: 'procedimientos',
    type: 'multi',
    question: 'En el procedimiento de Control de Documentación del SGC, ¿qué soporte tecnológico aconseja el profesor por ser barato y cumplir la norma?',
    options: [
      'Imprimir todo y guardarlo bajo llave en la oficina del Responsable de Calidad.',
      'Una herramienta comercial certificada tipo ISO Tools o KM Tools.',
      'PC reciclado + carpetas + permisos (Responsable de Calidad único con escritura) + carpeta histórico offline.',
      'Subir los documentos a un repositorio público en GitHub.'
    ],
    correct: 2,
    justification: 'El profesor propone: PC reciclado + sistema de carpetas + permisos (solo Responsable de Calidad escribe en /Calidad/) + histórico offline. Garantiza 24/7, acceso de solo lectura y control de obsoletos.',
    trap: false
  },
  {
    category: 'conceptos',
    type: 'multi',
    question: 'En la Gestión de Configuración de Software (GCS), ¿cuántas y cuáles son las líneas base habituales según el profesor?',
    options: [
      '4: Requisitos, Diseño, Código y Pruebas.',
      'Sólo 2: Línea base de requisitos y Línea base de producto.',
      '3: Línea base de diseño, de programación y de pruebas.',
      'Sólo 1: Línea base de código fuente.'
    ],
    correct: 1,
    justification: 'NO INVENTAR. El profesor martillea que sólo hay 2: Línea base de requisitos (el cliente la modifica) y Línea base de producto (se establece al pasar pruebas de sistema; requiere cliente + JP para cambios).',
    trap: false
  },
  {
    category: 'procedimientos',
    type: 'vf',
    question: 'El Aseguramiento de Calidad (AC) se modela en el ciclo como una columna vertical de "revisión", mientras que el Control de Calidad (CC) es una fase en horizontal.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. Es al revés: AC (Aseguramiento) es en horizontal, como una fase más (verificación de fase transversal). CC (Control) es en vertical, modelado como 2 columnas en cada salida de fase ("revisión obligatoria" y "revisor").',
    trap: true
  },
  {
    category: 'mapas',
    type: 'vf',
    question: 'La definición y gestión de Métricas se representa típicamente mediante un mapa de procesos IDEF0.',
    options: ['Verdadero', 'Falso'],
    correct: 1,
    justification: 'FALSO. "Métricas" es la única excepción que NO lleva mapa de procesos. Se representa mediante una estructura tabular con 8 descriptores obligatorios (Nombre, Objetivo, Fórmula, Unidad, etc.).',
    trap: true
  },
  {
    category: 'ciclo-pruebas',
    type: 'multi',
    question: 'Según el SGCS, ¿cuáles son las 4 verificaciones de fase (auditorías) obligatorias y estratégicas en un proyecto?',
    options: [
      '1. Tras requisitos, 2. Tras programación/pruebas, 3. Tras pruebas de aceptación, 4. Al cierre del proyecto.',
      '1. Al firmar contrato, 2. Tras diseño, 3. Tras pruebas unitarias, 4. En el despliegue.',
      '1. Al inicio, 2. A la mitad, 3. Al final, 4. En mantenimiento.',
      'Sólo hay 2 obligatorias: Requisitos y Cierre.'
    ],
    correct: 0,
    justification: 'Son 4 estratégicas: 1. Tras requisitos (asegurar qué quiere el cliente), 2. Tras programación (asegurar el núcleo), 3. Antes/Tras pruebas de aceptación (asegurar lo entregable), 4. Al cierre (hojas de tiempo, repositorios, lecciones aprendidas).',
    trap: false
  },

  // ===== TRAMPAS EXAMEN: BANCO V/F SGCS =====
  {
    category: 'procedimientos',
    type: 'vf',
    question: 'El manual de procedimientos es conocimiento privado de la organización y NO se debe entregar al cliente.',
    options: ['Falso', 'Verdadero'],
    correct: 1,
    justification: 'FALSO. El manual de procedimientos es conocimiento privado de la empresa (know-how) y NO se entrega al cliente.',
    trap: true
  },
  {
    category: 'procedimientos',
    type: 'vf',
    question: 'El plan de calidad es un documento particular para un proyecto concreto, a diferencia del manual de calidad que es único para la organización.',
    options: ['Falso', 'Verdadero'],
    correct: 1,
    justification: 'VERDADERO. El plan de calidad aplica las directrices del SGC a un escenario/proyecto particular.',
    trap: true
  },
  {
    category: 'procedimientos',
    type: 'vf',
    question: 'El cliente puede tener acceso al Sistema de Información de Errores (SIE).',
    options: ['Falso', 'Verdadero'],
    correct: 1,
    justification: 'VERDADERO. El cliente puede y debe poder acceder al SIE para poder introducir y seguir las incidencias.',
    trap: false
  },
  {
    category: 'mapas',
    type: 'vf',
    question: 'Un mapa de procesos IDEF0 debe ser autoexplicativo, por lo que NO debe requerir notas al pie.',
    options: ['Falso', 'Verdadero'],
    correct: 1,
    justification: 'VERDADERO. Si necesitas incluir una nota al pie para explicar algo, significa que el mapa de procesos no es lo suficientemente claro y debe rediseñarse.',
    trap: true
  },
  {
    category: 'mapas',
    type: 'vf',
    question: 'En un mapa de procesos IDEF0, los checklist o listas de chequeo se representan como mecanismos de control (flecha entrando por debajo).',
    options: ['Falso', 'Verdadero'],
    correct: 1,
    justification: 'VERDADERO. Los checklist son mecanismos que guían y controlan la ejecución del proceso, no entradas transformables.',
    trap: true
  },
  {
    category: 'procedimientos',
    type: 'vf',
    question: 'Las desviaciones concertadas al SGC (por ejemplo, si un cliente exige su propio procedimiento) se recogen en el Manual de Procedimientos de la empresa.',
    options: ['Falso', 'Verdadero'],
    correct: 0,
    justification: 'FALSO. Se recogen en el Plan de Calidad particular de ese proyecto, no en el Manual general de la empresa.',
    trap: true
  },
  {
    category: 'ciclo-pruebas',
    type: 'vf',
    question: 'Las pruebas de unidad e integración deben documentarse obligatoriamente en el Sistema de Información de Errores (SIE).',
    options: ['Falso', 'Verdadero'],
    correct: 0,
    justification: 'FALSO. Sólo las pruebas de sistema y aceptación (donde participa cliente / entorno real) van al SIE. El coste/beneficio en una PYME no compensa meter las unitarias al SIE.',
    trap: true
  },
  {
    isEnumeration: true,
    category: 'ciclo-pruebas',
    type: 'vf',
    question: 'La línea base de producto se establece cuando se pasan satisfactoriamente las pruebas de unidad e integración.',
    options: ['Falso', 'Verdadero'],
    correct: 0,
    justification: 'FALSO. Se establece al pasar satisfactoriamente las pruebas de SISTEMA, y a partir de ahí se realizan las de aceptación.',
    trap: true
  },

  // ===== TRAMPAS ENUMERACIONES: SGCS / FASES =====
  {
    isEnumeration: true,
    category: 'procedimientos',
    type: 'multi',
    question: '¿Cuál es el orden secuencial correcto de las partes (fases) de un proyecto clásico en el ciclo de vida en V?',
    options: [
      'Contrato, Oferta, Requisitos, Diseño BN, Diseño AN, Programación, Pruebas Unitarias, Integración, Sistema, Aceptación, Cierre',
      'Oferta, Contrato, Requisitos, Diseño AN, Diseño BN, Programación, Pruebas unitarias, Pruebas integración, Pruebas sistema, Pruebas aceptación, Despliegue / Cierre',
      'Oferta, Requisitos, Contrato, Diseño AN, Programación, Diseño BN, Pruebas Unitarias, Integración, Sistema, Aceptación, Cierre',
      'Requisitos, Oferta, Contrato, Programación, Diseño AN, Diseño BN, Pruebas Unitarias, Integración, Sistema, Aceptación, Cierre'
    ],
    correct: 1,
    justification: 'La secuencia lógica comienza con la Oferta y el Contrato, seguidos del desglose en V: Requisitos, Diseño AN, Diseño BN, Programación, y la subida con Pruebas Unitarias, Integración, Sistema, Aceptación y Cierre.',
    trap: false
  },
];
