import { Request, Response } from "express"

import { depositType } from "../Protocols/depositType.js";
import { select } from "../Repository/selectRepository.js";

export async function getValues(req: Request, res: Response): Promise<void>{

    try{

        const balances = await select()

        res.status(200).send(balances.rows)

    } catch (err){

        console.log(err.message);
        res.status(500).send('Server not running');
    }
}