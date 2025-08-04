// server.js

// Importa el framework Express para crear el servidor web.
const express = require('express');

// Crea una instancia de la aplicación Express.
const app = express();

// Define el puerto en el que se ejecutará el servidor.
const port = 3002; // Usamos un puerto diferente para evitar conflictos.

// Middleware para servir archivos estáticos (en este caso, el archivo index.html).
// `express.static` busca archivos en el directorio actual.
app.use(express.static(__dirname));

// Define una ruta para la página principal ('/').
// Cuando un usuario acceda a esta URL, se enviará el archivo 'index.html'.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Inicia el servidor y lo pone a escuchar en el puerto definido.
app.listen(port, () => {
    console.log(`Servidor de portafolio iniciado en http://localhost:${port}`);
    console.log('Abre esta URL en tu navegador para ver la página web.');
});
