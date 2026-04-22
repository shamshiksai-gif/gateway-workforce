const saasServices = [
  {
    title: 'Salesforce Solutions',
    points: [
      'Implementation & customization',
      'CRM migration & data integration',
      'Sales Cloud & Service Cloud optimization',
      'Lightning migration & app development',
      'Analytics & AI (Einstein) integration',
    ],
  },
  {
    title: 'Shopify E-Commerce Excellence',
    points: [
      'Store setup & theme customization',
      'App integration & API development',
      'Migration from other platforms',
      'Performance optimization & SEO',
      'Multi-channel sales integration',
    ],
  },
  {
    title: 'HubSpot Growth Stack',
    points: [
      'CRM implementation & automation',
      'Marketing Hub setup & campaign strategy',
      'Sales Hub pipeline optimization',
      'Service Hub customer support solutions',
      'Data sync & system integrations',
    ],
  },
  {
    title: 'SaaS Integration & Support',
    points: [
      'Multi-platform SaaS integration',
      'Custom API development',
      'Data migration & synchronization',
      'Ongoing maintenance & support',
      'User training & adoption programs',
    ],
  },
]

const saasBenefits = [
  ['Certified SaaS Specialists', 'Salesforce, HubSpot & Shopify experts'],
  ['Seamless Integrations', 'Connect critical business systems'],
  ['Customization & Scalability', 'Solutions that grow with you'],
  ['Performance Optimization', 'Enhance efficiency & adoption'],
  ['End-to-End Support', 'Implementation to training'],
]

function SaasExpertsPage() {
  return (
    <section className="saas-page" id="saas-experts">
      <section className="saas-hero">
        <div className="saas-hero-copy">
          <p className="eyebrow">SaaS Integration Excellence</p>
          <h1>Optimize with SaaS Mastery</h1>
          <h2>Salesforce, Shopify & HubSpot Specialists</h2>
          <p>
            Maximize your business potential with seamless SaaS integration, customization, and
            optimization tailored to your needs.
          </p>
          <div className="saas-badges">
            <span>Certified Experts</span>
            <span>Custom Integration</span>
            <span>24/7 Support</span>
            <span>ROI Optimization</span>
          </div>
          <div className="saas-actions">
            <a href="#contact">Start Integration</a>
            <a href="#saas-services" className="secondary">
              View Success Stories
            </a>
          </div>
        </div>
      </section>

      <section className="saas-about">
        <p className="saas-kicker">About Us</p>
        <h2>Maximize Your Business Potential with Seamless SaaS Solutions</h2>
        <p>
          At Gateway Workforce, we specialize in end-to-end SaaS integration, customization, and
          optimization for Salesforce, Shopify, and HubSpot.
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
      </section>

      <section className="saas-benefits">
        <p className="saas-kicker">Key Benefits</p>
        <h2>Why Partner with Gateway Workforce for SaaS Solutions?</h2>
        <p className="saas-lead">
          We analyze your current SaaS stack and deliver tailored solutions that drive growth and
          operational efficiency.
        </p>
        <div className="saas-benefits-grid">
          {saasBenefits.map(([title, desc]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="saas-services" id="saas-services">
        <p className="saas-kicker">Our Services</p>
        <h2>Our SaaS Expertise</h2>
        <p className="saas-services-lead">
          Our specialists combine strategy and platform expertise to optimize business operations.
        </p>
        <div className="saas-services-grid">
          {saasServices.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="saas-hire">
        <h2>
          Ready to <span>Hire Top Talent?</span>
        </h2>
        <p>
          Join hundreds of satisfied clients who have transformed their businesses with our expert
          professionals.
        </p>
        <a href="#contact">Hire Our Talent Now</a>
      </section>

      <section className="saas-bottom">
        <h2>Transform Your Business with Optimized SaaS Solutions</h2>
        <p>
          Gateway Workforce bridges your SaaS platforms into a seamless high-performance ecosystem.
          From implementation to optimization, we maximize your technology ROI.
        </p>
        <a href="#contact">Schedule 15 Min Call</a>
      </section>
    </section>
  )
}

export default SaasExpertsPage
