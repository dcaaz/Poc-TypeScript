import {connection} from "../Database/db.js"

export async function deleteValueOne(id: number): Promise<void> {

    await connection.query(`
        DELETE FROM data WHERE id=$1
    `, [id])
  
}