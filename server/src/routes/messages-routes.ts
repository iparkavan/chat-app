import Router from "express";
import { verifyToken } from "../middlewares/auth-middleware";
import { getMessages } from "../controllers/messages-controllers";

const messageRoutes = Router();

messageRoutes.post("/get-messages", verifyToken, getMessages);

export default messageRoutes;
