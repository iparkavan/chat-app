import Router from "express";
import { verifyToken } from "../middlewares/auth-middleware";
import { searchContacts } from "../controllers/contact-controllers";


const contactRoutes = Router()

contactRoutes.post('/search', verifyToken, searchContacts )

export default contactRoutes