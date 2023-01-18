import {connection} from "../Database/db.js"
import { Request, Response } from "express"

export async function postValue(req: Request, res: Response){

    try{


    } catch (err){
        console.log(err.message);
        res.status(500).send('Server not running');
    }
}