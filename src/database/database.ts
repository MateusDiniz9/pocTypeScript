import pg from 'pg';

const { Pool } = pg;

const configDatabase = { connectionString: "postgres://postgres:12345@localhost:5432/Poc1" };
const db = new Pool(configDatabase);
export default db;
