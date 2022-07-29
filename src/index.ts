
//This file is responsible for starting the application.

import app from './app';
import {startConnection} from './database';

async function main() {
    startConnection();
    await app.listen(app.get('port'));
    console.log("Running",app.get('port'));
}

main();
