import React, { useState } from 'react';
import type { Attendee } from '../data/mockStore';

export interface AdminPageProps {
  attendees?: Attendee[];
  announcement?: any;
  onAnnouncementChange?: (announcement: any) => void;
  onBack?: () => void;
  [key: string]: any;
}

export function AdminPage({
  attendees = [],
  announcement,
  onAnnouncementChange,
  onBack,
}: AdminPageProps) {
  const [title, setTitle] = useState(announcement?.title || 'Bus Departure Timings');
  const [body, setBody] = useState(
    announcement?.body || 'Buses depart Dec 27 at 06:00 AM sharp from CMBT Koyambedu.'
  );
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (onAnnouncementChange) {
      onAnnouncementChange({ title, body });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      {/* Admin Header with Back Button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span className="neu-header-tag">ADMINISTRATION</span>
          <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#FFFFFF', margin: 0 }}>Coordinator Hub</h2>
        </div>
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            style={{
              padding: '8px 14px',
              borderRadius: '12px',
              background: '#151922',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#94A3B8',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            ← Back
          </button>
        )}
      </div>

      {/* Broadcast Announcement Form */}
      <div
        style={{
          padding: '18px 16px',
          background: 'linear-gradient(160deg, #151922 0%, #0D1017 100%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.65)',
        }}
      >
        <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#F8FAFC', margin: '0 0 12px 0' }}>
          📢 Broadcast Banner Announcement
        </h3>
        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: 800, color: '#64748B', marginBottom: '6px' }}>
              TITLE
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: '100%',
                background: '#12161F',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '12px',
                padding: '10px 14px',
                color: '#FFFFFF',
                fontSize: '14px',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: 800, color: '#64748B', marginBottom: '6px' }}>
              MESSAGE
            </label>
            <textarea
              rows={3}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              style={{
                width: '100%',
                background: '#12161F',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '12px',
                padding: '10px 14px',
                color: '#FFFFFF',
                fontSize: '14px',
                outline: 'none',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '14px',
              borderRadius: '14px',
              border: 'none',
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '14px',
              cursor: 'pointer',
              marginTop: '4px',
            }}
          >
            {saved ? '✓ Broadcast Updated!' : 'Publish to All Attendees'}
          </button>
        </form>
      </div>

      {/* Roster Overview */}
      <div>
        <h3 className="neu-section-headline">RETREAT ROSTER ({attendees.length})</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {attendees.map((a) => (
            <div
              key={a.Phone}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                background: '#12161F',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF' }}>{a.Name}</div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>
                  {a.Phone} • {a.Bus}
                </div>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#818CF8' }}>{a.Team}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;