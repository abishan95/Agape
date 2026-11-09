import { useState } from 'react';

interface Profile {
  id: string;
  full_name: string;
  gender: 'male' | 'female';
  category: 'teen_campus' | 'adult';
  dorm_number?: string;
}

interface PlanPageProps {
  currentUser: Profile;
}

const mockBrothers = [
  { id: '1', name: 'Rahul Sharma', category: 'Teen / Campus', room: 'Room 101', booked: true },
  { id: '2', name: 'Alex Joseph', category: 'Teen / Campus', room: 'Room 102', booked: false },
  { id: '3', name: 'Samuel Paul', category: 'Adult / Grad', room: 'Room 204', booked: true },
  { id: '4', name: 'Daniel Raj', category: 'Teen / Campus', room: 'Room 101', booked: false },
];

const mockSisters = [
  { id: '5', name: 'Kavin Priya', category: 'Teen / Campus', room: 'Room 201', booked: false },
  { id: '6', name: 'Maggie', category: 'Teen / Campus', room: 'Room 202', booked: true },
  { id: '7', name: 'Priya Patel', category: 'Adult / Grad', room: 'Room 205', booked: false },
];

export default function PlanPage({ currentUser }: PlanPageProps) {
  const [subTab, setSubTab] = useState<'prayer' | 'meals'>('prayer');
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedMeal, setSelectedMeal] = useState<string>('lunch');

  const directoryList = currentUser.gender === 'male' ? mockBrothers : mockSisters;

  return (
    <div className="stockline-card" style={{ padding: '20px' }}>
      {/* Tab Selectors */}
      <div style={styles.tabContainer}>
        <button
          onClick={() => setSubTab('prayer')}
          style={subTab === 'prayer' ? styles.tabActive : styles.tabInactive}
        >
          🤝 Prayer Partner
        </button>
        <button
          onClick={() => setSubTab('meals')}
          style={subTab === 'meals' ? styles.tabActive : styles.tabInactive}
        >
          🍽️ Meal Directory
        </button>
      </div>

      {subTab === 'prayer' && (
        <div>
          <div style={styles.daySelector}>
            {[1, 2, 3].map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDay(d)}
                style={selectedDay === d ? styles.dayActive : styles.dayInactive}
              >
                Day {d}
              </button>
            ))}
          </div>

          <div style={styles.partnerCard}>
            <span style={{ fontSize: '10px', color: 'var(--accent-purple)', fontWeight: '700' }}>SAME GENDER ROTATED MATCH</span>
            <h3 style={{ fontSize: '18px', fontWeight: '800', margin: '4px 0' }}>
              {selectedDay === 1 ? 'Rahul Sharma' : selectedDay === 2 ? 'Alex Joseph' : 'Daniel Raj'}
            </h3>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '12px' }}>🎒 Teen / Campus • Room 101</p>
            <div style={styles.noteBox}>
              💬 Connect during quiet time to pray for personal revival and spiritual growth on Day {selectedDay}.
            </div>
          </div>
        </div>
      )}

      {subTab === 'meals' && (
        <div>
          <select
            value={selectedMeal}
            onChange={(e) => setSelectedMeal(e.target.value)}
            className="stockline-input"
            style={{ marginBottom: '14px' }}
          >
            <option value="breakfast">🥞 Breakfast Slot</option>
            <option value="lunch">🍛 Lunch Slot</option>
            <option value="dinner">🌙 Dinner Slot</option>
          </select>

          <div style={{ display: 'flex', gap: '16px', fontSize: '11px', fontWeight: '700', marginBottom: '14px' }}>
            <span style={{ color: 'var(--status-booked)' }}>🟢 Booked</span>
            <span style={{ color: 'var(--status-free)' }}>🔴 Available</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {directoryList.map((p) => (
              <div
                key={p.id}
                style={{
                  backgroundColor: '#12151E',
                  padding: '12px',
                  borderRadius: '12px',
                  borderLeft: `4px solid ${p.booked ? 'var(--status-booked)' : 'var(--status-free)'}`,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '700' }}>{p.name}</h4>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: p.booked ? 'var(--status-booked)' : 'var(--status-free)' }}>
                    {p.booked ? '🟢 Booked' : '🔴 Free'}
                  </span>
                </div>
                <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>{p.category} • {p.room}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  tabContainer: {
    display: 'flex',
    gap: '6px',
    backgroundColor: '#12151E',
    padding: '4px',
    borderRadius: '12px',
    marginBottom: '16px',
  },
  tabActive: {
    flex: 1,
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'var(--accent-purple)',
    color: '#FFF',
    fontSize: '12px',
    fontWeight: '700',
  },
  tabInactive: {
    flex: 1,
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'transparent',
    color: 'var(--text-muted)',
    fontSize: '12px',
  },
  daySelector: {
    display: 'flex',
    gap: '8px',
    marginBottom: '14px',
  },
  dayActive: {
    flex: 1,
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid var(--accent-purple)',
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    color: 'var(--accent-purple)',
    fontWeight: '700',
    fontSize: '12px',
  },
  dayInactive: {
    flex: 1,
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid var(--border-subtle)',
    backgroundColor: '#12151E',
    color: 'var(--text-muted)',
    fontSize: '12px',
  },
  partnerCard: {
    backgroundColor: '#12151E',
    padding: '16px',
    borderRadius: '12px',
  },
  noteBox: {
    fontSize: '12px',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#181C26',
    borderLeft: '3px solid var(--accent-purple)',
  },
};