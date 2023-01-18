import { Request, Response } from "express"


import { insertSchema } from "../Models/insert.models.js"

export async function joiValidation(req: Request, res: Response, next){

    const datas: string | number = req.body ;
    
    try{

        const {error} = insertSchema.validate(datas, {abortEarly: false});

        if (error){
            const erros = error.details.map(detail => detail.message);
            return res.status(422).send(erros);
        }

        next()

    } catch (err){
        console.log(err.message);
        res.status(500).send('Server not running');
    }
}