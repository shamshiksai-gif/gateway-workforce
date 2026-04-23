import LearnMoreServicePanel from './LearnMoreServicePanel'
import { HbpoHireRowIcons, HbpoHireFeatureIcon } from './healthcareBpo/HealthcareBpoShared'
import { SaasBenefitIcon, SaasSectionIcon } from './SaasPageIcons'

const saasServiceRows = [
  {
    title: 'Salesforce Solutions',
    icon: 'cloud',
    points: [
      'Implementation & customization',
      'CRM migration & data integration',
      'Sales Cloud & Service Cloud optimization',
      'Lightning migration & app development',
      'Analytics & AI (Einstein) integration',
    ],
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&h=700&q=82',
    imageLeft: true,
  },
  {
    title: 'Shopify E-Commerce Excellence',
    icon: 'cart',
    points: [
      'Store setup & theme customization',
      'App integration & API development',
      'Migration from other platforms',
      'Performance optimization & SEO',
      'Multi-channel sales integration',
    ],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&h=700&q=82',
    imageLeft: false,
  },
  {
    title: 'HubSpot Growth Stack',
    icon: 'target',
    points: [
      'CRM implementation & automation',
      'Marketing Hub setup & campaign strategy',
      'Sales Hub pipeline optimization',
      'Service Hub customer support solutions',
      'Data sync & system integrations',
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&h=700&q=82',
    imageLeft: true,
  },
  {
    title: 'SaaS Integration & Support',
    icon: 'link',
    points: [
      'Multi-platform SaaS integration',
      'Custom API development',
      'Data migration & synchronization',
      'Ongoing maintenance & support',
      'User training & adoption programs',
    ],
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&h=700&q=82',
    imageLeft: false,
  },
]

const saasBenefits = [
  { key: 'b1', title: 'Certified SaaS Specialists', desc: 'Salesforce, HubSpot & Shopify experts', icon: 'medal', tone: 'orange' },
  { key: 'b2', title: 'Seamless Integrations', desc: 'Connect critical business systems', icon: 'bolt', tone: 'orange' },
  { key: 'b3', title: 'Customization & Scalability', desc: 'Solutions that grow with you', icon: 'palette', tone: 'dark' },
  { key: 'b4', title: 'Performance Optimization', desc: 'Enhance efficiency & adoption', icon: 'trend', tone: 'orange' },
  { key: 'b5', title: 'End-to-End Support', desc: 'Implementation to training', icon: 'headset', tone: 'dark' },
]

const hireHighlights = [
  { label: 'Pre-vetted talent pool', icon: 'usercheck' },
  { label: 'Quick turnaround time', icon: 'clock' },
  { label: 'Proven track record', icon: 'star' },
  { label: 'Quality guarantee', icon: 'check' },
]

function SaasExpertsPage() {
  return (
    <section className="saas-page" id="saas-experts">
      <LearnMoreServicePanel slug="saas-experts" />
      <p className="saas-scroll-below" aria-hidden="true">
        Scroll for details
      </p>
      <div className="saas-actions saas-after-learn">
        <a href="#saas-excellence">Start Integration</a>
        <a href="#saas-services" className="secondary">
          View services
        </a>
      </div>

      <section className="saas-showcase" aria-label="SaaS solutions overview">
        <div className="saas-showcase-inner">
          <h2>Transform Your Business with Optimized SaaS Solutions</h2>
          <p>
            Gateway Workforce bridges the gap between your SaaS platforms to create a seamless,
            high-performance business ecosystem. Whether you need implementation, integration, or
            ongoing optimization, our experts ensure you get maximum value from your technology
            investments.
          </p>
          <p className="saas-showcase-line">
            <span className="saas-showcase-ico" aria-hidden="true">
              📞
            </span>
            Let&apos;s discuss how we can power your SaaS success!
          </p>
          <a className="saas-showcase-btn" href="#contact">
            <span className="saas-showcase-btn-ico" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.1.65.28 1.28.5 1.9a2 2 0 0 1-.45 2.1L8.09 8.4a16 16 0 0 0 6 6l.68-.87a2 2 0 0 1 2.1-.45c.6.2 1.25.4 1.9.5A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            Schedule 15 Min Call
          </a>
        </div>
      </section>

      <section className="saas-excellence" id="saas-excellence" aria-label="SaaS integration">
        <div className="saas-excellence-bg" aria-hidden="true" />
        <div className="saas-excellence-grid">
          <div className="saas-excellence-copy">
            <p className="saas-excellence-kicker">SaaS integration excellence</p>
            <h2>
              <span className="saas-ex-h2a">Optimize with</span>{' '}
              <span className="saas-ex-h2b">SaaS Mastery</span>
            </h2>
            <p className="saas-ex-sub">Salesforce, Shopify &amp; HubSpot specialists</p>
            <p className="saas-ex-body">
              Maximize your business potential with seamless SaaS integration, customization, and
              optimization. Scale efficiently with expert-driven solutions tailored to your needs.
            </p>
            <div className="saas-ex-pills" role="list">
              <span role="listitem">Certified Experts</span>
              <span role="listitem" className="is-dark">
                Custom Integration
              </span>
              <span role="listitem">24/7 Support</span>
              <span role="listitem" className="is-dark">
                ROI Optimization
              </span>
            </div>
            <div className="saas-ex-cta">
              <a className="saas-ex-btn-primary" href="#contact">
                Start Integration <span aria-hidden="true">→</span>
              </a>
              <a className="saas-ex-btn-ghost" href="#saas-services">
                View success stories
              </a>
            </div>
          </div>
          <div className="saas-excellence-visual">
            <div className="saas-ex-frame" />
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=900&h=1100&q=82"
              alt=""
              className="saas-ex-photo"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="saas-ex-rating" role="complementary" aria-label="Client rating">
              <div className="saas-ex-stars" aria-hidden="true">
                ★★★★★
              </div>
              <p className="saas-ex-rating-title">4.7/5 Rating</p>
              <p className="saas-ex-rating-sub">From our clients</p>
            </div>
          </div>
        </div>
        <div className="saas-excellence-bar" aria-hidden="true" />
      </section>

      <section className="saas-about-split" aria-label="About">
        <div className="saas-about-text">
          <p className="saas-kicker saas-kicker--rule">
            <span>About us</span>
          </p>
          <h2>
            Maximize Your Business Potential with <span className="saas-about-em">Seamless SaaS Solutions</span>
          </h2>
          <p>
            At Gateway Workforce, we provide end-to-end SaaS integration for platforms like Salesforce,
            Shopify, and HubSpot. Our consultants help you implement, customize, and optimize your stack
            for measurable growth and adoption.
          </p>
          <div className="saas-stats">
            <article>
              <strong>5+</strong>
              <span>Years of Experience</span>
            </article>
            <article>
              <strong>25+</strong>
              <span>Clients</span>
            </article>
            <article>
              <strong>95%</strong>
              <span>Client Satisfaction</span>
            </article>
          </div>
        </div>
        <div className="saas-about-img">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&h=900&q=82"
            alt=""
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      <section className="saas-benefits">
        <p className="saas-kicker">Key Benefits</p>
        <h2>
          Why Partner with Gateway Workforce for <span className="saas-title-under">SaaS Solutions</span>?
        </h2>
        <p className="saas-lead">
          We understand that every business has unique needs. We listen, analyze your current SaaS
          infrastructure, and deliver tailored solutions that drive growth and efficiency across your
          organization.
        </p>
        <div className="saas-benefits-grid">
          {saasBenefits.map(({ key, title, desc, icon, tone }) => (
            <article key={key} className={`saas-benefit-card saas-benefit-card--${tone}`}>
              <div className={`saas-benefit-ico saas-benefit-ico--${tone}`}>
                <SaasBenefitIcon name={icon} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="saas-services" id="saas-services">
        <p className="saas-pill">Our services</p>
        <h2>
          Our SaaS <span className="saas-title-under is-dark">Expertise</span>
        </h2>
        <p className="saas-services-lead">
          Our team combines deep product expertise with a strategic lens—so you get implementations that
          stick, integrations that hold, and reporting your leaders can trust.
        </p>
        <div className="saas-svc-rows">
          {saasServiceRows.map(({ title, icon, points, image, imageLeft }) => {
            const imageCell = (
              <div className="saas-svc-image" key="img">
                <img src={image} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
              </div>
            )
            const bodyCell = (
              <div className="saas-svc-body" key="body">
                <div className="saas-svc-head">
                  <span className="saas-svc-ico" aria-hidden="true">
                    <SaasSectionIcon name={icon} />
                  </span>
                  <h3>{title}</h3>
                </div>
                <ul>
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            )
            return (
              <article key={title} className="saas-svc-row">
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

      <section className="saas-hire" aria-label="Hiring">
        <h2>
          Ready to <span>Hire Top Talent?</span>
        </h2>
        <p>
          Join hundreds of satisfied clients who have transformed their businesses with our expert
          professionals. Start your project today!
        </p>
        <ul className="saas-hire-features" aria-label="Hiring benefits">
          {hireHighlights.map((row) => (
            <li key={row.label}>
              <span className="saas-hire-ico">
                <HbpoHireRowIcons name={row.icon} />
              </span>
              <span className="saas-hire-txt">{row.label}</span>
            </li>
          ))}
        </ul>
        <a className="saas-hire-btn" href="#contact">
          <span className="saas-hire-btn-ico" aria-hidden="true">
            <HbpoHireFeatureIcon />
          </span>
          Hire Our Talent Now
          <span aria-hidden="true"> →</span>
        </a>
        <p className="saas-hire-note">Free consultation • Quick response • No hidden costs</p>
      </section>

      <section className="saas-bottom" aria-label="Get started">
        <h2>Accelerate Your Cloud Journey with Gateway Workforce</h2>
        <p>
          Whether you&apos;re unifying your CRM, scaling e-commerce, or automating marketing and sales
          pipelines, we deliver hands-on experts who work as an extension of your team.
        </p>
        <p className="saas-bottom-line">
          <span aria-hidden="true">📞</span> Contact us today to discuss how we can support your SaaS
          success!
        </p>
        <a className="saas-bottom-btn" href="#contact">
          <span className="saas-bottom-btn-ico" aria-hidden="true">
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

export default SaasExpertsPage
