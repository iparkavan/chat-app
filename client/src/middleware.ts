
import { NextResponse, NextRequest } from 'next/server'
import { routes } from './lib/constants/routes'
import { ACCESS_TOKEN } from './lib/constants/variables'
 
export async function middleware(request: NextRequest) {

  const token = request.cookies.get(ACCESS_TOKEN)?.value

  const afterLoggedIn = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup" || request.nextUrl.pathname === "/profile-setup"
  
  if (afterLoggedIn) {
    if (token) {
      return NextResponse.redirect(new URL(routes.chatPage, request.url))
    } 
  }
   
  if (!token) {
    return NextResponse.redirect(new URL(routes.login, request.url))
  } 
  
}
 
export const config = {
  matcher: ['/'],
}