import express from "express";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.js";
const commentRouter = express.Router();
import { verifyToken } from "../utils/verifyToken.js";

commentRouter.post("/", verifyToken, addComment);
commentRouter.delete("/:id", verifyToken, deleteComment);
commentRouter.get("/:videoId", verifyToken, getComments);

export default commentRouter;
