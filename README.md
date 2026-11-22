This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/(site)/page.tsx`. The page auto-updates as you edit the file.

This project uses `next/font` to self-host Manrope (`font-sans`) and Playfair Display (`font-heading`). The Huzali Academy brand primitives and semantic Tailwind v4 theme are defined in `app/globals.css`.

Run `npm run lint`, `npx --no-install tsc --noEmit`, and `npm run build` before shipping changes. The build needs access to Google Fonts when font files are not cached.

The Home page is a foundation placeholder and the other navigation destinations are planned routes. Social profile URLs are not yet confirmed: add them as `href` in `socialNavigation` (`components/layout/navigation.tsx`); until then the footer lists the platforms without links.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
