import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // ✅ Required for Railway
    },
  },
  logging: false, // Disable query logging
});

sequelize.authenticate()
  .then(() => console.log("✅ Connected to Railway PostgreSQL Database"))
  .catch(err => console.error("❌ Database Connection Failed:", err));

export default sequelize;
