import express from "express";
import Scheme from "../models/schemeModel.js";
import { authenticateJWT } from "../middleware/authMiddleware.js";

const router = express.Router();

// 📌 Get all schemes
router.get("/", async (req, res) => {
  const schemes = await Scheme.findAll();
  res.json(schemes);
});

// 📌 Add a new scheme
router.post("/", authenticateJWT, async (req, res) => {
  const { name, description, eligibility, benefits, link } = req.body;
  const newScheme = await Scheme.create({ name, description, eligibility, benefits, link });
  res.status(201).json(newScheme);
});

export default router;
