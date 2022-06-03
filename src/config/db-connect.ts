import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://matheusasg09:123@cluster0.llrc0.mongodb.net/api-node"
);

const db = mongoose.connection;

export default db;
