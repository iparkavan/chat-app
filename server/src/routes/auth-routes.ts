import { getUserInfo, login, signup } from "../controllers/auth-controllers"
import { verifyToken } from "../middlewares/auth-middleware"

const Router = require('express')

const authRoutes = Router()

authRoutes.post('/signup', signup)
authRoutes.post('/login', login)
authRoutes.get('/get-userinfo', verifyToken, getUserInfo)
// authRoutes.post('/check-user-status', checkUserProfileStatus)
// authRoutes.post('/onboarding', onboardUser)

export default authRoutes