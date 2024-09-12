import { ExpressHandler } from "../types/constant";
import User from "../models/user-model";
import Message from "../models/messages-model";
import mongoose from "mongoose";
import { DecodedIdToken } from "firebase-admin/auth";

export const searchContacts: ExpressHandler = async (req, res, next) => {
  try {
    const { searchTerms } = req.body;

    if (searchTerms === undefined || searchTerms === null) {
      return res.status(400).send("Search Term is Reaquired");
    }

    const sanitizedSearchTerm = searchTerms.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );

    const regex = new RegExp(sanitizedSearchTerm, "i");

    const contacts = await User.find({
      $and: [
        { _id: { $ne: req.userId } },
        { $or: [{ firstName: regex }, { lastName: regex }, { email: regex }] },
      ],
    });

    return res.status(200).json({ contacts });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getContactsForDmList: ExpressHandler = async (req, res, next) => {
  try {
    let userId: DecodedIdToken | undefined = req.userId;

    if (typeof userId === "string") {
      userId = new mongoose.Types.ObjectId(userId);   
    } else if (!(userId instanceof mongoose.Types.ObjectId)) {
      throw new Error("Invalid userId type");
    }

    const contacts = await Message.aggregate([
      { $match: { $or: [{ sender: userId }, { recipient: userId }] } },
      { $sort: { timestamp: -1 } },
      {
        $group: {
          _id: {
            $cond: {
              if: { $eq: ["$sender", userId] },
              then: "$recipient",
              else: "$sender",
            },
          },
          lastMessageTime: { $first: "$timestamp" },
        },
      },
      {
        $lookup: {
          from: "user",
          localField: "_id",
          foreignField: "_id",
          as: "contactInfo",
        },
      },
      { $unwind: "$contactInfo" },
      {
        $project: {
          _id: 1,
          lastMessageTime: 1,
          email: "$contactInfo.email",
          fistName: "$contactInfo.fistName",
          lastName: "$contactInfo.lastName",
          profileImage: "$contactInfo.profileImage",
          bgColor: "$contactInfo.bgColor",
        },
      },
    ]);

    console.log(userId, contacts);

    return res.status(200).json({ contacts });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
