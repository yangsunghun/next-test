import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL("/home", request.url));
}

export const config = {
  matcher: "/", // 어떤 페이지에서 middleware 를 실행시킬지 결정
};
