import WhyIndiaCardImage from './WhyIndiaCardImage'

const icons = {
  globe: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3 12h18M12 3c2.5 3.5 2.5 14.5 0 18M12 3c-2.5 3.5-2.5 14.5 0 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M8 8l-4 4 4 4M16 8l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  dollar: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M12 3v18M15 7a3 3 0 00-6 0c0 2 6 1.5 6 5a3 3 0 01-6 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M4 6h16v10H9l-4 3V6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 7v6l4 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M12 2l1.8 5.5L19 9l-5.2 1.5L12 16l-1.8-5.5L5 9l5.2-1.5L12 2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

function WhyIndia({ section, points }) {
  return (
    <section id="why-india" className="why-india-graphic" aria-labelledby="why-india-heading">
      <div className="why-india-inner">
        <header className="why-india-head">
          <h2 id="why-india-heading" className="why-india-title">
            <span className="why-india-title-dark">{section.titleBefore}</span>
            <span className="why-india-title-accent">{section.titleAccent}</span>
          </h2>
          <p className="why-india-lead">{section.lead}</p>
        </header>
        <div className="why-india-grid">
          {points.map((point) => (
            <article key={point.title} className="why-card">
              <div className="why-card-media">
                <WhyIndiaCardImage src={point.image} focus={point.focus} />
                <div className="why-card-icon">{icons[point.icon] ?? icons.globe}</div>
              </div>
              <div className="why-card-body">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyIndia
