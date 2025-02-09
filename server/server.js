require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const xml2js = require("xml2js");
const app = express();
const connectDb = require("./utils/db");
const studentRoutes = require("./router/auth-router");
const reportRoute = require("./router/auth-router");
const creditRoute = require("./router/auth-router");

var corsOptions = {
  origin: "http://localhost:5173",
  method: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/student", studentRoutes);
app.use("/api", reportRoute);
app.use("/auth", creditRoute);


const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
  });
});
