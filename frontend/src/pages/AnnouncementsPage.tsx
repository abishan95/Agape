import { useState } from 'react';

interface Announcement {
  id: string;
  title: string;
  message: string;
  category: 'Urgent' | 'Logistics' | 'Worship' | 'General';
  timestamp: string;
  isPinned?: boolean;
}

const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: '1',
    title: 'Bus boarding starts at 05:30 AM sharp',
    message: 'All buses depart from Koyambedu CMBT Hub at 06:00 AM. Please ensure luggage tags are attached before arrival. Breakfast will be distributed on board.',
    category: 'Urgent',
    timestamp: '15 mins ago',
    isPinned: true,
  },
  {
    id: '2',
    title: 'Warm clothing recommended for Yelagiri nights',
    message: 'Evening temperatures are expected to drop to 14°C around the campsite. Please pack jackets, beanies, or shawls for outdoor sessions.',
    category: 'Logistics',
    timestamp: '2 hours ago',
    isPinned: true,
  },
  {
    id: '3',
    title: 'Dedication service song lyrics updated',
    message: 'New Tamil and English worship songs have been added to the hymnal. Check the Song Book tab to bookmark your verses before session 1.',
    category: 'Worship',
    timestamp: 'Yesterday',
  },
  {
    id: '4',
    title: 'Medical help desk & first aid availability',
    message: 'A 24/7 medical room is operational next to Dormitory B. For emergencies, contact brother David or the camp nurse directly from your Profile tab.',
    category: 'General',
    timestamp: '2 days ago',
  },
];

const CATEGORY_META = {
  Urgent: { badgeClass: 'badge-circle-orange', icon: '🚨', labelColor: '#F59E0B' },
  Logistics: { badgeClass: 'badge-circle-blue', icon: '🚌', labelColor: '#38BDF8' },
  Worship: { badgeClass: 'badge-circle-purple', icon: '✨', labelColor: '#C084FC' },
  General: { badgeClass: 'badge-circle-green', icon: '📌', labelColor: '#10B981' },
};

export function AnnouncementsPage() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Urgent' | 'Logistics' | 'Worship'>('All');

  const filtered = INITIAL_ANNOUNCEMENTS.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Top Header */}
      <div className="neu-header">
        <div>
          <span className="neu-header-tag">● NOTICE BOARD</span>
          <h1 className="neu-title">Announcements</h1>
        </div>
      </div>

      {/* Filter Category Pills */}
      <div className="neu-pill-track">
        {(['All', 'Urgent', 'Logistics', 'Worship'] as const).map((cat) => {
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`neu-pill-btn ${isActive ? 'active' : ''}`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Announcements List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filtered.map((item) => {
          const meta = CATEGORY_META[item.category];

          return (
            <div
              key={item.id}
              className="neu-card"
              style={{
                padding: '16px 18px',
                border: item.isPinned
                  ? '1px solid rgba(255, 122, 0, 0.4)'
                  : '1px solid var(--surface-border)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div className={`badge-circle ${meta.badgeClass}`} style={{ width: '30px', height: '30px', fontSize: '14px' }}>
                    {meta.icon}
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: meta.labelColor }}>
                    {item.category}
                  </span>
                  {item.isPinned && (
                    <span style={{ fontSize: '9px', fontWeight: 800, color: '#FF7A00', background: 'rgba(255, 122, 0, 0.15)', padding: '2px 6px', borderRadius: '6px' }}>
                      PINNED
                    </span>
                  )}
                </div>

                <span style={{ fontSize: '11px', color: 'var(--text-dim)', fontWeight: 600 }}>
                  {item.timestamp}
                </span>
              </div>

              <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 800, color: 'var(--text-white)' }}>
                {item.title}
              </h4>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-sub)', lineHeight: 1.5, fontWeight: 500 }}>
                {item.message}
              </p>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '30px 10px', color: 'var(--text-dim)' }}>
            <p style={{ margin: 0, fontSize: '13px', fontWeight: 700 }}>No notices in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnnouncementsPage;