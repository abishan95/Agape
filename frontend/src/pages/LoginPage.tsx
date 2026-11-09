import React, { useState } from 'react';
import type { Attendee } from '../data/mockStore';

interface Props {
  error?: string | null;
  onLogin: (phone: string) => void;
  onUseDemo?: (record: Attendee) => void;
  attendees?: Attendee[];
}

export function LoginPage({ error, onLogin, onUseDemo, attendees = [] }: Props) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      onLogin(phoneNumber.trim());
    }
  };

  const handleSelectSample = (sampleAttendee: Attendee) => {
    const phone = sampleAttendee.Phone || sampleAttendee.phone || '';
    setPhoneNumber(phone);
    if (onUseDemo) {
      onUseDemo(sampleAttendee);
    } else {
      onLogin(phone);
    }
  };

  return (
    <div
      style={{
        minHeight: '100dvh',
        width: '100%',
        padding: '24px 18px calc(24px + env(safe-area-inset-bottom)) 18px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '24px',
        boxSizing: 'border-box',
        background: '#07090C',
        color: '#F8FAFC',
      }}
    >
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              background: 'linear-gradient(145deg, #1A212E 0%, #0F131C 100%)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/agape-logo.png"
              alt="AGAPE"
              style={{ width: '26px', height: '26px', objectFit: 'contain' }}
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1.2px', color: '#94A3B8' }}>
              AGAPE RETREAT
            </div>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#F1F5F9' }}>
              CICC 2026
            </div>
          </div>
        </div>

        <div
          style={{
            padding: '4px 12px',
            borderRadius: '20px',
            background: '#151922',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '11px',
            fontWeight: 800,
            color: '#34D399',
          }}
        >
          DEC 27—30
        </div>
      </div>

      {/* Hero Headline */}
      <div>
        <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1.5px', color: '#818CF8' }}>
          YOUR PLACE IS WAITING
        </span>
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 900,
            lineHeight: 1.15,
            margin: '6px 0 10px 0',
            color: '#FFFFFF',
          }}
        >
          Find your<br />place here.
        </h1>
        <p style={{ margin: 0, fontSize: '14px', color: '#94A3B8', lineHeight: 1.5 }}>
          Sign in with the mobile number registered for the retreat.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '1px',
              color: '#64748B',
              marginBottom: '8px',
              textTransform: 'uppercase',
            }}
          >
            PHONE NUMBER
          </label>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#12161F',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '16px',
              padding: '4px 16px',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            <span style={{ fontSize: '16px', fontWeight: 800, color: '#64748B', marginRight: '10px' }}>
              +91
            </span>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter 10-digit number"
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: 600,
                padding: '14px 0',
              }}
            />
          </div>
          {error && (
            <div style={{ color: '#F87171', fontSize: '12px', marginTop: '6px' }}>
              {error}
            </div>
          )}
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '16px',
            border: 'none',
            background: 'linear-gradient(135deg, #4F46E5 0%, #3730A3 100%)',
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 16px rgba(79, 70, 229, 0.45)',
          }}
        >
          Continue <span>→</span>
        </button>
      </form>

      {/* Sample Accounts */}
      <div style={{ marginTop: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <div style={{ height: '1px', flex: 1, background: 'rgba(255, 255, 255, 0.08)' }} />
          <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1.2px', color: '#64748B' }}>
            SAMPLE ACCOUNTS (PREVIEW)
          </span>
          <div style={{ height: '1px', flex: 1, background: 'rgba(255, 255, 255, 0.08)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {(attendees.length > 0
            ? attendees.slice(0, 3)
            : [
                {
                  Phone: '0000000001',
                  Name: 'Retreat Guest',
                  Bus: 'Yelagiri · 01',
                  BusSeat: '12A',
                  Room: 'Pine · 204',
                  Dorm: 'Pine Wing · Room 204',
                  Team: 'Cedar',
                  IsSuperuser: false,
                },
              ]
          ).map((sample) => (
            <div
              key={sample.Phone}
              onClick={() => handleSelectSample(sample)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
                background: 'linear-gradient(160deg, #151A24 0%, #0D1017 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    background: 'rgba(79, 70, 229, 0.15)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '15px',
                    color: '#A5B4FC',
                  }}
                >
                  {sample.Name ? sample.Name.charAt(0) : 'A'}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#F1F5F9' }}>
                    {sample.Name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748B' }}>
                    {sample.Phone}
                  </div>
                </div>
              </div>
              <span style={{ color: '#64748B', fontSize: '18px' }}>›</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: 'center',
          fontSize: '11px',
          color: '#475569',
          marginTop: 'auto',
          paddingTop: '20px',
        }}
      >
        🛡️ Yelagiri 2026 Retreat Companion • CICC
      </div>
    </div>
  );
}

export default LoginPage;