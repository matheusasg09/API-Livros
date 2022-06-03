import { Request, Response } from "express";
import { BookInterface } from "../interfaces/Book.interface";
import books from "../models/Book";

class BookController {
  static getBooks(_req: Request, res: Response) {
    books.find((error, books) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - Falha ao listar os livros` });
        return;
      }
      res.status(200).json(books);
    });
  }

  static getBookById(req: Request, res: Response) {
    const { id } = req.params;
    books.findById(id, (error: Error, book: BookInterface) => {
      if (error) {
        res
          .status(400)
          .send({ message: `${error.message} - Falha ao listar o livro` });
        return;
      }
      res.status(200).send(book);
    });
  }

  static registerBook(req: Request, res: Response) {
    const book = new books(req.body);
    book.save((error: Error, book: BookInterface) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - Falha ao cadastrar o livro` });
        return;
      }
      res.status(201).json(book);
    });
  }

  static updateBook(req: Request, res: Response) {
    const { id } = req.params;
    books.findByIdAndUpdate(id, { $set: req.body }, (error: Error) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - Falha ao atualizar o livro` });
        return;
      }
      res.status(200).send({ message: "livro atualizado com sucesso" });
    });
  }

  static deleteBook(req: Request, res: Response) {
    const { id } = req.params;
    books.findByIdAndDelete(id, (error: Error) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - Falha ao excluir o livro` });
        return;
      }
      res.status(200).send({ message: "livro excluído com sucesso" });
    });
  }
}

export default BookController;
