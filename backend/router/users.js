import express from "express";
import userController from "../controllers/users.js";


const userRouter = express.Router();

userRouter.get("/:id", userController.getAllUsers);
userRouter.post("/", userController.insertUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.patch("/:id", userController.updateUser);


export default userRouter;