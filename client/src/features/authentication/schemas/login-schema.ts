import { z } from "zod";

const loginSchema = z.object({
  Useremail: z.string().min(1, 'Email is required').email('Please enter the valid email'),
  Password: z.string().min(6, 'Password is required')
})

type LoginFields = z.infer<typeof loginSchema>

export {
  loginSchema
}

export type {
  LoginFields
}

