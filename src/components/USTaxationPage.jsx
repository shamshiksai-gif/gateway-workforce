const taxServices = [
  {
    title: 'Tax Preparation & Compliance',
    points: [
      'Individual & business tax returns (1040, 1120, 1065, 1120S, etc.)',
      'State & federal tax filings',
      'Tax planning & strategy',
      'IRS audit support & resolution',
    ],
  },
  {
    title: 'Accounting & Bookkeeping',
    points: [
      'General ledger management',
      'Accounts payable/receivable (AP/AR)',
      'Bank & credit card reconciliation',
      'Financial statement preparation (P&L, balance sheets, cash flow)',
    ],
  },
  {
    title: 'CPA & Accounting Firm Support',
    points: [
      'Outsourced tax return preparation',
      'Client accounting & payroll processing',
      'Month-end & year-end closing',
      'Financial analysis & reporting',
    ],
  },
  {
    title: 'Payroll & Business Advisory',
    points: [
      'Payroll processing & tax filings (941, W-2, 1099)',
      'Sales tax compliance',
      'CFO advisory & financial consulting',
    ],
  },
]

const taxBenefits = [
  ['Certified Expertise', 'US GAAP & IRS Pros'],
  ['Cost Efficiency', 'Reduce OpEx'],
  ['Scalable Solutions', 'For All Firm Sizes'],
  ['Advanced Technology', 'Secure Cloud Tech'],
  ['Timely & Accurate', 'Error Minimization'],
]

function USTaxationPage() {
  return (
    <section className="tax-page" id="us-taxation">
      <section className="tax-hero">
        <div className="tax-hero-copy">
          <p className="eyebrow">Gateway Workforce:</p>
          <h1>
            Expert US Taxation
            <br />& Accounting Services
          </h1>
          <p className="tax-scroll">Scroll Down</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=80"
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      </section>

      <section className="tax-intro">
        <p className="tax-kicker">Precision Accounting Services</p>
        <h2>Precision Accounting & Compliance Solutions for Financial Success</h2>
        <p>
          At Gateway Workforce, we provide comprehensive US taxation and accounting services tailored
          for accounting firms, CPAs, and financial professionals. Our expert team ensures accurate
          bookkeeping, tax compliance, and financial reporting, allowing you to focus on strategic
          growth while we handle the complexities of numbers and regulations.
        </p>
        <a href="#tax-services" className="tax-learn-btn">
          Learn More
        </a>
      </section>

      <section className="tax-services" id="tax-services">
        <p className="tax-kicker">Our Services</p>
        <h2>Our Taxation & Accounting Services</h2>
        <div className="tax-service-grid">
          {taxServices.map((service) => (
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

      <section className="tax-benefits">
        <p className="tax-kicker">Key Benefits</p>
        <h2>Why Partner with Gateway Workforce for Taxation & Accounting?</h2>
        <div className="tax-benefits-grid">
          {taxBenefits.map(([title, desc]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tax-efficiency">
        <h2>Enhance Efficiency & Ensure Compliance with Gateway Workforce</h2>
        <p>
          By outsourcing your taxation and accounting needs to Gateway Workforce, you gain a
          reliable partner dedicated to accuracy, compliance, and efficiency. Our services help
          reduce workload, minimize errors, and improve profitability for your firm or business.
        </p>
        <p className="tax-cta-line">
          Contact us today to discuss how we can support your accounting needs!
        </p>
        <div className="tax-cta-actions">
          <a href="#contact">Get a Free Consultation</a>
          <a href="#contact">Request a Quote</a>
        </div>
      </section>

      <section className="tax-bottom">
        <h2>Transform Your Business with Optimized US Taxation Solutions</h2>
        <p>
          Gateway Workforce provides comprehensive US taxation services with precision and
          expertise. From individual tax preparation to complex business filings, our certified
          professionals ensure compliance while maximizing your tax benefits and minimizing
          liabilities.
        </p>
        <a href="#contact">Schedule 15 Min Call</a>
      </section>

      <section className="tax-hire">
        <h2>
          Ready to <span>Hire Top Talent?</span>
        </h2>
        <p>
          Join hundreds of satisfied clients who have transformed their businesses with our expert
          professionals. Start your project today!
        </p>
        <a href="#contact">Hire Our Talent Now</a>
      </section>
    </section>
  )
}

export default USTaxationPage
