import express from "express";
import routes from "./routes/index";
import db from "./config/db-connect";

db.on("error", console.error.bind(console, "Erro de conexão"));
db.once("open", () => console.log("Conexão aberta"));

const app = express();
app.use(express.json());

routes(app);

export default app;
