import { Request, Response, NextFunction } from "express"
import { Deposit } from "../Protocols/depositType.js";

import { insertSchema } from "../Models/insert.models.js"

export async function joiValidation(req: Request, res: Response, next: NextFunction): Promise<void>{

    const datas = req.body as Deposit ;
    
    try{

        const {error} = insertSchema.validate(datas, {abortEarly: false});

        if (error){
            const erros = error.details.map(detail => detail.message);
            res.status(422).send(erros);
            return;
        }

        next()

    } catch (err){
        console.log(err.message);
        res.status(500).send('Server not running');
    }
}