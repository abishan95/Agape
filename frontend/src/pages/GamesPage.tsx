import type { Attendee } from '../data/mockStore';

interface TeamScore {
  name: string;
  points: number;
  rank: number;
  color: string;
  leader: string;
}

const teamLeaderboard: TeamScore[] = [
  { rank: 1, name: 'Zion Warriors', points: 1450, color: '#10B981', leader: 'Pastor David & Team' },
  { rank: 2, name: 'Judah Lions', points: 1320, color: '#F59E0B', leader: 'Bro. Samuel' },
  { rank: 3, name: 'Cedar Champions', points: 1210, color: '#3B82F6', leader: 'Sis. Rachel' },
  { rank: 4, name: 'Grace Pioneers', points: 1090, color: '#8B5CF6', leader: 'Bro. John' },
];

export function GamesPage({ attendee }: { attendee: Attendee }) {
  const myTeamName = attendee.Team || attendee.team || 'Zion Warriors';
  const myTeam = teamLeaderboard.find((t) => t.name.toLowerCase().includes(myTeamName.toLowerCase())) || teamLeaderboard[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      {/* My Team Spotlight Banner */}
      <div
        style={{
          padding: '18px 16px',
          background: 'linear-gradient(160deg, #182030 0%, #0E131E 100%)',
          border: '1px solid rgba(129, 140, 248, 0.3)',
          borderRadius: '20px',
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.65)',
        }}
      >
        <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '1px', color: '#818CF8' }}>YOUR TEAM ASSIGNMENT</span>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#FFFFFF', margin: 0 }}>{myTeam.name}</h2>
            <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '2px' }}>Captained by {myTeam.leader}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#34D399' }}>{myTeam.points}</div>
            <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748B' }}>Rank #{myTeam.rank}</div>
          </div>
        </div>
      </div>

      {/* Leaderboard Section */}
      <div>
        <h3 className="neu-section-headline">CAMP LEADERBOARD</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {teamLeaderboard.map((team) => (
            <div
              key={team.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
                background: 'linear-gradient(160deg, #151922 0%, #0D1017 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: team.rank === 1 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '15px',
                    color: team.rank === 1 ? '#F59E0B' : '#CBD5E1',
                  }}
                >
                  #{team.rank}
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#F8FAFC', margin: 0 }}>{team.name}</h4>
                  <div style={{ fontSize: '11px', color: '#64748B' }}>{team.leader}</div>
                </div>
              </div>

              <div style={{ fontSize: '17px', fontWeight: 900, color: '#FFFFFF' }}>{team.points} pts</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GamesPage;