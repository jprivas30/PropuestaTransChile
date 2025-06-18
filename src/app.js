const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('¡TransChile con CI/CD!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

module.exports = app;  // Para pruebas

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}