import LearnMoreServicePanel from './LearnMoreServicePanel'
import { HbpoHireRowIcons, HbpoHireFeatureIcon } from './healthcareBpo/HealthcareBpoShared'
import { AiBenefitIcon, AiSectionIcon } from './AiPageIcons'

const hireHighlights = [
  { label: 'Pre-vetted talent pool', icon: 'usercheck' },
  { label: 'Quick turnaround time', icon: 'clock' },
  { label: 'Proven track record', icon: 'star' },
  { label: 'Quality guarantee', icon: 'check' },
]

const aiServiceRows = [
  {
    title: 'Custom LLM Development & Fine-Tuning',
    icon: 'brain',
    brief: 'Advanced language models tailored to your specific domain and business requirements.',
    points: [
      'Domain-specific LLMs for your industry',
      'Fine-tuning OpenAI, Llama 2, Claude & proprietary models',
      'Retrieval-Augmented Generation (RAG) systems',
      'AI chatbots & virtual assistants',
    ],
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&h=700&q=82',
    imageLeft: true,
  },
  {
    title: 'Intelligent Process Automation',
    icon: 'bolt',
    brief: 'AI-powered automation solutions that streamline workflows and boost productivity.',
    points: [
      'AI-powered workflow automation',
      'Document processing & data extraction (IDP)',
      'Predictive maintenance & anomaly detection',
      'Robotic Process Automation (RPA) integration',
    ],
    image:
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1000&h=700&q=82',
    imageLeft: false,
  },
  {
    title: 'Data Intelligence & Predictive Analytics',
    icon: 'chart',
    brief: 'Transform your data into actionable insights with advanced analytics and ML.',
    points: [
      'Advanced data modeling & forecasting',
      'Customer behavior & sentiment analysis',
      'Real-time business intelligence dashboards',
      'Recommendation engines & personalization',
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&h=700&q=82',
    imageLeft: true,
  },
  {
    title: 'AI Integration & Optimization',
    icon: 'gear',
    brief: 'Seamless integration and optimization of AI solutions within your enterprise.',
    points: [
      'API integrations with existing enterprise systems',
      'AI performance monitoring & continuous learning',
      'Responsible AI governance & compliance',
      'Staff training & change management',
    ],
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&h=700&q=82',
    imageLeft: false,
  },
]

const aiBenefits = [
  { key: '1', title: 'AI & ML Experts', desc: 'Deep expertise in LLMs, NLP & more', icon: 'brain' },
  { key: '2', title: 'End-to-End AI Development', desc: 'Strategy to deployment', icon: 'trend' },
  { key: '3', title: 'Enterprise-Grade Security', desc: 'Compliant & ethical AI', icon: 'shield' },
  { key: '4', title: 'Seamless Integration', desc: 'Works with your tech stack', icon: 'bolt' },
  { key: '5', title: 'Proven Results', desc: 'Measurable improvements', icon: 'chip' },
]

function AiSolutionsPage() {
  return (
    <section className="ai-page" id="ai-solutions">
      <LearnMoreServicePanel slug="ai-solutions" />
      <p className="ai-scroll-below" aria-hidden="true">
        Scroll for details
      </p>
      <div className="ai-actions ai-after-learn">
        <a href="#ai-showcase">Explore AI solutions</a>
        <a href="#ai-about" className="secondary">
          About our AI work
        </a>
      </div>

      <section className="ai-showcase" id="ai-showcase" aria-label="AI solutions overview">
        <div className="ai-showcase-inner">
          <h2>Transform Your Business with Optimized AI Solutions</h2>
          <p>
            Gateway Workforce delivers cutting-edge AI solutions that empower your enterprise to
            harness the full potential of artificial intelligence—from generative models to intelligent
            automation and data analytics.
          </p>
          <p className="ai-showcase-line">
            <span className="ai-showcase-ico" aria-hidden="true">
              📞
            </span>
            Let&apos;s discuss how we can transform your business with AI!
          </p>
          <a className="ai-showcase-btn" href="#contact">
            <span className="ai-showcase-btn-ico" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.1.65.28 1.28.5 1.9a2 2 0 0 1-.45 2.1L8.09 8.4a16 16 0 0 0 6 6l.68-.87a2 2 0 0 1 2.1-.45c.6.2 1.25.4 1.9.5A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            Schedule 15 Min Call
          </a>
        </div>
      </section>

      <section className="ai-about-split" id="ai-about" aria-label="About">
        <div className="ai-about-text">
          <p className="ai-kicker ai-kicker--rule">
            <span>About us</span>
          </p>
          <h2>
            Transform <span className="ai-about-em">with Custom AI, Automation &amp; Data-Driven Insights</span>
          </h2>
          <p>
            We build advanced AI and ML solutions for enterprises: large language models, intelligent
            automation, predictive analytics, and responsible deployment—aligned to your industry and
            compliance needs.
          </p>
          <div className="ai-stats">
            <article>
              <strong>10+</strong>
              <span>AI Models Deployed</span>
            </article>
            <article>
              <strong>75+</strong>
              <span>Clients</span>
            </article>
            <article>
              <strong>95%</strong>
              <span>Accuracy Rate</span>
            </article>
          </div>
        </div>
        <div className="ai-about-img">
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1000&h=900&q=82"
            alt=""
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      <section className="ai-benefits">
        <p className="ai-kicker">Key Benefits</p>
        <h2>
          Why Partner with Gateway Workforce for <span className="ai-title-under">AI Solutions</span>?
        </h2>
        <p className="ai-lead">
          We work with your teams to understand your challenges, your data, and your stack—then we
          design and ship AI that delivers measurable impact.
        </p>
        <div className="ai-benefits-grid">
          {aiBenefits.map(({ key, title, desc, icon }) => (
            <article key={key} className="ai-benefit-card">
              <div className="ai-benefit-ico" aria-hidden="true">
                <AiBenefitIcon name={icon} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-services" id="ai-services">
        <p className="ai-pill">Our services</p>
        <h2>
          Our AI &amp; Data Intelligence <span className="ai-title-under is-dark">Services</span>
        </h2>
        <p className="ai-services-lead">
          Our team of experienced AI specialists combines industry knowledge, cutting-edge technology, and
          innovative strategies to guide you towards intelligent business solutions.
        </p>
        <div className="ai-svc-rows">
          {aiServiceRows.map(({ title, icon, brief, points, image, imageLeft }) => {
            const imageCell = (
              <div className="ai-svc-image" key="img">
                <img src={image} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
              </div>
            )
            const bodyCell = (
              <div className="ai-svc-body" key="body">
                <div className="ai-svc-head">
                  <span className="ai-svc-ico" aria-hidden="true">
                    <AiSectionIcon name={icon} />
                  </span>
                  <h3>{title}</h3>
                </div>
                {brief ? <p className="ai-svc-brief">{brief}</p> : null}
                <ul>
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            )
            return (
              <article key={title} className="ai-svc-row">
                {imageLeft ? (
                  <>
                    {imageCell}
                    {bodyCell}
                  </>
                ) : (
                  <>
                    {bodyCell}
                    {imageCell}
                  </>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <section className="ai-hire" aria-label="Hiring">
        <h2>
          Ready to <span>Hire Top Talent?</span>
        </h2>
        <p>
          Join hundreds of satisfied clients who have transformed their businesses with our expert
          professionals. Start your project today!
        </p>
        <ul className="ai-hire-features" aria-label="Hiring benefits">
          {hireHighlights.map((row) => (
            <li key={row.label}>
              <span className="ai-hire-ico">
                <HbpoHireRowIcons name={row.icon} />
              </span>
              <span className="ai-hire-txt">{row.label}</span>
            </li>
          ))}
        </ul>
        <a className="ai-hire-btn" href="#contact">
          <span className="ai-hire-btn-ico" aria-hidden="true">
            <HbpoHireFeatureIcon />
          </span>
          Hire Our Talent Now
          <span aria-hidden="true"> →</span>
        </a>
        <p className="ai-hire-note">Free consultation • Quick response • No hidden costs</p>
      </section>

      <section className="ai-bottom" aria-label="Get started">
        <h2>Transform Your Business with Optimized AI Solutions</h2>
        <p>
          From strategy to model deployment, Gateway Workforce helps you adopt AI with confidence,
          security, and measurable ROI.
        </p>
        <a className="ai-bottom-btn" href="#contact">
          <span className="ai-bottom-btn-ico" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.1.65.28 1.28.5 1.9a2 2 0 0 1-.45 2.1L8.09 8.4a16 16 0 0 0 6 6l.68-.87a2 2 0 0 1 2.1-.45c.6.2 1.25.4 1.9.5A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          Schedule 15 Min Call
        </a>
      </section>
    </section>
  )
}

export default AiSolutionsPage
