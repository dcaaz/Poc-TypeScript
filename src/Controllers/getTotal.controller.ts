import { Request, Response } from "express"

import { getValuesTotal } from "../Repository/getTotalRepository.js";

export async function getTotal(req:Request, res: Response): Promise<void>{

    try{

        const total = await getValuesTotal();

        res.status(200).send(total.rows[0]);

    } catch (err){

        console.log(err.message);
        res.status(500).send('Server not running');
    }
}