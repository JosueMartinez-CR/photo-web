
import mongoose, { connect } from 'mongoose'

export async function startConnection() {
   await connect(process.env.DATABASE_CONNECTION || "DATABASE");
   console.log("DATABASE CONNECTED",
   );
}

