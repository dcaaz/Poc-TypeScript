import { depositType } from "../Protocols/depositType";
import {connection} from "../Database/db.js"

export async function select()  {

    try{

        return connection.query(`SELECT * FROM data`)

    } catch (err){
        console.log(err.message);
    }
}