function Stats({ items }) {
  return (
    <section className="stats" aria-label="Company highlights">
      {items.map((item) => (
        <article key={item.label} className="stat-card">
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </article>
      ))}
    </section>
  )
}

export default Stats
