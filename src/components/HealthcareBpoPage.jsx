const serviceCards = [
  {
    title: 'End-to-End Medical Billing & Revenue Cycle Management',
    points: [
      'Claims submission & processing',
      'Denial management & appeals',
      'Payment posting & reconciliation',
      'Patient billing & collections',
      'A/R follow-ups & reporting',
    ],
  },
  {
    title: 'Telehealth Support Services',
    points: [
      'Virtual appointment scheduling',
      'Patient intake & documentation',
      'Remote care coordination',
      'Telemedicine billing & coding',
      'Compliance & data security',
    ],
  },
  {
    title: 'Additional Healthcare BPO Solutions',
    points: [
      'Medical coding & auditing',
      'Credentialing & provider enrollment',
      'Customer service & patient support',
      'EHR/EMR management',
    ],
  },
]

const whyCards = [
  [
    'Industry Expertise',
    'Skilled professionals with deep knowledge of medical billing, coding (ICD-10, CPT, HCPCS), and compliance (HIPAA, CMS).',
  ],
  ['Cost-Effective Solutions', 'Reduce overhead costs while improving billing accuracy and collections.'],
  ['Scalable Support', 'Flexible services tailored to practices of all sizes.'],
  [
    'Advanced Technology',
    'Secure, AI-driven platforms for efficient claims processing and telehealth management.',
  ],
  ['24/7 Support', 'Dedicated teams ensuring uninterrupted operations.'],
]

function HealthcareBpoPage() {
  return (
    <section className="hbpo-page" id="healthcare-bpo">
      <section className="hbpo-hero">
        <div className="hbpo-hero-copy">
          <p className="eyebrow">Gateway Workforce:</p>
          <h1>
            End-to-End
            <br />
            Medical Billing &
            <br />
            Telehealth Support
          </h1>
          <p className="hbpo-scroll">Scroll Down</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80"
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      </section>

      <section className="hbpo-about">
        <p className="hbpo-kicker">About Us</p>
        <h2>Streamline Your Healthcare Operations with Expert BPO Solutions</h2>
        <p>
          At Gateway Workforce, we provide comprehensive Healthcare Business Process Outsourcing
          (BPO) services, specializing in end-to-end medical billing and telehealth support. Our
          tailored solutions help healthcare providers, hospitals, and clinics optimize revenue
          cycles, reduce administrative burdens, and enhance patient care through seamless
          outsourcing.
        </p>
        <div className="hbpo-stats">
          <article>
            <strong>3+</strong>
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

      <section className="hbpo-why">
        <h2>Why Choose Gateway Workforce for Healthcare BPO?</h2>
        <div className="hbpo-why-grid">
          <div className="hbpo-why-image" />
          {whyCards.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hbpo-services">
        <h2>Our Healthcare BPO Services</h2>
        <p>
          Our team of experienced consultants combines industry knowledge, cutting-edge technology,
          and innovative strategies.
        </p>
        <div className="hbpo-service-grid">
          {serviceCards.map((card) => (
            <article key={card.title}>
              <h3>{card.title}</h3>
              <ul>
                {card.points.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="hbpo-boost">
        <img
          src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80"
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <div>
          <h2>Boost Efficiency & Maximize Revenue</h2>
          <p>
            By partnering with Gateway Workforce, healthcare providers can focus on delivering
            quality care while we handle the complexities of billing, coding, and telehealth
            operations. Our end-to-end solutions ensure faster reimbursements, fewer claim denials,
            and improved financial performance.
          </p>
        </div>
      </section>

      <section className="hbpo-hire">
        <h2>
          Ready to <span>Hire Top Talent?</span>
        </h2>
        <p>
          Join hundreds of satisfied clients who have transformed their businesses with our expert
          professionals. Start your project today!
        </p>
        <a href="#contact">Hire Our Talent Now</a>
      </section>

      <section className="hbpo-bottom">
        <h2>Transform Your Business with Optimized Healthcare BPO Solutions</h2>
        <p>
          Gateway Workforce streamlines your healthcare operations with comprehensive BPO services.
          From medical billing to telehealth support, our experts ensure you maximize revenue while
          reducing administrative burdens and enhancing patient care.
        </p>
        <a href="#contact">Schedule 15 Min Call</a>
      </section>
    </section>
  )
}

export default HealthcareBpoPage
