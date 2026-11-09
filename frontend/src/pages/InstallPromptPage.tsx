import { useState, useEffect } from 'react';

export type InstallPromptEvent = any;

export interface InstallPromptPageProps {
  installPrompt?: any;
  deferredPrompt?: any;
  onInstallPromptUsed?: () => void;
  onContinue?: () => void;
  onContinueToWeb?: () => void;
}

export function InstallPromptPage({
  installPrompt,
  deferredPrompt,
  onInstallPromptUsed,
  onContinue,
  onContinueToWeb,
}: InstallPromptPageProps) {
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  const activePrompt = installPrompt || deferredPrompt;
  const proceed = onContinue || onContinueToWeb || onInstallPromptUsed || (() => {});

  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(ua));
  }, []);

  const handleInstallClick = async () => {
    setIsInstalling(true);

    if (activePrompt && typeof activePrompt.prompt === 'function') {
      try {
        await activePrompt.prompt();
        const choice = await activePrompt.userChoice;
        if (choice && choice.outcome === 'accepted') {
          proceed();
          return;
        }
      } catch (err) {
        console.error('Install prompt error:', err);
      }
    }

    proceed();
    setIsInstalling(false);
  };

  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 16px',
        background: '#07090C',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="neu-card"
        style={{
          width: '100%',
          maxWidth: '390px',
          padding: '36px 22px',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: '84px',
            height: '84px',
            borderRadius: '26px',
            margin: '0 auto 20px auto',
            background: 'linear-gradient(145deg, #1A212E 0%, #0F131C 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 22px rgba(0, 0, 0, 0.8)',
          }}
        >
          <img
            src="/agape-logo.png"
            alt="AGAPE 2026"
            style={{ width: '56px', height: '56px', objectFit: 'contain' }}
            onError={(e) => {
              (e.currentTarget as HTMLElement).parentElement!.innerHTML = '<span style="font-size:32px">⛪</span>';
            }}
          />
        </div>

        <span className="neu-header-tag" style={{ display: 'inline-block', marginBottom: '6px' }}>
          ● CICC RETREAT 2026
        </span>

        <h2
          style={{
            margin: '0 0 8px 0',
            fontSize: '26px',
            fontWeight: 900,
            letterSpacing: '1px',
            color: '#FFFFFF',
          }}
        >
          AGAPE PASS
        </h2>

        <p
          style={{
            margin: '0 0 24px 0',
            fontSize: '13px',
            lineHeight: 1.5,
            color: '#94A3B8',
            fontWeight: 500,
          }}
        >
          Install to your phone home screen for instant 1-tap offline access to your room key, bus seat, and retreat schedule.
        </p>

        {isIOS ? (
          <div
            className="neu-inset"
            style={{
              padding: '16px',
              borderRadius: '16px',
              textAlign: 'left',
              marginBottom: '16px',
            }}
          >
            <p style={{ fontWeight: 800, color: '#818CF8', margin: '0 0 6px 0', fontSize: '13px' }}>
              📲 Quick iPhone Setup:
            </p>
            <ol style={{ margin: 0, paddingLeft: '18px', fontSize: '12px', fontWeight: 600, lineHeight: 1.7, color: '#CBD5E1' }}>
              <li>Tap Safari's <strong>Share</strong> button (⎋) below.</li>
              <li>Tap <strong>"Add to Home Screen"</strong>.</li>
            </ol>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleInstallClick}
            className="neu-btn-primary"
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '15px',
              borderRadius: '18px',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxSizing: 'border-box',
            }}
          >
            <span>📲</span> {isInstalling ? 'Opening...' : 'Install App to Phone (1-Click)'}
          </button>
        )}

        <button
          type="button"
          onClick={proceed}
          className="neu-btn"
          style={{
            width: '100%',
            padding: '13px',
            fontSize: '13px',
            color: '#94A3B8',
            borderRadius: '16px',
            boxSizing: 'border-box',
          }}
        >
          Continue in Web Browser →
        </button>
      </div>
    </div>
  );
}

export default InstallPromptPage;