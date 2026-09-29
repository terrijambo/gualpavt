# Guallpa Latin Store

Responsive bilingual website for the South Burlington, Vermont store. Plain HTML, CSS and JavaScript; no build step, framework, or backend credentials required.

## Local development

Run `npm run dev` and open http://127.0.0.1:5173. Run `npm test` for internal-link, asset and business-schema checks.

## Deployment

Vercel: framework Other, root directory `.`, no build command, output directory `.`. Link this directory with `vercel link`, then deploy with `vercel --prod`. Git integration can deploy subsequent pushes to main.

## Updating content

English copy and business details live in `index.html`; Spanish translations and America/New_York opening-status logic live in `main.js`. If hours change, update both the displayed schedule and structured data in the HTML, plus `updateStatus()` in JavaScript.

## Scope

Category browsing, English/Spanish switching, responsive navigation, live store-hours status, click-to-call, Google directions and map, and social links. No invented inventory, prices, checkout, delivery, or form submissions. Customers contact the store to check availability.

See `RESEARCH.md` for sources and photography provenance.
