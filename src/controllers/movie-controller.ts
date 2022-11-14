import { Request, Response } from "express";
import { read,insert, updateById, deleteById, listByPlatform } from "../repository/movie-repository.js";
import {Movie} from "../protocols/movie-protocol.js"

async function readMovies(req: Request, res: Response){
    try {
        const result: Movie[] = await (await read()).rows;
        res.send(result).status(200)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

async function insertMovie(req: Request, res: Response){
    const newMovie: Movie = req.body
    try {
        const data: {name:string, platform: string, genre: string, status: boolean, sinopse: string} = {name: newMovie.name, platform: newMovie.platform, genre: newMovie.genre, status: newMovie.status, sinopse: newMovie.sinopse}
        await insert(data)
        res.send(201)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }

}

async function updateMovie(req: Request, res: Response){
    const {id} = req.params
    const data: {sinopse:string}  = req.body ? req.body : ''
    try {
        await updateById(id, data.sinopse)
        res.send(200)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

async function deleteMovie(req: Request, res: Response){
    const {id} = req.params
    try {
        await deleteById(id)
        res.send(200)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}
async function listMoviesByPlatform(req: Request, res: Response) {
    const {platform} = req.params
    try {
        const result: Movie[] = await (await listByPlatform(platform)).rows;
        res.send(result).status(200)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

export {readMovies, insertMovie, updateMovie, deleteMovie, listMoviesByPlatform}