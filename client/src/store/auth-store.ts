import { Auth } from '@/features/authentication/types/authentication-type'
import {create, StateCreator} from 'zustand'
import { jwtDecode } from 'jwt-decode'
import { persist } from  'zustand/middleware'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { routes } from '@/constants/routes'
import Cookies from 'js-cookie'

type DecodedToken = {
  exp: number
  iat: number
  jti: string
  token_type: string
  user_id: number
}

type LoginType = (
  data: Auth,
  router: AppRouterInstance
) => void

type LogoutType = (router:AppRouterInstance) => void

type AuthStore = {
  auth: Auth | null
  decodedToken: DecodedToken | null
  login: LoginType
  logout: LogoutType
}

// const isAuthType = (value: any): value is { auth: AuthStore['auth'] } => {
//   return (
//     value &&
//     typeof value === 'object' &&
//     'auth' in value &&
//     typeof value.auth === 'object' &&
//     'idToken' in value.auth &&
//     typeof value.auth.idToken === 'string'
//   );
// };

const AUTH_STORE = 'auth-store'


const useAuth = create<AuthStore>(
  persist(
    (set) => ({
      auth: null,
      decodedToken: null,
      login: (data, router) => {
        // const decodedToken = jwtDecode<DecodedToken>(data.access_token)
        // set({auth: data, decodedToken})
        if (data) {
          Cookies.set(AUTH_STORE, data.access_token)
          router.push(routes.dashboard)
        }

      },
      logout: (router) => {
        // set({ auth: null, decodedToken: null })
        // localStorage.removeItem(AUTH_STORE)
        Cookies.remove(AUTH_STORE)
        router.push(routes.login)
      }
    }),
    {
      name: AUTH_STORE, // name of the item in the storage
      // partialize: (state) => ({ auth: state.auth }),
      // getStorage: () => localStorage, // (optional) specify the storage, default is localStorage
      // merge: (persistedState, currentState) => {
      //   if (isAuthType(persistedState) && persistedState.auth) {
      //     const decodedToken = jwtDecode<DecodedToken>(
      //       persistedState.auth.access_token
      //     );
      //     return { ...currentState, ...persistedState, decodedToken };
      //   }
      //   if (persistedState) {
      //     return {
      //       ...currentState,
      //       ...persistedState,
      //     };
      //   }
      //   return currentState;
      // },
    }
  ) as StateCreator<AuthStore, [], []>
);

export { useAuth }