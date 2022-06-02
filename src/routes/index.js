import express from "express";
import livros from "./livros-routes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("API de Livros");
  });

  app.use(express.json(), livros);
};

export default routes;
