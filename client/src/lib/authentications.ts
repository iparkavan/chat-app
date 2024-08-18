/* eslint-disable react-hooks/rules-of-hooks */
// lib/auth.js
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
// import { auth } from './firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { routes } from '@/constants/routes';
import Cookies from 'js-cookie';
import { axios } from './axios';
import { CheckUserTypes, UserInfoTypes } from '@/types/authentication-types';

export const ACCESS_TOKEN = '__access_token'

type SignInWithGoogleTypes = {
  router: AppRouterInstance | string[]
  setNewUser: (bool: boolean) => void
  setUserInfo: (userInfo: UserInfoTypes) => void
  setAccessToken: (accessToken: string) => void
}

const signInWithGoogle = async ({ router, setNewUser, setUserInfo, setAccessToken }: SignInWithGoogleTypes) => {
  
  // const provider = new GoogleAuthProvider();
  // const result = await signInWithPopup(auth, provider);
  // const email = result.user.email
  
  // const access_token = await result.user.getIdToken()
  
  // try {
  //   const { data } = await axios.post<CheckUserTypes>(`/api/auth/check-user-status`, { email })
    
  //   if (!data?.status) {
  //     setNewUser(true)
  //     console.log(data.status)
  //     setUserInfo({
  //       _id: '',
  //       email: result.user.email,
  //       firstName: result.user.displayName,
  //       lastName: '',
  //       profileImage: result.user.photoURL,
  //       profileSetup: false
  //     })

  //     setAccessToken(access_token)
  //     router.push("/onboarding")
  //   } else {
  //     setUserInfo({
  //       _id: '',
  //       email: result.user.email,
  //       firstName: result.user.displayName,
  //       lastName: '',
  //       profileImage: result.user.photoURL,
  //       profileSetup: false
  //     })
  //     Cookies.set(ACCESS_TOKEN, access_token)
  //     router.push(routes.dashboard)
  //   }

  //   // if (result.user) {
  //   //   const access_token = await result.user.getIdToken()
  //   //   Cookies.set(ACCESS_TOKEN, access_token)
  //   //   router.push(routes.dashboard)
  //   //   return result.user;
  //   // }
  // } catch (error) {
  //   console.error(error);
  //   throw error;
  // }
};

const signOut = async (router: AppRouterInstance | string[]) => {
  // try {
  //   await auth.signOut();
  //   Cookies.remove(ACCESS_TOKEN)
  //   router.push(routes.login)
  // } catch (error) {
  //   console.error('Error signing out:', error);
  //   throw error;
  // }
};


export {
  signInWithGoogle, signOut
}
