# Fisheries Commission — Project Documentation

**Website:** https://fishcom.gov.gh/

**Document version:** July 2026

**Prepared for:** Technical team and project stakeholders

---

## Table of Contents

1. About This Document
2. Project Overview
3. How the Two Systems Work Together
4. Public Website — Section by Section
5. Features Summary
6. Social Media Presence
7. Content Management System (CMS)
8. Content Types Explained
9. How Content Gets Published (Step by Step)
10. Technical Architecture (Developers)
11. Frontend — Local Setup (Developers)
12. CMS / Sanity Studio — Local Setup (Developers)
13. Folder Structure (Developers)
14. Development Workflows (Developers)
15. Troubleshooting
16. Ownership and Responsibilities

---

## 1. About This Document

This document covers the full Fisheries Commission digital platform. It is written for two audiences:

**Non-technical readers (Project Managers, stakeholders, content editors):** Focus on Sections 2–9. These sections explain what the system does, how it is organised, and how content gets published to the live website.

**Developers and technical staff:** All sections apply. Sections 10–16 contain the technical setup, workflows, and maintenance guidance.

---

## 2. Project Overview

The Fisheries Commission of Ghana operates an official public website at:

**https://fishcom.gov.gh/**

The platform serves two core purposes:

- **Informational:** Presenting official information about the Commission to the public — its leadership, board, divisions, goals, laws, and regulations.
- **Publication:** Publishing articles, press releases, reports, permits, licences, and downloadable resources in a structured and searchable way.

The website supports **English and French**, reflecting the Commission's bilingual mandate.

A built-in AI chatbot is available on the site to assist visitors.

---

## 3. How the Two Systems Work Together

The platform is divided into two separate projects:

| Project                                        | Purpose                                                  | Audience                        |
| ---------------------------------------------- | -------------------------------------------------------- | ------------------------------- |
| **Frontend** (fisheries-commision)             | The public-facing website that visitors see              | General public, developers      |
| **CMS / Studio** (studio-fisheries-commission) | The admin interface where content is created and managed | Content editors, administrators |

**The flow in plain terms:**

1. A content editor logs into the CMS and creates or updates content (articles, reports, permits, etc.).
2. The CMS stores that content securely in the cloud (Sanity's hosted infrastructure).
3. The public website reads that content automatically and displays it to visitors.

This means the website can be updated without touching any code — editors work entirely through the CMS.

Both systems connect to the same Sanity cloud project:

- Project ID: p8bgl0wr
- Dataset: production

---

## 4. Public Website — Section by Section

| Page / Section                                            | Purpose                                                                                                                                                                           |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Home**                                                  | Entry point. Features a hero slider with featured posts, leadership highlights, blog posts, projects overview, a call-to-action section, and a video post section.                |
| **About Us**                                              | Overview of the Commission.                                                                                                                                                       |
| **About Us → Board Members**                              | Profiles and images of the current board members.                                                                                                                                 |
| **About Us → Leadership**                                 | Leadership team profiles.                                                                                                                                                         |
| **About Us → Divisions and Units**                        | Breakdown of internal organisational structure.                                                                                                                                   |
| **About Us → Goals and Objectives**                       | Strategic goals of the Commission.                                                                                                                                                |
| **Articles**                                              | Published articles managed through the CMS. Paginated and filterable.                                                                                                             |
| **Press and Releases**                                    | Official press releases. Same CMS-powered system as Articles, filtered by category.                                                                                               |
| **Permits and Licences**                                  | Downloadable permits and licences for fishing, import/export, aquaculture, cold storage, and subcategories (industrial, semi-industrial, artisanal, recreational, authorisation). |
| **Laws and Regulations**                                  | Downloadable regulatory and legal documents in PDF format.                                                                                                                        |
| **Reports and Plans**                                     | Official reports and planning documents in PDF format.                                                                                                                            |
| **Gallery**                                               | Photographic gallery, paginated in sets of six.                                                                                                                                   |
| **Projects**                                              | Overview of active or notable projects.                                                                                                                                           |
| **Projects → Fish for Development**                       | Dedicated page for the Fish for Development initiative.                                                                                                                           |
| **FITI Standard**                                         | Dedicated page for the FITI (Fisheries Improvement Initiative) standard.                                                                                                          |
| **Collaborators**                                         | Overview of partner organisations.                                                                                                                                                |
| **Collaborators → Development Partners**                  | International and local development partner organisations.                                                                                                                        |
| **Collaborators → Formal Institutions**                   | Formal government or institutional partners.                                                                                                                                      |
| **Collaborators → Informal Institutions**                 | Informal sector partners.                                                                                                                                                         |
| **Collaborators → Fisheries Association / Civil Society** | Fisheries associations and civil society organisations.                                                                                                                           |
| **Regional Offices**                                      | Contact and location information for regional offices.                                                                                                                            |
| **Contact**                                               | General contact information and enquiries page.                                                                                                                                   |
| **Search**                                                | Site-wide search across CMS-managed content.                                                                                                                                      |

---

## 5. Features Summary

| Feature                      | Details                                                                                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Bilingual support**        | English and French. Users can switch language using the Language Switcher on the page.                                                                               |
| **AI Chatbot**               | A Botpress-powered chat widget is embedded on every page, allowing visitors to ask questions and get assistance in real time.                                        |
| **Hero Slider**              | The homepage features a slider displaying featured posts. These are managed in the CMS (a post can be flagged as "Home Slider Featured" and given a position/order). |
| **PDF Preview and Download** | Documents (laws, reports, permits) are displayed with a preview thumbnail and a direct download link.                                                                |
| **Paginated Listings**       | Articles, press releases, resources, and gallery images all use pagination.                                                                                          |
| **Search**                   | Visitors can search across published posts by keyword.                                                                                                               |
| **Social Media Links**       | See Section 6 below.                                                                                                                                                 |
| **Responsive Design**        | The website works on desktop, tablet, and mobile devices.                                                                                                            |

---

## 6. Social Media Presence

The following social media accounts are linked in the website header:

| Platform    | URL                                            |
| ----------- | ---------------------------------------------- |
| Twitter / X | https://x.com/fisheriescommhq                  |
| Facebook    | https://www.facebook.com/share/1BrvStesR1/     |
| Instagram   | https://www.instagram.com/fisheries_commission |

---

## 7. Content Management System (CMS)

The CMS is built on **Sanity** — a widely used, cloud-hosted content platform. Editors access it through Sanity Studio, which is a browser-based interface.

**Key points for non-technical stakeholders:**

- No coding is required to create or edit content.
- Content is saved to the cloud; no local installation is needed for day-to-day editing.
- Editors can control whether a post is a "Draft" or "Published", meaning content can be prepared and reviewed before it goes live.
- The CMS supports English and French fields side by side for bilingual content.

---

## 8. Content Types Explained

The CMS currently manages three types of content:

---

### Post (Articles and Press Releases)

Used for: Articles and press releases published on the website.

| Field                    | Description                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------- |
| Title (English + French) | The headline of the post in both languages.                                        |
| Slug                     | The URL-friendly identifier auto-generated from the English title.                 |
| Published At             | Date the post was published.                                                       |
| Images (up to 5)         | Main and additional images attached to the post.                                   |
| Category                 | Either "Articles" or "Press and Releases". Determines which section it appears in. |
| Body (English + French)  | The full content of the post in both languages. English is required.               |
| Publish Status           | "Draft" (not visible on website) or "Published" (visible).                         |
| Home Slider Featured     | Tick to show this post in the homepage hero slider.                                |
| Position                 | The order in which the post appears in the slider (lower numbers appear first).    |

---

### Resource (Laws, Regulations, Reports, Plans)

Used for: Downloadable PDF documents such as laws, regulations, reports, and plans.

| Field            | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| Title            | Name of the document.                                                           |
| Category         | One of: "Laws and Regulations", "Reports and Plans", or "Permits and Licences". |
| Date             | Date the document was issued.                                                   |
| Last Modified At | When the document was last updated.                                             |
| PDF Document     | The uploaded PDF file.                                                          |

---

### Permits and Licences

Used for: Permit and licence documents.

| Field            | Description                                                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| Title            | Name of the permit or licence.                                                                           |
| Category         | One of: "Fishing", "Import and Export", "Aquaculture", "Cold Storage Facility".                          |
| Subcategory      | Optional. One of: "Industrial", "Semi-Industrial", "Artisanal", "Authorisation", "Recreational Fishing". |
| Date             | Date of issuance.                                                                                        |
| Last Modified At | When last updated.                                                                                       |
| PDF Document     | The uploaded PDF file.                                                                                   |

---

## 9. How Content Gets Published (Step by Step)

**For a Post (Article or Press Release):**

1. Log in to Sanity Studio.
2. Click "Post" in the left sidebar.
3. Click "Create new document" (the pencil/plus icon).
4. Fill in the English title. The slug (URL) is generated automatically.
5. Add the French title if available.
6. Select the correct category (Articles or Press and Releases).
7. Set the published date.
8. Upload images as needed.
9. Write the body content in English. French content is optional.
10. If this post should appear in the homepage slider, toggle "Home Slider Featured" on and set a position number.
11. Change "Publish Status" from "Draft" to "Published".
12. Click "Publish" in the top right corner.
13. Visit the live website to confirm the post appears correctly.

**For a Resource (PDF Document):**

1. Log in to Sanity Studio.
2. Click "Resource" in the sidebar.
3. Create a new document.
4. Fill in the title, select the correct category, set the date.
5. Upload the PDF file.
6. Click "Publish".

**For a Permit or Licence:**

1. Log in to Sanity Studio.
2. Click "Permits and Licences" in the sidebar.
3. Create a new document.
4. Fill in title, category, and optional subcategory.
5. Set the date and upload the PDF.
6. Click "Publish".

---

## 10. Technical Architecture (Developers)

### Frontend

| Item                 | Detail                                                                                |
| -------------------- | ------------------------------------------------------------------------------------- |
| Framework            | Next.js 16 (App Router)                                                               |
| Language             | TypeScript                                                                            |
| UI                   | React 19, SCSS, Bootstrap (included as vendor CSS)                                    |
| CMS Client           | next-sanity                                                                           |
| Internationalisation | next-intl                                                                             |
| Data fetching        | SWR (for client-side), Sanity direct fetch (server-side)                              |
| Chatbot              | Botpress (injected via Next.js Script tags)                                           |
| PDF rendering        | react-pdf                                                                             |
| Custom server        | server.js — wraps Next.js with a plain Node.js HTTP server for production deployments |

### Backend (CMS)

| Item              | Detail                                                             |
| ----------------- | ------------------------------------------------------------------ |
| CMS Platform      | Sanity v4                                                          |
| Studio framework  | Sanity Studio with Structure Tool and Vision (GROQ query explorer) |
| Language          | TypeScript                                                         |
| Schema            | Defined in schemaTypes/ (post, resource, permitsAndLicences)       |
| Sanity project ID | p8bgl0wr                                                           |
| Dataset           | production                                                         |

### Data Flow

```
Editor → Sanity Studio → Sanity Cloud (dataset: production)
                                 ↓
                    Next.js frontend (GROQ queries via next-sanity)
                                 ↓
                         https://fishcom.gov.gh/
```

---

## 11. Frontend — Local Setup (Developers)

**Prerequisites:**

- Node.js 20 or higher
- pnpm package manager

**Install dependencies:**

```
pnpm install
```

**Run development server (port 3007):**

```
pnpm dev
```

Local URL: http://localhost:3007

**Build for production:**

```
pnpm build
```

**Start production server:**

```
pnpm start
```

Or using the custom Node server directly:

```
node server.js
```

**Lint:**

```
pnpm lint
```

---

## 12. CMS / Sanity Studio — Local Setup (Developers)

**Prerequisites:**

- Node.js 20 or higher
- pnpm
- Sanity account with access to project p8bgl0wr

**Install dependencies:**

```
pnpm install
```

**Run studio locally:**

```
pnpm dev
```

Local URL: http://localhost:3333

**Build studio:**

```
pnpm build
```

**Deploy studio to Sanity hosting:**

```
pnpm deploy
```

**Deploy GraphQL API:**

```
pnpm deploy-graphql
```

---

## 13. Folder Structure (Developers)

### Frontend (fisheries-commision/)

```
app/                    Route-based pages (Next.js App Router)
  page.tsx              Home page
  about-us/             About Us section and sub-pages
  articles/             Articles listing and detail pages
  press-and-release/    Press releases
  permits-and-licenses/ Permit document listings
  laws-and-regulations/ Legal document listings
  reports-and-plans/    Reports and planning documents
  gallery/              Photo gallery with pagination
  projects/             Projects overview and sub-pages
  fiti-standard/        FITI Standard page
  collaborators/        Collaborators and partner pages
  regional-offices/     Regional offices page
  contact/              Contact page
  search/               Site search page
components/             Reusable UI components
  Header.tsx            Main navigation header
  Footer.tsx            Site footer
  TopBar.tsx            Top bar with social links and language switcher
  HeroSection.tsx       Homepage hero slider
  BotpressChat.tsx      AI chatbot integration
  LanguageSwitcher.tsx  English/French switcher
  Pagination.tsx        Reusable pagination component
  PdfThumbnail.tsx      PDF preview thumbnails
  HomePage/             Homepage-specific sections
  Collaborators/        Collaborator page components
  Fiti/                 FITI standard page components
  NewsAndEvents/        News and events components
  Permits/              Permit listing components
  Resources/            Resource listing components
  Search/               Search components
sanity/
  client.ts             Sanity client configuration and fetcher
  groq.ts               All GROQ queries used by the frontend
data/
  data.ts               Local static data (board members, gallery images)
messages/
  en.json               English translation strings
  fr.json               French translation strings
i18n/
  request.ts            Locale resolution for server-side requests
types/
  Resources.ts          TypeScript types for resource documents
public/
  assets/               Static images, CSS, vendor libraries
  docs/                 Static documents
```

### CMS (studio-fisheries-commission/)

```
schemaTypes/
  index.ts              Exports all schema types
  postType.ts           Post schema (articles and press releases)
  resourceType.ts       Resource schema (PDFs: laws, reports)
  permitType.ts         Permits and licences schema
sanity.config.ts        Main Sanity Studio configuration
sanity.cli.ts           Sanity CLI configuration
static/                 Static files served by the studio
```

---

## 14. Development Workflows (Developers)

### Making a UI change

1. Pull latest code.
2. Run the frontend locally (`pnpm dev`).
3. Make changes in `app/` or `components/`.
4. Test in browser at http://localhost:3007.
5. Run `pnpm lint`.
6. Open a pull request with screenshots.

### Adding a new GROQ query or updating data from CMS

1. Verify the exact field names in the Sanity schema (schemaTypes/).
2. Add or update the query in `sanity/groq.ts`.
3. Update the consuming page or component.
4. Test with real data from the production dataset.
5. Keep schema changes and query changes in the same PR to avoid drift.

### Changing the content model (Sanity schema)

1. Update the relevant schema file in `schemaTypes/`.
2. Run Sanity Studio locally and verify the editor UI behaves correctly.
3. Align with the frontend developer — if field names or enum values change, the GROQ queries and UI must be updated in the same release.
4. Submit a PR with notes on migration impact.

**Important:** Renaming or removing a field will break any frontend query or component that references the old field name. Prefer additive changes where possible.

### Translating content

- Translation strings (UI labels, navigation, error messages) live in `messages/en.json` and `messages/fr.json`.
- CMS content (post body, titles) stores English and French in parallel fields within each document.
- The locale switcher sets a cookie and reloads messages accordingly.

---

## 15. Troubleshooting

| Problem                              | Steps to investigate                                                                                                                                                          |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Content not appearing on the website | 1. Confirm item is Published in Sanity Studio. 2. Confirm the category/status field values match exactly what the frontend queries expect. 3. Check for typos in enum values. |
| Wrong language shown to users        | Locale resolution happens in `i18n/request.ts`. Verify the cookie-based locale logic in `app/layout.tsx` is reading the cookie correctly.                                     |
| Port conflict on local dev           | Frontend dev uses port 3007. Stop any other process on that port, or temporarily change the PORT in the dev script.                                                           |
| Sanity Studio access denied          | Confirm Sanity account has the correct project permissions. Verify projectId and dataset in `sanity.config.ts`.                                                               |
| PDF not displaying                   | Confirm the file was uploaded as a PDF in Sanity. Verify the `pdfUrl` field is being resolved from the asset reference in the GROQ query.                                     |
| Chatbot not loading                  | The Botpress scripts are loaded via Next.js `Script` with `strategy="afterInteractive"`. Check browser console for script load errors or network blocks.                      |
| Homepage slider missing posts        | Verify the post has "Home Slider Featured" toggled on and is set to "Published" in Sanity Studio.                                                                             |

---

## 16. Ownership and Responsibilities

| Area                                  | Owner                    |
| ------------------------------------- | ------------------------ |
| Frontend code and UI                  | Frontend developer       |
| CMS schema and content model          | Backend / CMS developer  |
| Content creation and publishing       | Editorial / content team |
| Sanity project access and permissions | CMS administrator        |
| Domain and hosting                    | Infrastructure / DevOps  |
| Social media account credentials      | Communications team      |

### Cross-team coordination points

- Any schema change must be coordinated between CMS developer and frontend developer before deployment.
- New content sections on the website require both a schema update (CMS) and a new route/component (frontend).
- The live website URL is https://fishcom.gov.gh/. Production deployments should be confirmed by testing on the live site after release.

---

_End of documentation._
