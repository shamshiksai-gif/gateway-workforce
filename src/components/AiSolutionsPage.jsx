const aiServices = [
  {
    title: 'Custom LLM Development & Fine-Tuning',
    points: [
      'Domain-specific LLMs for your industry',
      'Fine-tuning OpenAI, Llama 2, Claude & proprietary models',
      'Retrieval-Augmented Generation (RAG) systems',
      'AI chatbots & virtual assistants',
    ],
  },
  {
    title: 'Intelligent Process Automation',
    points: [
      'AI-powered workflow automation',
      'Document processing & data extraction (IDP)',
      'Predictive maintenance & anomaly detection',
      'Robotic Process Automation (RPA) integration',
    ],
  },
  {
    title: 'Data Intelligence & Predictive Analytics',
    points: [
      'Advanced data modeling & forecasting',
      'Customer behavior & sentiment analysis',
      'Real-time business intelligence dashboards',
      'Recommendation engines & personalization',
    ],
  },
  {
    title: 'AI Integration & Optimization',
    points: [
      'API integrations with existing enterprise systems',
      'AI performance monitoring & continuous learning',
      'Responsible AI governance & compliance',
      'Staff training & change management',
    ],
  },
]

const aiBenefits = [
  ['AI & ML Experts', 'Deep expertise in LLMs, NLP & more'],
  ['End-to-End AI Development', 'Strategy to deployment'],
  ['Enterprise-Grade Security', 'Compliant & ethical AI'],
  ['Seamless Integration', 'Works with your tech stack'],
  ['Proven Results', 'Measurable improvements'],
]

function AiSolutionsPage() {
  return (
    <section className="ai-page" id="ai-solutions">
      <section className="ai-hero">
        <div className="ai-hero-copy">
          <p className="eyebrow">Gateway Workforce</p>
          <h1>
            AI & Data Intelligence
            <br />
            Solutions
          </h1>
          <p>
            Transform your business with cutting-edge AI solutions. From machine learning to data
            analytics, we deliver intelligent systems that drive innovation and growth.
          </p>
          <div className="ai-actions">
            <a href="#ai-services">Explore Solutions</a>
            <a href="#ai-about" className="secondary">
              Learn More
            </a>
          </div>
          <div className="ai-tags">
            <span>AI Automation</span>
            <span>Data Analytics</span>
            <span>Machine Learning</span>
            <span>AI Solutions</span>
          </div>
        </div>
      </section>

      <section className="ai-about" id="ai-about">
        <p className="ai-kicker">About Us</p>
        <h2>Transform Your Business with Custom AI, Automation & Data-Driven Insights</h2>
        <p>
          At Gateway Workforce, we build cutting-edge AI solutions that empower enterprises to
          harness the full potential of artificial intelligence.
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
      </section>

      <section className="ai-benefits">
        <p className="ai-kicker">Key Benefits</p>
        <h2>Why Partner with Gateway Workforce for AI Solutions?</h2>
        <p className="ai-lead">
          We assess your processes, analyze your data potential, and deliver intelligent AI
          solutions that transform operations.
        </p>
        <div className="ai-benefits-grid">
          {aiBenefits.map(([title, desc]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-services" id="ai-services">
        <p className="ai-kicker">Our Services</p>
        <h2>Our AI & Data Intelligence Services</h2>
        <p className="ai-services-lead">
          Our specialists combine strategy and advanced AI engineering to deliver intelligent
          business outcomes.
        </p>
        <div className="ai-services-grid">
          {aiServices.map((service) => (
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

      <section className="ai-hire">
        <h2>
          Ready to <span>Hire Top Talent?</span>
        </h2>
        <p>
          Join hundreds of satisfied clients who have transformed their businesses with our expert
          professionals.
        </p>
        <a href="#contact">Hire Our Talent Now</a>
      </section>

      <section className="ai-bottom">
        <h2>Transform Your Business with Optimized AI Solutions</h2>
        <p>
          Gateway Workforce delivers cutting-edge AI solutions that empower your enterprise to
          harness artificial intelligence&apos;s full potential.
        </p>
        <a href="#contact">Schedule 15 Min Call</a>
      </section>
    </section>
  )
}

export default AiSolutionsPage
