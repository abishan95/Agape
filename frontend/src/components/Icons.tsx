import type { ReactNode, SVGProps } from 'react';

export type IconName =
  | 'home' | 'calendar' | 'music' | 'game' | 'user' | 'arrow' | 'chevron' | 'spark'
  | 'bus' | 'bed' | 'team' | 'bell' | 'search' | 'shield' | 'logout' | 'close'
  | 'check' | 'install' | 'play' | 'pin' | 'plus' | 'menu';

const paths: Record<IconName, ReactNode> = {
  home: <><path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9M9 20v-6h6v6"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="m8 15 2 2 5-5"/></>,
  music: <><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></>,
  game: <><path d="M6 12h4m-2-2v4"/><path d="M16 11h.01M18 13h.01"/><path d="M7 7h10a4 4 0 0 1 3.8 5.3l-1.3 4a2.4 2.4 0 0 1-4.1.8l-1.3-1.6h-4.2l-1.3 1.6a2.4 2.4 0 0 1-4.1-.8l-1.3-4A4 4 0 0 1 7 7Z"/></>,
  user: <><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0 1 14 0"/></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
  chevron: <path d="m9 18 6-6-6-6"/>,
  spark: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/></>,
  bus: <><path d="M5 16V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10"/><path d="M5 11h14M7 16h10M7 20h.01M17 20h.01"/><path d="M5 16a2 2 0 0 0-2 2v1h3m13-3a2 2 0 0 1 2 2v1h-3"/></>,
  bed: <><path d="M3 19v-9m0 5h18v4M3 14h18v-3a2 2 0 0 0-2-2h-5v5"/><path d="M7 14v-3a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3"/></>,
  team: <><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4.6"/></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
  search: <><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></>,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
  logout: <><path d="M10 17l5-5-5-5M15 12H3"/><path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7"/></>,
  close: <><path d="m18 6-12 12M6 6l12 12"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  install: <><path d="M12 3v12m-5-5 5 5 5-5"/><path d="M5 17v3h14v-3"/></>,
  play: <path d="m8 5 11 7-11 7V5Z"/>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  plus: <><path d="M12 5v14M5 12h14"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
};

export function Icon({ name, size = 18, ...props }: SVGProps<SVGSVGElement> & { name: IconName; size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {paths[name]}
    </svg>
  );
}
