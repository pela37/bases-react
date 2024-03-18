import { pool } from '../../../db.js';

export default function handler(req, res) {
    let { id } = req.query;
    let { body } = req;
    pool.query("UPDATE jeux SET prix=$3, nom=$1::text WHERE id=$2", [body.nom, id, body.prix])
    .then(() => {res.status(200).send();});
}