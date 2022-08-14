

import mongoose, { connect } from 'mongoose'

export async function startConnection() {
   await connect('mongodb+srv://jota:jota1234@cluster0.4ft9hwi.mongodb.net/?retryWrites=true&w=majority');
   console.log("DATABASE CONNECTED",
   );
}

