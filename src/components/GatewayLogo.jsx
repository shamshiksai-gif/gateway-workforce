import { useId } from 'react'

/**
 * Official lockup: `public/gateway-logo.png` (icon + GATEWAY / WORKFORCE).
 * Set `CUSTOM_LOGO_PATH` to `null` to use the built-in SVG; navbar will show separate wordmark.
 */
const CUSTOM_LOGO_PATH = '/gateway-logo.png'

export const hasFullLogoLockup = Boolean(CUSTOM_LOGO_PATH)

function GatewayLogoSvg({ className = '' }) {
  const uid = useId().replace(/:/g, '')
  const gid = (name) => `${uid}-${name}`

  return (
    <svg
      className={`gateway-logo-svg ${className}`.trim()}
      viewBox="0 0 88 54"
      width="64"
      height="40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={gid('knob')} cx="32%" cy="32%" r="68%">
          <stop offset="0%" stopColor="#f0f8ff" />
          <stop offset="35%" stopColor="#7ec8ff" />
          <stop offset="70%" stopColor="#3b96ff" />
          <stop offset="100%" stopColor="#1a5fd4" />
        </radialGradient>
        <linearGradient id={gid('floor')} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(125, 220, 210, 0.75)" />
          <stop offset="55%" stopColor="rgba(45, 190, 180, 0.45)" />
          <stop offset="100%" stopColor="rgba(30, 160, 155, 0.2)" />
        </linearGradient>
        <linearGradient id={gid('door')} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.07)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
        </linearGradient>
      </defs>

      <path
        d="M 30 40 L 62 36 L 68 42 L 24 45 Z"
        fill={`url(#${gid('floor')})`}
      />

      <path
        d="M 18 14 L 48 17 L 46 42 L 18 42 Z"
        fill={`url(#${gid('door')})`}
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinejoin="round"
      />

      <path
        d="M 18 14 V42 M 18 14 L 66 14 M 66 14 V40 M 18 42 L 66 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="44" cy="28" r="4" fill={`url(#${gid('knob')})`} />
      <ellipse cx="42.3" cy="26.2" rx="1.4" ry="1" fill="rgba(255,255,255,0.65)" />
    </svg>
  )
}

function GatewayLogo({ className = '' }) {
  if (CUSTOM_LOGO_PATH) {
    return (
      <span className={`logo-shell ${className}`.trim()}>
        <img
          className="gateway-logo-lockup"
          src={CUSTOM_LOGO_PATH}
          alt=""
          decoding="async"
        />
      </span>
    )
  }

  return <GatewayLogoSvg className={className} />
}

export default GatewayLogo
