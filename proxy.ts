import { NextResponse, type NextRequest } from "next/server";

import { courses } from "@/lib/courses";

/*
 * Returns a real 404 status for unknown course pages.
 *
 * Course pages stream their URL-dependent content inside <Suspense> (for
 * instant navigation), so the response has already started with 200 by the
 * time the page's `notFound()` runs; Next.js can then only add `noindex`.
 * Proxy runs before rendering starts, so it can send unknown slugs to the
 * not-found page with a 404. Known courses pass straight through.
 */

const courseSlugs = new Set(courses.map((course) => course.slug));

function isCourseSlug(segment: string) {
  try {
    return courseSlugs.has(decodeURIComponent(segment));
  } catch {
    return false; // Malformed escape sequence: not a course.
  }
}

export function proxy(request: NextRequest) {
  const segment = request.nextUrl.pathname.split("/")[2] ?? "";

  if (isCourseSlug(segment)) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/_not-found", request.url), {
    status: 404,
  });
}

export const config = {
  matcher: "/courses/:slug",
};
