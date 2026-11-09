# CICC Retreat 2026 — AGAPE Companion App

Mobile-first React 18 + TypeScript + Vite PWA for the Dec 27–30, 2026 retreat in Yelagiri. The app fills the viewport with a rich obsidian/charcoal surface, deep purple ambient accents and silver/chrome details drawn from the supplied AGAPE mark. All screens use the same premium dark system; the Home page keeps its announcements card, pass and retreat assignments.

The latest transparent AGAPE logo supplied by the user is stored at `public/agape-logo.png` and used in the app header, pass, install screen, project branding and PWA icons. The pass illustration slot references a managed-storage asset for the custom clay hill-station design. For standalone static hosting such as Surge, download and bundle the completed generated image into `public/` and update `src/pages/HomePage.tsx` before publishing.

## Run locally

```sh
pnpm install
pnpm dev
```

`pnpm build` runs TypeScript build checks and creates the static site in `dist/`.

## Preview status and data

This version is a functional UI prototype with synthetic attendee data in `src/data/mockStore.ts`. The Master Google Spreadsheet is not connected; phone sign-in, role checks, admin announcements, and sample schedule/score data are preview-only. Do not enter real attendee data. The in-browser `IsSuperuser` flag and local storage are not a secure authentication or shared persistence layer. Before public attendee use, connect an approved roster source behind a protected server API, establish secure authentication and authorization, and replace every sample schedule, songbook and game entry with official content.

## Theme edits

Edit design tokens and card treatments in `src/App.css`. Home announcements and pass branding are in `src/pages/HomePage.tsx`; latest text is passed from preview admin state. Update the manifest and HTML theme colors if changing the app surface again.

The brief names `cicc-retreat-2026.surge.sh` as the Surge deployment target. This project has not been published to that public address; the managed preview is the current review surface.
