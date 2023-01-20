import { QueryResult } from "pg"
import { depositType } from "../Protocols/depositType.js"
import { select } from "../Repository/selectRepository.js"

export async function getValueService(): Promise<QueryResult<depositType>>{

   return await select()

}