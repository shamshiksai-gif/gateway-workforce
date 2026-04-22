import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import HiringProcessMap from './HiringProcessMap'

const PANEL_COUNT = 2

function Process({ lightHero, intro, steps }) {
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

  const goTo = useCallback((index) => {
    const root = scrollRef.current
    const el = panelRefs.current[index]
    if (!root || !el) return
    root.scrollTo({
      top: el.offsetTop,
      behavior: 'smooth',
    })
  }, [])

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
  }, [])

  const onScrollKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        goTo(Math.min(PANEL_COUNT - 1, activeRef.current + 1))
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        goTo(Math.max(0, activeRef.current - 1))
      } else if (e.key === 'Home') {
        e.preventDefault()
        goTo(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goTo(PANEL_COUNT - 1)
      }
    },
    [goTo]
  )

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="hire-process-section"
      aria-label="Hiring process"
    >
      <div className="hire-process-intro">
        <p className="hire-process-scroll-hint">
          Our hiring steps, then a global talent overview — scroll, use the dots, or arrow keys
          while this block is focused.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="hire-process-scroll"
        tabIndex={0}
        onKeyDown={onScrollKeyDown}
      >
        <div
          ref={(el) => setPanelRef(0, el)}
          className="hire-process-panel hire-process-panel--dark"
          aria-labelledby="process-hiring-title"
        >
          <div className="process-hiring-inner">
            <p className="process-eyebrow">{intro.eyebrow}</p>
            <h2 id="process-hiring-title" className="process-title">
              <span className="process-title-accent">{intro.titleAccent}</span>{' '}
              {intro.titleRest}
            </h2>

            <div className="process-track" role="list">
              {steps.map((item, index) => (
                <Fragment key={item.step}>
                  <article className="process-step" role="listitem">
                    <div className="process-circle-wrap">
                      <span className="process-badge" aria-hidden="true">
                        {item.step}
                      </span>
                      <div className="process-circle">
                        <img
                          src={item.image}
                          alt=""
                          loading={index === 0 ? 'eager' : 'lazy'}
                          decoding="async"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <h3 className="process-step-title">{item.title}</h3>
                    <p className="process-step-text">{item.description}</p>
                  </article>
                  {index < steps.length - 1 ? (
                    <span className="process-arrow" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={(el) => setPanelRef(1, el)}
          className="hire-process-panel hire-process-panel--light"
          aria-labelledby="hire-light-title"
        >
          <div className="hire-process-light-inner">
            <h2 id="hire-light-title" className="hire-process-light-title">
              <span className="hire-process-light-line">{lightHero.titleLine1}</span>
              <br />
              <span className="hire-process-light-line">
                {lightHero.titleLine2}{' '}
                <span className="hire-process-light-accent">{lightHero.highlight}</span>
              </span>
            </h2>
            <p className="hire-process-light-lead">{lightHero.description}</p>
            <HiringProcessMap />
            <a className="btn btn-secondary hire-process-light-cta" href={lightHero.ctaHref}>
              {lightHero.ctaLabel}
              <span aria-hidden="true"> {'>'}</span>
            </a>
          </div>
        </div>
      </div>

      {dotsVisible ? (
        <nav className="hire-process-dots" aria-label="Hiring process slides">
          <button
            type="button"
            className={`hire-process-dot${active === 0 ? ' is-active' : ''}`}
            aria-label="Our hiring process steps"
            aria-current={active === 0 ? 'true' : undefined}
            onClick={() => goTo(0)}
          />
          <button
            type="button"
            className={`hire-process-dot${active === 1 ? ' is-active' : ''}`}
            aria-label="Global talent overview"
            aria-current={active === 1 ? 'true' : undefined}
            onClick={() => goTo(1)}
          />
        </nav>
      ) : null}
    </section>
  )
}

export default Process
