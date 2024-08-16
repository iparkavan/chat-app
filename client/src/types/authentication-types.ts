import onboarding from "@/app/(auth)/onboarding/page"

type CheckUserTypes = {
  msg: string,
  status: boolean
}

type UserInfoTypes = {
  email: string | null,
  firstName: string | null,
  lastName: string | null,
  profileImage: string | null,
  profileSetup: boolean,
  _id: string | null,
}

export type OnboardingTypes = {
  msg: string,
  status: boolean,
  user: UserInfoTypes,
}


export type { CheckUserTypes, UserInfoTypes }