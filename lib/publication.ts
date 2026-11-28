/*
 * PUBLICATION CONTROLS: the one place that decides which content is live.
 *
 * A held item renders only in local development (`next dev`) for review;
 * in production its route returns 404 and the navigation and in-page links
 * leave it out. Set its switch to `true` to publish the route and its links
 * together.
 *
 * Files in `public/` (such as the photographs in `public/academy/`) are
 * reachable by direct URL once deployed, whatever these switches say.
 */

/**
 * True only under `next dev`: held content previews there. The only
 * `NODE_ENV` check for content in the application.
 */
export const developmentPreview = process.env.NODE_ENV === "development";

/*
 * PUBLISHED. Our Story contains the founders' personal accounts as
 * survivors of gender-based violence. Husna Zaid and Eunice Kakuvi Muthama
 * have approved the narrative and its photographs for publication (owner
 * confirmation, 2026-11-28).
 */
export const storyApprovedForPublication = true;

/*
 * PUBLISHED. Our Team, with its holding line until confirmed team profiles
 * (names, roles and portraits) are available.
 */
export const teamApprovedForPublication = true;

/*
 * PUBLISHED. The Learning Experience gallery on the Academy overview: all
 * its photographs are approved (owner confirmation, 2026-11-28).
 */
export const learningPhotosApprovedForPublication = true;

export const storyPublished = storyApprovedForPublication || developmentPreview;
export const teamPublished = teamApprovedForPublication || developmentPreview;
export const learningExperiencePublished =
  learningPhotosApprovedForPublication || developmentPreview;
