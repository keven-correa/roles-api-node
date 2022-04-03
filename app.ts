import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { PORT } from './config';
import { connectToDb } from './database';

//TODO
//import routes

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


async function start(){
    await connectToDb();
    app.listen(PORT);
    console.log(`Server on port: ${PORT}`)
}

start();