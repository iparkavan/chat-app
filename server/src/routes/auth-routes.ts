import { getUserInfo, login, signup, updateProfile } from "../controllers/auth-controllers"
import { verifyToken } from "../middlewares/auth-middleware"
import Router from 'express'

const authRoutes = Router()

authRoutes.post('/signup', signup)
authRoutes.post('/login', login)
authRoutes.get('/get-userinfo', verifyToken, getUserInfo)
authRoutes.post('/update-profile', verifyToken, updateProfile)
// authRoutes.post('/check-user-status', checkUserProfileStatus)
// authRoutes.post('/onboarding', onboardUser)

export default authRoutes



    




    
