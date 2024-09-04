


import express, { Router } from 'express';
import env from 'dotenv';
import cors from 'cors';


import { Connect } from "./Models/Connection.js";
import {router} from "./Routes/Router.js";
import cookieParser from 'cookie-parser';



const app = express();
env.config();
app.use(express.json());


const vercel = {
    origin: ["https://mcsLpu.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
}

app.use(cors(vercel));



const cookiesecret = process.env.COOKIE_SECRET;
app.use(cookieParser(cookiesecret));


const url = process.env.MONGOOSE_URL;
Connect(url);


app.use('/', router);


const port = process.env.PORT;
app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
});
