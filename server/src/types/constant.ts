import { DecodedIdToken } from 'firebase-admin/auth';
import { NextFunction, Request, Response } from "express";

export type ExpressHandler = (req: Request, res: Response, next: NextFunction) => void


declare module 'express-serve-static-core' {
  interface Request {
    userId?: DecodedIdToken;
  }
}
