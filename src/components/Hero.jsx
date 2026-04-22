function Hero({ content }) {
  return (
    <section className="hero hero-split" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Gateway Workforce</p>
        <h1 id="hero-title">
          {content.titleLines.map((line, index) => {
            if (line.includes(content.highlightedWord)) {
              const base = line.replace(content.highlightedWord, '').trimEnd()
              return (
                <span key={line}>
                  {base}{' '}
                  <span className="highlight-word">{content.highlightedWord}</span>
                  {index < content.titleLines.length - 1 ? <br /> : null}
                </span>
              )
            }
            return (
              <span key={line}>
                {line}
                {index < content.titleLines.length - 1 ? <br /> : null}
              </span>
            )
          })}
        </h1>
        <p className="lead">{content.description}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#services">
            {content.ctaPrimary}
          </a>
        </div>
      </div>
      <div className="hero-media" aria-hidden="true">
        <div className="hero-ring">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
