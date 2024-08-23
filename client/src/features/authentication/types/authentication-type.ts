// export type Auth = {
//   "user_id": number,
//   "user_email": string,
//   "user_role": 'hr_employee' | 'project_manager' | 'admin' | 'dev_employee' | 'hr_manager',
//   "access_token": string,
//   "refresh_token": string
// }


export type SignupResponse = {
  id: string,
  email: string,
  profileImage: string
  profileSetup: boolean,
  firstName: string,
  lastName: string,
}


export type LoginResponse = {
  id: string,
  email: string,
  profileImage: string
  profileSetup: boolean,
  firstName: string,
  lastName: string,
}