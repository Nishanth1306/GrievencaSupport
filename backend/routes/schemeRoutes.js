// import express from "express";
// import Scheme from "../models/schemeModel.js";
// import { authenticateJWT } from "../middleware/authMiddleware.js";

// const router = express.Router();




// router.get("/", async (req, res) => {
//   const { category } = req.query;

//   let schemes;
//   if (category) {
//     schemes = await Scheme.findAll({ where: { category } });
//   } else {
//     schemes = await Scheme.findAll();
//   }

//   res.json(schemes);
// });

// router.get("/schemes", async (req, res) => {
//   const category = req.query.category; 
//   try {
//     const schemes = await Scheme.findAll({ where: { category } });
//     res.json(schemes);
//   } catch (err) {
//     console.error("Error fetching schemes:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });




// router.post("/", authenticateJWT, async (req, res) => {
//   const { name, description, eligibility, benefits, link } = req.body;
//   const newScheme = await Scheme.create({ name, description, eligibility, benefits, link });
//   res.status(201).json(newScheme);
// });

// export default router;



import express from "express";
import Scheme from "../models/schemeModel.js";
import { authenticateJWT } from "../middleware/authMiddleware.js";

const router = express.Router();



router.get("/", async (req, res) => {
  const { category } = req.query;

  try {
    let schemes;
    if (category) {
      schemes = await Scheme.findAll({ where: { category } });
    } else {
      schemes = await Scheme.findAll();
    }
    res.json(schemes);
  } catch (err) {
    console.error("Error fetching schemes:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


router.post("/", authenticateJWT, async (req, res) => {
  const { name, description, eligibility, benefits, link, category } = req.body;

  try {
    const newScheme = await Scheme.create({ name, description, eligibility, benefits, link, category });
    res.status(201).json(newScheme);
  } catch (err) {
    console.error("Error creating scheme:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
