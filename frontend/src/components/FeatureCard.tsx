import { RetreatVisual } from './RetreatVisuals'
type VisualKind = 'schedule' | 'songs' | 'games' | 'announcement'
export function FeatureCard({ title, subtitle, kind, onClick }: { title: string; subtitle: string; kind: VisualKind; onClick?: () => void }) { return <button className="feature-card" onClick={onClick}><RetreatVisual kind={kind} size="small" /><span><strong>{title}</strong><small>{subtitle}</small></span><em>›</em></button> }
