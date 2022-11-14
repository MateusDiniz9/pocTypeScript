import pg from 'pg';
var Pool = pg.Pool;
var configDatabase = { connectionString: "postgres://postgres:12345@localhost:5432/Poc1" };
var db = new Pool(configDatabase);
export default db;
