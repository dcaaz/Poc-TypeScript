import { putOne } from "../Repository/putOneRepository.js";

export async function putValueService(id: number, value: number): Promise<void>{

    await putOne(id, value)

}