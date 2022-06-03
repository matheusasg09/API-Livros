import express from "express";
import BookController from "../controllers/book-controller";

const router = express.Router();

router
  .get("/books", BookController.getBooks)
  .get("/books/:id", BookController.getBookById)
  .post("/books", BookController.registerBook)
  .put("/books/:id", BookController.updateBook)
  .delete("/books/:id", BookController.deleteBook);

export default router;
