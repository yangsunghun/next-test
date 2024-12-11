import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL("/home", request.url));
}

export const config = {
  //matcher: ["/about/:path", "/dashboard/:path"], // 원하는 곳에서 미들웨어 실행시키기
  matcher: "/", // 어떤 페이지에서 middleware 를 실행시킬지 결정
};

// 어떤 요청, 어떤 path 에 들어갈 때, 유저의 상태가 어떠한지 미리 검증을 해서 유저가 안전한 상태로
// 들어갈 수 있도록 해줌.
