import { QueryResult } from "pg";
import db from "../database/database.js";
import { Movie } from "../protocols/movie-protocol.js";

function read(): Promise<QueryResult<Movie>>{
    return db.query(`SELECT * FROM movies`)
}
function insert({name,platform,genre,status,sinopse}): Promise<QueryResult<VoidFunction>>{
    return db.query(`INSERT INTO movies (name, platform, genre, status, sinopse) VALUES ($1,$2,$3,$4,$5);`, [name,platform,genre,status, sinopse])
}
function updateById(id:string, sinopse:string): Promise<QueryResult<VoidFunction>> {
    return db.query(`UPDATE movies SET status = true, sinopse = $1 WHERE id = $2;`, [sinopse,id])
}
function deleteById(id:string) : Promise<QueryResult<VoidFunction>>{
    return db.query(`DELETE FROM movies WHERE id = $1;`, [id]);
}
function listByPlatform(platform:string): Promise<QueryResult<Movie>>{
    return db.query(`SELECT * FROM movies WHERE platform = $1`, [platform])
}
export {read,insert,updateById,deleteById, listByPlatform} 