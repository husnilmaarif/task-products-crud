import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoute from "./routes/productRoute.js";

const app = express();
mongoose.connect("mongodb://localhost:27017/eduwork-mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("database connected..."));

app.use(cors());
app.use(express.json());
app.use(productRoute);

app.listen(3000, () => console.log("server berjalan..."));
