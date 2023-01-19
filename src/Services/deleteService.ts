import { connection } from "../Database/db.js";
import { selectOne } from "../Repository/selectOneRepository.js";


export async function checkService(id: number): Promise<boolean>{

    try{

       const check = await selectOne(id)
       
        if(check.rowCount === 0){        
         return false;
        }

        return true;
        
    } catch (err){
        console.log(err.message);
    }
}