import { ExpressHandler } from "../types/constant";
import Message from "../models/messages-model";
import { timeStamp } from "console";

export const getMessages: ExpressHandler = async (req, res, next) => {
  try {
    const user1 = req.userId;
    const { user2 } = req.body;

    // console.log(user1, id);

    if (!user1 || !user2) {
      return res.status(400).send("Both userId's are required");
    }

    const messages = await Message.find({
      $or: [
        { sender: user1, recipient: user2 },
        { sender: user2, recipient: user1 },
      ],
    }).sort({ timestamp: 1 });

    return res.status(200).json({ messages });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
