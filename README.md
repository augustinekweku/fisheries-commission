# Fisheries Commission Frontend

Public website for the Fisheries Commission, built with Next.js (App Router) and connected to Sanity for content.

## Who This Is For

This document is written for two audiences:

- PMs and non-technical stakeholders: use the Product Overview and Content Workflow sections.
- Developers: use the Technical Overview, Setup, and Development Workflow sections.

## Product Overview (Non-Technical)

This frontend project is the public-facing website.

Main goals:

- Present official information about the Commission.
- Publish articles, press releases, reports, laws, and permit-related resources.
- Support a bilingual experience (English and French).
- Render content managed by the editorial team in Sanity Studio.

In simple terms:

- Sanity Studio is where content is created and edited.
- This Next.js app reads that content and displays it on the website.

## Project Split

The full solution is made up of two repositories:

- Frontend (this repo): website UI and page rendering.
- Backend CMS (Sanity Studio): content authoring and content structure.

The matching CMS project is located in the sibling folder named studio-fisheries-commission.

## Technical Overview (Developer)

Stack:

- Next.js 16 (App Router)
- React 19
- TypeScript
- SCSS
- next-intl for translations
- next-sanity for CMS queries

Key folders:

- app: route-based pages
- components: reusable UI building blocks
- sanity: Sanity client and GROQ queries
- messages: translation dictionaries
- data: local static data used by some pages/components
- public: static assets and documents

Important implementation notes:

- Local dev runs on port 3007 by default.
- Locale configuration currently defaults requests to English in i18n/request.ts.
- Sanity projectId and dataset are currently defined directly in sanity/client.ts.

## Content Flow

1. Content editors create or update documents in Sanity Studio.
2. This frontend fetches content via GROQ queries from sanity/groq.ts.
3. Pages in app render the fetched content for users.

This means content changes do not usually require frontend code changes unless:

- A new content type is introduced.
- Layout or presentation rules need updates.
- New filters/search behavior are needed.

## Local Setup

Prerequisites:

- Node.js 20+
- pnpm (recommended because pnpm-lock.yaml is committed)

Install dependencies:

    pnpm install

Run development server:

    pnpm dev

App URL:

- http://localhost:3007

Build for production:

    pnpm build
    pnpm start

Lint:

    pnpm lint

## Development Workflow

1. Pull latest changes.
2. Start local frontend and local Sanity Studio.
3. Implement UI or data query updates.
4. Validate page behavior in browser.
5. Run lint and fix issues.
6. Submit PR with screenshots and testing notes.

Recommended when changing content-driven features:

- Confirm schema field names in the Sanity repo before changing frontend queries.
- Keep query and UI changes in the same PR to avoid drift.

## PM/Content Workflow

1. Open Sanity Studio and edit content.
2. Mark posts as Published where applicable.
3. Verify updates on the website pages.
4. Report layout or data-mapping issues to engineering with page URL and content item title.

## Feature Map

Common public sections include:

- About Us
- Articles
- Press and Releases
- Resources (laws, reports, plans)
- Permits and Licences
- Gallery
- Contact

These pages are organized under the app folder as route segments.

## Troubleshooting

Frontend starts but content is missing:

- Verify Sanity Studio has published content in the correct category/status.
- Confirm schema field names still match the frontend GROQ query fields.

Wrong language shown:

- Locale request config is currently static to English; update locale resolution in i18n/request.ts if dynamic locale switching is required.

Port conflict:

- The dev script binds to 3007. Stop the process using that port or adjust the script temporarily.

## Ownership Notes

- Frontend code and UX behavior live in this repository.
- Content model and editorial experience live in the Sanity repository.
- Changes to content structure should be coordinated across both repositories.
