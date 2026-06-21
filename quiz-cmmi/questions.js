/* ==============================
   Questions DB — CMMI Modelo + Evaluación
   Quiz ACL 2026
   ============================== */

const CATEGORIES = [
  { id: 'cmmi-intro',     name: 'Qué es CMMI',                icon: '🏛️' },
  { id: 'versiones',      name: 'Versiones y Evolución',       icon: '🔄' },
  { id: 'estructura',     name: 'Estructura de una PA',        icon: '🧱' },
  { id: 'staged-cont',    name: 'Staged vs Continuous',        icon: '⚖️' },
  { id: 'pas-ciclo',      name: 'PAs y Ciclo de Vida',         icon: '♻️' },
  { id: 'scampi',         name: 'SCAMPI y Tipos',              icon: '📋' },
  { id: 'evaluacion',     name: 'Evaluación CMMI',             icon: '🔎' },
  { id: 'trampas',        name: 'Trampas de Examen',           icon: '⚠️' },
];

const QUESTIONS = [
  {
    category: 'cmmi-intro',
    type: 'multi',
    question: '¿Qué significan las siglas CMMI?',
    options: [
      'Certified Maturity Management Institute',
      'Continuous Measurement Model for Integration',
      'Computer-based Maturity Model Infrastructure',
      'Capability Maturity Model Integration'
    ],
    correct: 3,
    justification: 'CMMI = Capability Maturity Model Integration. Fue desarrollado por el SEI (Software Engineering Institute) de Carnegie Mellon, financiado por el Departamento de Defensa de EEUU.',
    trap: false
  },
  {
    category: 'cmmi-intro',
    type: 'multi',
    question: '¿Quién desarrolló originalmente CMMI?',
    options: [
      'IEEE (Institute of Electrical and Electronics Engineers)',
      'ISACA (Information Systems Audit and Control Association)',
      'SEI (Software Engineering Institute) de Carnegie Mellon',
      'ISO (International Organization for Standardization)'
    ],
    correct: 2,
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
    justification: 'VERDADERO. CMMI fue desarrollado por el SEI (Software Engineering Institute) de Carnegie Mellon, NO por el IEEE. El SEI fue financiado por el Departamento de Defensa de EEUU.',
    trap: true
  },
  {
    category: 'cmmi-intro',
    type: 'multi',
    question: '¿Cuál es el ROI medio reportado por las organizaciones que implementan CMMI?',
    options: [
      '1:1',
      '2:1',
      '4:1',
      '10:1'
    ],
    correct: 2,
    justification: 'El ROI medio de CMMI es de 4:1, con un incremento de productividad del 10-50%. Esto significa que por cada euro invertido en la mejora, se recuperan 4 euros.',
    trap: false
  },
  {
    category: 'cmmi-intro',
    type: 'multi',
    question: '¿Qué guía CMMI a las organizaciones a mejorar?',
    options: [
      'Los procesos asociados al desarrollo y mantenimiento de software',
      'Los procesos de contabilidad y finanzas',
      'Exclusivamente los procesos de recursos humanos',
      'Los procesos de marketing y ventas'
    ],
    correct: 0,
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
      'La ONU',
      'La Unión Europea',
      'El Departamento de Defensa de EEUU',
      'Empresas privadas del Silicon Valley'
    ],
    correct: 2,
    justification: 'El Departamento de Defensa de EEUU (DoD) financió el desarrollo de CMMI a través del SEI de Carnegie Mellon. El objetivo era asegurar la calidad del software en proyectos de defensa.',
    trap: false
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Cuántas constelaciones independientes tenía CMMI V1.3?',
    options: [
      '4 (DEV, ACQ, SVC, PPL)',
      '1 (modelo único)',
      '3 (DEV, ACQ, SVC)',
      '2 (DEV y SVC)'
    ],
    correct: 2,
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
      'Microsoft',
      'ISACA',
      'ISO'
    ],
    correct: 2,
    justification: 'ISACA (Information Systems Audit and Control Association) compró el CMMI Institute. Bajo ISACA se creó un modelo único con arquitectura flexible, eliminando las constelaciones separadas de V1.3.',
    trap: false
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Cuántas PAs tiene CMMI V2.0 en total?',
    options: [
      '16 PAs',
      '25 PAs (18 comunes)',
      '20 PAs',
      '30 PAs'
    ],
    correct: 1,
    justification: 'V2.0 tiene 25 PAs totales, de las cuales 18 son comunes a todas las vistas. La vista CMMI-DEV contiene 20 PAs. La V2.0 también introdujo vistas predefinidas para evaluación (CMMI-DEV, CMMI-SVC, CMMI-SPM, CMMI-PPL).',
    trap: false
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Qué PAs añade CMMI-DEV (V1.3) sobre las 16 PAs base?',
    options: [
      'CAR, DAR, MPM, OT',
      'CM, MC, PQA, PR',
      'PI, RD, SAM, TS, VAL, VER',
      'GOV, II, EST, PLAN'
    ],
    correct: 2,
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
      'DEV, ACQ, SVC (igual que V1.3)',
      'DEV, QA, PM, HR',
      'Solo DEV y SVC',
      'DATA, DEV, PPL, SAF, SEC, SVC, SPM, VRT'
    ],
    correct: 3,
    justification: 'V3.0 introduce 8 dominios o dimensiones: DATA (Data Management), DEV (Development), PPL (People), SAF (Safety), SEC (Security), SVC (Services), SPM (Supplier Management) y VRT (Virtual/Remote Work).',
    trap: false
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Qué nuevas PAs introduce el dominio DATA en V3.0?',
    options: [
      'ESEC y MST',
      'TS y PI',
      'EVW y WE',
      'DM y DQ'
    ],
    correct: 3,
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
      'Solo CMMI-DEV',
      'DEV, ACQ, SVC (como V1.3)',
      'CMMI-DEV, CMMI-SVC, CMMI-SPM, CMMI-PPL',
      'DATA, SEC, SAF, VRT'
    ],
    correct: 2,
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
      '20 PAs',
      '16 PAs',
      '25 PAs',
      '18 PAs'
    ],
    correct: 0,
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
      'Declaración del propósito y Notas introductorias',
      'Metas específicas (SG) y Metas genéricas (GG)',
      'Prácticas específicas (SP) y Prácticas genéricas (GP)',
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
      'Requerido = rectángulo, Esperado = diamante, Informativo = elipse',
      'Todos se representan con rectángulos',
      'Requerido = elipse, Esperado = rectángulo, Informativo = diamante',
      'Requerido = diamante, Esperado = elipse, Informativo = rectángulo'
    ],
    correct: 0,
    justification: 'La leyenda del diagrama es: Requerido = rectángulo, Esperado = diamante, Informativo = elipse. Esto ayuda a identificar visualmente la importancia de cada componente.',
    trap: false
  },
  {
    category: 'estructura',
    type: 'multi',
    question: '¿Qué elementos de una PA son \'Esperados\'?',
    options: [
      'Subprácticas y Elaboraciones',
      'Metas específicas (SG) y Metas genéricas (GG)',
      'Prácticas específicas (SP) y Prácticas genéricas (GP)',
      'Declaración del propósito y PAs relacionadas'
    ],
    correct: 2,
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
      'PA → Practice Group (PG) → Practice',
      'PA → Módulos → Tareas',
      'SG → SP → Subprácticas (igual que V1.3)',
      'PA → GG → GP'
    ],
    correct: 0,
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
      '4 niveles (1-4)',
      '5 niveles (1-5)',
      '3 niveles (1-3)',
      '6 niveles (0-5)'
    ],
    correct: 1,
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
      'Una lista de prácticas implementadas',
      'Un porcentaje de cumplimiento',
      'Un nivel de madurez global de la organización'
    ],
    correct: 3,
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
      'REQM, PP, PMC, PPQA, MA, CM, SAM',
      'DR, TS, VAL, VER, PI, IPM, DAR',
      'OPP, QPM',
      'OPM, CAR'
    ],
    correct: 0,
    justification: 'Nivel 2 (Gestionado): REQM (Requirements Management), PP (Project Planning), PMC (Project Monitoring and Control), PPQA (Process and Product Quality Assurance), MA (Measurement and Analysis), CM (Configuration Management), SAM (Supplier Agreement Management).',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'multi',
    question: '¿Qué PAs corresponden al Nivel 4 (Gestionado Cuantitativamente) en Staged?',
    options: [
      'DR, TS, VAL, VER',
      'OPM, CAR',
      'OPP, QPM',
      'REQM, PP, PMC'
    ],
    correct: 2,
    justification: 'Nivel 4 (Gestionado Cuantitativamente): OPP (Organizational Process Performance) y QPM (Quantitative Project Management). Son solo 2 PAs centradas en técnicas cuantitativas/estadísticas.',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'multi',
    question: '¿Qué PAs corresponden al Nivel 5 (Optimizado) en Staged?',
    options: [
      'DR, TS, VAL, VER',
      'OPM, CAR',
      'OPP, QPM',
      'REQM, PP, PMC'
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
      'Es demasiado caro',
      'Es demasiado simple',
      'La \'titulitis\': mejorar áreas no críticas solo para subir de nivel',
      'No permite evaluación'
    ],
    correct: 2,
    justification: 'El modelo Staged puede provocar \'titulitis\': mejorar áreas no críticas solo para subir de nivel, ignorando los problemas reales. La profesora lo compara con \'tratar una pierna rota haciéndose la manicura\'.',
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
      'Tiene menos niveles',
      'Produce un nivel de madurez global',
      'Permite elegir qué PAs mejorar según la necesidad real del negocio',
      'Es más barato de implementar'
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
      'Nivel 3 — Definido',
      'Nivel 4 — Gestionado Cuantitativamente',
      'Nivel 2 — Gestionado'
    ],
    correct: 3,
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
      'Control de versiones e integridad de productos',
      'Diseño y construcción de la solución técnica',
      'Extracción, análisis, trazabilidad bidireccional y control de requisitos',
      'Supervisar resultados reales vs planes'
    ],
    correct: 2,
    justification: 'RDM cubre la gestión de requisitos: extracción, análisis, trazabilidad bidireccional y control de requisitos. Desde necesidades del cliente hasta requisitos priorizados y comprometidos.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA se encarga de la \'Estimación\' (calcular tamaño, esfuerzo, duración y coste)?',
    options: [
      'MC — Monitor and Control',
      'MPM — Managing Performance & Measurement',
      'EST — Estimating',
      'PLAN — Planning'
    ],
    correct: 2,
    justification: 'EST (Estimating) se encarga de calcular tamaño, esfuerzo, duración y coste basándose en datos históricos y métodos formales. PLAN se encarga de la planificación general del proyecto.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué diferencia hay entre VER (Verification) y VAL (Validation)?',
    options: [
      'VER es para documentos; VAL es para código',
      'VER comprueba que los requisitos se implementan correctamente; VAL que la solución funciona en su entorno de destino',
      'VER comprueba requisitos del cliente; VAL comprueba que funciona en su entorno',
      'Son sinónimos, no hay diferencia'
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
      'VV — Verification and Validation',
      'TS — Technical Solution',
      'CM — Configuration Management',
      'PI — Product Integration'
    ],
    correct: 3,
    justification: 'PI (Product Integration) se encarga de ensamblar componentes, gestionar interfaces y entregar la solución integrada al cliente. TS se ocupa del diseño y construcción, PI de la integración.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA cubre \'Revisiones entre pares para detectar defectos de forma temprana\'?',
    options: [
      'VV — Verification and Validation',
      'PQA — Process Quality Assurance',
      'DAR — Decision Analysis & Resolution',
      'PR — Peer Reviews'
    ],
    correct: 3,
    justification: 'PR (Peer Reviews) cubre las revisiones entre pares: revisar productos de trabajo por compañeros para detectar defectos de forma temprana antes de pruebas formales.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA se describe como \'la fábrica\' (crear y mantener activos de procesos organizacionales)?',
    options: [
      'OT — Organizational Training',
      'GOV — Governance',
      'PCM — Process Management',
      'PAD — Process Asset Development'
    ],
    correct: 3,
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
      'PQA — Process Quality Assurance',
      'RSK — Risk Opportunity Management',
      'DAR — Decision Analysis & Resolution',
      'CAR — Causal Analysis & Resolution'
    ],
    correct: 3,
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
      'GOV — Governance',
      'MC — Monitor and Control'
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
      'PR — Peer Reviews',
      'CM — Configuration Management',
      'GOV — Governance',
      'PQA — Process Quality Assurance'
    ],
    correct: 3,
    justification: 'PQA (Process Quality Assurance) realiza evaluaciones objetivas del cumplimiento de procesos y productos respecto a los estándares establecidos. PQA es aseguramiento (QA), no control (QC).',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA cubre la \'Gestión de Riesgos y Oportunidades\' a lo largo de todo el proyecto?',
    options: [
      'PLAN — Planning',
      'RSK — Risk Opportunity Management',
      'MC — Monitor and Control',
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
      'PCM — Process Management',
      'MPM — Managing Performance & Measurement',
      'GOV — Governance',
      'II — Implementation Infrastructure'
    ],
    correct: 2,
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
      'Systematic Capability Assessment for Model Performance Indicators',
      'Software Capability Maturity Process Inspection'
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
      '3 tipos (A, B, C)',
      '2 tipos (A y B)',
      '4 tipos (A, B, C, D)',
      '1 solo tipo'
    ],
    correct: 0,
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
      'En cualquier momento',
      'DURANTE el programa',
      'Al FINAL del programa',
      'Al INICIO del programa'
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
      '2 años',
      '1 año',
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
      '3',
      '1',
      '2',
      'Sin límite'
    ],
    correct: 0,
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
      'Un proyecto que solo aporta evidencia de alguna PA',
      'Un proyecto que ha terminado satisfactoriamente',
      'Un proyecto que se creó específicamente para la evaluación',
      'Un proyecto que proporciona evidencia para TODAS las PAs a evaluar'
    ],
    correct: 3,
    justification: 'Un proyecto objetivo proporciona evidencia para TODAS las PAs a evaluar. No importa si ha terminado o no. Se requiere al menos 1 proyecto objetivo. Los proyectos no objetivos aportan evidencia de solo algunas PAs.',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'multi',
    question: '¿Cuáles son los dos tipos de evidencia objetiva en una evaluación CMMI?',
    options: [
      'Métricas y certificados',
      'Informes y auditorías',
      'Artefactos y Afirmaciones',
      'Documentos y entrevistas'
    ],
    correct: 2,
    justification: 'Los dos tipos de evidencia objetiva son: Artefactos (salidas directas o indirectas de la implementación de prácticas, recogidos pre on-site) y Afirmaciones (confirmaciones verbales o escritas en entrevistas, recogidas on-site).',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'multi',
    question: '¿Cuál es la \'regla de oro\' para validar una practice?',
    options: [
      'Artefacto AND Afirmación positiva',
      'Solo se necesita un Artefacto directo',
      'Artefacto OR Afirmación positiva',
      'Solo se necesita una Afirmación positiva'
    ],
    correct: 0,
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
      'Artefactos directos presentes y adecuados, apoyados por evidencias, sin debilidades significativas',
      'Artefactos directos presentes con debilidades significativas',
      'Sin evidencia alguna',
      'Artefactos directos inadecuados o inexistentes'
    ],
    correct: 0,
    justification: 'FI (Fully Implemented): Artefactos directos presentes y adecuados, apoyados por artefactos indirectos y/o afirmaciones. No se detectan debilidades significativas.',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'multi',
    question: '¿Qué diferencia hay entre FI y LI?',
    options: [
      'FI es parcial; LI es completo',
      'FI es para artefactos; LI es para afirmaciones',
      'No hay diferencia, son sinónimos',
      'FI no tiene debilidades significativas; LI tiene una o más debilidades'
    ],
    correct: 3,
    justification: 'FI (Fully Implemented) no tiene debilidades significativas. LI (Largely Implemented) tiene artefactos directos presentes y adecuados, pero se han notado una o más debilidades (ej.: criterios de análisis ambiguos).',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'multi',
    question: '¿Qué significa PI (Partially Implemented)?',
    options: [
      'Sin evidencia alguna',
      'Artefactos directos presentes sin debilidades',
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
      '6 meses (aproximadamente)',
      '1 mes',
      '1 año',
      '2 meses'
    ],
    correct: 0,
    justification: 'La fase Pre On-Site comienza al menos 6 meses antes de la evaluación. Incluye: Presentar (6m antes), Planificar (4m antes) y Preparar (4m a 2 semanas antes).',
    trap: false
  },
  {
    category: 'evaluacion',
    type: 'multi',
    question: '¿Cuánto dura la fase On-Site?',
    options: [
      '1 mes',
      '5-10 días',
      '3 meses',
      '1-2 días'
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
      'Base de Datos de Evidencias Objetivas',
      'Base de Datos de Evaluación Organizacional',
      'Base de Datos de Estándares Operativos',
      'Base de Datos de Evaluadores Oficiales'
    ],
    correct: 0,
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
      'No, porque hay practices en LI',
      'Sí, porque al menos el 50% son FI',
      'Sí, porque la mayoría (7 de 8) son FI o LI',
      'No, porque hay 1 practice en PI'
    ],
    correct: 3,
    justification: 'NO está satisfecho. Si ALGUNA practice es PI o NI, el PG automáticamente no está satisfecho. No importa que 7 de 8 sean FI o LI: con solo 1 PI, el PG falla. TODAS deben ser FI o LI.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'multi',
    question: 'En una evaluación CMMI, la empresa presenta un documento creado el día anterior al On-Site para completar evidencias. ¿Es válido?',
    options: [
      'Sí, porque lo creó antes del On-Site',
      'No, si fue creado específicamente para la evaluación y no refleja la práctica real',
      'Sí, si el evaluador lo solicita',
      'Siempre es válido si existe antes del On-Site'
    ],
    correct: 1,
    justification: 'Los artefactos deben ser salidas REALES de la implementación de las prácticas, no documentos creados ad hoc para la evaluación. Un documento creado el día anterior podría no ser válido si no refleja la práctica habitual de la organización.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'multi',
    question: '¿Qué sucede si durante el On-Site se detecta que la empresa ha creado documentación nueva?',
    options: [
      'Puede causar el FIN de la evaluación',
      'Se ignora pero la evaluación continúa normalmente',
      'Se acepta como evidencia adicional',
      'Se le da una advertencia sin consecuencias'
    ],
    correct: 0,
    justification: 'El incumplimiento de la regla de \'no añadir nueva documentación durante el On-Site\' puede causar el FIN de la evaluación. Solo se puede añadir información que ya existía previamente.',
    trap: true
  },
  {
    category: 'trampas',
    type: 'multi',
    question: 'Una empresa tiene nivel CMMI 2 y quiere obtener nivel 4. ¿Puede hacerlo directamente?',
    options: [
      'No, debe pasar primero por el nivel 3',
      'Sí, con un SCAMPI A que cubra niveles 2, 3 y 4',
      'Sí, pero solo en el modelo Continuous',
      'Sí, si demuestra cumplir todos los requisitos del nivel 4'
    ],
    correct: 0,
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
      '18 PAs',
      '16 PAs',
      '25 PAs',
      '22 PAs (16 base + 6 específicas)'
    ],
    correct: 3,
    justification: 'CMMI-DEV V1.3 tiene 22 PAs: 16 base (comunes a todas las constelaciones) + 6 específicas de desarrollo (PI, RD, SAM, TS, VAL, VER). Las otras constelaciones (ACQ, SVC) tienen sus propias PAs adicionales.',
    trap: false
  },
  {
    category: 'cmmi-intro',
    type: 'multi',
    question: '¿Qué incremento de productividad reportan las organizaciones con CMMI?',
    options: [
      '10-50%',
      '1-5%',
      '50-100%',
      '100-200%'
    ],
    correct: 0,
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
      'PAD — Process Asset Development',
      'GOV — Governance',
      'II — Implementation Infrastructure',
      'OT — Organizational Training'
    ],
    correct: 2,
    justification: 'II (Implementation Infrastructure) aporta herramientas y recursos para soportar la implementación de los procesos. GOV se centra en la responsabilidad y patrocinio de la alta dirección.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA desarrolla \'habilidades y conocimientos críticos en los equipos\'?',
    options: [
      'PAD — Process Asset Development',
      'GOV — Governance',
      'MPM — Managing Performance & Measurement',
      'OT — Organizational Training'
    ],
    correct: 3,
    justification: 'OT (Organizational Training) se encarga de desarrollar habilidades y conocimientos críticos en los equipos para soportar los procesos.',
    trap: false
  },
  {
    category: 'staged-cont',
    type: 'multi',
    question: '¿Qué PAs incluye el Nivel 3 (Definido) en el modelo Staged?',
    options: [
      'OPP, QPM',
      'DR, TS, VAL, VER, PI, IPM, DAR, OPD, OPF, OT, RISQM',
      'OPM, CAR',
      'REQM, PP, PMC, PPQA, MA, CM, SAM'
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
      'Solo auditorías financieras',
      'Entrevistas y revisión documental',
      'Solo análisis de código fuente',
      'Solo encuestas online'
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
    isEnumeration: true,
    category: 'versiones',
    type: 'multi',
    question: '¿Cuál es la principal diferencia entre \'Área de Proceso\' (V1.3) y \'Área de Práctica\' (V2.0)?',
    options: [
      'V1.3 no tiene áreas de proceso',
      'V2.0 elimina todas las áreas de práctica',
      'Solo cambió el nombre, son idénticas',
      'En V1.3 usa SG/SP/GG/GP; en V2.0 usa Practice Groups (PG) con Practices'
    ],
    correct: 3,
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
      'Artefactos directos inexistentes o inadecuados, sin otra evidencia de soporte',
      'Artefactos directos presentes y adecuados sin debilidades',
      'Solo falta la afirmación pero los artefactos están presentes'
    ],
    correct: 1,
    justification: 'NI (Not Implemented): Artefactos directos inexistentes o inadecuados. No se encuentra otra evidencia (artefactos indirectos ni afirmaciones) que soporte la implementación de la práctica.',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA establece \'métricas de rendimiento y objetivos empresariales\' y analiza datos para mejora continua?',
    options: [
      'PQA — Process Quality Assurance',
      'CAR — Causal Analysis & Resolution',
      'MPM — Managing Performance & Measurement',
      'MC — Monitor and Control'
    ],
    correct: 2,
    justification: 'MPM (Managing Performance & Measurement) establece métricas de rendimiento y objetivos empresariales, y analiza datos para mejora continua. Es una de las pocas PAs que alcanzan CL5.',
    trap: false
  },
  {
    category: 'versiones',
    type: 'multi',
    question: '¿Qué dominio de CMMI V3.0 cubre el \'Trabajo en equipos distribuidos o virtuales\'?',
    options: [
      'VRT (Virtual/Remote Work)',
      'SPM (Supplier Management)',
      'PPL (People)',
      'SVC (Services)'
    ],
    correct: 0,
    justification: 'VRT (Virtual/Remote Work) cubre el trabajo en equipos distribuidos o virtuales. Su PA asociada es EVW. PPL cubre gestión de personas en general, no específicamente el trabajo remoto.',
    trap: false
  },
  {
    category: 'scampi',
    type: 'multi',
    question: '¿Cuál es la equivalencia de los tipos de evaluación entre V1.3 y V2.0?',
    options: [
      'SCAMPI A ≈ Evaluation, SCAMPI B ≈ Benchmark',
      'Son idénticos, no hay cambios',
      'V2.0 elimina todos los tipos de SCAMPI',
      'SCAMPI A ≈ Benchmark, SCAMPI B/C ≈ Evaluation, nuevo: Sustainment'
    ],
    correct: 3,
    justification: 'En V2.0: Benchmark ≈ SCAMPI A (oficial, diploma, 3 años). Sustainment es NUEVO (mantener, +2 años, máx 3). Evaluation ≈ SCAMPI B/C (foto rápida, sin diploma).',
    trap: false
  },
  {
    category: 'pas-ciclo',
    type: 'multi',
    question: '¿Qué PA usa \'metodologías estructuradas para la toma de decisiones formales con criterios y alternativas\'?',
    options: [
      'DAR — Decision Analysis & Resolution',
      'CAR — Causal Analysis & Resolution',
      'MC — Monitor and Control',
      'RSK — Risk Opportunity Management'
    ],
    correct: 0,
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
    isEnumeration: true,
    category: 'staged-cont',
    type: 'multi',
    question: '¿Qué nivel de madurez es requerido frecuentemente en contratos públicos?',
    options: [
      'Nivel 2 — Gestionado',
      'Nivel 5 — Optimizado',
      'Nivel 1 — Inicial',
      'Nivel 3 — Definido'
    ],
    correct: 3,
    justification: 'El Nivel 3 (Definido) es frecuentemente requerido en contratos públicos. Es el nivel donde la organización tiene procesos estandarizados para la construcción del software (TS, VER, VAL, PI).',
    trap: false
  },

  // ===== TRAMPAS ENUMERACIONES: CMMI LIFECYCLE =====
  {
    category: 'pas',
    type: 'multi',
    question: 'En CMMI-DEV, ¿qué área de proceso (PA) se encarga del aspecto del ciclo de vida consistente en asegurar que el producto cumple con su intención de uso en el entorno real por parte del cliente?',
    options: [
      'Aseguramiento de Calidad del Proceso y Producto (PPQA).',
      'Validación (VAL).',
      'Verificación (VER).',
      'Solución Técnica (TS).'
    ],
    correct: 1,
    justification: 'La Validación (VAL) comprueba que se construye el producto CORRECTO para el usuario. La Verificación (VER) comprueba que se construye BIEN según especificaciones técnicas.',
    trap: true
  },
  {
    isEnumeration: true,
    category: 'pas',
    type: 'multi',
    question: '¿Qué áreas de proceso en CMMI se dedican específicamente al ciclo de vida del producto en sus fases de diseño y construcción (ingeniería)?',
    options: [
      'Análisis de Decisiones y Resolución (DAR) y Gestión de Riesgos (RSKM).',
      'Desarrollo de Requisitos (RD), Solución Técnica (TS) e Integración del Producto (PI).',
      'Planificación de Proyecto (PP) y Monitorización (PMC).',
      'Medición y Análisis (MA) y Gestión de Configuración (CM).'
    ],
    correct: 1,
    justification: 'RD (requisitos), TS (arquitectura/diseño) y PI (ensamblaje/integración) son las PAs de Ingeniería orientadas puramente a la construcción del software.',
    trap: false
  },
];
