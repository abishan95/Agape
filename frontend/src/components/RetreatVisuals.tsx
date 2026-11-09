type VisualKind = 'profile' | 'retreat' | 'travel' | 'room' | 'team' | 'schedule' | 'songs' | 'games' | 'announcement'
const visualArt: Record<VisualKind, { icon: string; accent: string; decoration: string }> = {
  profile: { icon: '😊', accent: '#ffcc70', decoration: '✦' }, retreat: { icon: '⛺', accent: '#cfc2ff', decoration: '☀' }, travel: { icon: '🚌', accent: '#ffc978', decoration: '✦' }, room: { icon: '🛏️', accent: '#bfe6c9', decoration: '☾' }, team: { icon: '🏆', accent: '#e1c2f5', decoration: '★' }, schedule: { icon: '🗓️', accent: '#c7d8ff', decoration: '•' }, songs: { icon: '🎵', accent: '#ffd4b3', decoration: '♫' }, games: { icon: '🎯', accent: '#d0efbd', decoration: '✦' }, announcement: { icon: '📣', accent: '#ffd6a6', decoration: '!' },
}
export function RetreatVisual({ kind, size = 'regular' }: { kind: VisualKind; size?: 'small' | 'regular' | 'hero' }) {
  const art = visualArt[kind]
  return <span className={`retreat-visual retreat-visual--${size}`} style={{ backgroundColor: art.accent }} aria-hidden="true"><i>{art.decoration}</i><b>{art.icon}</b></span>
}
export function LogoMark() { return <span className="logo-mark" aria-label="Retreat 2026 temporary logo">R<span>26</span></span> }
