import express from "express";
import { request } from "http";

const app = express();

app.get("/", (request, response) => {
  return response.json({ messege: "Hello World" });
});

app.listen(3333);
