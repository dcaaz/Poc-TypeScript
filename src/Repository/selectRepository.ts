import { depositType } from "../Protocols/depositType";
import {connection} from "../Database/db.js"
import { QueryResult } from "pg";

export async function select(): Promise<QueryResult<depositType>>  {

    try{

        return connection.query(`SELECT * FROM data`)

    } catch (err){
        console.log(err.message);
    }
}