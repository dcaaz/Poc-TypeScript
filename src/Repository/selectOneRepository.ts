import { QueryResult } from "pg"
import {connection} from "../Database/db.js"
import { depositType } from "../Protocols/depositType.js"



export async function selectOne(id: number): Promise<QueryResult<depositType>>{

    try{

        return await connection.query(`
            SELECT * FROM data WHERE id=$1
        `, [id])

    } catch (err) {
        console.log(err)
    }
}