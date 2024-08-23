import { checkUserProfileStatus, getUserInfo, login, onboardUser, signup } from "../controllers/auth-controllers"

const Router = require('express')

const authRoutes = Router()

authRoutes.post('/signup', signup)
authRoutes.post('/login', login)
authRoutes.post('/check-user-status', checkUserProfileStatus)
authRoutes.post('/onboarding', onboardUser)
authRoutes.get('/get-userinfo', getUserInfo)

export default authRoutes