import {Router} from "express";
import { Request, Response } from "express"

import { joiValidation } from "../Middleware/joiValidation.middleware.js";
import { postValue } from "../Controllers/insert.controller.js";
import { getValues } from "../Controllers/getValues.controller.js";
import { idValidation } from "../Middleware/idValidation.middleware.js";
import { deleteValue } from "../Controllers/deleteValue.controller.js";

const router = Router();

//router.get("/health", (req: Request, res: Response) => { res.send('ok') })
router.post("/insert-value", joiValidation, postValue);
router.get("/balance", getValues);
router.delete("/delete-value/:id", idValidation, deleteValue)


export default router;