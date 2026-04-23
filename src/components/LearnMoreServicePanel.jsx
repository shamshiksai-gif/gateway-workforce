import { getServiceBySlug } from '../data/siteContent'

/**
 * Same layout + gradient themes as the home “Services” slides (`service-panel--*`).
 * Drop your photo into `public/learn-more/{slug}.jpg` (or .png) and update `image` in `siteContent.js`.
 */
function LearnMoreServicePanel({ slug }) {
  const service = getServiceBySlug(slug)
  if (!service) return null

  const { name, theme, bullets, image, imageFocus = 'center' } = service

  return (
    <div
      className={`service-panel service-panel--${theme} learn-more-hero`}
      aria-labelledby={`learn-more-title-${slug}`}
    >
      <div className="service-panel-inner">
        <div className="service-copy">
          <p className="eyebrow">Gateway Workforce</p>
          <h2 className="service-panel-title" id={`learn-more-title-${slug}`}>
            {name}
          </h2>
          <ul className="service-panel-list">
            {bullets.map((line, i) => (
              <li key={i}>{i === 0 ? <strong>{line}</strong> : line}</li>
            ))}
          </ul>
        </div>
        <div className="service-visual">
          <img
            src={image}
            alt=""
            style={{ objectPosition: imageFocus }}
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>
  )
}

export default LearnMoreServicePanel
