import { Request, Response } from "express";

import { putOne } from "../Repository/putOneRepository.js";



export async function putValue(req: Request, res: Response){

    const id: number = Number(req.params.id); 
    const {value} = req.body;
   

    try{

        await putOne(id, value)

        res.sendStatus(200)

    } catch (err){

        console.log(err.message);
        res.status(500).send('Server not running');
    }

}