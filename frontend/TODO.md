# AGAPE Companion App — Delivery Outcomes

## PWA installation gate
- [x] `InstallPromptPage.tsx` prompts one-click home-screen installation through `beforeinstallprompt`; provides iOS Safari instructions, “Share → Add to Home Screen”; and offers a direct browser bypass. The app owns a standalone PWA manifest, service worker, and 192px/512px install icons.

## Phone login and attendee roster
- [x] `LoginPage.tsx` looks up phone-number sign-ins against `mockStore.ts` records containing `Phone`, `Name`, `Bus`, `Room`, `Team`, and `IsSuperuser` fields; the attendee-facing sample list excludes superuser accounts.
- [ ] Synchronize the roster with the Master Google Spreadsheet. No spreadsheet connection, roster file, sheet URL, or authorized access was present, so only synthetic rows are used. Do not enter real attendee data in this preview.

## Superuser visibility and access
- [x] Ordinary attendees see no admin/superuser option; the admin entry is shown only after phone lookup signs in a record with `IsSuperuser: true`, and the app's admin-tab guard blocks every other record.

## App shell and navigation
- [x] The application shell and entry screens fill the viewport at `100dvh` and full available width, with no centered 430px frame or empty side gutters. The bottom dock spans the full width; the clay 🪪 badge in the top-right opens Profile (“My Stay”). Responsive spacing keeps mobile controls usable and desktop content balanced.

## Home pass and event dashboard
- [x] `HomePage.tsx` shows the AGAPE Hero pass with AGAPE logo and title, active dates “Dec 27 - 30 • Yelagiri”, bus/room/team shelf, announcement card, and a responsive feature grid. A generated pastel clay hill-station image with layered ridges, cottages and trees replaces the attendee avatar; it is positioned beside the pass text without covering the dates.
- [x] Replace the Home date/countdown area with the announcements card; keep retreat dates on the pass and the itinerary.
- [x] The hill-station artwork is available at `/manus-storage/async-images/efLSesvx0ePGhYZSTO7Mo0/image-1.webp` and visibly renders on the managed Preview.

## Four-day schedule
- [x] `SchedulePage.tsx` presents four distinct dated cards for Dec 27–30, 2026.
- [ ] Replace “programme details to be announced” placeholders with the official four-day itinerary; no programme content was supplied.

## Hymnal directory
- [x] `SongsPage.tsx` provides a searchable, expandable hymnal lyrics directory, with sample public-domain hymns.
- [ ] Replace the sample hymns with the retreat's official song list and lyrics; no songbook was supplied.

## Games and leaderboard
- [x] `GamesPage.tsx` shows sample team challenges, a points table, and leaderboard standings, labelled as preview data.
- [ ] Replace sample teams, challenges, and scores with the official game content when supplied.

## My Stay profile
- [x] `ProfilePage.tsx` (“My Stay”) shows sample pass details, bus seat, dorm assignment, avatar switcher, and logout.

## Superuser tools
- [x] `AdminPage.tsx` is rendered only for attendees marked `IsSuperuser`, with local preview controls for announcements and roster lookup.
- [ ] Replace client-side demo role checks and browser-local announcement state with secure server-side authentication/authorization and shared persistence before real attendee use.

## Styling and deployment setup
- [x] Use React 18, TypeScript, and Vite; keep styles in pure CSS in `src/App.css`; do not add UI libraries such as Tailwind or MUI; retain `vite.config.ts` base `'./'`; and use the supplied AGAPE logo in the header, pass, install screen, and PWA icons.
- [x] The entire app uses a rich premium dark theme across install/login, Home, schedule, songs, games, profile and admin: charcoal/obsidian surfaces, deep purple accents and silver/chrome text, borders and highlights inspired by the AGAPE logo. Home retains its announcements card; retreat dates stay on the pass and itinerary. Desktop shells fill the viewport and arrange content responsively; mobile layouts remain full-screen.
- [ ] Publish to the stated live URL `cicc-retreat-2026.surge.sh` using `surge dist --domain cicc-retreat-2026.surge.sh`; no public Surge deployment has been performed.
