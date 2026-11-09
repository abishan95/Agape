import { Attendee } from '../data/mockStore';
import { Icon } from '../components/Icons';

const avatarChoices = [
  { id: 'sprout', face: '🌱', label: 'Sprout' },
  { id: 'orbit', face: '🌙', label: 'Orbit' },
  { id: 'bloom', face: '🪷', label: 'Bloom' },
];

interface ProfilePageProps {
  attendee: Attendee;
  avatarId: string;
  onAvatarChange: (id: string) => void;
  onLogout: () => void;
  onOpenAdmin: () => void;
}

export function ProfilePage({ attendee, avatarId, onAvatarChange, onLogout, onOpenAdmin }: ProfilePageProps) {
  const chosenAvatar = avatarChoices.find((avatar) => avatar.id === avatarId) ?? avatarChoices[0];
  return (
    <section className="content-page profile-page">
      <div className="page-heading"><p className="eyebrow">YOUR RETREAT PASS</p><h1>My <em>Stay.</em></h1><p className="page-lede">Everything you need, in one little pocket.</p></div>
      <article className="profile-pass-card"><div className="profile-pass-cap"><span>AGAPE · 2026</span><span className="pass-status"><i className="status-led" /> ACTIVE</span></div><div className="profile-person"><div className="profile-avatar">{chosenAvatar.face}</div><div><small>ATTENDEE</small><h2>{attendee.Name}</h2><span>Dec 27 — 30 · Yelagiri</span></div></div><div className="profile-pass-code"><span>PHONE</span><b>{attendee.Phone}</b><span className="pass-code">AG—26</span></div></article>
      <div className="section-heading compact"><div><p className="eyebrow">YOUR ASSIGNMENTS</p><h2>Made for you.</h2></div><span className="section-index">02 / 02</span></div>
      <div className="profile-detail-list">
        <div className="profile-detail"><span className="detail-icon"><Icon name="bus" size={18} /></span><div><small>BUS & SEAT</small><b>{attendee.Bus} <i>·</i> {attendee.BusSeat}</b></div><Icon className="detail-arrow" name="chevron" size={15} /></div>
        <div className="profile-detail"><span className="detail-icon"><Icon name="bed" size={18} /></span><div><small>DORM ASSIGNMENT</small><b>{attendee.Dorm}</b></div><Icon className="detail-arrow" name="chevron" size={15} /></div>
        <div className="profile-detail"><span className="detail-icon team-detail-icon">{attendee.Team.slice(0, 1)}</span><div><small>TEAM</small><b>{attendee.Team}</b></div><Icon className="detail-arrow" name="chevron" size={15} /></div>
      </div>
      <div className="avatar-picker-card"><div className="avatar-picker-head"><span><small>YOUR LITTLE MARK</small><b>Choose an avatar</b></span><span className="avatar-preview">{chosenAvatar.face}</span></div><div className="avatar-options" role="group" aria-label="Choose an avatar">{avatarChoices.map((avatar) => <button type="button" className={`avatar-option${avatar.id === avatarId ? ' selected' : ''}`} key={avatar.id} onClick={() => onAvatarChange(avatar.id)} aria-pressed={avatar.id === avatarId}><span>{avatar.face}</span><small>{avatar.label}</small></button>)}</div></div>
      {attendee.IsSuperuser && <button className="admin-entry" type="button" onClick={onOpenAdmin}><span className="detail-icon"><Icon name="shield" size={18} /></span><span><small>SUPERUSER TOOLS</small><b>Announcements & roster</b></span><Icon className="detail-arrow" name="arrow" size={16} /></button>}
      <button className="logout-button" type="button" onClick={onLogout}><Icon name="logout" size={16} /> Sign out of this preview</button>
      <p className="content-footnote">Preview profile · sample assignment details only</p>
    </section>
  );
}
