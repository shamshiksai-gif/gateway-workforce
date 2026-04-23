/** Small icons for Healthcare BPO “Ready to Hire” row (matches IT page pattern). */
const c = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }

export function HbpoHireRowIcons({ name }) {
  switch (name) {
    case 'usercheck':
      return (
        <svg {...c} aria-hidden="true">
          <circle cx="9" cy="7" r="3" />
          <path d="M3 20v-1.5A3.5 3.5 0 0 1 6.5 15H9" />
          <path d="m16 11 2 2 3-3" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...c} aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    case 'star':
      return (
        <svg {...c} aria-hidden="true" fill="currentColor" stroke="none">
          <path d="M12 2.2 14 7.2h4.7l-3.6 2.6 1.3 4.2L12 10.3 7.7 16l1.3-4.2-3.6-2.6H9.2l1.7-5h1.1Z" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...c} aria-hidden="true">
          <path d="M12 3 4 6v5c0 4 3.5 7.5 8 8 4.5-.5 8-4 8-8V6l-8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case 'check':
      return (
        <svg {...c} aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" />
          <path d="m8.5 12.2 1.7 1.7 4.2-4.2" />
        </svg>
      )
    default:
      return null
  }
}

export function HbpoHireFeatureIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
