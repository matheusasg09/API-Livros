import express, { Response, Request, Express } from "express";
import books from "./books-routes";

const routes = (app: Express) => {
  app.route("/").get((_req: Request, res: Response) => {
    res.status(200).send("API de Livros");
  });

  app.use(express.json(), books);
};

export default routes;
