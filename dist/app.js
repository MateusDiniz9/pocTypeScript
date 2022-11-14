import express from "express";
import { readMovies } from "./controllers/movie-controller.js";
var server = express();
server.get("/status", function (req, res) {
    res.send("ok");
});
server.get("/movies", readMovies);
server.listen(4000, function () {
    console.log('Listening on port 4000');
});
