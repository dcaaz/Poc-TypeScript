import { Request, Response, NextFunction } from "express";

import { checkService } from "../Services/deleteService.js";

export async function idValidation(req: Request, res: Response, next: NextFunction){

    const id: number = Number(req.params.id); 

    try{

        const check = await checkService(id)

       if(!check){
        return res.sendStatus(404)
       }

       next()

    } catch (err){
        console.log(err.message);
        res.status(500).send('Server not running');
    } 
}