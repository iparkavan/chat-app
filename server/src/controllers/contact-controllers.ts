import { response } from "express";
import { ExpressHandler } from "../types/constant";
import User from "../models/user-model";

export const searchContacts: ExpressHandler = async (req, res, next) => {
  try {
      const { searchTerms } = req.body

      if (searchTerms === undefined || searchTerms === null) {
          return res.status(400).send("Search Term is Reaquired");
      }

      const sanitizedSearchTerm = searchTerms.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      )

      const regex = new RegExp(sanitizedSearchTerm, "i")

      const contacts = await User.find({
        $and: [
          {_id: {$ne: req.userId}}, 
          {$or: [ { firstName: regex }, { lastName: regex }, { email: regex } ]}
        ]
      })

      return res.status(200).json({ contacts })

  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};