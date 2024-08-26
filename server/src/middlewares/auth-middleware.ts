import { ACCESS_TOKEN } from "../controllers/auth-controllers";
import { ExpressHandler } from "../types/constant";
import jwt from 'jsonwebtoken'

export const verifyToken: ExpressHandler = async (req, res, next) => {
    const token = req.cookies[ACCESS_TOKEN]

    if (!token) return res.status(401).send('You are not authenticated!')
    
    jwt.verify(token, process.env.JWT_KEY as string, async (err: any, payload: any) => {
        if (err) return res.status(403).send("Token is not valid")
        
        req.userId = payload.userId
        
        next() 
    })
}




// // import admin from 'firebase-admin';
// // import { Request, Response, NextFunction } from 'express';

// // var serviceAccount = require("../../chat-app-6903f-firebase-adminsdk-grebr-7f2a1b25a7.json");

// // admin.initializeApp({
// //   credential: admin.credential.cert(serviceAccount)
// // });


// // // Initialize Firebase Admin SDK
// // admin.initializeApp({
// //   credential: admin.credential.cert({
// //     projectId: process.env.FIREBASE_PROJECT_ID,
// //     clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
// //     privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
// //   }),
// // });

// // interface AuthenticatedRequest extends Request {
// //   user?: admin.auth.DecodedIdToken;
// // }

// // export async function verifyFirebaseToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
// //   const authorizationHeader = req.headers['Authorization'];

// //   if (!authorizationHeader) {
// //     return res.status(401).json({ error: 'No token provided' });
// //   }

// //   const token = authorizationHeader.split(' ')[1]; // Extract token from Authorization header

// //   try {
// //     const decodedToken = await admin.auth().verifyIdToken(token);
// //     req.user = decodedToken; // Attach the decoded token payload to the request object
// //     next(); // Call the next middleware or route handler
// //   } catch (error) {
// //     console.error('Error verifying token:', error);
// //     res.status(401).json({ error: 'Invalid token' });
// //   }
// // }



// import admin from 'firebase-admin';
// import { Request, Response, NextFunction } from 'express';
// import { DecodedIdToken } from 'firebase-admin/auth';

// var serviceAccount = require("../../chat-app-6903f-firebase-adminsdk-grebr-7f2a1b25a7.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// // Initialize Firebase Admin SDK
// // admin.initializeApp({
// //   credential: admin.credential.cert({
// //     projectId: process.env.FIREBASE_PROJECT_ID,
// //     clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
// //     privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
// //   }),
// // });


// interface AuthenticatedRequest extends Request {
//   user?: DecodedIdToken;
// }

// export async function verifyFirebaseToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
//   const authorizationHeader = req.headers['authorization'];

//   if (!authorizationHeader) {
//     return res.status(401).json({ error: 'No token provided' });
//   }

//   const token = authorizationHeader.split(' ')[1]; // Extract token from Authorization header

//   try {
//     const decodedToken = await admin.auth().verifyIdToken(token);
//     req.user = decodedToken; // Attach the decoded token payload to the request object
//     next(); // Call the next middleware or route handler
//   } catch (error) {
//     console.error('Error verifying token:', error);
//     res.status(401).json({ error: 'Invalid token' });
//   }
// }
