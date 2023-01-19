import { Request, Response } from "express"

import { deleteValueOne } from "../Repository/deleteServiceRepository.js";


export async function deleteValue(req: Request, res: Response): Promise<void>{

    const id: number = Number(req.params.id); 

    try{

        await deleteValueOne(id);

        res.sendStatus(204)

    } catch (err){

        console.log(err.message);
        res.status(500).send('Server not running');
    }
}