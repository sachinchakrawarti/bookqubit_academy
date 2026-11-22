// middleware.js
import { NextResponse } from "next/server";

const LANGS = ["en", "fr", "de"];
const DEFAULT_LANG = "en";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Already has a lang prefix → let it through
  const hasLang = LANGS.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLang) return NextResponse.next();

  // Skip Next internals, API routes, favicon, and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    /\.[^/]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Redirect /foo → /en/foo   (and / → /en)
  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LANG}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};