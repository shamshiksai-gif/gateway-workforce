const delegateTasks = [
  'Calendar management',
  'Inbox management',
  'Meeting prep and follow-up',
  'Travel coordination',
  'Competitive and market intelligence',
  'Recession-specific strategy support',
  'Process documentation',
  'Expense tracking',
  'Cold email outreach',
  'Research and vendor support',
  'Project coordination',
  'Relationship management',
  'File and document organization',
  'Light bookkeeping support',
  'Task tracking and reminders',
  'Gift or appreciation coordination',
  'Internal dashboard updates',
  'Software/tool vetting',
  'Social media scheduling',
  'Team communication support',
  'Document editing and proofreading',
]

const processSteps = [
  ['Step 1', 'Sales Call', 'Identify your exact needs and ideal assistant profile.'],
  ['Step 2', 'Discovery Call', 'Deep dive into tasks, tools, and culture fit.'],
  ['Step 3', 'Placement Process', 'We vet and shortlist top India-based candidates.'],
  ['Step 4', 'Kickoff Call', 'You meet your VA and set goals and communication plans.'],
  ['Step 5', 'Onboarding', 'Guided onboarding with your success consultant.'],
  ['Step 6', 'Nurturing', 'Ongoing check-ins and support throughout the partnership.'],
]

function VirtualAssistantPage() {
  return (
    <section className="va-page" id="virtual-assistant">
      <section className="va-hero">
        <p className="eyebrow">Virtual Assistant Background</p>
        <h1>Hire a Virtual Assistant Expert at just $6</h1>
        <p className="va-sub">Accomplish More. Juggle Less.</p>
        <a href="#contact" className="va-primary-btn">
          Hire Gateway
        </a>
      </section>

      <section className="va-pillars">
        <article>
          <h3>India-Based</h3>
          <p>
            We search the entire country for a virtual assistant to find the right person for your
            organization.
          </p>
        </article>
        <article>
          <h3>Highly Vetted</h3>
          <p>
            Our recruiting process includes multiple video interviews and skills assessments to
            select talented, hard-working candidates.
          </p>
        </article>
      </section>

      <section className="va-challenges">
        <h2>What Challenges Are Limiting Your Growth?</h2>
        <div className="va-grid-3">
          <article>
            <h3>Lack of Time</h3>
            <p>Stretched too thin to hire support or focus on strategic growth?</p>
          </article>
          <article>
            <h3>Unanswered Calls & Emails</h3>
            <p>Missing important opportunities and client communication?</p>
          </article>
          <article>
            <h3>Missed Projects & Deadlines</h3>
            <p>Too many moving parts creating chaos and delayed execution?</p>
          </article>
        </div>
      </section>

      <section className="va-services">
        <h2>Professional Virtual Assistant Services</h2>
        <p>Gateway services provide a wide variety of delegated support solutions.</p>
        <div className="va-cats">
          <span>Administrative Tasks</span>
          <span>Operational Tasks</span>
          <span>Financial Tasks</span>
          <span>Personal Tasks</span>
          <span>Marketing Tasks</span>
        </div>
      </section>

      <section className="va-delegate">
        <h2>Essential Tasks You Can Delegate to Virtual Assistants</h2>
        <p>
          Delegation helps you grow your business. To get started, here are commonly delegated
          tasks you can hand over today.
        </p>
        <ol>
          {delegateTasks.map((task, i) => (
            <li key={task}>
              <strong>{i + 1}.</strong> {task}
            </li>
          ))}
        </ol>
        <div className="va-inline-cta">
          <h3>Ready to Delegate and Focus on What Matters Most?</h3>
          <p>
            Let our skilled assistants handle these critical tasks so you can focus on growth and
            high-impact work.
          </p>
          <div className="va-inline-actions">
            <a href="#contact">Get Started Today</a>
            <a href="#contact">Learn More About Our Services</a>
          </div>
        </div>
      </section>

      <section className="va-process">
        <h2>Our Virtual Assistant Process</h2>
        <div className="va-process-grid">
          {processSteps.map(([step, title, text]) => (
            <article key={step}>
              <p className="va-step">{step}</p>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="va-diff">
        <h2>The Gateway Difference</h2>
        <div className="va-grid-3">
          <article>
            <h3>Indian-Based Professionals</h3>
            <p>Vetted professionals with proven experience.</p>
          </article>
          <article>
            <h3>No Overhead Costs</h3>
            <p>Remote model helps keep operating costs low.</p>
          </article>
          <article>
            <h3>Managed Onboarding</h3>
            <p>We guide you through onboarding and ongoing support.</p>
          </article>
        </div>
        <div className="va-audience">
          <h3>Who can use our Virtual Assistant Services?</h3>
          <p>
            Executives, small businesses, church leaders, sales teams, attorneys, consultants,
            entrepreneurs, photographers, authors, and more.
          </p>
        </div>
      </section>

      <section className="va-bottom">
        <h2>Stop spending countless hours every week on tasks someone else can do for you.</h2>
        <p>
          Contact us today to discover how you can reclaim your schedule, focus on what matters,
          and achieve the growth you deserve.
        </p>
        <a href="#contact">Hire Gateway</a>
        <div className="va-long-copy">
          <h3>Why Choose Gateway Workforce for Virtual Assistant Services?</h3>
          <p>
            The details in your organization must be handled, but you are not always the best
            person to handle them. Gateway&apos;s AI-empowered virtual assistant services are
            pre-vetted and intentionally matched to your workflows so you gain time, focus, and
            consistency. Our standards are high, our acceptance rate is extremely selective, and
            our team supports you with flexible plans and ongoing guidance.
          </p>
        </div>
      </section>
    </section>
  )
}

export default VirtualAssistantPage
