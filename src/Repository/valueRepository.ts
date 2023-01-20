import { Deposit } from "../Protocols/depositType.js";
import {connection} from "../Database/db.js"

export async function insertBank(info: Deposit): Promise<void>{

    await connection.query(`
        INSERT INTO data (name, value) VALUES ($1, $2)
    `, [info.name, info.value])

}