import LearnMoreServicePanel from './LearnMoreServicePanel'
import {
  vaHero,
  vaProfessional,
  vaCategories,
  vaAdministrative,
  vaDelegateIntro,
  vaTasks,
  vaDelegateCta,
  vaChallenges,
  vaWhyChoose,
  vaProcess,
  vaAudience,
  vaDifference,
  vaClosing,
} from '../data/vaPageContent'
import { VaBenefitIcon, VaProcessIcon, VaDiffIcon, VaWhyIcon } from './VaPageIcons'

function VirtualAssistantPage() {
  return (
    <section className="va-page" id="virtual-assistant">
      <LearnMoreServicePanel slug="virtual-assistant" />

      <div className="va-block va-block--hero">
        <h1 className="va-hero-h1">
          {vaHero.titleBefore}
          <span className="va-hero-price">{vaHero.price}</span>
        </h1>
        <div className="va-hero-line" aria-hidden="true" />
        <p className="va-hero-sub">{vaHero.sub}</p>
        <a className="va-btn-primary" href="#contact">
          Hire Gateway
        </a>
        <div className="va-pillars">
          {vaHero.pillars.map((p) => (
            <article key={p.kicker} className="va-glass-card va-pillar-card">
              <p className="va-pillar-kicker">{p.kicker}</p>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="va-block">
        <h2 className="va-h2">{vaProfessional.title}</h2>
        <p className="va-lead">{vaProfessional.lead}</p>
        <div className="va-gradient-rule" aria-hidden="true" />

        <div className="va-prof-layout">
          <nav className="va-cat-sidebar" aria-label="Service categories">
            {vaCategories.map((c, i) => (
              <div
                key={c}
                className={`va-cat-item${i === vaCategories.length - 1 ? ' is-active' : ''}`}
              >
                <span className="va-cat-item-label">{c}</span>
                <span className="va-cat-item-dot" aria-hidden="true" />
              </div>
            ))}
          </nav>

          <div className="va-admin-panel va-glass-card">
            <div className="va-admin-split">
              <div className="va-admin-image">
                <img
                  src={vaAdministrative.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="va-admin-body">
                <h3 className="va-admin-h3">{vaAdministrative.title}</h3>
                <ul className="va-admin-list">
                  {vaAdministrative.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="va-block" id="va-essential-tasks">
        <h2 className="va-h2">{vaDelegateIntro.title}</h2>
        <p className="va-lead va-lead--narrow">{vaDelegateIntro.lead}</p>
        <div className="va-benefit-pill">
          <ul className="va-benefit-strip">
            {vaDelegateIntro.benefits.map((b) => (
              <li key={b.key} className="va-benefit-item">
                <span className={`va-benefit-ic va-benefit-ic--${b.icon}`} aria-hidden="true">
                  <VaBenefitIcon name={b.icon} />
                </span>
                <span>{b.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="va-task-grid">
          {vaTasks.map((t) => (
            <article key={t.n} className="va-task-card">
              <div className="va-task-top">
                <span className="va-task-badge">{t.n}</span>
                <h3 className="va-task-title">{t.title}</h3>
              </div>
              <p className="va-task-text">{t.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="va-block va-block--cta-mid">
        <h2 className="va-h2">{vaDelegateCta.title}</h2>
        <p className="va-lead va-lead--narrow">{vaDelegateCta.lead}</p>
        <div className="va-mid-actions">
          <a className="va-btn-primary" href="#contact">
            {vaDelegateCta.primary}
          </a>
          <a className="va-btn-ghost" href="#va-essential-tasks">
            {vaDelegateCta.secondary}
          </a>
        </div>
      </div>

      <div className="va-block">
        <h2 className="va-h2">{vaChallenges.title}</h2>
        <div className="va-challenge-grid">
          {vaChallenges.items.map((c) => (
            <article key={c.key} className="va-glass-card va-challenge-card">
              <div className="va-challenge-img">
                <img src={c.image} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="va-block">
        <h2 className="va-h2">{vaWhyChoose.title}</h2>
        <div className="va-why-grid">
          <div className="va-glass-card va-why-col">
            <div className="va-why-icon va-why-icon--chart" aria-hidden="true">
              <VaWhyIcon name="chart" />
            </div>
            {vaWhyChoose.left.paras.map((p, i) => (
              <p key={`l-${i}`}>{p}</p>
            ))}
            <p className="va-why-hl va-why-hl--amber">{vaWhyChoose.left.highlight1}</p>
            {vaWhyChoose.left.paras2.map((p, i) => (
              <p key={`l2-${i}`}>{p}</p>
            ))}
            <p className="va-why-hl va-why-hl--red">{vaWhyChoose.left.highlight2}</p>
          </div>
          <div className="va-glass-card va-why-col">
            <div className="va-why-icon va-why-icon--shield" aria-hidden="true">
              <VaWhyIcon name="shield" />
            </div>
            {vaWhyChoose.right.paras.map((p, i) => (
              <p key={`r-${i}`}>{p}</p>
            ))}
            <p className="va-why-hl va-why-hl--teal">{vaWhyChoose.right.highlight}</p>
            <p>{vaWhyChoose.right.closing}</p>
          </div>
        </div>
      </div>

      <div className="va-block">
        <h2 className="va-h2">{vaProcess.title}</h2>
        <p className="va-lead va-lead--narrow">{vaProcess.sub}</p>
        <div className="va-process-grid">
          {vaProcess.steps.map((s) => (
            <article key={s.key} className="va-glass-card va-step-card">
              <div className="va-step-ico" aria-hidden="true">
                <VaProcessIcon name={s.icon} />
              </div>
              <p className="va-step-label">
                {s.step}. {s.name}
              </p>
              <p className="va-step-text">{s.text}</p>
            </article>
          ))}
        </div>
        <a className="va-btn-primary va-process-hire" href="#contact">
          Hire Gateway
        </a>
      </div>

      <div className="va-block">
        <h2 className="va-h2">{vaAudience.title}</h2>
        <div className="va-audience-grid">
          {vaAudience.people.map((p) => (
            <div key={p} className="va-audience-cell">
              {p}
            </div>
          ))}
        </div>
        <p className="va-audience-foot">{vaAudience.foot}</p>
      </div>

      <div className="va-block va-block--diff">
        <p className="va-diff-kicker">{vaDifference.kicker}</p>
        <h2 className="va-h2">
          {vaDifference.title} <span className="va-diff-em">{vaDifference.titleAccent}</span>
        </h2>
        <p className="va-lead va-lead--narrow">{vaDifference.sub}</p>
        <a className="va-btn-primary" href="#contact">
          Hire Gateway
        </a>
        <div className="va-diff-grid">
          {vaDifference.cards.map((c) => (
            <article key={c.key} className="va-glass-card va-diff-card">
              <div className="va-diff-ico" aria-hidden="true">
                <VaDiffIcon name={c.icon} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="va-block va-block--closing">
        <h2 className="va-h2">{vaClosing.title}</h2>
        <p className="va-lead va-lead--narrow">{vaClosing.sub}</p>
        <a className="va-btn-primary" href="#contact">
          {vaClosing.cta}
        </a>
      </div>
    </section>
  )
}

export default VirtualAssistantPage
