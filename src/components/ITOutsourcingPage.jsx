const methods = [
  {
    phase: 'Strategic Foundation',
    title: 'Discovery Phase',
    text: 'We begin with a comprehensive analysis of your project requirements, conducting stakeholder interviews and technical assessments to identify the optimal technology stack and talent architecture for your success.',
    tone: 'primary',
    icon: '⌕',
  },
  {
    phase: 'Precision Curation',
    title: 'Talent Matching',
    text: 'Our senior consultants leverage advanced matching algorithms and cultural fit assessments to curate elite developers. We conduct rigorous technical interviews and handle all legal documentation seamlessly.',
    tone: 'dark',
    icon: '⟲',
  },
  {
    phase: 'Excellence Assembly',
    title: 'Build Your Dream Team',
    text: 'Select from our thoroughly vetted talent pool of top-tier professionals. We ensure comprehensive onboarding, premium tooling, and seamless integration with your existing workflows and systems.',
    tone: 'light',
    icon: '✦',
  },
  {
    phase: 'Sustained Excellence',
    title: 'Launch & Thrive',
    text: 'Your premium development team accelerates from day one while our dedicated success managers handle operations, provide strategic insights, and deliver comprehensive performance analytics.',
    tone: 'dark',
    icon: '✓',
  },
]

const advantages = [
  ['$', 'Affordable Excellence', 'Top-tier at $15/hour'],
  ['◈', 'Pre-Vetted Talent', 'Rigorously Screened Experts'],
  ['⤭', 'Seamless Integration', 'Effortless Team Collaboration'],
  ['◎', '24/7 Global Support', 'Round-the-Clock Assistance'],
  ['⚙', 'Dedicated Success Managers', 'Smooth Project Operations'],
  ['⟳', 'Quick Developer Replacement', 'Minimal Project Disruption'],
  ['★', 'Proven Track Record', 'Trusted by Global Businesses'],
  ['➤', 'Fast Turnaround', 'Accelerate Your Timeline'],
]

const tech = [
  'Angular',
  'React',
  'Node.js',
  'Laravel',
  'Python',
  'Flutter',
  'Electron',
  'iOS/Swift',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'DigitalOcean',
  'Azure',
  'AWS',
  'Strapi',
  'Other',
]

function ITOutsourcingPage() {
  return (
    <section className="it-page" id="it-outsourcing">
      <div className="it-hero-layout">
        <div className="it-page-hero">
          <p className="eyebrow">Gateway Workforce: IT Outsourcing</p>
          <h1>Scale Your Team with Expert Indian Developers</h1>
          <p className="it-page-price">
            Starting at just <span>$15/Hour!</span>
          </p>
          <p className="section-description">
            Access pre-vetted, top-tier developers at competitive rates. Our skilled Indian
            developers seamlessly integrate with your team, accelerating project delivery without
            compromising quality.
          </p>
          <a className="it-discover-btn" href="#it-process">
            Discover Our Process
          </a>
        </div>

        <article className="it-form-card">
          <h2>Let's Talk</h2>
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
              <legend>Select skills you're looking for (Choose multiple)</legend>
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

      <div className="it-process" id="it-process">
        <p className="it-pill">Our Methodology</p>
        <h3>Your Strategic Journey</h3>
        <p>
          A meticulously crafted process designed to deliver exceptional results through strategic
          planning and flawless execution
        </p>
      </div>

      <section className="it-timeline" aria-label="Methodology timeline">
        {methods.map((step, i) => (
          <article key={step.title} className={`it-time-card is-${step.tone} ${i % 2 ? 'right' : 'left'}`}>
            <span className="it-time-icon" aria-hidden="true">
              {step.icon}
            </span>
            <p className="it-time-phase">{step.phase}</p>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
            <span className="it-time-dot" aria-hidden="true" />
          </article>
        ))}
      </section>

      <section className="it-continuous-section">
        <p className="it-pill">Key Advantages</p>
        <h3>Why Choose Gateway Workforce for IT Outsourcing?</h3>
        <div className="it-adv-grid">
          {advantages.map(([icon, title, desc]) => (
            <article key={title} className="it-adv-card">
              <span className="it-adv-icon" aria-hidden="true">
                {icon}
              </span>
              <h4>{title}</h4>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="it-partner-strip">
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

      <section className="it-continuous-section">
        <h3>Technologies We Work With</h3>
        <p className="it-sub">Our developers are experts in modern tech stacks.</p>
        <div className="it-tech-grid">
          {tech.map((name) => (
            <article key={name} className="it-tech-card">
              <span>{name}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="it-hire-banner">
        <h3>
          Ready to <span>Hire Top Talent?</span>
        </h3>
        <p>
          Join hundreds of satisfied clients who have transformed their businesses with our expert
          professionals. Start your project today!
        </p>
        <a href="#contact" className="it-hire-btn">
          Hire Our Talent Now
        </a>
        <p className="it-hire-note">Free consultation • Quick response • No hidden costs</p>
      </section>

      <section className="it-bottom-cta">
        <h3>Transform Your Business with Optimized IT Outsourcing Solutions</h3>
        <p>
          Gateway Workforce connects you with India&apos;s top-tier developers to scale your team
          efficiently. From custom software development to complete project delivery, our experts
          ensure you get premium talent at competitive rates with seamless collaboration.
        </p>
        <a className="it-bottom-btn" href="#contact">
          Schedule 15 Min Call
        </a>
      </section>
    </section>
  )
}

export default ITOutsourcingPage
