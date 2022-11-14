import express from "express";
import { deleteMovie, insertMovie, readMovies, updateMovie, listMoviesByPlatform } from "./controllers/movie-controller.js";


const server = express()
server.use(express.json())

server.get("/status", (req,res)=>{
    res.send("ok")
})

server.get("/movies", readMovies)
server.post("/movies", insertMovie)
server.put("/movies/:id", updateMovie)
server.delete("/movies/:id", deleteMovie)
server.get("/movies/:platform", listMoviesByPlatform)

server.listen(4000,()=>{
    console.log('Listening on port 4000')
})