import { QueryResult } from "pg"
import {connection} from "../Database/db.js"
import { valueType } from "../Protocols/depositType.js"

export async function getValuesTotal(): Promise<QueryResult<valueType>>{

    return await connection.query(`
    SELECT sum(data.value) as value_total from data
    `)

}