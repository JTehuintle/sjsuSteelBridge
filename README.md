# SJSU Steel Bridge site

This is one React app. `src/App.jsx` owns the routes; shared navigation and the page shell live in `src/components/SiteLayout.jsx`.

## Add a page

1. Create a page component in `src/pages/`.
2. Add a route in `src/App.jsx`.
3. Add its navigation link in `src/components/SiteLayout.jsx`.
4. Put page-only styles in `src/styles/` and import them from that page. Keep shared styles in `src/styles.css`.

Static files such as photos live in `public/` and are referenced from the root URL (`/images/...`).

There is one HTML entry point (`index.html`). For production hosting, configure the host to send unknown paths such as `/gallery` back to `index.html` so direct links and refreshes work with React Router.

Run locally with `npm run dev`; create a production build with `npm run build`.
