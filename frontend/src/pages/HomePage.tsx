import type { Attendee } from '../data/mockStore';

interface Props {
  attendee?: Attendee | null;
  announcement?: any;
  onNavigate?: (tab: any) => void;
}

export function HomePage({ attendee, announcement, onNavigate }: Props) {
  const name = attendee?.Name || attendee?.name || 'Retreat Guest';
  const bus = attendee?.Bus || attendee?.bus || 'Yelagiri · 01';
  const busSeat = attendee?.BusSeat || attendee?.busSeat || '12A';
  const room = attendee?.Room || attendee?.room || 'Pine · 204';
  const team = attendee?.Team || attendee?.team || 'Cedar';

  const navigateTo = (tabName: string) => {
    if (onNavigate) {
      onNavigate(tabName);
    }
  };

  const noticeTitle = announcement?.title || 'Bus Departure Timings';
  const noticeBody =
    announcement?.body ||
    announcement?.message ||
    'Buses depart Dec 27 at 06:00 AM sharp from CMBT Koyambedu.';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
      {/* Welcome Message */}
      <div>
        <span className="neu-header-tag">CICC RETREAT · YELAGIRI</span>
        <h1 className="neu-title" style={{ fontSize: '26px', marginTop: '2px' }}>
          Hello, {name.split(' ')[0]}.
        </h1>
        <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#94A3B8' }}>
          Your retreat pass & timeline, all in one place.
        </p>
      </div>

      {/* Notice Banner */}
      <div
        className="neu-notice-banner"
        onClick={() => navigateTo('plan')}
        style={{ cursor: 'pointer' }}
      >
        <div className="neu-notice-icon">📢</div>
        <div className="neu-notice-content">
          <small
            style={{
              color: '#818CF8',
              fontWeight: 800,
              textTransform: 'uppercase',
              fontSize: '9px',
            }}
          >
            ANNOUNCEMENT • DEC 27
          </small>
          <h4 style={{ margin: '2px 0 0 0', fontSize: '13px', color: '#F8FAFC' }}>
            {noticeTitle}
          </h4>
          <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#94A3B8' }}>
            {noticeBody}
          </p>
        </div>
        <span className="neu-chevron">›</span>
      </div>

      {/* Hero Pass Card */}
      <div className="neu-pass-card">
        <div className="neu-pass-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img
              src="/agape-logo.png"
              alt="AGAPE"
              style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'contain' }}
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <span
              style={{
                fontSize: '10px',
                fontWeight: 900,
                letterSpacing: '1px',
                color: '#CBD5E1',
              }}
            >
              AGAPE RETREAT PASS
            </span>
          </div>
          <span className="neu-date-label">DEC 27 — 30 • 2026</span>
        </div>

        <div className="neu-pass-split-row">
          <div className="neu-pass-left-col">
            <span
              style={{
                fontSize: '10px',
                fontWeight: 700,
                color: '#64748B',
                letterSpacing: '0.8px',
              }}
            >
              CICC • YELAGIRI
            </span>
            <h2 className="neu-pass-title" style={{ fontSize: '22px', margin: '4px 0' }}>
              Gather in grace.
            </h2>
            <p className="neu-pass-sub" style={{ margin: 0, color: '#94A3B8' }}>
              Annual Youth & Family Camp
            </p>
          </div>

          <div
            onClick={() => navigateTo('stay')}
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '18px',
              background: 'linear-gradient(145deg, #1A212E 0%, #0F131C 100%)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 8px 18px rgba(0, 0, 0, 0.75)',
              cursor: 'pointer',
            }}
          >
            <img
              src="/agape-logo.png"
              alt="AGAPE Emblem"
              style={{ width: '48px', height: '48px', objectFit: 'contain' }}
              onError={(e) => {
                (e.currentTarget as HTMLElement).parentElement!.innerHTML =
                  '<span style="font-size:26px">⛪</span>';
              }}
            />
          </div>
        </div>

        {/* Allocation Bar */}
        <div className="neu-alloc-shelf">
          <div
            className="neu-alloc-item"
            onClick={() => navigateTo('stay')}
            style={{ cursor: 'pointer' }}
          >
            <small>BUS</small>
            <span>{bus}</span>
            <div style={{ fontSize: '9px', color: '#64748B', marginTop: '2px' }}>
              Seat {busSeat}
            </div>
          </div>
          <div
            className="neu-alloc-item"
            onClick={() => navigateTo('stay')}
            style={{ cursor: 'pointer' }}
          >
            <small>ROOM</small>
            <span>{room}</span>
            <div style={{ fontSize: '9px', color: '#64748B', marginTop: '2px' }}>Your dorm</div>
          </div>
          <div
            className="neu-alloc-item"
            onClick={() => navigateTo('games')}
            style={{ cursor: 'pointer' }}
          >
            <small>TEAM</small>
            <span style={{ color: '#E2E8F0' }}>{team}</span>
            <div style={{ fontSize: '9px', color: '#64748B', marginTop: '2px' }}>View scores</div>
          </div>
        </div>
      </div>

      {/* 2x2 Feature Tiles */}
      <div>
        <h3 className="neu-section-headline">YOUR RETREAT, AT A GLANCE</h3>
        <div className="neu-grid-2x2">
          <div className="neu-tile-card" onClick={() => navigateTo('plan')}>
            <div className="neu-tile-icon-box">📅</div>
            <div>
              <h4 className="neu-tile-title">01 • Schedule</h4>
              <p className="neu-tile-sub">4-day timeline</p>
            </div>
          </div>

          <div className="neu-tile-card" onClick={() => navigateTo('songs')}>
            <div className="neu-tile-icon-box">🎵</div>
            <div>
              <h4 className="neu-tile-title">02 • Song Book</h4>
              <p className="neu-tile-sub">Hymnal lyrics</p>
            </div>
          </div>

          <div className="neu-tile-card" onClick={() => navigateTo('games')}>
            <div className="neu-tile-icon-box">🏆</div>
            <div>
              <h4 className="neu-tile-title">03 • Team Play</h4>
              <p className="neu-tile-sub">Leaderboard & scores</p>
            </div>
          </div>

          <div className="neu-tile-card" onClick={() => navigateTo('stay')}>
            <div className="neu-tile-icon-box">📍</div>
            <div>
              <h4 className="neu-tile-title">04 • My Stay</h4>
              <p className="neu-tile-sub">Pass & room details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;