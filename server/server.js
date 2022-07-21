import express from "express";
import dotenv from "dotenv";
const app = express();
const PORT = process.env.PORT || 5000;
import cors from "cors";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import videoRoute from "./routes/video.js";
import commentRoute from "./routes/comment.js";
import cookieParser from "cookie-parser";
import { connectDB } from "./database/connect.js";
dotenv.config();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/videos", videoRoute);
app.use("/api/comments", commentRoute);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port " + PORT);
});
