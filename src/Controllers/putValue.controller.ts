import { Request, Response } from "express";
import { valueType } from "../Protocols/depositType.js";
import { putValueService } from "../Services/putValueService.js";



export async function putValue(req: Request, res: Response){

    const id: number = Number(req.params.id); 
    const {value} = req.body as valueType;
   

    try{

        await putValueService(id, value)

        res.status(200).send('updated');

    } catch (err){

        console.log(err.message);
        res.status(500).send('Server not running');
    }

}