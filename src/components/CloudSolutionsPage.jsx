const cloudServices = [
  {
    title: 'Cloud Deployment & Architecture',
    points: [
      'AWS & Azure infrastructure setup',
      'Hybrid & multi-cloud strategy',
      'Kubernetes & container orchestration',
      'Serverless computing (AWS Lambda, Azure Functions)',
    ],
  },
  {
    title: 'Cloud Migration Services',
    points: [
      'Lift-and-shift & refactoring strategies',
      'Database migration (SQL, NoSQL, Oracle to cloud)',
      'Application re-platforming & modernization',
      'Post-migration optimization',
    ],
  },
  {
    title: 'Cloud Management & DevOps',
    points: [
      '24/7 monitoring & incident response',
      'Cost governance & FinOps optimization',
      'CI/CD pipeline automation',
      'Infrastructure as Code (Terraform, CloudFormation)',
    ],
  },
  {
    title: 'Security & Compliance',
    points: [
      'Identity & Access Management (IAM)',
      'Data encryption & threat detection',
      'Compliance audits & remediation',
      'Disaster recovery & backup solutions',
    ],
  },
]

const cloudBenefits = [
  ['Certified Cloud Specialists', 'AWS & Azure Certified Pros'],
  ['Seamless Integrations', 'Connect Critical Systems'],
  ['Customization & Scalability', 'Tailored Solutions'],
  ['Performance Optimization', 'Enhanced Efficiency'],
  ['End-to-End Support', 'Implementation to Management'],
]

function CloudSolutionsPage() {
  return (
    <section className="cloud-page" id="cloud-solutions">
      <section className="cloud-hero">
        <div className="cloud-hero-copy">
          <p className="eyebrow">Cloud Solutions Excellence</p>
          <h1>Transform with Cloud Excellence</h1>
          <h2>AWS & Azure Migration Experts</h2>
          <p>
            Accelerate your digital transformation with our expert cloud migration, optimization,
            and SaaS development services.
          </p>
          <div className="cloud-badges">
            <span>99.9% Uptime</span>
            <span>24/7 Support</span>
            <span>Auto-Scaling</span>
            <span>Cost Optimization</span>
          </div>
          <div className="cloud-actions">
            <a href="#contact">Start Migration</a>
            <a href="#cloud-services" className="secondary">
              View Case Studies
            </a>
          </div>
        </div>
      </section>

      <section className="cloud-about">
        <p className="cloud-kicker">About Us</p>
        <h2>Seamless Cloud Deployment, Migration & Management</h2>
        <p>
          At Gateway Workforce, we empower businesses with end-to-end cloud solutions,
          specializing in AWS and Azure deployment, migration, and management.
        </p>
        <div className="cloud-stats">
          <article>
            <strong>7+</strong>
            <span>Years of Experience</span>
          </article>
          <article>
            <strong>100+</strong>
            <span>Clients</span>
          </article>
          <article>
            <strong>99.9%</strong>
            <span>Uptime Guarantee</span>
          </article>
        </div>
      </section>

      <section className="cloud-benefits">
        <p className="cloud-kicker">Key Benefits</p>
        <h2>Why Partner with Gateway Workforce for Cloud Solutions?</h2>
        <p className="cloud-lead">
          We assess your current infrastructure and deliver scalable cloud solutions that drive
          innovation and reduce cost.
        </p>
        <div className="cloud-benefits-grid">
          {cloudBenefits.map(([title, desc]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cloud-services" id="cloud-services">
        <p className="cloud-kicker">Our Services</p>
        <h2>Our Cloud Services</h2>
        <div className="cloud-services-grid">
          {cloudServices.map((service) => (
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

      <section className="cloud-hire">
        <h2>
          Ready to <span>Hire Top Talent?</span>
        </h2>
        <p>
          Join hundreds of satisfied clients who have transformed their businesses with our expert
          professionals.
        </p>
        <a href="#contact">Hire Our Talent Now</a>
      </section>

      <section className="cloud-bottom">
        <h2>Accelerate Your Cloud Journey with Gateway Workforce</h2>
        <p>
          Whether you&apos;re migrating to the cloud, optimizing workloads, or managing
          infrastructure, Gateway Workforce provides reliable, scalable, and secure cloud solutions.
        </p>
        <a href="#contact">Schedule 15 Min Call</a>
      </section>
    </section>
  )
}

export default CloudSolutionsPage
