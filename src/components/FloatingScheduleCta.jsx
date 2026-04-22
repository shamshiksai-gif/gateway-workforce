function FloatingScheduleCta({ isScrollActive }) {
  return (
    <a className={`floating-schedule-cta${isScrollActive ? ' is-hidden-on-scroll' : ''}`} href="#contact">
      Schedule 15 Min Call <span aria-hidden="true">&gt;</span>
    </a>
  )
}

export default FloatingScheduleCta
