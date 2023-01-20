import { Request, Response, NextFunction } from "express";
import { selectOne } from "../Repository/selectOneRepository.js";


export async function idValidation(req: Request, res: Response, next: NextFunction){

    const id: number = Number(req.params.id); 

    try{

        const check = await selectOne(id)
       
        if(check.rowCount === 0){  

            res.sendStatus(404);
            return 
        }

       next()

    } catch (err){
        console.log(err.message);
        res.status(500).send('Server not running');
    } 
}