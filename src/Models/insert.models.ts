import joi from "joi";

export const insertSchema = joi.object({
    name: joi.string().required(),
    value: joi.number().required(),   
});