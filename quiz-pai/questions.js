/**
 * BANCO DE PREGUNTAS — Procedimiento de Auditorías Internas (PAI-001)
 * Temario: Planificación, ejecución y seguimiento de auditorías internas del SGC
 * Fuentes: PAI-001 v1.0, Documentacion_Procesos_Narrativa_QUALIT, apuntes de estudio
 * ============================================================
 */

const CATEGORIES = [
  { id: 'conceptos',       name: 'Conceptos Base',                icon: '📘' },
  { id: 'criterios',       name: '5 Criterios del Auditor',       icon: '🔍' },
  { id: 'roles',           name: 'Roles y Responsabilidades',     icon: '👥' },
  { id: 'vf',              name: 'Verificación de Fase',          icon: '🔬' },
  { id: 'ag',              name: 'Auditoría General',             icon: '🏢' },
  { id: 'nc',              name: 'No Conformidades',              icon: '⚠️' },
  { id: 'informes',        name: 'Informes y Documentación',      icon: '📋' },
  { id: 'entradas-salidas', name: 'Entradas, Salidas y Métricas', icon: '📊' },
  { id: 'diferencias',     name: 'Diferencias Clave (Examen)',    icon: '🎯' },
];

const QUESTIONS = [

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
      'Que el producto software no tiene defectos técnicos.',
      'Que el código cumple con los estándares de codificación.',
      'Que se siguen los procesos, procedimientos, plantillas y registros del SGC.',
      'Que las pruebas unitarias tienen cobertura suficiente.'
    ],
    correct: 2,
    justification: 'Una auditoría interna verifica que se siguen los procesos, procedimientos, plantillas y registros del SGC. Es aseguramiento de calidad, no control de calidad. No comprueba la calidad técnica del producto.',
    trap: false
  },
  {
    isEnumeration: true,
    category: 'conceptos',
    type: 'multi',
    question: '¿Cuáles son las dos modalidades de auditoría interna?',
    options: [
      'Auditoría técnica y Auditoría administrativa.',
      'Verificación de fase (VF) y Auditoría general (AG).',
      'Auditoría interna y Auditoría externa.',
      'Auditoría de certificación y Auditoría de seguimiento.'
    ],
    correct: 1,
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
    isEnumeration: true,
    category: 'conceptos',
    type: 'multi',
    question: '¿Qué tipo de auditoría interna cubre las fases del ciclo de vida de un proyecto?',
    options: [
      'Auditoría general (AG).',
      'Verificación de fase (VF).',
      'Auditoría de certificación.',
      'Auditoría de seguimiento.'
    ],
    correct: 1,
    justification: 'La Verificación de fase (VF) cubre las fases del ciclo de vida de un proyecto software. La Auditoría general (AG), en cambio, cubre áreas o departamentos fuera de los proyectos.',
    trap: false
  },
  {
    isEnumeration: true,
    category: 'conceptos',
    type: 'multi',
    question: '¿Qué tipo de auditoría interna cubre áreas como RRHH, marketing o compras?',
    options: [
      'Auditoría de producto.',
      'Auditoría general (AG).',
      'Verificación de fase (VF).',
      'Auditoría de procesos.'
    ],
    correct: 1,
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
      'Independencia, objetividad, experiencia auditando, competencia técnica y experiencia en el área.',
      'Certificación ISO, experiencia laboral, independencia, formación y liderazgo.',
      'Independencia, formación universitaria, certificación ISO, experiencia de gestión y objetividad.',
      'Competencia técnica, experiencia laboral, certificación oficial, antigüedad y liderazgo.'
    ],
    correct: 0,
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
      'Ajeno al área auditada, conocimientos y experiencia en auditar, conocimientos y experiencia en lo auditado.',
      'Independiente, certificado y técnico.',
      'Externo, imparcial y competente.',
      'Formado, experimentado y objetivo.'
    ],
    correct: 0,
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
      'El de VF necesita conocimientos en desarrollo software; el de AG necesita conocimientos del área que audita (no necesariamente software).',
      'El de VF no necesita ser técnico; el de AG sí necesita ser ingeniero.',
      'El de AG siempre debe ser externo a la empresa; el de VF es interno.',
      'Ambos necesitan exactamente los mismos conocimientos técnicos.'
    ],
    correct: 0,
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
      'El Jefe de Proyecto.',
      'El Director General.',
      'El Responsable de Calidad.'
    ],
    correct: 2,
    justification: 'El Director General aprueba el programa anual de auditorías, así como las versiones y modificaciones del PAI, y asegura la disponibilidad de recursos.',
    trap: false
  },
  {
    category: 'roles',
    type: 'multi',
    question: '¿Quién elabora el programa anual de auditorías?',
    options: [
      'El Director General.',
      'El Auditor de Sistemas.',
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
      'El Jefe de Proyecto.',
      'El Responsable de Calidad.',
      'El Director General.',
      'El Auditor que realizó la auditoría.'
    ],
    correct: 1,
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
      'El Jefe de Proyecto (solo en VF).',
      'El Auditor que detectó la no conformidad.',
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
      'El Jefe de Proyecto.',
      'El Responsable de Calidad.',
      'El Director Técnico.',
      'El Auditor Técnico.'
    ],
    correct: 0,
    justification: 'El Jefe de Proyecto incluye las VFs en el plan de proyecto con fechas concretas. También facilita acceso a documentación y personal, y acuerda acciones correctivas con el Auditor Técnico.',
    trap: false
  },
  {
    category: 'roles',
    type: 'multi',
    question: '¿Quién convoca y dirige la reunión inicial y final en una AG?',
    options: [
      'El Director General.',
      'El Auditor de Sistemas.',
      'El responsable del área auditada.',
      'El Responsable de Calidad.'
    ],
    correct: 1,
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
      'El Responsable de Calidad.',
      'El Director General.',
      'El Jefe de Proyecto.',
      'El Auditor Técnico.'
    ],
    correct: 2,
    justification: 'En VF, el Jefe de Proyecto supervisa la ejecución de las acciones correctivas. En AG, es el Responsable del área. El cierre formal siempre es del Responsable de Calidad.',
    trap: false
  },
  {
    category: 'roles',
    type: 'multi',
    question: '¿Quién acuerda las acciones correctivas con el Auditor de Sistemas en una AG?',
    options: [
      'El Responsable del área auditada.',
      'El Jefe de Proyecto.',
      'El Responsable de Calidad.',
      'El Director General.'
    ],
    correct: 0,
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
      'Al cierre del proyecto.',
      'Tras las pruebas de sistema.',
      'Tras la fase de requisitos.',
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
      '1 VF al cierre.',
      '4 VFs (sin excepción).',
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
      'El Jefe de Proyecto (las incluye en el plan de proyecto).',
      'El Responsable de Calidad (en el programa anual).',
      'El Director General.'
    ],
    correct: 1,
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
      'Examen de documentación, análisis de registros de calidad, entrevistas al personal y observación directa.',
      'Solo análisis de métricas de producto.',
      'Solo revisión de código fuente.',
      'Solo entrevistas al personal.'
    ],
    correct: 0,
    justification: 'El Auditor Técnico obtiene evidencias mediante: examen de documentación (entregables, planes, especificaciones), análisis de registros de calidad, entrevistas al personal y observación directa.',
    trap: false
  },
  {
    category: 'vf',
    type: 'multi',
    question: '¿Cuál es el paso 6 del flujo completo de una VF?',
    options: [
      'El RC envía copia al JP.',
      'El Responsable de Calidad designa al Auditor Técnico.',
      'Acuerdo entre Auditor Técnico y Jefe de Proyecto sobre acciones correctivas, responsables y fechas límite.',
      'El Auditor Técnico elabora el informe de VF.'
    ],
    correct: 2,
    justification: 'El paso 6 del flujo de VF es que el Auditor Técnico acuerda con el Jefe de Proyecto las acciones correctivas, responsables y fechas límite para cada no conformidad detectada.',
    trap: false
  },
  {
    category: 'vf',
    type: 'multi',
    question: '¿A quién remite el informe de VF el Auditor Técnico?',
    options: [
      'Al Director General.',
      'Al Director Técnico.',
      'Directamente al Jefe de Proyecto.',
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
      'El Jefe de Proyecto.',
      'El Auditor Técnico.',
      'El responsable del área auditada.'
    ],
    correct: 1,
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
      'El Responsable de Calidad (programa anual).',
      'El Director General.',
      'El Jefe de Proyecto.'
    ],
    correct: 1,
    justification: 'El Responsable de Calidad elabora el programa anual de auditorías generales (que aprueba el Director General). Es su iniciativa, no hay plan de proyecto involucrado.',
    trap: false
  },
  {
    category: 'ag',
    type: 'multi',
    question: '¿Con cuánta antelación se comunica la fecha de AG al responsable del área?',
    options: [
      '1 mes de antelación.',
      'No requiere antelación, puede ser por sorpresa.',
      '1 semana de antelación.',
      '1 día de antelación.'
    ],
    correct: 2,
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
      'El informe final de auditoría.',
      'Objetivo, alcance, técnicas, pasos y calendario de la auditoría.',
      'Los resultados y hallazgos de la auditoría.',
      'Las acciones correctivas acordadas.'
    ],
    correct: 1,
    justification: 'En la reunión inicial (convocada por el Auditor de Sistemas), se presenta el objetivo, alcance, técnicas, pasos y calendario. Es una reunión organizativa, previa al trabajo de campo.',
    trap: false
  },
  {
    category: 'ag',
    type: 'multi',
    question: '¿Quiénes asisten a la reunión inicial de una AG?',
    options: [
      'El responsable del área y el personal implicado.',
      'Todo el personal de la empresa.',
      'El Director General y el Responsable de Calidad.',
      'Solo el Auditor de Sistemas.'
    ],
    correct: 0,
    justification: 'A la reunión inicial asisten el responsable del área auditada y el personal implicado. El Auditor de Sistemas convoca y dirige la reunión.',
    trap: false
  },
  {
    category: 'ag',
    type: 'multi',
    question: '¿Qué ocurre en la reunión final de una AG?',
    options: [
      'Solo se entrega el informe firmado.',
      'El Auditor presenta resultados y se acuerdan acciones correctivas, responsables y fechas límite.',
      'Se decide si se repite la auditoría.',
      'Se celebra la finalización exitosa de la auditoría.'
    ],
    correct: 1,
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
      'Examen de documentación y registros, entrevistas al personal y observación directa.',
      'Solo entrevistas al responsable del área.',
      'Solo inspección visual de las instalaciones.',
      'Solo revisión de los informes financieros.'
    ],
    correct: 0,
    justification: 'El Auditor de Sistemas obtiene evidencias objetivas mediante: examen de documentación y registros del área, entrevistas al personal del área auditada y observación directa.',
    trap: false
  },
  {
    category: 'ag',
    type: 'multi',
    question: '¿Quién supervisa que el equipo ejecute las acciones correctivas en una AG?',
    options: [
      'El Auditor de Sistemas.',
      'El Director General.',
      'El Responsable del área auditada.',
      'El Responsable de Calidad.'
    ],
    correct: 2,
    justification: 'En AG, el Responsable del área supervisa que su equipo ejecute las acciones correctivas. El Responsable de Calidad hace el seguimiento y cierre formal.',
    trap: false
  },
  {
    category: 'ag',
    type: 'multi',
    question: '¿Cuál es el último paso del flujo completo de una AG?',
    options: [
      'El Director General aprueba los resultados.',
      'El Responsable de Calidad hace el seguimiento y cierre formal.',
      'Se comunica la fecha al responsable del área.',
      'El Auditor de Sistemas elabora el informe.'
    ],
    correct: 1,
    justification: 'El último paso del flujo de AG es que el Responsable de Calidad hace el seguimiento y cierre formal de las acciones correctivas, igual que en las VFs.',
    trap: false
  },
  {
    category: 'ag',
    type: 'multi',
    question: '¿A quién se envía la copia del informe de AG aprobado?',
    options: [
      'Al Auditor de Sistemas.',
      'Al Jefe de Proyecto.',
      'Al Director General.',
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
      'Un incumplimiento de un requisito del SGC que paraliza el proyecto/actividad.',
      'Un defecto técnico en el producto.',
      'Una sugerencia de mejora del auditor.',
      'Un incumplimiento menor sin consecuencias.'
    ],
    correct: 0,
    justification: 'NC Grave: incumple un requisito del SGC. Consecuencia: paralización del proyecto o actividad hasta resolverla + acciones correctivas inmediatas.',
    trap: false
  },
  {
    category: 'nc',
    type: 'multi',
    question: '¿Qué es una No Conformidad (NC) Leve?',
    options: [
      'Un incumplimiento que no compromete directamente el SGC y se corrige en plazo sin paralización.',
      'Un incumplimiento que paraliza el proyecto.',
      'Una sugerencia de mejora.',
      'Un error en el informe de auditoría.'
    ],
    correct: 0,
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
      'Paralización del proyecto o actividad hasta resolverla + acciones correctivas inmediatas.',
      'Pérdida inmediata de la certificación ISO.',
      'Notificación al Director General sin más.',
      'Solo corrección en plazo establecido sin paralización.'
    ],
    correct: 0,
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
      'Solo la descripción de la no conformidad.',
      'Acción correctiva acordada + responsable + fecha límite + clasificación (grave/leve).',
      'Solo el nombre del auditor que la detectó.',
      'Solo la clasificación grave/leve.'
    ],
    correct: 1,
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
      'Correctiva se aplica antes y preventiva después.',
      'Son sinónimos con distinto nombre.',
      'Correctiva: ataja la causa raíz. Preventiva: ataja la no conformidad.',
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
      'PAI-F04.',
      'PAI-F02.',
      'PAI-F03.'
    ],
    correct: 1,
    justification: 'El Informe de Auditoría General es el formulario PAI-F04. El Informe de Verificación de Fase es el PAI-F03.',
    trap: false
  },
  {
    isEnumeration: true,
    category: 'informes',
    type: 'multi',
    question: '¿Qué contenido mínimo tiene el informe PAI-F03 (VF) que NO tiene el PAI-F04 (AG)?',
    options: [
      'Actas de reunión inicial y final.',
      'Nombre del responsable del área.',
      'Fases del ciclo de vida comprendidas en el bloque.',
      'El nombre del auditor de sistemas.'
    ],
    correct: 2,
    justification: 'El informe de VF (PAI-F03) incluye las fases del ciclo de vida comprendidas en el bloque, dato que no aparece en el informe de AG (PAI-F04), ya que las AG no se organizan por fases del ciclo de vida.',
    trap: false
  },
  {
    category: 'informes',
    type: 'multi',
    question: '¿Qué campos comunes tienen los informes PAI-F03 y PAI-F04?',
    options: [
      'Solo la fecha de realización.',
      'Solo las no conformidades.',
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
    isEnumeration: true,
    category: 'informes',
    type: 'multi',
    question: '¿Qué contiene el informe de VF (PAI-F03)?',
    options: [
      'Identificación del proyecto, JP, fecha, auditor técnico, fases comprendidas, NCs con clasificación y acciones correctivas.',
      'Solo las NCs detectadas.',
      'Solo la firma del Director General.',
      'Solo las métricas del proyecto.'
    ],
    correct: 0,
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
      'Acta de reunión final.',
      'Plan de acciones correctivas.',
      'Resultados de auditorías anteriores.',
      'Informe de auditoría.'
    ],
    correct: 2,
    justification: 'Las entradas incluyen: norma ISO 9001 vigente, programa anual aprobado, resultados de auditorías anteriores, documentación del SGC, NCs abiertas de períodos anteriores y retroalimentación de clientes.',
    trap: false
  },
  {
    category: 'entradas-salidas',
    type: 'multi',
    question: '¿Cuál de las siguientes es una SALIDA del proceso de auditoría interna?',
    options: [
      'Plan de acciones correctivas con responsables y plazos.',
      'Documentación del SGC.',
      'Norma ISO 9001 vigente.',
      'Retroalimentación de clientes.'
    ],
    correct: 0,
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
      '(Planificadas − Ejecutadas) / Planificadas × 100.',
      'Planificadas / Ejecutadas × 100.',
      'Ejecutadas / Planificadas × 100.',
      'Ejecutadas − Planificadas.'
    ],
    correct: 2,
    justification: 'La métrica "% de auditorías ejecutadas vs planificadas" se calcula como: auditorías ejecutadas / auditorías planificadas × 100.',
    trap: false
  },
  {
    category: 'entradas-salidas',
    type: 'multi',
    question: '¿Cómo se calcula el "Nº de NC por auditoría"?',
    options: [
      'Auditorías realizadas / NC detectadas.',
      'NC detectadas × Auditorías realizadas.',
      'NC graves / NC leves.',
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
      'Σ(fecha_cierre − fecha_apertura) / nº NC.',
      'Nº NC / tiempo total × 100.',
      'Nº NC cerradas / Nº NC abiertas.',
      'Fecha_cierre − fecha_apertura × 100.'
    ],
    correct: 0,
    justification: 'El tiempo medio de cierre se calcula como: Σ(fecha_cierre − fecha_apertura) / nº NC. Mide la agilidad del proceso de resolución de hallazgos.',
    trap: false
  },
  {
    category: 'entradas-salidas',
    type: 'multi',
    question: '¿Cómo se calcula la "Tasa de NC recurrentes"?',
    options: [
      'NC cerradas / NC totales × 100.',
      'NC repetidas / NC totales × 100.',
      'NC nuevas / NC totales × 100.',
      'NC graves / NC totales × 100.'
    ],
    correct: 1,
    justification: 'La tasa de NC recurrentes se calcula como: NC repetidas / NC totales × 100. Un valor alto indica que las acciones correctivas no están siendo efectivas.',
    trap: false
  },
  {
    category: 'entradas-salidas',
    type: 'multi',
    question: '¿Cuál de las siguientes NO es una métrica del PAI?',
    options: [
      'Densidad de defectos por KLOC.',
      '% auditorías ejecutadas vs planificadas.',
      'Tasa de NC recurrentes.',
      'Nº de NC por auditoría.'
    ],
    correct: 0,
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
      'Ambas las planifica el Jefe de Proyecto.',
      'VF: Responsable de Calidad. AG: Jefe de Proyecto.',
      'Ambas las planifica el Responsable de Calidad.',
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
      'VF: RC + JP. AG: RC + Responsable del área.',
      'En ambos: el Auditor con el Director General.',
      'En ambos: el Responsable de Calidad.',
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
      'En ambos: el Responsable de Calidad.',
      'En ambos: el Director General.',
      'VF: Jefe de Proyecto. AG: Responsable del área.',
      'VF: Auditor Técnico. AG: Auditor de Sistemas.'
    ],
    correct: 2,
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
      'Ambas: el mismo tipo de auditor.',
      'VF: Auditor de Sistemas. AG: Auditor Técnico.',
      'VF: Auditor Técnico. AG: Auditor de Sistemas.',
      'Ambas: el Responsable de Calidad.'
    ],
    correct: 2,
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
      'VF: Jefe de Proyecto. AG: Responsable del área auditada.',
      'VF: Responsable del área. AG: Jefe de Proyecto.',
      'En ambos: al Responsable de Calidad.'
    ],
    correct: 1,
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
      'Solo en Verificaciones de Fase (VF).',
      'En ningún tipo de auditoría interna.',
      'En ambos tipos de auditoría.',
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
      'El Director General lo elabora y aprueba.',
      'El Jefe de Proyecto lo elabora. El auditor lo aprueba.',
      'El Responsable de Calidad lo elabora. El Director General lo aprueba.',
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
  },

  // ===== TRAMPAS EXAMEN: BANCO V/F AUDITORÍAS (PAI) =====
  {
    category: 'informes',
    type: 'vf',
    question: 'Las tres fechas de la portada del TGR (autor, revisor, aprobador) deben ser obligatoriamente distintas.',
    options: ['Falso', 'Verdadero'],
    correct: 1,
    justification: 'VERDADERO. Se exige que sean distintas para evidenciar una secuencia lógica e independiente de elaboración, revisión y aprobación.',
    trap: true
  },
  {
    category: 'informes',
    type: 'vf',
    question: 'Se recomienda incluir en los anexos únicamente las plantillas mínimas imprescindibles, ya que aportar demasiadas ata a la organización.',
    options: ['Falso', 'Verdadero'],
    correct: 1,
    justification: 'VERDADERO. Las plantillas anexadas son de uso obligatorio; cuantas más pongas, más burocracia generas ("cuantas más pongas, más te atas").',
    trap: true
  },
  {
    category: 'informes',
    type: 'vf',
    question: 'El apartado de responsabilidades (6) de un procedimiento puede y debe redactarse antes que el cuerpo (10) para definir primero los perfiles.',
    options: ['Falso', 'Verdadero'],
    correct: 0,
    justification: 'FALSO. Es incoherente. Hay que conocer primero qué tareas hay (redactando el cuerpo 10) para luego poder asignar esas responsabilidades a los perfiles (apartado 6).',
    trap: true
  },
  {
    category: 'informes',
    type: 'vf',
    question: 'En el apartado de procedimientos relacionados de una auditoría interna, conviene listar el SGC completo para no olvidar ninguna referencia cruzada.',
    options: ['Falso', 'Verdadero'],
    correct: 0,
    justification: 'FALSO. Se listan solo los estrictamente necesarios (Guía de ciclo, gestión de proyectos, revisión entregables, correctivas/preventivas). Poner todo el SGC es un error.',
    trap: true
  },
  {
    category: 'nc',
    type: 'vf',
    question: 'Una acción preventiva es la que busca eliminar la causa raíz de una posible no conformidad para evitar que llegue a ocurrir.',
    options: ['Falso', 'Verdadero'],
    correct: 1,
    justification: 'VERDADERO. La acción correctiva soluciona un problema que YA ha ocurrido. La preventiva ataca el origen/causa raíz ANTES de que el problema ocurra.',
    trap: true
  },
  {
    category: 'nc',
    type: 'vf',
    question: 'Una mejora potencial sugerida por un desarrollador para optimizar un proceso debe originar una hoja de acción preventiva (o de mejora).',
    options: ['Falso', 'Verdadero'],
    correct: 1,
    justification: 'VERDADERO. Al no haber un problema o desviación real, sino una oportunidad de optimización, se canaliza como acción preventiva.',
    trap: true
  },
  {
    category: 'ag',
    type: 'vf',
    question: 'Las solicitudes de formación que el responsable de calidad rechaza se deben registrar con justificación detallada en un acta formal.',
    options: ['Falso', 'Verdadero'],
    correct: 0,
    justification: 'FALSO. Se rechaza, se comunica el motivo al solicitante (como todo), pero NO hace falta levantar un acta formal con registro. El proceso termina ahí.',
    trap: true
  },
  {
    category: 'nc',
    type: 'vf',
    question: 'Si durante una verificación de fase el auditor y el auditado no se ponen de acuerdo respecto a una no conformidad, el procedimiento debe contemplar escalar el problema al director general.',
    options: ['Falso', 'Verdadero'],
    correct: 0,
    justification: 'FALSO. En el procedimiento NO se debe dar la alternativa de escalar, porque si la das, se usará siempre. El acuerdo entre auditor y auditado SE ASUME.',
    trap: true
  },
];
