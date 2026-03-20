import { getAllTeams, getTeamById } from "../services/teamService.js";

const getAllTeamsController = async (req, res, next) => {
  try {
    const teams = await getAllTeams(req.query);
    res.status(200).json(teams);
  } catch (error) {
    next(error);
  }
};

const getAllTeamsByIdController = async (req, res, next) => {
  try {
    const team = await getTeamById(req.params.id);

    if (!team) {
      return res.status(404).json({
        message: "Team not found",
      });
    }

    res.status(200).json(team);
  } catch (error) {
    next(error);
  }
};

export { getAllTeamsController, getAllTeamsByIdController };
