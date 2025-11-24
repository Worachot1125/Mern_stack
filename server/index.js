import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./connect.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors"

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

app.use("/api/user", userRoute);

connectDB();

const PORT = process.env.PORT || 7000;

try {
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
    });
} catch (err) {
    console.error("❌ Server failed to start:", err.message);
}

