export type NavItem = 'Home' | 'Schedule' | 'Songs' | 'Games' | 'Chat' | 'Profile' | 'Admin' | 'Announcements';

export interface BottomNavProps {
  active: NavItem;
  onChange: (item: NavItem) => void;
  isSuperuser?: boolean;
  onQuickAction?: () => void;
}

export function BottomNav({ active, onChange, isSuperuser = false, onQuickAction }: BottomNavProps) {
  return (
    <div className="neu-bottom-dock-wrap">
      <nav className="neu-bottom-dock" aria-label="Main Navigation">
        {/* Signature Purple Plus Quick-Action Button from Reference Design */}
        <button
          type="button"
          className="dock-plus-btn"
          onClick={onQuickAction}
          title="Quick Action / Change Avatar"
        >
          +
        </button>

        {/* Home */}
        <button
          className={`neu-tab-btn ${active === 'Home' ? 'active' : ''}`}
          onClick={() => onChange('Home')}
          title="Home Pass"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          {active === 'Home' && <span className="tab-active-dot" />}
        </button>

        {/* Schedule */}
        <button
          className={`neu-tab-btn ${active === 'Schedule' ? 'active' : ''}`}
          onClick={() => onChange('Schedule')}
          title="Schedule"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {active === 'Schedule' && <span className="tab-active-dot" />}
        </button>

        {/* Songs */}
        <button
          className={`neu-tab-btn ${active === 'Songs' ? 'active' : ''}`}
          onClick={() => onChange('Songs')}
          title="Songs"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
          {active === 'Songs' && <span className="tab-active-dot" />}
        </button>

        {/* Games */}
        <button
          className={`neu-tab-btn ${active === 'Games' ? 'active' : ''}`}
          onClick={() => onChange('Games')}
          title="Games"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9v12m6-16v16m6-8v8" />
          </svg>
          {active === 'Games' && <span className="tab-active-dot" />}
        </button>

        {/* Chat */}
        <button
          className={`neu-tab-btn ${active === 'Chat' ? 'active' : ''}`}
          onClick={() => onChange('Chat')}
          title="Camp Chat"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {active === 'Chat' && <span className="tab-active-dot" />}
        </button>

        {/* Superuser Admin Tab */}
        {isSuperuser && (
          <button
            className={`neu-tab-btn ${active === 'Admin' ? 'active' : ''}`}
            onClick={() => onChange('Admin')}
            title="Admin Console"
            style={{ color: active === 'Admin' ? '#FFFFFF' : '#F59E0B' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            {active === 'Admin' && <span className="tab-active-dot" />}
          </button>
        )}

        {/* Profile */}
        <button
          className={`neu-tab-btn ${active === 'Profile' ? 'active' : ''}`}
          onClick={() => onChange('Profile')}
          title="My Stay"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="7" r="4" />
            <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
          </svg>
          {active === 'Profile' && <span className="tab-active-dot" />}
        </button>
      </nav>
    </div>
  );
}

export default BottomNav;