import sequelize from "../config/db.js";
import Scheme from "../models/schemeModel.js";

const seedSchemes = async () => {
  try {
    await sequelize.sync({ force: true }); // Reset & Sync Database

    const schemes = [
      {
        name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
        description: "A financial inclusion program for providing banking services to all citizens.",
        eligibility: "Available to all Indian citizens, especially the unbanked population.",
        benefits: "Zero balance savings account, RuPay debit card, accidental insurance of ₹2 lakh.",
        link: "https://pmjdy.gov.in/"
      },
      {
        name: "Pradhan Mantri Awas Yojana (PMAY)",
        description: "A scheme to provide affordable housing for urban and rural poor.",
        eligibility: "Families with no pucca house and with income criteria as per government norms.",
        benefits: "Subsidized home loans, financial assistance for house construction.",
        link: "https://pmaymis.gov.in/"
      },
      {
        name: "Atal Pension Yojana (APY)",
        description: "A pension scheme for unorganized sector workers.",
        eligibility: "Indian citizens aged 18-40 years with a valid bank account.",
        benefits: "Pension of ₹1,000 - ₹5,000 per month after retirement.",
        link: "https://npscra.nsdl.co.in/scheme-details.php"
      },
      {
        name: "Ayushman Bharat Yojana (PM-JAY)",
        description: "A health insurance scheme for economically vulnerable people.",
        eligibility: "Families identified under SECC 2011 data.",
        benefits: "Health coverage of ₹5 lakh per family per year.",
        link: "https://pmjay.gov.in/"
      },
      {
        name: "Stand-Up India Scheme",
        description: "A scheme to support entrepreneurship among women and SC/ST communities.",
        eligibility: "SC/ST and women entrepreneurs aged 18+, starting a new business.",
        benefits: "Bank loans between ₹10 lakh to ₹1 crore.",
        link: "https://www.standupmitra.in/"
      }
    ];

    await Scheme.bulkCreate(schemes);
    console.log("✅ Schemes added successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error adding schemes:", error);
    process.exit(1);
  }
};

seedSchemes();
