
import { NextResponse } from 'next/server';
import Cookies from 'js-cookie';

export function middleware(request:any) {
    const token = Cookies.get('token');
    const url = request.nextUrl.clone();

    if (!token && url.pathname !== '/login' && url.pathname !== '/signup') {
        return NextResponse.redirect('/login');
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/products/${item.id}', '/login','/signup'], 
};