import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from '@/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Check for Brazilian IP and set locale cookie if BR
  const country = request.headers.get('x-vercel-ip-country');
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;

  // If Brazilian visitor without a cookie preference, set pt-BR cookie
  if (country === 'BR' && !localeCookie) {
    const response = intlMiddleware(request);
    response.cookies.set('NEXT_LOCALE', 'pt-BR', {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
    });
    return response;
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/',
    '/(en|pt-BR)/:path*',
    '/((?!_next|_vercel|api|sitemap\\.xml|robots\\.txt|.*\\.[^/]+$).*)'
  ]
};
