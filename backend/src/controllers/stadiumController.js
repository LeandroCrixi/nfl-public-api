import { getAllStadiums } from "../services/stadiumService.js";

const getAllStadiumsController = async (req, res, next) => {
  try {
    const stadiums = await getAllStadiums(req.query);
    res.status(200).json(stadiums);
  } catch (error) {
    next(error);
  }
};

export { getAllStadiumsController };
