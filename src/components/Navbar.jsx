import GatewayLogo, { hasFullLogoLockup } from './GatewayLogo'

function Navbar({ links, isScrollActive }) {
  return (
    <header className="navbar navbar--dash" id="home">
      <a
        className={`brand${hasFullLogoLockup ? ' brand--lockup' : ''}`}
        href="#home"
        aria-label="Gateway Workforce — Home"
      >
        <GatewayLogo />
        {!hasFullLogoLockup ? (
          <span className="brand-text">
            <span className="brand-line1">Gateway</span>
            <span className="brand-line2">Workforce</span>
          </span>
        ) : null}
      </a>
      <div className={`nav-pill-wrap${isScrollActive ? ' is-hidden-on-scroll' : ''}`}>
        <nav className="nav-pill" aria-label="Main">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
