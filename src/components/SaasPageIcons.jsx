/** Icons for SaaS Experts service page (benefit cards + section headers). */

const s = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }

export function SaasBenefitIcon({ name }) {
  switch (name) {
    case 'medal':
      return (
        <svg {...s} aria-hidden="true">
          <circle cx="12" cy="9" r="5" />
          <path d="M8.5 11 7 20l5-2 5 2-1.5-9" />
        </svg>
      )
    case 'bolt':
      return (
        <svg {...s} aria-hidden="true">
          <path d="M13 2 3 14h6l-1 8 8-9h-5l1-7Z" />
        </svg>
      )
    case 'palette':
      return (
        <svg {...s} aria-hidden="true">
          <path d="M12 3a7 7 0 1 0 7 7v0a4 4 0 0 1-4-4 4 4 0 0 1-4-4 4 4 0 0 1-4-4Z" />
          <circle cx="7" cy="10" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="10" cy="7" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="15" cy="8" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'trend':
      return (
        <svg {...s} aria-hidden="true">
          <path d="M3 17h4l3-6 4 4 4-9" />
          <path d="M18 6h3v3" />
        </svg>
      )
    case 'headset':
      return (
        <svg {...s} aria-hidden="true">
          <path d="M4 14a3 3 0 0 1 3-3h1v6H7a3 3 0 0 1-3-3v-2Z" />
          <path d="M20 14a3 3 0 0 0-3-3h-1v6h1a3 3 0 0 0 3-3v-2Z" />
          <path d="M7 11V8a5 5 0 0 1 10 0v3" />
        </svg>
      )
    default:
      return null
  }
}

const t = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6 }

export function SaasSectionIcon({ name }) {
  switch (name) {
    case 'cloud':
      return (
        <svg {...t} aria-hidden="true">
          <path d="M7 18h10a4 4 0 0 0 0-8 5 5 0 0 0-9.5-2.2A4 4 0 0 0 7 18Z" />
        </svg>
      )
    case 'cart':
      return (
        <svg {...t} aria-hidden="true">
          <circle cx="9" cy="20" r="1.2" />
          <circle cx="18" cy="20" r="1.2" />
          <path d="M1 2h3l1.5 12h13l2-8H6" />
        </svg>
      )
    case 'target':
      return (
        <svg {...t} aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'link':
      return (
        <svg {...t} aria-hidden="true">
          <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" />
          <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" />
        </svg>
      )
    default:
      return null
  }
}
