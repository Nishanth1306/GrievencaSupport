import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Scheme = sequelize.define("Scheme", {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  eligibility: { type: DataTypes.TEXT, allowNull: false },
  benefits: { type: DataTypes.TEXT, allowNull: false },
  link: { type: DataTypes.STRING, allowNull: false },
});

// 🚀 Sequelize Hook to Insert Default Data
Scheme.afterSync(async () => {
  const count = await Scheme.count();
  if (count === 0) {
    await Scheme.bulkCreate([
      {
        name: "Atal Pension Yojana (APY)",
        description: "Pension scheme for unorganized workers.",
        eligibility: "Indian citizens aged 18-40 years.",
        benefits: "Pension of ₹1,000 - ₹5,000 per month.",
        link: "https://npscra.nsdl.co.in/scheme-details.php",
      },
      {
        name: "Ayushman Bharat Yojana (PM-JAY)",
        description: "Health insurance for economically weak citizens.",
        eligibility: "Families identified under SECC 2011 data.",
        benefits: "Health coverage of ₹5 lakh per family per year.",
        link: "https://pmjay.gov.in/",
      },
    ]);
    console.log("✅ Default schemes added via Sequelize Hook!");
  }
});

export default Scheme;
