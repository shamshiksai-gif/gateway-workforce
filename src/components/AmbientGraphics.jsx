import { useId } from 'react'

/** Background “data layer” — analytics-style waves + nodes (see gatewayanalyticsai.com). */
function AmbientGraphics() {
  const uid = useId().replace(/:/g, '')
  const gid = (n) => `${uid}-${n}`

  return (
    <div className="ambient-layer" aria-hidden="true">
      <div className="ambient-mesh" />
      <svg
        className="ambient-waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={gid('wave')} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0)" />
            <stop offset="40%" stopColor="rgba(56, 189, 248, 0.5)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
          </linearGradient>
          <filter id={gid('glow')} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          className="wave-path wave-a"
          d="M-80,520 C220,460 420,620 720,540 S1180,420 1480,500"
          fill="none"
          stroke={`url(#${gid('wave')})`}
          strokeWidth="1.5"
          filter={`url(#${gid('glow')})`}
        />
        <path
          className="wave-path wave-b"
          d="M-40,380 C280,320 520,480 820,400 S1240,280 1520,360"
          fill="none"
          stroke="rgba(56, 189, 248, 0.28)"
          strokeWidth="1.05"
        />
        <path
          className="wave-path wave-c"
          d="M0,680 C340,620 600,780 940,700 S1320,580 1500,640"
          fill="none"
          stroke="rgba(34, 211, 238, 0.22)"
          strokeWidth="1.05"
        />
        <path
          className="wave-path wave-d"
          d="M200,220 L280,200 L360,240 L440,180 L520,210 L600,160 L680,190"
          fill="none"
          stroke="rgba(125, 211, 252, 0.35)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      <span className="float-node fn-1" />
      <span className="float-node fn-2" />
      <span className="float-node fn-3" />
      <span className="float-node fn-4" />
      <span className="float-node fn-5" />
      <span className="float-node fn-6" />
    </div>
  )
}

export default AmbientGraphics
