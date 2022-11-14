import db from "../database/database.js";
function read() {
    return db.query("SELECT * FROM movies");
}
function insert(_a) {
    var name = _a.name, platform = _a.platform, genre = _a.genre, status = _a.status, sinopse = _a.sinopse;
    return db.query("INSERT INTO movies (name, platform, genre, status, sinopse) VALUES ($1,$2,$3,$4,$5);", [name, platform, genre, status, sinopse]);
}
function updateById(id, sinopse) {
    return db.query("UPDATE movies SET status = true, sinopse = $1 WHERE id = $2;", [sinopse, id]);
}
function deleteById(id) {
    return db.query("DELETE FROM movies WHERE id = $1;", [id]);
}
function listByPlatform(platform) {
    return db.query("SELECT * FROM movies WHERE platform = $1", [platform]);
}
export { read, insert, updateById, deleteById, listByPlatform };
