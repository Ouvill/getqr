import express from "express";
import path from "path";

import indexRouter from "./routes/index";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Routing
app.get("/", indexRouter);

app.listen(3000, () => {
  console.log("server run: http://localhost:3000");
});
