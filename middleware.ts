import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.headers.get('host') === 'www.emoviral.com') {
    const url = req.nextUrl.clone();
    url.hostname = 'emoviral.com';
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};