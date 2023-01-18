import { Deposit } from "../Protocols/depositType.js";
import {connection} from "../Database/db.js"

export async function insertBank(info: Deposit): Promise<void>{

    try{

        return await connection.query(`
            INSERT INTO data (name, value) VALUES ($1, $2)
        `, [info.name, info.value])

        

    } catch (err){
        console.log(err.message);
    }
}