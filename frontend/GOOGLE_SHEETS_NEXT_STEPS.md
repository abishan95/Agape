# AGAPE app: what is ready and what comes next

## Current state

The project is a mobile-first React + TypeScript + Vite PWA. The home pass, navigation, install screen, profile, sample four-day itinerary, sample hymn directory, sample games/scoreboard and a local demo admin screen are implemented. The project is saved in the Manus-managed repository at commit `5412be5`; a downloadable ZIP contains the source.

**The current app is a front-end demo, not a connected backend.** It has no server or database enabled. Attendees and game scores are synthetic examples in `src/data/mockStore.ts` and the page files. The selected avatar and a demo announcement are saved only in the current browser. The Google spreadsheet is not connected, and the schedule/songbook/challenges are placeholders. Do not enter real attendee information in this demo.

## Files you can change

| To change… | Edit… |
|---|---|
| Colors, layout, spacing, mobile styling and tactile effects | `src/App.css` |
| Home page, pass, assignments and broadcast area | `src/pages/HomePage.tsx` |
| Four-day itinerary cards | `src/pages/SchedulePage.tsx` |
| Song list and lyric display | `src/pages/SongsPage.tsx` |
| Challenges, teams and sample score table | `src/pages/GamesPage.tsx` |
| Attendee pass/profile and avatar choices | `src/pages/ProfilePage.tsx` |
| Preview-only admin controls | `src/pages/AdminPage.tsx` |
| Demo attendee lookup and field names | `src/data/mockStore.ts` — placeholders only; do not add real people here |
| Install name, theme and app icons | `public/manifest.webmanifest`, `public/icon-192.png`, `public/icon-512.png` |
| Main app flow and bottom navigation | `src/App.tsx` |

## Recommended spreadsheet structure

Keep the Google spreadsheet **private**. The attendee tab contains phone numbers, room/bus assignments and admin roles; do not use “Publish to web” or put a spreadsheet key in browser code.

Suggested workbook tabs and header rows:

- **Attendees:** `Phone`, `Name`, `Bus`, `BusSeat`, `Room`, `Dorm`, `Team`, `IsSuperuser`
- **Schedule:** `Date`, `StartTime`, `EndTime`, `Title`, `Description`, `Location`, `SortOrder`
- **Songs:** `Title`, `Artist`, `Key`, `Lyrics`, `SortOrder`
- **Teams:** `Team`, `Points`
- **Challenges:** `Title`, `Description`, `Team`, `Status`, `Points`, `SortOrder`
- **Announcements:** `Message`, `Active`, `UpdatedAt`

Store `Phone` as text (not a number) so leading zeroes are preserved. Use `TRUE` or `FALSE` for `IsSuperuser`. A spreadsheet can have extra columns; the app should ignore fields it does not use.

## Safe connection plan

When the workbook exists, the app needs a **server-side** connection that reads the private sheet. The browser should call the app's backend; Google credentials must stay on the server and never be included in the downloadable front-end bundle. A separate, limited-access Google identity shared only to this workbook is preferable to making the workbook public. If admin announcements must be saved back to Sheets, that write permission must also be protected server-side.

Phone number alone is not strong authentication. Before using real attendee data, choose an additional verification method (for example, a one-time code or event-issued PIN), and verify the superuser role on the server. The current demo role flag is only a visual prototype, not access control.

When you have the sheet, the next implementation step is to confirm the tab names and exact headers, connect it privately, enable the app server, then replace the sample-data readers and admin storage with backend API calls. Official itinerary, song and game data can be added to their tabs when available.

## Run and edit the source

1. Download and unzip the project archive.
2. Use Node.js 22 and pnpm. In the project folder, run `pnpm install`.
3. Run `pnpm dev` and open the local URL printed in the terminal (port 3000 in this project).
4. Edit the files above and check the result while the dev server is running.
5. Run `pnpm build` to produce the static site in `dist/`.
