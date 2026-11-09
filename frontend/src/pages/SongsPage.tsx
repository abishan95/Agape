import { useState } from 'react';

interface Song {
  id: number;
  title: string;
  tamilTitle: string;
  category: string;
  lyrics: string;
}

const songsList: Song[] = [
  {
    id: 1,
    title: 'Goodness of God',
    tamilTitle: 'உம் நன்மைகள் நான் பாடுவேன்',
    category: 'Praise',
    lyrics: `I love You, Lord\nFor Your mercy never fails me\nAll my days, I've been held in Your hands\n\nFrom the moment that I wake up\nUntil I lay my head\nOh, I will sing of the goodness of God\n\nAll my life You have been faithful\nAll my life You have been so, so good\nWith every breath that I am able\nOh, I will sing of the goodness of God.`,
  },
  {
    id: 2,
    title: 'En Meetpar Uyirodirukka',
    tamilTitle: 'என் மீட்பர் உயிரோடிருக்கையிலே',
    category: 'Tamil Hymn',
    lyrics: `என் மீட்பர் உயிரோடிருக்கையிலே\nஎனக்கென்ன பயமுண்டு?\nஎன் தேவன் என்னோடு இருக்கையிலே\nஎனக்கென்ன கவலையுண்டு?\n\nஅல்லேலூயா அல்லேலூயா\nஅல்லேலூயா பாடிடுவேன்\nஎன் வாழ்நாளெல்லாம் போற்றிடுவேன்\nஇயேசுவையே துதித்திடுவேன்.`,
  },
  {
    id: 3,
    title: 'Way Maker',
    tamilTitle: 'வழிகளை உருவாக்குபவர்',
    category: 'Worship',
    lyrics: `You are here, moving in our midst\nI worship You, I worship You\nYou are here, working in this place\nI worship You, I worship You\n\nYou are Way Maker, Miracle Worker\nPromise Keeper, Light in the darkness\nMy God, that is who You are.`,
  },
  {
    id: 4,
    title: 'Nandri Solli Paaduven',
    tamilTitle: 'நன்றி சொல்லி பாடுவேன்',
    category: 'Tamil Hymn',
    lyrics: `நன்றி சொல்லிப் பாடுவேன் நாதனே உம்மை\nஎன்றென்றும் போற்றுவேன் இயேசுவே உம்மை\n\nகாலை தோறும் புதிதான கிருபைகள் தந்து\nகண்மணி போல் காத்தீரே கோடி ஸ்தோத்திரம்.`,
  },
];

export function SongsPage() {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [search, setSearch] = useState('');

  const filtered = songsList.filter(
    (s) =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.tamilTitle.includes(search) ||
      s.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      {/* Search Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#12161F',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '16px',
          padding: '4px 14px',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        <span style={{ fontSize: '16px', marginRight: '10px' }}>🔍</span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by English, Tamil, or category..."
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: 600,
            padding: '12px 0',
          }}
        />
      </div>

      {/* Song Lyrics Modal */}
      {selectedSong && (
        <div
          onClick={() => setSelectedSong(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '420px',
              maxHeight: '80vh',
              background: '#131822',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              borderRadius: '24px',
              padding: '22px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.9)',
              overflowY: 'auto',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
              <div>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#818CF8', letterSpacing: '1px' }}>
                  {selectedSong.category}
                </span>
                <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#FFFFFF', margin: '2px 0' }}>
                  {selectedSong.title}
                </h2>
                <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#94A3B8', margin: 0 }}>
                  {selectedSong.tamilTitle}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSong(null)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '18px',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>

            <div
              style={{
                whiteSpace: 'pre-line',
                fontSize: '14px',
                lineHeight: 1.8,
                color: '#CBD5E1',
                padding: '16px',
                background: '#0D1017',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {selectedSong.lyrics}
            </div>
          </div>
        </div>
      )}

      {/* Songs List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filtered.map((song) => (
          <div
            key={song.id}
            onClick={() => setSelectedSong(song)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 16px',
              background: 'linear-gradient(160deg, #151922 0%, #0D1017 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '18px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'rgba(129, 140, 248, 0.15)',
                  border: '1px solid rgba(129, 140, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                }}
              >
                🎵
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#F8FAFC', margin: 0 }}>{song.title}</h4>
                <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '2px' }}>{song.tamilTitle}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '10px', fontWeight: 800, color: '#64748B' }}>{song.category}</span>
              <span style={{ fontSize: '18px', color: '#64748B' }}>›</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SongsPage;