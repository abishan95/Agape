import { useState } from 'react';

// User Directory
const MOCK_USERS: Record<string, any> = {
  '9578811268': {
    id: 'usr-1',
    full_name: 'Abishan',
    role: 'admin',
    gender: 'male',
    category: 'teen_campus',
    dorm_number: 'Room 101',
    bus_number: 'Bus 1',
    boarding_onboarding: 'Koyambedu Metro - 06:00 AM',
    boarding_return: 'Yelagiri Main Hub - 04:00 PM',
    phone: '9578811268',
    team: 'Agape Warriors',
    team_leader: null, // Revealed on Day 1
    prayer_partner: 'Dharshan',
    companions: { breakfast: 'Prathap', lunch: 'Franklin', dinner: 'Dharshan' }
  },
  '7358730061': {
    id: 'usr-2',
    full_name: 'Kavin Priya',
    role: 'attendee',
    gender: 'female',
    category: 'teen_campus',
    dorm_number: 'Dorm B2',
    bus_number: 'Bus 2',
    boarding_onboarding: 'Tambaram Sanatorium - 06:30 AM',
    boarding_return: 'Yelagiri Main Hub - 04:00 PM',
    phone: '7358730061',
    team: 'Grace Ambassadors',
    team_leader: 'Maggie',
    prayer_partner: 'Maggie',
    companions: { breakfast: 'Maggie', lunch: 'Kavin Priya', dinner: 'Maggie' }
  },
};

export default function App() {
  const [step, setStep] = useState<'welcome' | 'login'>('welcome');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'songs' | 'match' | 'game'>('home');
  const [boardingType, setBoardingType] = useState<'onboarding' | 'return'>('onboarding');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Time-based greeting generator
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  function showToast(msg: string) {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2000);
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phoneNumber.replace(/\s+/g, '').replace(/-/g, '').trim();
    if (MOCK_USERS[cleanPhone]) {
      setUser(MOCK_USERS[cleanPhone]);
      setActiveTab('home');
    } else {
      showToast('Phone number not found!');
    }
  };

  // -------------------------------------------------------------
  // 1. WELCOME SCREEN
  // -------------------------------------------------------------
  if (!user && step === 'welcome') {
    return (
      <div style={styles.screenWrapper}>
        <div style={styles.bgOverlay} />
        <div style={styles.welcomeContainer}>
          <div>
            <span style={styles.welcomeSubTag}>WELCOME TO</span>
            <h1 style={styles.brandTitle}>AGAPE RETREAT 2026</h1>
          </div>

          <div style={styles.welcomeHeroCard} className="mist-card">
            <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '6px' }}>AGAPE 26</h3>
            <p style={{ fontSize: '13px', color: '#B3CFBE', lineHeight: '1.5' }}>
              Traveling — it leaves you speechless, then turns you into a storyteller.
            </p>
          </div>

          <button onClick={() => setStep('login')} className="mist-btn-modern primary-start">
            Get Started <span>→</span>
          </button>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 2. LOGIN SCREEN
  // -------------------------------------------------------------
  if (!user && step === 'login') {
    return (
      <div style={styles.screenWrapper}>
        <div style={styles.bgOverlay} />
        <div style={styles.loginContainer} className="mist-card">
          <button onClick={() => setStep('welcome')} style={styles.backBtn}>← Back</button>
          <h2 style={{ fontSize: '22px', fontWeight: '800', marginTop: '10px' }}>Welcome Back!</h2>
          <p style={{ fontSize: '12px', color: '#B3CFBE', marginBottom: '20px' }}>Enter registered phone number</p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <input
              type="tel"
              placeholder="e.g. 9578811268"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mist-input-modern"
            />
            <button type="submit" className="mist-btn-modern primary-start">Access Dashboard</button>
          </form>
        </div>
        {toastMessage && <div style={styles.toast}>{toastMessage}</div>}
      </div>
    );
  }

  // -------------------------------------------------------------
  // 3. MAIN HOMEPAGE DASHBOARD
  // -------------------------------------------------------------
  return (
    <div style={styles.appShell}>
      <div style={styles.bgOverlay} />

      {/* TOP BAR */}
      <header style={styles.topHeader}>
        {/* Left Side */}
        <div>
          <span style={{ fontSize: '11px', color: '#76D735', fontWeight: '700' }}>{getGreeting()}</span>
          <h2 style={{ fontSize: '18px', fontWeight: '800', margin: 0 }}>Welcome {user.full_name}</h2>
          <p style={{ fontSize: '11px', color: '#B3CFBE', margin: 0 }}>Agape 2026</p>
        </div>

        {/* Right Side */}
        <button onClick={() => setUser(null)} style={styles.logoutBtn}>
          Logout 🚪
        </button>
      </header>

      {/* MAIN CONTENT AREA */}
      <main style={styles.mainContainer}>

        {/* ==================== HOME TAB ==================== */}
        {activeTab === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            
            {/* BIG SQUARE ELEMENT (PASS & RETREAT INFO) */}
            <div className="mist-card" style={{ padding: '22px' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#76D735' }}>
                  Hey {user.full_name}, have an amazing retreat! ✨
                </h3>
              </div>

              {/* Pass Data Table */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                
                {/* Bus & Boarding Switcher */}
                <div style={{ background: 'rgba(15, 30, 22, 0.7)', padding: '12px', borderRadius: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ color: '#B3CFBE', fontSize: '11px', fontWeight: '700' }}>BUS NUMBER:</span>
                    <strong style={{ color: '#76D735', fontSize: '14px' }}>{user.bus_number}</strong>
                  </div>
                  
                  {/* Boarding Point Mode Toggle */}
                  <div style={{ display: 'flex', gap: '6px', margin: '6px 0' }}>
                    <button 
                      onClick={() => setBoardingType('onboarding')}
                      style={boardingType === 'onboarding' ? styles.subPillActive : styles.subPill}
                    >
                      Onboarding
                    </button>
                    <button 
                      onClick={() => setBoardingType('return')}
                      style={boardingType === 'return' ? styles.subPillActive : styles.subPill}
                    >
                      Return
                    </button>
                  </div>
                  <p style={{ fontSize: '12px', color: '#FFF', margin: '4px 0 0 0' }}>
                    📍 <strong>Point:</strong> {boardingType === 'onboarding' ? user.boarding_onboarding : user.boarding_return}
                  </p>
                </div>

                {/* Room / Dorm Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'rgba(15, 30, 22, 0.7)', borderRadius: '16px' }}>
                  <span style={{ color: '#B3CFBE', fontSize: '11px', fontWeight: '700' }}>ACCOMMODATION:</span>
                  <strong>{user.dorm_number}</strong>
                </div>

                {/* Team & Customizable Leader Reveal */}
                <div style={{ padding: '12px', background: 'rgba(15, 30, 22, 0.7)', borderRadius: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: '#B3CFBE', fontSize: '11px', fontWeight: '700' }}>GAME TEAM:</span>
                    <strong style={{ color: '#76D735' }}>{user.team}</strong>
                  </div>
                  <p style={{ fontSize: '11px', color: '#B3CFBE', margin: 0 }}>
                    👑 <strong>Team Leader:</strong> {user.team_leader ? user.team_leader : 'Your team leader will be revealed on the 1st day of Retreat'}
                  </p>
                </div>

              </div>
            </div>

            {/* CENTER: ANNOUNCEMENTS SQUARE */}
            <div>
              <h4 style={styles.sectionHeading}>Announcements</h4>
              <div className="mist-card" style={{ padding: '18px', borderLeft: '4px solid #76D735' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: '10px', fontWeight: '800', color: '#76D735' }}>ADMIN BROADCAST</span>
                  <span style={{ fontSize: '9px', background: 'rgba(118,215,53,0.2)', padding: '2px 6px', borderRadius: '8px', color: '#76D735' }}>LIVE</span>
                </div>
                <h5 style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 4px 0' }}>Welcome Night Gathering</h5>
                <p style={{ fontSize: '12px', color: '#B3CFBE', margin: 0 }}>
                  Assemble at the main auditorium by 6:30 PM. Team t-shirts will be distributed after praise session!
                </p>
              </div>
            </div>

            {/* BOTTOM: DAY TO DAY SCHEDULE & MY COMPANION */}
            <div>
              <h4 style={styles.sectionHeading}>Day to Day Schedule</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
                <div className="mist-card" style={{ padding: '12px 16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={styles.timeBadge}>08:30 AM</span>
                  <div>
                    <strong style={{ fontSize: '13px' }}>Morning Devotions</strong>
                    <p style={{ fontSize: '11px', color: '#B3CFBE', margin: 0 }}>Chapel Lawn</p>
                  </div>
                </div>
                <div className="mist-card" style={{ padding: '12px 16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={styles.timeBadge}>07:00 PM</span>
                  <div>
                    <strong style={{ fontSize: '13px' }}>Campfire & Worship</strong>
                    <p style={{ fontSize: '11px', color: '#B3CFBE', margin: 0 }}>Main Outdoor Grounds</p>
                  </div>
                </div>
              </div>

              {/* MY COMPANION (MEAL PARTNER FIXER) */}
              <h4 style={styles.sectionHeading}>My Companion</h4>
              <div className="mist-card" style={{ padding: '18px' }}>
                <p style={{ fontSize: '12px', color: '#B3CFBE', marginBottom: '12px' }}>
                  Fix your breakfast, lunch, and dinner companions for today!
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                  <div style={styles.companionBox}>
                    <span style={{ fontSize: '16px' }}>🍳</span>
                    <span style={styles.companionLabel}>Breakfast</span>
                    <strong style={{ fontSize: '11px' }}>{user.companions.breakfast}</strong>
                  </div>

                  <div style={styles.companionBox}>
                    <span style={{ fontSize: '16px' }}>🥗</span>
                    <span style={styles.companionLabel}>Lunch</span>
                    <strong style={{ fontSize: '11px' }}>{user.companions.lunch}</strong>
                  </div>

                  <div style={styles.companionBox}>
                    <span style={{ fontSize: '16px' }}>🍲</span>
                    <span style={styles.companionLabel}>Dinner</span>
                    <strong style={{ fontSize: '11px' }}>{user.companions.dinner}</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ==================== SONGS TAB ==================== */}
        {activeTab === 'songs' && (
          <div className="mist-card" style={{ padding: '22px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '6px' }}>🎵 Worship Songs</h3>
            <p style={{ fontSize: '12px', color: '#B3CFBE', marginBottom: '16px' }}>Agape Retreat 2026 Lyrics</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={styles.listItem}>1. En Yesuvae En Thunai</div>
              <div style={styles.listItem}>2. Um Kirupai Pothum</div>
              <div style={styles.listItem}>3. Great Are You Lord</div>
            </div>
          </div>
        )}

        {/* ==================== MATCH TAB (PRAYER PARTNER) ==================== */}
        {activeTab === 'match' && (
          <div className="mist-card" style={{ padding: '22px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '4px' }}>🤝 Match & Prayer Partner</h3>
            <p style={{ fontSize: '11px', color: '#76D735', fontWeight: '700', marginBottom: '14px' }}>
              Filtered: {user.gender === 'male' ? 'Male to Male' : 'Women to Women'} ({user.category === 'teen_campus' ? 'Teens & Campus' : 'General'})
            </p>

            <div style={{ padding: '16px', background: 'rgba(15, 30, 22, 0.8)', borderRadius: '16px', border: '1px solid rgba(118, 215, 53, 0.3)' }}>
              <span style={{ fontSize: '10px', color: '#B3CFBE', fontWeight: '700' }}>YOUR MATCHED PRAYER PARTNER</span>
              <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#76D735', margin: '4px 0 8px 0' }}>{user.prayer_partner}</h4>
              <p style={{ fontSize: '12px', color: '#E2E8F0', lineHeight: '1.4' }}>
                Connect for daily morning reflection and prayer sessions.
              </p>
            </div>
          </div>
        )}

        {/* ==================== GAME TAB ==================== */}
        {activeTab === 'game' && (
          <div className="mist-card" style={{ padding: '22px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '4px' }}>🎮 Retreat Games & Leaderboard</h3>
            <p style={{ fontSize: '12px', color: '#B3CFBE', marginBottom: '16px' }}>Team standings & upcoming matches</p>

            <div style={{ padding: '14px', background: 'rgba(15, 30, 22, 0.8)', borderRadius: '16px', marginBottom: '14px' }}>
              <span style={{ fontSize: '10px', color: '#76D735', fontWeight: '700' }}>MY TEAM</span>
              <h4 style={{ fontSize: '18px', fontWeight: '800' }}>{user.team}</h4>
              <p style={{ fontSize: '12px', color: '#B3CFBE', margin: 0 }}>Current Rank: <strong>#1 Place (250 pts)</strong></p>
            </div>

            <h5 style={{ fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>Upcoming Games</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={styles.listItem}>⚽ Obstacle Relay - 03:30 PM</div>
              <div style={styles.listItem}>🏆 Bible Quiz Challenge - 08:00 PM</div>
            </div>
          </div>
        )}

      </main>

      {/* 4-OPTION FLOATING NAVIGATION BAR */}
      <nav style={styles.floatingNav} className="mist-card">
        <button onClick={() => setActiveTab('home')} style={activeTab === 'home' ? styles.navActive : styles.navItem}>
          <span style={{ fontSize: '18px' }}>🏠</span>
          <span style={{ fontSize: '10px', marginTop: '2px' }}>Home</span>
        </button>

        <button onClick={() => setActiveTab('songs')} style={activeTab === 'songs' ? styles.navActive : styles.navItem}>
          <span style={{ fontSize: '18px' }}>🎵</span>
          <span style={{ fontSize: '10px', marginTop: '2px' }}>Songs</span>
        </button>

        <button onClick={() => setActiveTab('match')} style={activeTab === 'match' ? styles.navActive : styles.navItem}>
          <span style={{ fontSize: '18px' }}>🤝</span>
          <span style={{ fontSize: '10px', marginTop: '2px' }}>Match</span>
        </button>

        <button onClick={() => setActiveTab('game')} style={activeTab === 'game' ? styles.navActive : styles.navItem}>
          <span style={{ fontSize: '18px' }}>🎮</span>
          <span style={{ fontSize: '10px', marginTop: '2px' }}>Game</span>
        </button>
      </nav>

      {toastMessage && <div style={styles.toast}>{toastMessage}</div>}
    </div>
  );
}

// Custom CSS Injection
const customCss = `
* { box-sizing: border-box; }
.mist-btn-modern {
  width: 100%; padding: 14px 20px; border-radius: 16px; border: none; font-size: 14px; font-weight: 700; cursor: pointer;
}
.primary-start { background: linear-gradient(135deg, #76D735 0%, #5BB722 100%); color: #0F2116; }
.mist-input-modern {
  width: 100%; padding: 14px 18px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(18, 38, 27, 0.85); color: #FFF; font-size: 14px; outline: none;
}
.mist-card {
  background: rgba(27, 52, 38, 0.85); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 26px;
}
`;

if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = customCss;
  document.head.appendChild(styleEl);
}

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  screenWrapper: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: '#12231A' },
  bgOverlay: { position: 'fixed', inset: 0, backgroundImage: 'url("/mountain-bg.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#12231A', zIndex: 1 },
  welcomeContainer: { position: 'relative', zIndex: 2, width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', minHeight: '80vh', textAlign: 'center' },
  welcomeSubTag: { fontSize: '11px', color: '#B3CFBE', letterSpacing: '2px', fontWeight: '700' },
  brandTitle: { fontSize: '24px', fontWeight: '800', color: '#FFF', marginTop: '4px' },
  welcomeHeroCard: { width: '100%', padding: '30px 20px', textAlign: 'center' },
  loginContainer: { position: 'relative', zIndex: 2, width: '100%', maxWidth: '360px', padding: '28px 24px' },
  backBtn: { background: 'none', border: 'none', color: '#B3CFBE', fontSize: '13px', cursor: 'pointer' },
  appShell: { minHeight: '100vh', position: 'relative', color: '#FFF', paddingBottom: '120px' },
  topHeader: { position: 'sticky', top: 0, zIndex: 90, backgroundColor: 'rgba(18, 35, 26, 0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logoutBtn: { background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.4)', color: '#EF4444', padding: '6px 14px', borderRadius: '16px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' },
  mainContainer: { padding: '20px 16px', maxWidth: '440px', margin: '0 auto', position: 'relative', zIndex: 2 },
  sectionHeading: { fontSize: '14px', fontWeight: '700', color: '#E2E8F0', marginBottom: '10px' },
  subPill: { flex: 1, padding: '4px 8px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.08)', color: '#B3CFBE', fontSize: '10px', cursor: 'pointer' },
  subPillActive: { flex: 1, padding: '4px 8px', borderRadius: '8px', border: 'none', background: '#76D735', color: '#0F2116', fontSize: '10px', fontWeight: '800', cursor: 'pointer' },
  timeBadge: { fontSize: '10px', fontWeight: '800', color: '#76D735', backgroundColor: 'rgba(118, 215, 53, 0.15)', padding: '6px 10px', borderRadius: '10px' },
  companionBox: { background: 'rgba(15, 30, 22, 0.8)', padding: '12px 8px', borderRadius: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' },
  companionLabel: { fontSize: '9px', color: '#B3CFBE', margin: '4px 0 2px 0' },
  listItem: { padding: '12px 16px', background: 'rgba(15, 30, 22, 0.8)', borderRadius: '14px', fontSize: '13px', fontWeight: '600' },
  floatingNav: { position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 32px)', maxWidth: '400px', padding: '10px 16px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', zIndex: 1000, borderRadius: '35px' },
  navItem: { background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#B3CFBE', cursor: 'pointer', flex: 1 },
  navActive: { background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#76D735', fontWeight: '700', cursor: 'pointer', flex: 1 },
  toast: { position: 'fixed', bottom: '40px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#76D735', color: '#0F2116', padding: '10px 20px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', zIndex: 3000 },
};
