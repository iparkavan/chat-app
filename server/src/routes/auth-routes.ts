import { checkUserProfileStatus, getUserInfo, onboardUser, signup } from "../controllers/auth-controllers"
import { verifyFirebaseToken } from "../middlewares/auth-middleware"

const Router = require('express')

const authRoutes = Router()

authRoutes.post('/signup', signup)
authRoutes.post('/check-user-status', checkUserProfileStatus)
authRoutes.post('/onboarding', onboardUser)
authRoutes.get('/get-userinfo', verifyFirebaseToken, getUserInfo)

export default authRoutes