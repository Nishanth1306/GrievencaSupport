import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    },
  },
  logging: false, 
});

sequelize.authenticate()
  .then(() => console.log("✅ Connected to Railway PostgreSQL Database"))
  .catch(err => console.error("❌ Database Connection Failed:", err));

export default sequelize;
