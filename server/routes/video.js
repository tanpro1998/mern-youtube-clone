import express from "express";
import {
  addVideo,
  addView,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
} from "../controllers/video.js";
const videoRouter = express.Router();
import { verifyToken } from "../utils/verifyToken.js";

videoRouter.post("/", verifyToken, addVideo);
videoRouter.put("/:id", verifyToken, addVideo);
videoRouter.delete("/:id", verifyToken, addVideo);
videoRouter.get("/find/:id", getVideo);
videoRouter.put("/view/:id", addView);
videoRouter.get("/trend", trend);
videoRouter.get("/random", random);
videoRouter.get("/sub", verifyToken, sub);
videoRouter.get("/tags", getByTag);
videoRouter.get("/search", search);

export default videoRouter;
