import {connection} from "../Database/db.js"

export async function putOne(id: number, value: number): Promise<void>{

await connection.query(`
    UPDATE data SET value=$1 WHERE id=$2
`, [value, id])

}