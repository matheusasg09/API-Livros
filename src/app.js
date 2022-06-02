import express from "express";
import db from "./config/db-connect.js";
import livros from "./models/Livro.js";

db.on("error", console.error.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão aberta");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("API de livros");
});

app.get("/livros", (req, res) => {
  livros.find((error, livros) => {
    if (error) {
      res.status(500).send(error);
      return;
    }
    res.status(200).json(livros);
  });
});

app.get("/livros/:id", (req, res) => {
  const index = getBookIndex(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro criado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  const index = getBookIndex(req.params.id);
  livros[index].titulo = req.body.titulo;

  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const { id } = req.params;
  const index = buscaLivro(id);

  livros.splice(index, 1);

  res.status(200).send("Livro removido com sucesso");
});

function getBookIndex(id) {
  return livros.findIndex((livro) => livro.id === id);
}

export default app;
