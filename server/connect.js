import mongoose from "mongoose";

async function connectDB() {
    try {
        const uri = process.env.MONGO_URL;

        await mongoose.connect(uri);

        console.log("✅ MongoDB Connected Successfully!");
    } catch (err) {
        console.error("❌ MongoDB Connection Failed:", err.message);
        process.exit(1);
    }
}

export default connectDB;