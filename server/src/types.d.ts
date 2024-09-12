// types.d.ts
import { DecodedIdToken } from "firebase-admin/auth";

declare global {
  namespace Express {
    interface Request {
      userId?: string | DecodedIdToken; // Allow both string and DecodedIdToken types
    }
  }
}
