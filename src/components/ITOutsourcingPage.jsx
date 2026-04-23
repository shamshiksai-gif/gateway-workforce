const methods = [
  {
    phase: 'Strategic Foundation',
    title: 'Discovery Phase',
    text: 'We begin with a comprehensive analysis of your project requirements, conducting stakeholder interviews and technical assessments to identify the optimal technology stack and talent architecture for your success.',
    tone: 'primary',
  },
  {
    phase: 'Precision Curation',
    title: 'Talent Matching',
    text: 'Our senior consultants leverage advanced matching algorithms and cultural fit assessments to curate elite developers. We conduct rigorous technical interviews and handle all legal documentation seamlessly.',
    tone: 'dark',
  },
  {
    phase: 'Excellence Assembly',
    title: 'Build Your Dream Team',
    text: 'Select from our thoroughly vetted talent pool of top-tier professionals. We ensure comprehensive onboarding, premium tooling, and seamless integration with your existing workflows and systems.',
    tone: 'light',
  },
  {
    phase: 'Sustained Excellence',
    title: 'Launch & Thrive',
    text: 'Your premium development team accelerates from day one while our dedicated success managers handle operations, provide strategic insights, and deliver comprehensive performance analytics.',
    tone: 'dark',
  },
]

/** Matches legacy gatewayworkforce.com: alternating navy / gold icon wells */
const advantages = [
  { title: 'Affordable Excellence', desc: 'Top-tier at $15/hour', tone: 'navy', icon: 'dollar' },
  { title: 'Pre-Vetted Talent', desc: 'Rigorously Screened Experts', tone: 'gold', icon: 'shield' },
  { title: 'Seamless Integration', desc: 'Effortless Team Collaboration', tone: 'navy', icon: 'nodes' },
  { title: '24/7 Global Support', desc: 'Round-the-Clock Assistance', tone: 'gold', icon: 'globe' },
  { title: 'Dedicated Success Managers', desc: 'Smooth Project Operations', tone: 'navy', icon: 'manager' },
  { title: 'Quick Developer Replacement', desc: 'Minimal Project Disruption', tone: 'gold', icon: 'replace' },
  { title: 'Proven Track Record', desc: 'Trusted by Global Businesses', tone: 'navy', icon: 'award' },
  { title: 'Fast Turnaround', desc: 'Accelerate Your Timeline', tone: 'gold', icon: 'rocket' },
]

const tech = [
  { name: 'Angular', si: 'angular' },
  { name: 'React', si: 'react' },
  { name: 'Node.js', si: 'nodedotjs' },
  { name: 'Laravel', si: 'laravel' },
  { name: 'Python', si: 'python' },
  { name: 'Flutter', si: 'flutter' },
  { name: 'Electron', si: 'electron' },
  { name: 'iOS/Swift', si: 'swift' },
  { name: 'MongoDB', si: 'mongodb' },
  { name: 'MySQL', si: 'mysql' },
  { name: 'PostgreSQL', si: 'postgresql' },
  { name: 'DigitalOcean', si: 'digitalocean' },
  { name: 'Azure', si: 'microsoftazure' },
  { name: 'AWS', si: 'amazonaws' },
  { name: 'Strapi', si: 'strapi' },
  { name: 'Other', si: null },
]

const hireHighlights = [
  { label: 'Pre-vetted talent pool', icon: 'usercheck' },
  { label: 'Quick turnaround time', icon: 'clock' },
  { label: 'Proven track record', icon: 'star' },
  { label: 'Quality guarantee', icon: 'check' },
]

function ItAdvIcon({ name }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7 }
  switch (name) {
    case 'dollar':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 6v12M14.5 9a2.5 2.5 0 0 0-5 0c0 2 5 1 5 4a2.5 2.5 0 0 1-5 0" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 3 4 6v5c0 4 3.5 7.5 8 8 4.5-.5 8-4 8-8V6l-8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case 'nodes':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="12" cy="18" r="2.5" />
          <path d="M8.2 7.2 10 10M15.8 7.2 14 10M12 14v2.5" />
        </svg>
      )
    case 'globe':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a12 12 0 0 0 0 18 12 12 0 0 0 0-18Z" />
        </svg>
      )
    case 'manager':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20v-1a4 4 0 0 1 4-4h1.5" />
          <circle cx="18" cy="11" r="2" />
          <path d="M19 20v-1.5a1.5 1.5 0 0 0-1-1.4" />
        </svg>
      )
    case 'replace':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="8" cy="10" r="2.2" />
          <circle cx="16" cy="10" r="2.2" />
          <path d="M4 19c1-2 2.5-3 4-3M20 19c-1-2-2.5-3-4-3M8 5v2M10 3 8 5 10 3M16 5v2M18 3 16 5 18 3" />
        </svg>
      )
    case 'award':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="8" r="5" />
          <path d="M8.5 11 7 20l5-2 5 2-1.5-9" />
        </svg>
      )
    case 'rocket':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 3s-4 4-4 9v4l2 2 2-2v-1M12 3s4 4 4 9v1l-2 2-2-2" />
          <path d="M8 20h.01M10 20h4" />
        </svg>
      )
    default:
      return null
  }
}

function ItHireIcon({ name }) {
  const c = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }
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
          <path d="M12 2.2 14 7.2h4.7l-3.6 2.6 1.3 4.2L12 10.3 7.5 16l1.3-4.2-3.6-2.6H9.2l1.7-5h1.1Z" />
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

function ITOutsourcingPage() {
  return (
    <section className="it-page" id="it-outsourcing">
      <div className="it-hero-layout it-hero-layout--legacy">
        <div className="it-page-hero it-page-hero--legacy">
          <p className="it-eyebrow-hero">Gateway Workforce: IT Outsourcing</p>
          <h1>Scale Your Team with Expert Indian Developers</h1>
          <p className="it-page-price">
            Starting at just <span>$15</span>/Hour!
          </p>
          <p className="it-page-lead">
            Access pre-vetted, top-tier developers at competitive rates. Our skilled Indian developers
            seamlessly integrate with your team, accelerating project delivery without compromising
            quality.
          </p>
          <a className="it-discover-btn" href="#it-process">
            Discover Our Process
          </a>
        </div>

        <article className="it-form-card">
          <h2>Let&apos;s Talk</h2>
          <form className="it-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Email Address
              <input type="email" placeholder="Enter your email address" aria-label="Email Address" />
            </label>

            <label>
              Company Name
              <input type="text" placeholder="Enter your company name" aria-label="Company Name" />
            </label>

            <label>
              How many developers or team members are you looking for?
              <select aria-label="Team size">
                <option>Select an option</option>
                <option>1-3 Members</option>
                <option>4-7 Members</option>
                <option>8-12 Members</option>
                <option>12+ Members</option>
              </select>
            </label>

            <fieldset className="it-skills">
              <legend>Select skills you&apos;re looking for (Choose multiple)</legend>
              <div className="it-skills-grid">
                <button type="button">React</button>
                <button type="button">Node.js</button>
                <button type="button">Python</button>
                <button type="button">Ruby</button>
                <button type="button">Swift</button>
                <button type="button">Android</button>
                <button type="button">Laravel</button>
                <button type="button">Flutter</button>
                <button type="button">Angular</button>
                <button type="button">Other</button>
              </div>
            </fieldset>

            <label>
              Expected Duration
              <select aria-label="Expected duration">
                <option>Select an option</option>
                <option>Short-term (1-3 Months)</option>
                <option>Medium-term (3-6 Months)</option>
                <option>Long-term (6+ Months)</option>
                <option>Ongoing</option>
              </select>
            </label>

            <button className="it-next-btn" type="submit">
              Next <span aria-hidden="true">→</span>
            </button>
          </form>
        </article>
      </div>

      <div className="it-process it-process--legacy" id="it-process">
        <p className="it-pill it-pill--method">Our Methodology</p>
        <h3>Your Strategic Journey</h3>
        <p className="it-process-lead">
          A meticulously crafted process designed to deliver exceptional results through strategic
          planning and flawless execution
        </p>
        <div className="it-process-rule" aria-hidden="true" />
      </div>

      <section className="it-timeline" aria-label="Methodology timeline">
        {methods.map((step, i) => (
          <article key={step.title} className={`it-time-card is-${step.tone} ${i % 2 ? 'right' : 'left'}`}>
            <p className="it-time-phase">{step.phase}</p>
            <h4>{step.title}</h4>
            <p className="it-time-body">{step.text}</p>
            <span className="it-time-dot" aria-hidden="true" />
          </article>
        ))}
      </section>

      <section className="it-continuous-section it-continuous-section--legacy">
        <p className="it-pill it-pill--key">Key Advantages</p>
        <h3 className="it-why-title">
          Why <span className="it-choose">Choose</span> Gateway Workforce for IT Outsourcing?
        </h3>
        <div className="it-adv-grid">
          {advantages.map(({ title, desc, tone, icon }) => (
            <article key={title} className={`it-adv-card it-adv-card--${tone}`}>
              <span className={`it-adv-icon-well it-adv-icon-well--${tone}`} aria-hidden="true">
                <ItAdvIcon name={icon} />
              </span>
              <h4>{title}</h4>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="it-partner-strip it-partner-strip--legacy">
        <h3>Trusted Global Technology Partner</h3>
        <p>Delivering excellence in technology solutions since 1998.</p>
        <div className="it-metrics-grid">
          <article className="it-metric">
            <strong>10+</strong>
            <span>Years of Excellence</span>
          </article>
          <article className="it-metric">
            <strong>25+</strong>
            <span>Global Clients</span>
          </article>
          <article className="it-metric">
            <strong>5+</strong>
            <span>Countries</span>
          </article>
          <article className="it-metric">
            <strong>30+</strong>
            <span>Team Members</span>
          </article>
        </div>
      </section>

      <section className="it-continuous-section it-continuous-section--tech">
        <h3 className="it-tech-title">
          Technologies We <span className="it-workwith">Work With</span>
        </h3>
        <p className="it-sub it-sub--tech">Our developers are experts in modern tech stacks.</p>
        <div className="it-tech-grid">
          {tech.map(({ name, si }) => (
            <article key={name} className="it-tech-card it-tech-card--legacy">
              {si ? (
                <img
                  className="it-tech-logo"
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@11.6.0/icons/${si}.svg`}
                  alt=""
                  width={36}
                  height={36}
                  loading="lazy"
                />
              ) : (
                <span className="it-tech-fallback" aria-hidden="true">
                  +
                </span>
              )}
              <span className="it-tech-name">{name}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="it-hire-banner it-hire-banner--legacy">
        <h3>
          Ready to <span className="it-hire-accent">Hire Top Talent?</span>
        </h3>
        <p>
          Join hundreds of satisfied clients who have transformed their businesses with our expert
          professionals. Start your project today!
        </p>
        <ul className="it-hire-features" aria-label="Hiring benefits">
          {hireHighlights.map((row) => (
            <li key={row.label}>
              <span className="it-hire-ico">
                <ItHireIcon name={row.icon} />
              </span>
              <span className="it-hire-txt">{row.label}</span>
            </li>
          ))}
        </ul>
        <a href="#contact" className="it-hire-btn">
          <span className="it-hire-btn-ico" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </span>
          Hire Our Talent Now
          <span aria-hidden="true"> →</span>
        </a>
        <p className="it-hire-note">Free consultation • Quick response • No hidden costs</p>
      </section>

      <section className="it-bottom-cta it-bottom-cta--legacy">
        <h3>Transform Your Business with Optimized IT Outsourcing Solutions</h3>
        <p>
          Gateway Workforce connects you with India&apos;s top-tier developers to scale your team
          efficiently. From custom software development to complete project delivery, our experts
          ensure you get premium talent at competitive rates with seamless collaboration.
        </p>
        <p className="it-bottom-discuss">
          <span className="it-bottom-phone" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.1.65.28 1.28.5 1.9a2 2 0 0 1-.45 2.1L8.09 8.4a16 16 0 0 0 6 6l.68-.87a2 2 0 0 1 2.1-.45c.6.2 1.25.4 1.9.5A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          Let&apos;s discuss how we can scale your development team!
        </p>
        <a className="it-bottom-btn" href="#contact">
          <span className="it-bottom-btn-ico" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.1.65.28 1.28.5 1.9a2 2 0 0 1-.45 2.1L8.09 8.4a16 16 0 0 0 6 6l.68-.87a2 2 0 0 1 2.1-.45c.6.2 1.25.4 1.9.5A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          Schedule 15 Min Call
        </a>
        <p className="it-bottom-tagline" role="contentinfo">
          Gateway Workforce – Your trusted partner for IT Outsourcing and expert developer talent.
        </p>
      </section>
    </section>
  )
}

export default ITOutsourcingPage
