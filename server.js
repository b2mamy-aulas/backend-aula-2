const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});

const index = require('./src/routes/index');
const animes = require("./src/routes/animesRoutes");

app.use("/", index);
app.use("/animes", animes);
