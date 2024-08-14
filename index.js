const express = require("express");
const app = express();
const { Jogador } = require("./models");

app.use(express.json());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Listar todos os jogadores
app.get("/jogadores", async (req, res) => {
  const jogadores = await Jogador.findAll();
  if (jogador) {
    res.json(jogadores);
  } else {
    res.status(404).send("Nenhum jogador na base de dados");
  }
});

// Buscar jogador por nome
app.get("/jogadores/:nome", async (req, res) => {
  const { nome } = req.params;
  const jogador = await Jogador.findOne({ where: { nome } });
  if (jogador) {
    res.json(jogador);
  } else {
    res.status(404).send("Jogador não encontrado");
  }
});

// Adicionar novo jogador
app.post("/jogadores", async (req, res) => {
  const { nome, posicao, idade } = req.body;
  const novoJogador = await Jogador.create({ nome, posicao, idade });
  res.status(201).json(novoJogador);
});

// Editar informações de um jogador
app.put("/jogadores/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, posicao, idade } = req.body;
  const jogador = await Jogador.findByPk(id);
  if (jogador) {
    await jogador.update({ nome, posicao, idade });
    res.json(jogador);
  } else {
    res.status(404).send("Jogador não encontrado");
  }
});

// Excluir um jogador
app.delete("/jogadores/:id", async (req, res) => {
  const { id } = req.params;
  const jogador = await Jogador.findByPk(id);
  if (jogador) {
    await jogador.destroy();
    res.status(204).send();
  } else {
    res.status(404).send("Jogador não encontrado");
  }
});
