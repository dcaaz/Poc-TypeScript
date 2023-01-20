import { Request, Response } from "express"
import { getValueService } from "../Services/getValuesService.js";

export async function getValues(req: Request, res: Response): Promise<void>{

    try{

        const balances = await getValueService()

        res.status(200).send(balances.rows);

    } catch (err){

        console.log(err.message);
        res.status(500).send('Server not running');
    }
}