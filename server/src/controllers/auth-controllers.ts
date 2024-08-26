import jwt from "jsonwebtoken";
import { ExpressHandler } from "../types/constant";
import { compare } from "bcrypt";
import User from "../models/user-model";

const maxAge = 3 * 24 * 60 * 60 * 1000


const createToken = (email: string, userId: string) => {
  const JWT_KEY = process.env.JWT_KEY as string
  return jwt.sign({email, userId}, JWT_KEY, {expiresIn: maxAge})
}

export const ACCESS_TOKEN = '__access-token'

export const signup: ExpressHandler = async (req, res, next) => {

  
  try {
    const {firstName, lastName, email, password} = req.body
    
    if (!email || !password) {
      return res.status(400).send('Email and password is required')
    }

    const existingUser = await User.findOne({ email })

    if (existingUser) return res.status(400).json({ message: "You have already registered your account, try signin"})

    const user = await User.create({ email, password })

    res.cookie( ACCESS_TOKEN, createToken(email, user.id), {
      maxAge, 
      secure: true,
      sameSite: 'none'
    }) 

    return res.status(201).json({
      userInfo: {
        id: user.id,
        email: user.email,
        profileSetup: user.profileSetup, 
        firstName: user.firstName,
        lastName: user.lastName,
        profileImage: user.profileImage
      }
    }) 

  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}


export const login: ExpressHandler = async (req, res, next) => {
  try {
    
    const {email, password} = req.body

    if (!email || !password) {
      return res.status(400).send('Email and password is required')
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).send('User with the given email not found')
    }

    const auth = await compare(password, user.password)

    if (!auth) {
      return res.status(400).send('Invalid password')
    }

    res.cookie( ACCESS_TOKEN, createToken(email, user.id), {
      maxAge, 
      secure: true,
      sameSite: 'none'
    })

    return res.status(200).json({
      id: user.id,
      email: user.email,
      profileSetup: user.profileSetup, 
      firstName: user.firstName,
      lastName: user.lastName,
      profileImage: user.profileImage
    }) 

  } catch (error: any) {
    return res.status(400).json({ message: error.message })
  }
}



export const getUserInfo: ExpressHandler = async (req, res , next) => {
  try {
    const userInfo = await User.findById(req.userId)

    if (!userInfo) return res.status(404).send("User with the given id not found")
    
    return res.status(200).json({
      id: userInfo.id,
      email: userInfo.email,
      profileSetup: userInfo.profileSetup, 
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      profileImage: userInfo.profileImage
    })  
    
  } catch (error) {
    res.status(401).json({message: "Error sending userInfo"})
  }
}




// export const checkUserProfileStatus: ExpressHandler = async (req, res, next) => {
//   try {
//    const { email } = req.body as { email: string };

//    if (!email) {
//     return res.json({ msg: "Email is required", status: false });
//    }

//    const user = await User.findOne({ email });
//    console.log("killler",user)

//    if (!user) {
//     return res.json({ msg: "User Not Found", status: false });
//   } else {
//     res.json({ msg: "User found", status: true, data: user });
//   }
//   } catch (error: any) {
//     console.log(error.message)
//   }
// }


// export const onboardUser: ExpressHandler = async (req, res, next) => {
//   try {
//     const { firstName, lastName, email, profileImage } = req.body;
//     console.log(firstName, lastName, email, profileImage)
    
//     // if (!firstName || !lastName || !email || !profileImage) {
//     //   return res.status(400).json("Name, Email and Display picture are required");
//     // }

//     const user = await User.create({
//       firstName,
//       lastName,
//       email,
//       profileImage,
//     });

//     return res.json({
//       msg: "The User has created successfully",
//       status: true,
//       user,
//     });
    
//   } catch (error: any) {
//     console.log(error.message)
//     res.json({ msg: "Error Creating User", status: false });
//   }
// };



