// Google Sheet ID from your CICC Retreat 2026 spreadsheet
export const SPREADSHEET_ID = '1LqBUt72USQz9p5Sj0_l1qDUkYnR3Jo6sziL7MZQ0TJY';

// GIDs for each tab in your retreat sheet
export const TAB_GIDS: Record<string, string> = {
  Attendees: '0',
  Schedule: '1820778788',
  Leaderboard: '1820778788',
  Announcements: '1820778788',
  Songs: '1820778788',
  Config: '1820778788',
};

/**
 * Parses raw CSV text into an array of typed objects based on header row
 */
export function parseCSV<T = Record<string, string>>(csvText: string): T[] {
  const lines = csvText.trim().split(/\r?\n/);
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map((h) => h.trim().replace(/^["']|["']$/g, ''));
  const rows: T[] = [];

  for (let i = 1; i < lines.length; i++) {
    const currentLine = lines[i];
    if (!currentLine.trim()) continue;

    const values: string[] = [];
    let insideQuotes = false;
    let entry = '';

    for (let charIndex = 0; charIndex < currentLine.length; charIndex++) {
      const char = currentLine[charIndex];
      if (char === '"' || char === "'") {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        values.push(entry.trim().replace(/^["']|["']$/g, ''));
        entry = '';
      } else {
        entry += char;
      }
    }
    values.push(entry.trim().replace(/^["']|["']$/g, ''));

    const rowObj: Record<string, string> = {};
    headers.forEach((header, idx) => {
      rowObj[header] = values[idx] ?? '';
    });

    rows.push(rowObj as unknown as T);
  }

  return rows;
}

/**
 * Fetches a sheet tab as public CSV using its GID
 */
export async function fetchSheetTab<T = Record<string, string>>(
  tabName: keyof typeof TAB_GIDS
): Promise<T[]> {
  const gid = TAB_GIDS[tabName];
  if (gid === undefined) {
    console.warn(`Tab "${String(tabName)}" not recognized in TAB_GIDS.`);
    return [];
  }

  const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=${gid}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch tab ${String(tabName)}: ${res.statusText}`);
    }
    const csv = await res.text();
    return parseCSV<T>(csv);
  } catch (err) {
    console.error(`Error loading sheet tab ${String(tabName)}:`, err);
    return [];
  }
}