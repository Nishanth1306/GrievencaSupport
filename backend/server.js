import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import schemeRoutes from "./routes/schemeRoutes.js";
import passport from 'passport';
import morgan from 'morgan';
import logger from './logger.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());



app.use((req, res, next) => {
  logger.info(`Method: ${req.method}, URL: ${req.url}`);
  next();
});


app.use(passport.initialize());


app.use(morgan("combined", {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
}));


app.use("/api/auth", authRoutes);
app.use("/api/schemes", schemeRoutes);


app.use((err, req, res, next) => {
  logger.error(`Error: ${err.message}, Method: ${req.method}, URL: ${req.url}`);
  res.status(500).json({ error: "Internal Server Error" });
});


sequelize.sync({ alter: true})
  .then(() => console.log("✅ Database Synced"))
  .catch(err => console.error("❌ Database Sync Error:", err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
