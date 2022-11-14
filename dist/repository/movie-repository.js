import db from "../database/database.js";
function read() {
    return db.query("SELECT * FROM movies");
}
export { read };
