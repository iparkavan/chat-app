import { DecodedIdToken } from "firebase-admin/auth";
import { NextFunction, Request, Response } from "express";

export type ExpressHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

declare module "express-serve-static-core" {
  interface Request {
    userId?: DecodedIdToken;
  }
}

// export type senderReciver = {
//   _id: string;
//   email: string;
//   bgColor: number;
//   firstName: string;
//   lastName: string;
// };

export type MessagesTypes = {
  _id: string;
  sender: string;
  recipient: string;
  messageType: string;
  content: string | undefined;
  fileUrl: string | undefined,
};
