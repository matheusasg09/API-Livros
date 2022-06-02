import livros from "../models/Livro.js";

class LivroController {
  static listarLivros(req, res) {
    livros.find((error, livros) => {
      if (error) {
        res.status(500).send(error);
        return;
      }
      res.status(200).json(livros);
    });
  }
}

export default LivroController;
