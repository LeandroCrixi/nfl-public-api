import express from "express";
import {getAllTeamsController, getAllTeamsByIdController} from "../controllers/teamController.js";

const router = express.Router();

router.get("/", getAllTeamsController);
router.get("/:id", getAllTeamsByIdController);

export default router;
