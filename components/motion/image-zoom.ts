/*
 * Huzali photograph hover zoom: a slow, subtle settle to 1.04 using the
 * shared image motion tokens. Only when motion is welcome; reduced-motion
 * users get a static image.
 *
 * Usage: put `imageZoomGroup` on the element whose hover/focus should
 * trigger the zoom (the photo frame, or an interactive card containing it)
 * and `imageZoom` on the image. The frame must clip its content
 * (`overflow-hidden`, or ImageReveal's frame), so nothing shifts.
 * Inside ImageReveal, apply `imageZoom` to an inner wrapper rather than to
 * ImageReveal's direct child, whose transition ImageReveal manages.
 */
export const imageZoomGroup = "group/zoom";

export const imageZoom =
  "motion-safe:transition-[scale] motion-safe:duration-(--motion-duration-image) motion-safe:ease-(--motion-ease) motion-safe:group-hover/zoom:scale-[1.04] motion-safe:group-focus-within/zoom:scale-[1.04]";
