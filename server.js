require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const dummyProduct = require("./migrations/dummyProduct");

const main = async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await dummyProduct();

  const app = express();
  const api = express.Router();

  app.use(express.static("public"));
  app.use(cors());
  app.use(bodyParser.json());

  app.use("/api", api);
  require("./routes/auth")(api);
  require("./routes/product")(api);

  app.get("/", async (req, res, next) => {
    res.send("App is running");
  });

  app.use((err, req, res, next) => {
    console.log(err);
    res.sendStatus(500);
  });

  app.listen(8080, (req, res) => {
    console.log("running");
  });
};
main();
