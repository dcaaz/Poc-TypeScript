import { QueryResult } from "pg";
import { valueType } from "../Protocols/depositType.js";
import { getValuesTotal } from "../Repository/getTotalRepository.js";

export async function getAll(): Promise<QueryResult<valueType>>{

   return await getValuesTotal();

}