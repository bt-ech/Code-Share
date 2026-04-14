import mongoose from "mongoose";

 type ConnectionObject = {
    isConnected?: number
 }

 const connection: ConnectionObject = {}

 async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("Already Connected to Database");
        return 
    }

    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) throw new Error("MONGODB_URI environment variable is not set");

        const db = await mongoose.connect(uri, {})

        connection.isConnected = db.connections[0].readyState

        console.log("DB connected Succesfully");

    } catch (error){
        console.log("Database connection failed" , error);
        throw error;
    }
 }

 export default dbConnect;