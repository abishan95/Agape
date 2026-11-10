import React, { useState } from 'react';

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

          <div style={styles.welcomeHeroCard} className="neuro-card-highlight">
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#49416F', letterSpacing: '1px' }}>RETREAT 2026</span>
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#393256', margin: '6px 0' }}>AGAPE '26</h3>
            <p style={{ fontSize: '13px', color: '#514875', lineHeight: '1.5', margin: 0, fontWeight: '500' }}>
              "Traveling — it leaves you speechless, then turns you into a storyteller."
            </p>
          </div>

          <button onClick={() => setStep('login')} className="neuro-btn-gold">
            Get Started <span style={{ marginLeft: '6px' }}>→</span>
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
        <div style={styles.loginContainer} className="neuro-card">
          <button onClick={() => setStep('welcome')} style={styles.backBtn}>← Back</button>
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#F8F5F2', marginTop: '12px' }}>Welcome Back!</h2>
          <p style={{ fontSize: '12px', color: '#C9C2D5', marginBottom: '22px' }}>Enter registered phone number</p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input
              type="tel"
              placeholder="e.g. 9578811268"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="neuro-input"
            />
            <button type="submit" className="neuro-btn-gold">Access Dashboard</button>
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

      {/* TOP HEADER BAR */}
      <header style={styles.topHeader}>
        <div>
          <span style={{ fontSize: '11px', color: '#F5C58D', fontWeight: '800', letterSpacing: '0.5px' }}>{getGreeting()}</span>
          <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#F8F5F2', margin: 0 }}>Welcome {user.full_name}</h2>
          <p style={{ fontSize: '11px', color: '#C9C2D5', margin: 0 }}>Agape 2026</p>
        </div>

        <button onClick={() => setUser(null)} style={styles.logoutBtn}>
          Logout 🚪
        </button>
      </header>

      {/* MAIN CONTENT AREA */}
      <main style={styles.mainContainer}>

        {/* ==================== HOME TAB ==================== */}
        {activeTab === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* PASS CARD */}
            <div className="neuro-card-highlight">
              <div style={{ borderBottom: '1px solid rgba(73, 65, 111, 0.15)', paddingBottom: '12px', marginBottom: '14px' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', color: '#393256', textTransform: 'uppercase' }}>PASSENGER PASS</span>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#393256', margin: '2px 0 0 0' }}>
                  Hey {user.full_name}, have an amazing retreat! ✨
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                
                {/* Bus & Boarding Switcher */}
                <div style={styles.innerDarkCard}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ color: '#C9C2D5', fontSize: '10px', fontWeight: '800', letterSpacing: '0.5px' }}>BUS NUMBER</span>
                    <strong style={{ color: '#F5C58D', fontSize: '15px' }}>{user.bus_number}</strong>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '6px', margin: '8px 0' }}>
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
                  <p style={{ fontSize: '12px', color: '#F8F5F2', margin: '6px 0 0 0' }}>
                    📍 <strong>Point:</strong> {boardingType === 'onboarding' ? user.boarding_onboarding : user.boarding_return}
                  </p>
                </div>

                {/* Accommodation Details */}
                <div style={{ ...styles.innerDarkCard, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#C9C2D5', fontSize: '10px', fontWeight: '800', letterSpacing: '0.5px' }}>ACCOMMODATION</span>
                  <strong style={{ color: '#F8F5F2', fontSize: '13px' }}>{user.dorm_number}</strong>
                </div>

                {/* Game Team */}
                <div style={styles.innerDarkCard}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: '#C9C2D5', fontSize: '10px', fontWeight: '800', letterSpacing: '0.5px' }}>GAME TEAM</span>
                    <strong style={{ color: '#F5C58D', fontSize: '13px' }}>{user.team}</strong>
                  </div>
                  <p style={{ fontSize: '11px', color: '#C9C2D5', margin: 0 }}>
                    👑 <strong>Team Leader:</strong> {user.team_leader ? user.team_leader : 'Your team leader will be revealed on the 1st day of Retreat'}
                  </p>
                </div>

              </div>
            </div>

            {/* ANNOUNCEMENTS */}
            <div>
              <h4 style={styles.sectionHeading}>Announcements</h4>
              <div className="neuro-card" style={{ borderLeft: '4px solid #F5C58D' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '10px', fontWeight: '800', color: '#F5C58D', letterSpacing: '1px' }}>ADMIN BROADCAST</span>
                  <span style={styles.liveBadge}>LIVE</span>
                </div>
                <h5 style={{ fontSize: '14px', fontWeight: '700', color: '#F8F5F2', margin: '0 0 4px 0' }}>Welcome Night Gathering</h5>
                <p style={{ fontSize: '12px', color: '#C9C2D5', margin: 0, lineHeight: '1.4' }}>
                  Assemble at the main auditorium by 6:30 PM. Team t-shirts will be distributed after praise session!
                </p>
              </div>
            </div>

            {/* SCHEDULE & COMPANION */}
            <div>
              <h4 style={styles.sectionHeading}>Day to Day Schedule</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
                <div className="neuro-card" style={{ padding: '14px 18px', display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <span style={styles.timeBadge}>08:30 AM</span>
                  <div>
                    <strong style={{ fontSize: '13px', color: '#F8F5F2' }}>Morning Devotions</strong>
                    <p style={{ fontSize: '11px', color: '#C9C2D5', margin: 0 }}>Chapel Lawn</p>
                  </div>
                </div>
                <div className="neuro-card" style={{ padding: '14px 18px', display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <span style={styles.timeBadge}>07:00 PM</span>
                  <div>
                    <strong style={{ fontSize: '13px', color: '#F8F5F2' }}>Campfire & Worship</strong>
                    <p style={{ fontSize: '11px', color: '#C9C2D5', margin: 0 }}>Main Outdoor Grounds</p>
                  </div>
                </div>
              </div>

              <h4 style={styles.sectionHeading}>My Companion</h4>
              <div className="neuro-card">
                <p style={{ fontSize: '12px', color: '#C9C2D5', marginBottom: '14px' }}>
                  Fix your breakfast, lunch, and dinner companions for today!
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                  <div style={styles.companionBox}>
                    <span style={{ fontSize: '18px' }}>🍳</span>
                    <span style={styles.companionLabel}>Breakfast</span>
                    <strong style={{ fontSize: '11px', color: '#F8F5F2' }}>{user.companions.breakfast}</strong>
                  </div>

                  <div style={styles.companionBox}>
                    <span style={{ fontSize: '18px' }}>🥗</span>
                    <span style={styles.companionLabel}>Lunch</span>
                    <strong style={{ fontSize: '11px', color: '#F8F5F2' }}>{user.companions.lunch}</strong>
                  </div>

                  <div style={styles.companionBox}>
                    <span style={{ fontSize: '18px' }}>🍲</span>
                    <span style={styles.companionLabel}>Dinner</span>
                    <strong style={{ fontSize: '11px', color: '#F8F5F2' }}>{user.companions.dinner}</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ==================== SONGS TAB ==================== */}
        {activeTab === 'songs' && (
          <div className="neuro-card">
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#F8F5F2', marginBottom: '4px' }}>🎵 Worship Songs</h3>
            <p style={{ fontSize: '12px', color: '#C9C2D5', marginBottom: '18px' }}>Agape Retreat 2026 Lyrics</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={styles.listItem}>1. En Yesuvae En Thunai</div>
              <div style={styles.listItem}>2. Um Kirupai Pothum</div>
              <div style={styles.listItem}>3. Great Are You Lord</div>
            </div>
          </div>
        )}

        {/* ==================== MATCH TAB ==================== */}
        {activeTab === 'match' && (
          <div className="neuro-card">
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#F8F5F2', marginBottom: '4px' }}>🤝 Match & Prayer Partner</h3>
            <p style={{ fontSize: '11px', color: '#F5C58D', fontWeight: '700', marginBottom: '16px' }}>
              Filtered: {user.gender === 'male' ? 'Male to Male' : 'Women to Women'} ({user.category === 'teen_campus' ? 'Teens & Campus' : 'General'})
            </p>

            <div style={styles.innerDarkCard}>
              <span style={{ fontSize: '10px', color: '#C9C2D5', fontWeight: '800', letterSpacing: '0.5px' }}>YOUR MATCHED PRAYER PARTNER</span>
              <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#F5C58D', margin: '4px 0 8px 0' }}>{user.prayer_partner}</h4>
              <p style={{ fontSize: '12px', color: '#F8F5F2', lineHeight: '1.4', margin: 0 }}>
                Connect for daily morning reflection and prayer sessions.
              </p>
            </div>
          </div>
        )}

        {/* ==================== GAME TAB ==================== */}
        {activeTab === 'game' && (
          <div className="neuro-card">
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#F8F5F2', marginBottom: '4px' }}>🎮 Retreat Games & Leaderboard</h3>
            <p style={{ fontSize: '12px', color: '#C9C2D5', marginBottom: '18px' }}>Team standings & upcoming matches</p>

            <div style={{ ...styles.innerDarkCard, marginBottom: '16px' }}>
              <span style={{ fontSize: '10px', color: '#F5C58D', fontWeight: '800', letterSpacing: '0.5px' }}>MY TEAM</span>
              <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#F8F5F2', margin: '2px 0 4px 0' }}>{user.team}</h4>
              <p style={{ fontSize: '12px', color: '#C9C2D5', margin: 0 }}>Current Rank: <strong style={{ color: '#F5C58D' }}>#1 Place (250 pts)</strong></p>
            </div>

            <h5 style={{ fontSize: '13px', fontWeight: '700', color: '#F8F5F2', marginBottom: '10px' }}>Upcoming Games</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={styles.listItem}>⚽ Obstacle Relay - 03:30 PM</div>
              <div style={styles.listItem}>🏆 Bible Quiz Challenge - 08:00 PM</div>
            </div>
          </div>
        )}

      </main>

      {/* FLOATING BOTTOM NAVIGATION */}
      <nav style={styles.floatingNav} className="neuro-nav">
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

// Neumorphic CSS Injector
const customCss = `
* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #49416F;
  color: #F8F5F2;
}

.neuro-card {
  background: #514875;
  border-radius: 28px;
  padding: 20px;
  box-shadow: 6px 6px 14px rgba(35, 30, 56, 0.45), -4px -4px 12px rgba(98, 88, 140, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.neuro-card-highlight {
  background: linear-gradient(135deg, #F5C58D 0%, #EBAE9C 100%);
  border-radius: 30px;
  padding: 22px;
  box-shadow: 6px 10px 20px rgba(25, 20, 42, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.neuro-btn-gold {
  width: 100%;
  padding: 16px 20px;
  border-radius: 18px;
  border: none;
  background: linear-gradient(135deg, #F5C58D 0%, #EBAE9C 100%);
  color: #393256;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 4px 6px 14px rgba(25, 20, 42, 0.35);
  transition: transform 0.15s ease;
}

.neuro-btn-gold:active {
  transform: scale(0.98);
}

.neuro-input {
  width: 100%;
  padding: 14px 18px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #393256;
  color: #F8F5F2;
  font-size: 14px;
  outline: none;
  box-shadow: inset 3px 3px 6px rgba(25, 20, 42, 0.5), inset -2px -2px 5px rgba(98, 88, 140, 0.15);
}

.neuro-nav {
  background: #393256;
  border-radius: 32px;
  box-shadow: 8px 12px 24px rgba(25, 20, 42, 0.6), -4px -4px 12px rgba(98, 88, 140, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
`;

if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = customCss;
  document.head.appendChild(styleEl);
}

// React CSS Styles Definition
const styles: { [key: string]: React.CSSProperties } = {
  screenWrapper: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: '#49416F' },
  bgOverlay: { position: 'fixed', inset: 0, backgroundImage: 'url("/mountain-bg.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#49416F', opacity: 0.15, zIndex: 1 },
  welcomeContainer: { position: 'relative', zIndex: 2, width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', minHeight: '80vh', textAlign: 'center' },
  welcomeSubTag: { fontSize: '11px', color: '#BBA5E8', letterSpacing: '2px', fontWeight: '800' },
  brandTitle: { fontSize: '24px', fontWeight: '800', color: '#F8F5F2', marginTop: '4px' },
  welcomeHeroCard: { width: '100%', textAlign: 'center' },
  loginContainer: { position: 'relative', zIndex: 2, width: '100%', maxWidth: '360px' },
  backBtn: { background: 'none', border: 'none',