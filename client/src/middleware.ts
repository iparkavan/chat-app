
import { NextResponse, NextRequest } from 'next/server'
import { routes } from './lib/constants/routes'
import { ACCESS_TOKEN } from './lib/constants/variables'
import { useAuthslice } from './store/slices/auth-slice'
 
export async function middleware(request: NextRequest) {


  const token = request.cookies.get(ACCESS_TOKEN)?.value

  const afterLoggedIn = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup"
  
  if (afterLoggedIn) {
    if (token) {
      return NextResponse.redirect(new URL(routes.chatPage, request.url))
    } 
  }
  
  // if (request.nextUrl.pathname === "/" && token) {
  //   return NextResponse.redirect(new URL('/chat', request.url))
  // } 
  
  if (!token) {
    return NextResponse.redirect(new URL(routes.login, request.url))
  } 
  
}
 
export const config = {
  matcher: ['/chat', "/"],
}