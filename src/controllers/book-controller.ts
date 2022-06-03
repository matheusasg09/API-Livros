import { Request, Response } from "express";
import livros from "../models/Book";

class BookController {
  static getBooks(_req: Request, res: Response) {
    livros.find((error, livros) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - Falha ao listar livros` });
        return;
      }
      res.status(200).json(livros);
    });
  }

  static getBookById(req: Request, res: Response) {
    const { id } = req.params;

    livros.findById(id, (error: Error, livro: BookController) => {
      if (error) {
        res
          .status(400)
          .send({ message: `${error.message} - Falha ao listar livro` });
        return;
      }
      res.status(200).send(livro);
    });
  }

  static registerBook(req: Request, res: Response) {
    const livro = new livros(req.body);

    livro.save((error: Error, livro: BookController) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - Falha ao cadastrar livro` });
        return;
      }
      res.status(201).json(livro);
    });
  }

  static updateBook(req: Request, res: Response) {
    const { id } = req.params;

    livros.findByIdAndUpdate(id, { $set: req.body }, (error: Error) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - Falha ao atualizar livro` });
        return;
      }
      res.status(200).send({ message: "Livro atualizado com sucesso" });
    });
  }

  static deleteBook(req: Request, res: Response) {
    const { id } = req.params;

    livros.findByIdAndDelete(id, (error: Error) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - Falha ao excluir livro` });
        return;
      }
      res.status(200).send({ message: "Livro excluído com sucesso" });
    });
  }
}

export default BookController;
