import { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';
import type { Participant } from '../data/mockStore';

interface ChatMessage {
  id: string;
  sender: string;
  team: string;
  avatarSrc: string;
  text: string;
  timestamp: string;
  reactions: { emoji: string; count: number }[];
  isMe: boolean;
}

interface Props {
  activeAvatar: { id: string; name: string; src: string };
  currentUser?: Participant | null;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    sender: 'Joshua Raj',
    team: 'Zion Warriors',
    avatarSrc: '/characters/char1.png',
    text: 'Who has extra acoustic guitar picks for the campfire worship tonight? 🎸',
    timestamp: '04:12 PM',
    reactions: [{ emoji: '🔥', count: 4 }, { emoji: '🙌', count: 2 }],
    isMe: false,
  },
  {
    id: 'm2',
    sender: 'Sarah Daniel',
    team: 'Grace Champions',
    avatarSrc: '/characters/char3.png',
    text: 'Grace Champions are taking the relay trophy tomorrow morning! Prepare yourselves 🏃‍♀️💨',
    timestamp: '04:15 PM',
    reactions: [{ emoji: '🏆', count: 5 }, { emoji: '😂', count: 3 }],
    isMe: false,
  },
  {
    id: 'm3',
    sender: 'Kev & Ben',
    team: 'Mount Sinai',
    avatarSrc: '/characters/char2.png',
    text: 'Bus 02 folks, the snacks at the highway stop were top tier 🍪☕',
    timestamp: '04:20 PM',
    reactions: [{ emoji: '🍪', count: 7 }],
    isMe: false,
  },
];

const QUICK_EMOJIS = ['🔥', '❤️', '🙌', '😂', '🎉', '☕'];

export function ChatPage({ activeAvatar, currentUser }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem('cicc_chat_messages');
      if (saved) return JSON.parse(saved);
    } catch {
      // pass
    }
    return INITIAL_MESSAGES;
  });

  const [inputVal, setInputVal] = useState('');
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    try {
      localStorage.setItem('cicc_chat_messages', JSON.stringify(messages));
    } catch {
      // pass
    }
  }, [messages]);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const myName = currentUser?.name ? currentUser.name.split(' ')[0] : 'Me';
    const myTeam = currentUser?.team || 'Zion Warriors';

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: myName,
      team: myTeam,
      avatarSrc: activeAvatar.src,
      text: inputVal.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      reactions: [],
      isMe: true,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputVal('');
  };

  const handleAddReaction = (messageId: string, emoji: string) => {
    setMessages((prev) =>
      prev.map((msg) => {
        if (msg.id !== messageId) return msg;
        const existing = msg.reactions.find((r) => r.emoji === emoji);
        if (existing) {
          return {
            ...msg,
            reactions: msg.reactions.map((r) =>
              r.emoji === emoji ? { ...r, count: r.count + 1 } : r
            ),
          };
        }
        return {
          ...msg,
          reactions: [...msg.reactions, { emoji, count: 1 }],
        };
      })
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 160px)',
        padding: '0 2px',
      }}
    >
      {/* Camp Topic Header */}
      <div
        className="dark-list-item"
        style={{
          padding: '12px 16px',
          marginBottom: '10px',
          background: 'var(--surface-card)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="badge-circle badge-circle-purple">🔥</div>
          <div className="item-content">
            <h4>Campfire Common Room</h4>
            <p>Live public banter • 140 attendees</p>
          </div>
        </div>
        <span
          style={{
            fontSize: '9px',
            fontWeight: 800,
            color: '#10B981',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            padding: '2px 8px',
            borderRadius: '12px',
          }}
        >
          LIVE
        </span>
      </div>

      {/* Messages Feed */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '4px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          scrollbarWidth: 'none',
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              flexDirection: msg.isMe ? 'row-reverse' : 'row',
              alignItems: 'flex-start',
              gap: '10px',
            }}
          >
            {/* Sender Avatar */}
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#1C1D2A',
                border: '1.5px solid var(--surface-border-light)',
                overflow: 'hidden',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={msg.avatarSrc} alt={msg.sender} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Bubble Container */}
            <div style={{ maxWidth: '78%' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '3px',
                  justifyContent: msg.isMe ? 'flex-end' : 'flex-start',
                }}
              >
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-white)' }}>
                  {msg.sender}
                </span>
                <span
                  style={{
                    fontSize: '9px',
                    fontWeight: 800,
                    color: '#A855F7',
                    background: 'rgba(168, 85, 247, 0.12)',
                    padding: '1px 6px',
                    borderRadius: '6px',
                  }}
                >
                  {msg.team}
                </span>
                <span style={{ fontSize: '9px', color: 'var(--text-dim)', fontWeight: 600 }}>
                  {msg.timestamp}
                </span>
              </div>

              {/* Chat Bubble */}
              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: '18px',
                  borderBottomRightRadius: msg.isMe ? '4px' : '18px',
                  borderBottomLeftRadius: msg.isMe ? '18px' : '4px',
                  background: msg.isMe
                    ? 'var(--primary-blue-gradient)'
                    : 'var(--surface-card)',
                  color: '#FFFFFF',
                  boxShadow: msg.isMe
                    ? '0 6px 16px rgba(45, 107, 255, 0.35)'
                    : '0 4px 12px rgba(0, 0, 0, 0.3)',
                  border: msg.isMe
                    ? 'none'
                    : '1px solid var(--surface-border)',
                  fontSize: '13px',
                  lineHeight: 1.45,
                  fontWeight: 600,
                }}
              >
                {msg.text}
              </div>

              {/* Reactions Bar */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '4px',
                  marginTop: '5px',
                  justifyContent: msg.isMe ? 'flex-end' : 'flex-start',
                }}
              >
                {msg.reactions.map((r, i) => (
                  <span
                    key={i}
                    onClick={() => handleAddReaction(msg.id, r.emoji)}
                    style={{
                      fontSize: '11px',
                      background: 'var(--surface-inset)',
                      border: '1px solid var(--surface-border)',
                      borderRadius: '8px',
                      padding: '2px 6px',
                      cursor: 'pointer',
                      fontWeight: 800,
                    }}
                  >
                    {r.emoji} {r.count}
                  </span>
                ))}

                <span
                  onClick={() => handleAddReaction(msg.id, '❤️')}
                  style={{
                    fontSize: '10px',
                    color: 'var(--text-sub)',
                    padding: '2px 5px',
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                  title="React with heart"
                >
                  +❤️
                </span>
              </div>
            </div>
          </div>
        ))}
        <div ref={chatBottomRef} />
      </div>

      {/* Quick Emojis Row */}
      <div
        style={{
          display: 'flex',
          gap: '6px',
          padding: '6px 0',
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}
      >
        {QUICK_EMOJIS.map((emoji) => (
          <button
            key={emoji}
            type="button"
            onClick={() => setInputVal((prev) => prev + emoji)}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              background: 'var(--surface-card)',
              border: '1px solid var(--surface-border)',
              fontSize: '14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFF',
              flexShrink: 0,
            }}
          >
            {emoji}
          </button>
        ))}
      </div>

      {/* Bottom Input Bar from Right Screen in Reference Design */}
      <form
        onSubmit={handleSend}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--surface-card)',
          borderRadius: '9999px',
          padding: '5px 8px 5px 6px',
          border: '1px solid var(--surface-border)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Purple Plus Icon Circle */}
        <button
          type="button"
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'var(--btn-purple-gradient)',
            border: 'none',
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: 900,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          +
        </button>

        <input
          type="text"
          placeholder="Ask a question..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--text-white)',
            paddingLeft: '4px',
          }}
        />

        {/* Paper Plane Send Icon */}
        <button
          type="submit"
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'transparent',
            border: 'none',
            color: inputVal.trim() ? '#2D6BFF' : '#656A7D',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'color 0.15s ease',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default ChatPage;