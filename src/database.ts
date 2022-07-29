

import mongoose, { connect } from 'mongoose'

export async function startConnection() {
   await connect('MONGO URL HERE');
   console.log("DATABASE CONNECTED",
   );
}

