import GatewayLogo, { hasFullLogoLockup } from './GatewayLogo'

/**
 * @param {object} props
 * @param {{ label: string, href: string }[]} props.links
 * @param {boolean} props.isScrollActive
 * @param {{ name: string, href: string, slug: string }[]} [props.serviceMenu] — 7 service links (same as home “Our Services”)
 * @param {string} [props.brandHomeHref] — `/` on subpages, `#home` on home
 */
function Navbar({ links, isScrollActive, serviceMenu = [], brandHomeHref = '#home' }) {
  const hasServiceDropdown = serviceMenu.length > 0

  return (
    <header className="navbar navbar--dash" id="home">
      <a
        className={`brand${hasFullLogoLockup ? ' brand--lockup' : ''}`}
        href={brandHomeHref}
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
          {links.map((link) => {
            if (link.label === 'Services' && hasServiceDropdown) {
              return (
                <details
                  key="nav-services"
                  className="nav-pill__dropdown"
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') e.currentTarget.removeAttribute('open')
                  }}
                >
                  <summary
                    className="nav-pill__servicesTrigger"
                    aria-label="Services — choose a service or all services on the home page"
                  >
                    Services
                    <span className="nav-pill__caret" aria-hidden="true">
                      ▾
                    </span>
                  </summary>
                  <ul className="nav-pill__menu" role="menu" aria-label="Service pages">
                    <li role="none">
                      <a
                        role="menuitem"
                        href={link.href}
                        className="nav-pill__menuLink nav-pill__menuLink--all"
                        onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')}
                      >
                        All services (overview)
                      </a>
                    </li>
                    {serviceMenu.map((item) => (
                      <li key={item.slug} role="none">
                        <a
                          role="menuitem"
                          href={item.href}
                          className="nav-pill__menuLink"
                          onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              )
            }
            return (
              <a key={link.label} className="nav-pill__topLink" href={link.href}>
                {link.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
