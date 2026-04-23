/* Icons for Virtual Assistant service page. */
const c = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6 }
const c32 = { width: 32, height: 32, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.4 }

export function VaBenefitIcon({ name }) {
  switch (name) {
    case 'clock':
      return (
        <svg {...c} aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    case 'dollar':
      return (
        <svg {...c} aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 6v12M15.5 9a2.5 2.5 0 0 0-5 0c0 2 5 1.5 5 4a1.5 1.5 0 0 1-3 0" />
        </svg>
      )
    case 'trend':
      return (
        <svg {...c} aria-hidden="true">
          <path d="M3 17h4l3-6 3 2 3-2 2-1v3h-4" />
        </svg>
      )
    default:
      return null
  }
}

export function VaProcessIcon({ name }) {
  const p = c32
  switch (name) {
    case 'phone':
      return (
        <svg {...p} aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
        </svg>
      )
    case 'search':
      return (
        <svg {...p} aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M15 15 21 21" />
        </svg>
      )
    case 'usercheck':
      return (
        <svg {...p} aria-hidden="true">
          <circle cx="9" cy="7" r="3" />
          <path d="M3 20v-1.5A3.5 3.5 0 0 1 6.5 15H9" />
          <path d="m16 11 2 2 3-3" />
        </svg>
      )
    case 'play':
      return (
        <svg {...p} aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M10 8.5 15 12 10 15.5V8.5Z" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'gear':
      return (
        <svg {...p} aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M3 12h2M19 12h2" />
        </svg>
      )
    case 'handshake':
      return (
        <svg {...p} aria-hidden="true">
          <path d="M8 9a2.5 2.5 0 0 1 3.2-.1l.8.5 2.5-1.2a2 2 0 0 1 2.3.6l.7.8a1.5 1.5 0 0 1-.1 1.7l-2 2.2" />
          <path d="M4 20v-2a2 2 0 0 1 .7-1.4l1.6-1.2" />
        </svg>
      )
    default:
      return null
  }
}

export function VaWhyIcon({ name }) {
  const s = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: '#fff', strokeWidth: 1.8 }
  if (name === 'chart')
    return (
      <svg {...s} aria-hidden="true">
        <path d="M4 18V6M8 18V10M12 18V8M16 18v-5M20 18V4" />
      </svg>
    )
  return (
    <svg {...s} aria-hidden="true">
      <path d="M12 3 4 6v5c0 4 3.5 7.5 8 8 4.5-.5 8-4 8-8V6l-8-3Z" />
    </svg>
  )
}

export function VaDiffIcon({ name }) {
  const p = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }
  switch (name) {
    case 'users':
      return (
        <svg {...p} aria-hidden="true">
          <circle cx="8" cy="7" r="2.5" />
          <circle cx="16" cy="7" r="2.5" />
          <path d="M3 20v-1.5A3.5 3.5 0 0 1 6.5 15h3M14 15h3.5A3.5 3.5 0 0 1 21 18.5V20" />
        </svg>
      )
    case 'dollar':
      return (
        <svg {...p} aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 6v12M15.5 9a2.5 2.5 0 0 0-5 0" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...p} aria-hidden="true">
          <path d="M12 3 4 6v5c0 4 3.5 7.5 8 8 4.5-.5 8-4 8-8V6l-8-3Z" />
        </svg>
      )
    case 'gear':
      return (
        <svg {...p} aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4" />
        </svg>
      )
    default:
      return null
  }
}
