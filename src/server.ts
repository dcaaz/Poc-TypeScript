import express from 'express';
import cors from "cors";

import bankRouters from "./Routes/bank.route.js"

const app = express();
app.use(cors());
app.use(express.json());

app.use(bankRouters);


const port: number  = +process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running in port: ${port}`));