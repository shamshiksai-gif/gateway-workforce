import GatewayLogo from './GatewayLogo'

function WelcomeIntro({ phase, isExiting }) {
  const showHeadline = phase === 'headline'
  const showLockup = phase === 'lockup'
  const showLogoOnly = phase === 'logo-only' || phase === 'fly-to-nav'
  const flyToNav = phase === 'fly-to-nav'

  return (
    <div className={`welcome-intro${isExiting ? ' is-exiting' : ''}`} aria-hidden="true">
      <div className="welcome-intro-grid" />
      <div className="welcome-intro-glow" />
      <div className="welcome-intro-scanline" />
      <svg className="welcome-intro-waves" viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg">
        <path className="welcome-wave welcome-wave-a" d="M-20 220 Q 180 180 340 220 T 700 220 T 1060 220 T 1240 220" />
        <path className="welcome-wave welcome-wave-b" d="M-40 250 Q 120 210 280 246 T 620 246 T 960 246 T 1260 246" />
      </svg>
      <div className="welcome-intro-particles">
        <span className="welcome-particle wp-1" />
        <span className="welcome-particle wp-2" />
        <span className="welcome-particle wp-3" />
        <span className="welcome-particle wp-4" />
        <span className="welcome-particle wp-5" />
      </div>
      <div className={`welcome-intro-speed-lines${flyToNav ? ' is-visible' : ''}`}>
        <span className="welcome-speed-line wsl-1" />
        <span className="welcome-speed-line wsl-2" />
        <span className="welcome-speed-line wsl-3" />
      </div>

      <div className={`welcome-intro-content${flyToNav ? ' is-flying' : ''}`}>
        <h1 className={`welcome-intro-headline${showHeadline ? ' is-visible' : ''}`}>
          Gateway Workforce
        </h1>

        <div
          className={`welcome-intro-logo-wrap${showLockup || showLogoOnly ? ' is-visible' : ''}${
            showLogoOnly ? ' is-logo-only' : ''
          }${flyToNav ? ' is-fly-to-nav' : ''}`}
        >
          <GatewayLogo className="welcome-intro-logo" />
        </div>

        <p className={`welcome-intro-title${showLockup ? ' is-visible' : ''}`}>Gateway Workforce</p>
      </div>
    </div>
  )
}

export default WelcomeIntro
