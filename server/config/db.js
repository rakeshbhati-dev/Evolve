import mongoose from "mongoose";

async function databaseConnect() {
    const databaseUrl=process.env.DATABASE_URL
    try {
        await mongoose.connect(databaseUrl)
        console.log("Connected to database");
        
    } catch (error) {
        console.log("Unable to connect to database",error);
    }
}

export default databaseConnect