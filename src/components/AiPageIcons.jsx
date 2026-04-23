/** Icons for AI Solutions (benefit row + service headers). */

const s = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }

export function AiBenefitIcon({ name }) {
  switch (name) {
    case 'brain':
      return (
        <svg {...s} aria-hidden="true">
          <path d="M12 5a3 3 0 0 0-3 3v1M9 4a2 2 0 0 0-2 2v0a2.5 2.5 0 0 0-2.5 2.5V11M6 4a2 2 0 0 1 2 2" />
          <path d="M12 5a3 3 0 0 1 3 3v1M15 4a2 2 0 0 1 2 2v0a2.5 2.5 0 0 1 2.5 2.5V11M18 4a2 2 0 0 0-2 2" />
          <path d="M7 12v.5A4.5 4.5 0 0 0 9 16v.5" />
          <path d="M17 12v.5A4.5 4.5 0 0 1 15 16v.5" />
        </svg>
      )
    case 'trend':
      return (
        <svg {...s} aria-hidden="true">
          <path d="M3 17h4l3-6 3 2 3-3 4-4" />
          <path d="M19 3v4h-4" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...s} aria-hidden="true">
          <path d="M12 3 4 6v5c0 4 3.5 7.5 8 8 4.5-.5 8-4 8-8V6l-8-3Z" />
          <path d="m9 12 1.5 1.5L15 9" />
        </svg>
      )
    case 'bolt':
      return (
        <svg {...s} aria-hidden="true">
          <path d="M13 2 3 14h6l-1 8 8-9h-5l1-7Z" />
        </svg>
      )
    case 'chip':
      return (
        <svg {...s} aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 4v-2M9 20v-2M15 4v-2M15 20v-2M4 9H2M22 9h-2M4 15H2M22 15h-2" />
        </svg>
      )
    default:
      return null
  }
}

const t = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6 }

export function AiSectionIcon({ name }) {
  switch (name) {
    case 'brain':
      return (
        <svg {...t} aria-hidden="true">
          <path d="M12 5a2.5 2.5 0 0 0-2.4 1.7h-.1a2 2 0 0 0-2 1.3 2.5 2.5 0 0 0-2.5 2.1V12a2.5 2.5 0 0 0 2.5 2.5H9" />
          <path d="M12 5a2.5 2.5 0 0 1 2.4 1.7h.1a2 2 0 0 1 2 1.3 2.5 2.5 0 0 1 2.5 2.1V12A2.5 2.5 0 0 1 14 14.5H15" />
          <path d="M7 14.5A3.5 3.5 0 0 0 10.5 18H11a2 2 0 0 0 1.8-1" />
        </svg>
      )
    case 'bolt':
      return (
        <svg {...t} aria-hidden="true">
          <path d="M13 2 3 14h6l-1 8 8-9h-5l1-7Z" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...t} aria-hidden="true">
          <path d="M4 20V10M9 20V4M14 20v-6M19 20V8" />
        </svg>
      )
    case 'gear':
      return (
        <svg {...t} aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      )
    default:
      return null
  }
}
