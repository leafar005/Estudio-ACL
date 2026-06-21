# Portal de Encuestas ACL 2026

Portal interactivo diseñado para facilitar el estudio y la preparación de la asignatura **ACL** (Aseguramiento de la Calidad del Software). Permite acceder a múltiples cuestionarios interactivos organizados por temáticas y realizar simulacros. Quería hacer cualquier tontería para estudiar mejor la recu y se me fue de las manos.

## 📚 Módulos Disponibles

El portal cuenta con cuestionarios específicos para los siguientes temas:

- ⚡ **Calidad e ISO 9000**: Cuestionario centrado en los conceptos fundamentales de la Calidad del Software, la normativa ISO 9001:2015 y los procesos de Certificación.
- 🏛️ **CMMI Modelo + Eval.**: Preguntas sobre la estructura organizativa del modelo CMMI, el ciclo de vida de las Áreas de Proceso (PAs) y las evaluaciones SCAMPI.
- 📐 **Otros Modelos + Medición**: Incluye preguntas sobre estándares como SPICE, MMIS, ITmark, SwTQM y conceptos fundamentales de medición (Métricas, enfoque GQM y método PSM).
- ⚙️ **SGCS Práctica**: Procedimientos operativos, Mapas de Proceso (IDEF0), procesos colaterales, ciclo de pruebas y el Sistema de Información para Ejecutivos (SIE).
- 📋 **Auditorías Internas (PAI)**: Cuestionario dedicado al Plan de Auditorías Internas, cubriendo Verificaciones de Fase, Auditorías Generales y gestión de No Conformidades.
- 🌍 **Encuesta Global**: Un simulacro general configurable (10, 20, 50 o 100 preguntas) que extrae preguntas de forma aleatoria de todos los módulos anteriores, ideal para la preparación final.

## 🚀 Nuevas Características (v2.2.0)

Esta última versión convierte la plataforma en una herramienta de estudio mucho más avanzada, justa y gamificada:

- 💾 **Autoguardado de Progreso**: Si te sales de un test a medias, la aplicación recordará dónde te quedaste y te permitirá reanudarlo desde el menú principal.
- 🎲 **Sistema Anti-Predictibilidad**: Todas las respuestas de opción múltiple se barajan dinámicamente, y las trampas de V/F se han rebalanceado para que no puedas deducir la respuesta por inercia.
- 🏷️ **Etiquetas Inteligentes**: Las preguntas están etiquetadas visualmente en tiempo real (p. ej. `⚠️ Trampa` o `📋 Enumeración`) para ayudarte a identificar el tipo de concepto que se evalúa.
- 📊 **Panel de Rendimiento Global**: Sistema de estadísticas que guarda tu progreso en el almacenamiento local del navegador (`localStorage`).
  - **Historial de Tests**: Registra todos los simulacros realizados, tu nota, tiempo invertido y te permite revisar exactamente qué preguntas te salieron.
  - **Historial de Preguntas**: Un registro individual de las últimas preguntas contestadas, con la opción de desplegar la respuesta correcta y la justificación.
  - **Sistema de Logros 🏆**: 12 logros desbloqueables basados en tu rendimiento.
- 🔎 **Banco de Preguntas Unificado**: Un buscador global interactivo para buscar conceptos clave entre todas las preguntas de la base de datos de forma instantánea.
- ☀️/🌙 **Modo Claro/Oscuro**: Toggle global persistente para alternar entre los dos modos de visualización.

## 💻 Tecnologías

El proyecto ha sido desarrollado utilizando tecnologías web estándar sin dependencias externas complejas (a excepción del entorno de pruebas):

- **HTML5**: Estructuración semántica de las páginas.
- **CSS3**: Diseño moderno con estilo *Glassmorphism*, *Dark Mode* por defecto (con toggle para Light Mode), variables CSS y diseño completamente responsivo adaptado a dispositivos móviles.
- **JavaScript Vanilla**: Lógica de funcionamiento de los cuestionarios, incluyendo la selección de preguntas aleatorias, puntuación en tiempo real, persistencia de datos (localStorage) y retroalimentación inmediata.
- **Playwright**: Framework de pruebas End-to-End automatizadas.

## 🚀 Cómo Empezar

Solo abre el enlace colega😭😭

## 👨‍💻 Autor

Desarrollado por leafar005 con gemini (yo tambien tengo que estudiar el examen okey no tengo tiempo para hacerlo a mano).
