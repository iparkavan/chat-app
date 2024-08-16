
import axios from 'axios'
import { NextResponse, NextRequest } from 'next/server'
import { ACCESS_TOKEN } from './lib/authentications'
import { routes } from './constants/routes'
 
export async function middleware(request: NextRequest) {

  const token = request.cookies.get(ACCESS_TOKEN)?.value

  const afterLoggedIn = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup" || request.nextUrl.pathname === "/onboarding"
  
  if (afterLoggedIn) {
    if (token) {
      return NextResponse.redirect(new URL(routes.dashboard, request.url))
    } 
  }
   
  if (!token) {
    return NextResponse.redirect(new URL(routes.login, request.url))
  } 
  
}
 
export const config = {
  matcher: ['/'],
}