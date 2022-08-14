
//This file is responsible for starting the application.
import dotenv from 'dotenv';
dotenv.config();               //variables de entorno para solo enviar parametros

import app from './app';
import {startConnection} from './database';

async function main() {
    startConnection();
    await app.listen(app.get('port'));
    console.log("Running",app.get('port'));
}

main();
