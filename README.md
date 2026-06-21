# Portal de Encuestas ACL - Port a Electron ⚡

Esta rama contiene la configuración necesaria para envolver la aplicación web original en una **aplicación nativa de escritorio** utilizando Electron

### ¿Qué aporta esta rama?
Además del código web de siempre, aquí esta:
- `package.json`: Scripts de compilación y dependencias de Electron.
- `main.js`: El script de arranque que crea la ventana nativa del sistema.
- `run-quiz.sh`: Un lanzador útil para sistemas Linux modernos para evitar problemas con la librería `libfuse2` al abrir el `.AppImage`.

### ¿Cómo probarlo localmente?
1. `npm install`
2. `npm start` (para abrir la ventana de testeo)
3. `npm run build` (para generar el archivo instalable `.AppImage` para Linux)

---

## 🚀 Cómo Empezar

Solo abre el enlace colega😭😭 (o ejecuta el .sh en este caso)

## 👨‍💻 Autor

Desarrollado por leafar005 con gemini (yo tambien tengo que estudiar el examen okey no tengo tiempo para hacerlo a mano).
