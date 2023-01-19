import {connection} from "../Database/db.js"

export async function getValuesTotal(){

    return await connection.query(`
    SELECT sum(data.value) as value from data
    `)




}