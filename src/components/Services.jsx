import { useCallback, useEffect, useRef, useState } from 'react'
import SectionTitle from './SectionTitle'

function Services({ items }) {
  const sectionRef = useRef(null)
  const scrollRef = useRef(null)
  const panelRefs = useRef([])
  const [active, setActive] = useState(0)
  const [dotsVisible, setDotsVisible] = useState(false)
  const activeRef = useRef(0)

  useEffect(() => {
    activeRef.current = active
  }, [active])

  const setPanelRef = useCallback((index, el) => {
    panelRefs.current[index] = el
  }, [])

  const goTo = useCallback(
    (index) => {
      const root = scrollRef.current
      const el = panelRefs.current[index]
      if (!root || !el) return
      root.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth',
      })
    },
    []
  )

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const io = new IntersectionObserver(
      ([e]) => {
        setDotsVisible(Boolean(e?.isIntersecting && e.intersectionRatio > 0.06))
      },
      { threshold: [0, 0.06, 0.12] }
    )
    io.observe(section)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    let io
    const id = requestAnimationFrame(() => {
      const root = scrollRef.current
      const panels = panelRefs.current.filter(Boolean)
      if (!root || panels.length === 0) return

      io = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting && e.intersectionRatio >= 0.4)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          const top = visible[0]
          if (!top?.target) return
          const i = panels.indexOf(top.target)
          if (i >= 0) setActive(i)
        },
        { root, rootMargin: '0px', threshold: [0.4, 0.65, 0.9] }
      )

      panels.forEach((p) => io.observe(p))
    })

    return () => {
      cancelAnimationFrame(id)
      io?.disconnect()
    }
  }, [items.length])

  const onScrollKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        goTo(Math.min(items.length - 1, activeRef.current + 1))
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        goTo(Math.max(0, activeRef.current - 1))
      } else if (e.key === 'Home') {
        e.preventDefault()
        goTo(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goTo(items.length - 1)
      }
    },
    [goTo, items.length]
  )

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section section-services"
      aria-label="Our services"
    >
      <div className="services-intro">
        <SectionTitle
          eyebrow="Our Services"
          title="Outsourcing solutions built for global growth"
        />
        <p className="services-scroll-hint">
          One service per screen — scroll or use the dots to move between them.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="services-scroll"
        tabIndex={0}
        onKeyDown={onScrollKeyDown}
      >
        {items.map((service, index) => (
          <article
            key={service.name}
            ref={(el) => setPanelRef(index, el)}
            id={`service-slide-${index}`}
            className={`service-panel service-panel--${service.theme}`}
            aria-labelledby={`service-title-${index}`}
          >
            <div className="service-panel-inner">
              <div className="service-copy">
                <h2 className="service-panel-title" id={`service-title-${index}`}>
                  {service.name}
                </h2>
                <ul className="service-panel-list">
                  {service.bullets.map((line, i) => (
                    <li key={i}>{i === 0 ? <strong>{line}</strong> : line}</li>
                  ))}
                </ul>
                <a href={service.href ?? '#contact'} className="service-panel-cta">
                  {service.cta}{' '}
                  <span className="service-panel-cta-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
              <div className="service-visual">
                <img
                  src={service.image}
                  alt=""
                  loading={index < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      {dotsVisible ? (
        <nav className="services-dots" aria-label="Service slides">
          {items.map((service, index) => (
            <button
              key={service.name}
              type="button"
              className={`services-dot${index === active ? ' is-active' : ''}`}
              aria-label={`Show ${service.name}`}
              aria-current={index === active ? 'true' : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </nav>
      ) : null}
    </section>
  )
}

export default Services
