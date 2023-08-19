import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import taksRoutes from "./routes/tasks.routes.js";
import { FRONTEND_URL } from "./config.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(
  cors({
    credentials: true,
    origin: 'https://j6czq6-5173.csb.app',
  })
);

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use((req, res, next) => {
  console.log("origin", req.header("origin"));
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api", taksRoutes);

// if (process.env.NODE_ENV === "production") {
//   const path = await import("path");
//   app.use(express.static("client/dist"));

//   app.get("*", (req, res) => {
//     console.log(path.resolve("client", "dist", "index.html"));
//     res.sendFile(path.resolve("client", "dist", "index.html"));
//   });
// }

export default app;
