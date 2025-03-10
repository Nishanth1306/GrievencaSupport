import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import schemeRoutes from "./routes/schemeRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/schemes", schemeRoutes);

// Sync Database
sequelize.sync().then(() => console.log("✅ Database Synced"));

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
