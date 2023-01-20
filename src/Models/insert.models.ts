import joi from "joi";
import { Deposit } from "../Protocols/depositType";

export const insertSchema = joi.object<Deposit>({
    name: joi.string().required(),
    value: joi.number().required(),   
});