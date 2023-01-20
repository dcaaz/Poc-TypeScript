import { Request, Response } from "express"

import { Deposit } from "../Protocols/depositType.js";
import { insertValue } from "../Services/insertService.js";


export async function postValue(req: Request, res: Response): Promise<void>{

    const info = req.body as Deposit

    try{

        await insertValue(info);

        res.status(201).send("Value Inserted")

    } catch (err){
        console.log(err.message);
        res.status(500).send('Server not running');
    }
    
}