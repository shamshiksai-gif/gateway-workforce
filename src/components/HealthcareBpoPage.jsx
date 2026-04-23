import { HbpoHireFeatureIcon, HbpoHireRowIcons } from './healthcareBpo/HealthcareBpoShared'

const serviceCards = [
  {
    title: 'End-to-End Medical Billing & Revenue Cycle Management',
    icon: 'dollar',
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
    icon: 'laptop',
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
    icon: 'case',
    points: [
      'Medical coding & auditing',
      'Credentialing & provider enrollment',
      'Customer service & patient support',
      'EHR/EMR management',
    ],
  },
]

const whyCards = [
  { title: 'Industry Expertise', text: 'Skilled professionals with deep knowledge of medical billing, coding (ICD-10, CPT, HCPCS), and compliance (HIPAA, CMS).', icon: 'expert' },
  {
    title: 'Cost-Effective Solutions',
    text: 'Reduce overhead costs while improving billing accuracy and collections.',
    icon: 'cost',
  },
  { title: 'Scalable Support', text: 'Flexible services tailored to practices of all sizes.', icon: 'scale' },
  {
    title: 'Advanced Technology',
    text: 'Secure, AI-driven platforms for efficient claims processing and telehealth management.',
    icon: 'tech',
  },
  { title: '24/7 Support', text: 'Dedicated teams ensuring uninterrupted operations.', icon: 'clock' },
]

const hireHighlights = [
  { label: 'Pre-vetted talent pool', icon: 'usercheck' },
  { label: 'Quick turnaround time', icon: 'clock' },
  { label: 'Proven track record', icon: 'star' },
  { label: 'Quality guarantee', icon: 'shield' },
]

function ServiceCardIcon({ name }) {
  const s = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6 }
  switch (name) {
    case 'dollar':
      return (
        <svg {...s} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 6v12M15 8.5a2.5 2.5 0 0 0-5 0c0 1.5 2.5 1.2 2.5 3a1.5 1.5 0 0 1-3 0" />
        </svg>
      )
    case 'laptop':
      return (
        <svg {...s} aria-hidden="true">
          <rect x="3" y="5" width="18" height="12" rx="1.5" />
          <path d="M2 19h20" />
        </svg>
      )
    case 'case':
      return (
        <svg {...s} aria-hidden="true">
          <rect x="5" y="6" width="14" height="12" rx="1.2" />
          <path d="M9 6V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V6" />
        </svg>
      )
    default:
      return null
  }
}

function WhyCardIcon({ name }) {
  const s = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }
  switch (name) {
    case 'expert':
      return (
        <svg {...s} aria-hidden="true">
          <rect x="3" y="6" width="16" height="12" rx="1" />
          <path d="M7 6V4M17 6V4" />
        </svg>
      )
    case 'cost':
      return (
        <svg {...s} aria-hidden="true">
          <path d="M12 2v4M12 18v4M3 12h4M17 12h4" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case 'scale':
      return (
        <svg {...s} aria-hidden="true">
          <circle cx="8" cy="8" r="2.3" />
          <circle cx="16" cy="8" r="2.3" />
          <circle cx="12" cy="16" r="2.3" />
        </svg>
      )
    case 'tech':
      return (
        <svg {...s} aria-hidden="true">
          <rect x="4" y="4" width="7" height="7" rx="0.5" />
          <rect x="14" y="4" width="6" height="6" rx="0.5" />
          <path d="M9 18h11M4 18h.01" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...s} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    default:
      return null
  }
}

function HealthcareBpoPage() {
  return (
    <section className="hbpo-page" id="healthcare-bpo">
      <div className="hbpo-hero hbpo-hero--legacy">
        <div className="hbpo-hero-copy">
          <p className="hbpo-eyebrow">Gateway Workforce:</p>
          <h1>End-to-End Medical Billing &amp; Telehealth Support</h1>
          <p className="hbpo-scroll" aria-hidden="true">
            Scroll down
          </p>
        </div>
        <div className="hbpo-hero-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&h=900&q=80"
            alt=""
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <section className="hbpo-about" aria-label="About">
        <p className="hbpo-kicker hbpo-kicker--rule">
          <span>About us</span>
        </p>
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

      <section className="hbpo-why" aria-label="Why us">
        <p className="hbpo-kicker hbpo-kicker--rule">
          <span>Why choose us</span>
        </p>
        <h2>Why Choose Gateway Workforce for Healthcare BPO?</h2>
        <div className="hbpo-why-grid">
          <div className="hbpo-why-image">
            <div className="hbpo-contact-floating" role="complementary" aria-label="Contact">
              <p className="hbpo-contact-title">Contact Us</p>
              <a href="mailto:info@gatewayworkforce.com" className="hbpo-contact-email">
                info@gatewayworkforce.com
              </a>
            </div>
          </div>
          {whyCards.map(({ title, text, icon }) => (
            <article key={title} className="hbpo-why-card">
              <span className="hbpo-why-ico" aria-hidden="true">
                <WhyCardIcon name={icon} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hbpo-services" aria-label="Services">
        <p className="hbpo-pill">Our service</p>
        <h2 className="hbpo-services-title">
          Our <span className="hbpo-services-em">Healthcare BPO</span> Services
        </h2>
        <p className="hbpo-services-lead">
          Our team of experienced consultants combines industry knowledge, cutting-edge technology, and
          innovative strategies to guide you towards a brighter and greener future.
        </p>
        <div className="hbpo-service-grid">
          {serviceCards.map((card) => (
            <article key={card.title} className="hbpo-svc-article">
              <span className="hbpo-svc-icon" aria-hidden="true">
                <ServiceCardIcon name={card.icon} />
              </span>
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
          <h2 className="hbpo-boost-title">Boost Efficiency &amp; Maximize Revenue</h2>
          <p>
            By partnering with Gateway Workforce, healthcare providers can focus on delivering
            quality care while we handle the complexities of billing, coding, and telehealth
            operations. Our end-to-end solutions ensure faster reimbursements, fewer claim denials, and
            improved financial performance.
          </p>
        </div>
      </section>

      <section className="hbpo-hire" aria-label="Hiring">
        <h2>
          Ready to <span>Hire Top Talent?</span>
        </h2>
        <p>
          Join hundreds of satisfied clients who have transformed their businesses with our expert
          professionals. Start your project today!
        </p>
        <ul className="hbpo-hire-features" aria-label="Hiring benefits">
          {hireHighlights.map((row) => (
            <li key={row.label}>
              <span className="hbpo-hire-ico">
                <HbpoHireRowIcons name={row.icon} />
              </span>
              <span className="hbpo-hire-txt">{row.label}</span>
            </li>
          ))}
        </ul>
        <a className="hbpo-hire-btn" href="#contact">
          <span className="hbpo-hire-btn-ico" aria-hidden="true">
            <HbpoHireFeatureIcon />
          </span>
          Hire Our Talent Now
          <span aria-hidden="true"> →</span>
        </a>
        <p className="hbpo-hire-note">Free consultation • Quick response • No hidden costs</p>
      </section>

      <section className="hbpo-bottom" aria-label="Get started">
        <h2>Transform Your Business with Optimized Healthcare BPO Solutions</h2>
        <p>
          Gateway Workforce streamlines your healthcare operations with comprehensive BPO services.
          From medical billing to telehealth support, our experts ensure you maximize revenue while
          reducing administrative burdens and enhancing patient care.
        </p>
        <p className="hbpo-bottom-discuss">
          <span className="hbpo-bottom-emoji" aria-hidden="true">
            📞
          </span>
          Let&apos;s discuss how we can optimize your healthcare operations!
        </p>
        <a className="hbpo-bottom-btn" href="#contact">
          <span className="hbpo-bottom-btn-ico" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.1.65.28 1.28.5 1.9a2 2 0 0 1-.45 2.1L8.09 8.4a16 16 0 0 0 6 6l.68-.87a2 2 0 0 1 2.1-.45c.6.2 1.25.4 1.9.5A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          Schedule 15 Min Call
        </a>
        <p className="hbpo-bottom-foot">Gateway Workforce – Your partner for expert healthcare BPO talent.</p>
      </section>
    </section>
  )
}

export default HealthcareBpoPage
