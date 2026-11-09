import { useState } from 'react';

interface EventItem {
  time: string;
  title: string;
  location: string;
  tag: string;
  desc?: string;
}

const scheduleData: Record<number, EventItem[]> = {
  1: [
    { time: '06:00 AM', title: 'Camp Assembly & Departure', location: 'CMBT Koyambedu', tag: 'Transit', desc: 'Board assigned buses by 05:45 AM sharp.' },
    { time: '12:30 PM', title: 'Arrival & Welcome Refreshments', location: 'Yelagiri Camp Grounds', tag: 'Arrival' },
    { time: '01:30 PM', title: 'Fellowship Lunch', location: 'Dining Pavilion', tag: 'Dining' },
    { time: '04:30 PM', title: 'Opening Session: "Rooted in Grace"', location: 'Main Auditorium', tag: 'Worship' },
    { time: '07:30 PM', title: 'Dinner & Team Icebreakers', location: 'Open Amphitheatre', tag: 'Community' },
  ],
  2: [
    { time: '06:30 AM', title: 'Morning Devotion & Walk', location: 'Pine Ridge Trail', tag: 'Devotion' },
    { time: '08:00 AM', title: 'Breakfast', location: 'Dining Pavilion', tag: 'Dining' },
    { time: '09:30 AM', title: 'Keynote Session 01', location: 'Main Auditorium', tag: 'Word' },
    { time: '03:30 PM', title: 'Inter-Team Camp Games', location: 'Sports Arena', tag: 'Games', desc: 'Wear assigned team colors.' },
    { time: '07:00 PM', title: 'Campfire Praise Night', location: 'Bonfire Arena', tag: 'Worship' },
  ],
  3: [
    { time: '06:30 AM', title: 'Silent Meditation & Prayer', location: 'Grace Garden', tag: 'Prayer' },
    { time: '08:00 AM', title: 'Breakfast', location: 'Dining Pavilion', tag: 'Dining' },
    { time: '10:00 AM', title: 'Workshop & Breakout Circles', location: 'Seminar Rooms', tag: 'Study' },
    { time: '04:00 PM', title: 'Championship Matches & Finals', location: 'Sports Arena', tag: 'Games' },
    { time: '07:30 PM', title: 'Agape Banquet & Praise Feast', location: 'Grand Hall', tag: 'Banquet' },
  ],
  4: [
    { time: '07:30 AM', title: 'Breakfast', location: 'Dining Pavilion', tag: 'Dining' },
    { time: '09:00 AM', title: 'Closing Dedication & Communion', location: 'Main Auditorium', tag: 'Communion' },
    { time: '11:30 AM', title: 'Room Checkout & Luggage Drop', location: 'Assigned Dorms', tag: 'Departure' },
    { time: '01:00 PM', title: 'Farewell Lunch & Departure', location: 'Camp Gates', tag: 'Transit' },
  ],
};

export function SchedulePage() {
  const [activeDay, setActiveDay] = useState<number>(1);
  const events = scheduleData[activeDay] || [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      {/* Day Selector */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px',
          background: '#0D1017',
          padding: '6px',
          borderRadius: '18px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {[1, 2, 3, 4].map((day) => {
          const dateLabel = day === 1 ? 'Dec 27' : day === 2 ? 'Dec 28' : day === 3 ? 'Dec 29' : 'Dec 30';
          const isSelected = activeDay === day;
          return (
            <button
              key={day}
              type="button"
              onClick={() => setActiveDay(day)}
              style={{
                padding: '10px 4px',
                borderRadius: '14px',
                border: 'none',
                cursor: 'pointer',
                background: isSelected ? 'linear-gradient(135deg, #4F46E5 0%, #3730A3 100%)' : 'transparent',
                color: isSelected ? '#FFFFFF' : '#64748B',
                boxShadow: isSelected ? '0 4px 12px rgba(79, 70, 229, 0.45)' : 'none',
                fontWeight: 800,
                fontSize: '12px',
                textAlign: 'center',
              }}
            >
              <div>Day {day}</div>
              <div style={{ fontSize: '9px', fontWeight: 600, opacity: isSelected ? 0.9 : 0.6, marginTop: '2px' }}>
                {dateLabel}
              </div>
            </button>
          );
        })}
      </div>

      {/* Events List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {events.map((evt, idx) => {
          const [timeVal, ampm] = evt.time.split(' ');
          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '14px',
                padding: '16px',
                borderRadius: '18px',
                background: 'linear-gradient(160deg, #151922 0%, #0D1017 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '65px',
                  paddingRight: '12px',
                  borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <span style={{ fontSize: '11px', fontWeight: 900, color: '#818CF8' }}>{timeVal}</span>
                <span style={{ fontSize: '9px', fontWeight: 800, color: '#64748B' }}>{ampm}</span>
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span
                    style={{
                      fontSize: '9px',
                      fontWeight: 900,
                      letterSpacing: '0.8px',
                      color: '#34D399',
                      background: 'rgba(16, 185, 129, 0.1)',
                      padding: '2px 8px',
                      borderRadius: '8px',
                    }}
                  >
                    {evt.tag}
                  </span>
                  <span style={{ fontSize: '11px', color: '#64748B' }}>📍 {evt.location}</span>
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#F8FAFC', margin: '4px 0 2px 0' }}>{evt.title}</h3>
                {evt.desc && <p style={{ fontSize: '12px', color: '#94A3B8', margin: '4px 0 0 0', lineHeight: 1.4 }}>{evt.desc}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SchedulePage;