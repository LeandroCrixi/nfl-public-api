import express from "express";
import cors from "cors";
import teamsRoutes from "./routes/teamRoutes.js";
import stadiumsRoutes from './routes/stadiumRoutes.js'
import errorHandler from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use("/api/v1/teams", teamsRoutes);
app.use("/api/v1/stadiums", stadiumsRoutes);

app.get("/", (req, res) => {
  res.json({ message: "NFL Public API running" });
});

export default app;
