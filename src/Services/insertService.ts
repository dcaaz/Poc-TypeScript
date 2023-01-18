import { Deposit } from "../Protocols/depositType.js";
import { insertBank } from "../Repository/valueRepository.js";

export async function insertValue(info: Deposit): Promise<void>{

    try{

        await insertBank(info)

    } catch (err){
        console.log(err.message);
    }

}