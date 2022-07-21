import express from "express";
const userRouter = express.Router();
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

userRouter.put("/:id", verifyToken, update);

//delete user
userRouter.delete("/:id", verifyToken, deleteUser);

//get a user
userRouter.get("/find/:id", getUser);

//subscribe a user
userRouter.put("/sub/:id", verifyToken, subscribe);

//unsubscribe a user
userRouter.put("/unsub/:id", verifyToken, unsubscribe);

//like a video
userRouter.put("/like/:videoId", verifyToken, like);

//dislike a video
userRouter.put("/dislike/:videoId", verifyToken, dislike);

export default userRouter;
