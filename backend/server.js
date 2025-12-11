const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const notas = [
  { id: 1, texto: "Primera nota" },
  { id: 2, texto: "Nota de ejemplo para pipeline DevOps" }
];

app.get("/notas", (req, res) => {
  res.json(notas);
});

app.get("/", (req, res) => {
  res.send("API de Notas – Proyecto DevOps");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;
