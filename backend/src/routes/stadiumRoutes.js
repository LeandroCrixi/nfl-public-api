import express from "express";
import { getAllStadiumsController } from "../controllers/stadiumController.js";

const router = express.Router();

router.get("/", getAllStadiumsController);

export default router;