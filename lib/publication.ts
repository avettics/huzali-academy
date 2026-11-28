/*
 * PUBLICATION HOLDS. Pages awaiting approval render only in development
 * (`next dev`); in production their routes return 404 and the navigation
 * and in-page links leave them out. Set a flag to `true` to publish the
 * route and its links together.
 *
 * Files in `public/` (such as the photographs in `public/academy/`) are
 * reachable by direct URL once deployed, whatever these flags say.
 */

const inDevelopment = process.env.NODE_ENV === "development";

/*
 * Our Story contains the founders' personal accounts as survivors of
 * gender-based violence. It is a working editorial draft for private design
 * review and must not go live until Husna Zaid and Eunice Kakuvi Muthama
 * have explicitly approved the text and photographs.
 */
export const storyApprovedForPublication = false;

/*
 * Our Team has no verified Academy personnel yet (names, roles and
 * portraits). Publish once real team details are confirmed.
 */
export const teamApprovedForPublication = false;

export const storyPublished = storyApprovedForPublication || inDevelopment;
export const teamPublished = teamApprovedForPublication || inDevelopment;

/*
 * The Learning Experience (Academy overview) uses practical training
 * photographs and a newly supplied student photograph whose publication
 * permission is not yet confirmed. Until this is `true` the section renders
 * only in development and is left out of production pages entirely.
 */
export const learningPhotosApprovedForPublication = false;

export const learningExperiencePublished =
  learningPhotosApprovedForPublication || inDevelopment;
