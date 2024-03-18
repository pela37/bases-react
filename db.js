require('dotenv').config();
import { Pool } from 'pg';

export const pool = new Pool();

export let recupData = async function() {
    const res = await pool.query('SELECT * FROM jeux');
    return res.rows;
}
