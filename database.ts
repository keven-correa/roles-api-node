import {connect, connection} from 'mongoose';
import {Mongo_URI} from './config';


export async function connectToDb(){

    try {
        await connect(Mongo_URI);
    } catch (error) {
        console.error(error);
    }

};

connection.on("connected", () => {
    console.log('Database connected.');
});

connection.on("error", (error) => {
    console.error(error);
});

connection.on("disconnected", async() => {
    await connection.close();
    return process.exit(1);
})