import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "NFL Public API running" });
//   app.get(path, callback)
});

export default app;
