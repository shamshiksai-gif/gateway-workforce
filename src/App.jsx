import { useEffect, useRef, useState } from 'react'
import AmbientGraphics from './components/AmbientGraphics'
import AiSolutionsPage from './components/AiSolutionsPage'
import FloatingScheduleCta from './components/FloatingScheduleCta'
import Footer from './components/Footer'
import CloudSolutionsPage from './components/CloudSolutionsPage'
import HealthcareBpoPage from './components/HealthcareBpoPage'
import Hero from './components/Hero'
import ITOutsourcingPage from './components/ITOutsourcingPage'
import Navbar from './components/Navbar'
import Process from './components/Process'
import Services from './components/Services'
import Stats from './components/Stats'
import SaasExpertsPage from './components/SaasExpertsPage'
import USTaxationPage from './components/USTaxationPage'
import VirtualAssistantPage from './components/VirtualAssistantPage'
import WelcomeIntro from './components/WelcomeIntro'
import WhyIndia from './components/WhyIndia'
import {
  footer,
  hero,
  hiringProcessIntro,
  hiringProcessLight,
  hiringSteps,
  navLinks,
  services,
  stats,
  whyIndiaPoints,
  whyIndiaSection,
} from './data/siteContent'

function App() {
  const path = window.location.pathname.toLowerCase()
  const isItOutsourcingPage = path.includes('/it_outsourcing')
  const isHealthcareBpoPage = path.includes('/healthcare_bpo')
  const isUsTaxationPage = path.includes('/us_taxation')
  const isCloudSolutionsPage = path.includes('/cloud-solutions')
  const isSaasExpertsPage = path.includes('/saas_experts')
  const isAiSolutionsPage = path.includes('/ai_solutions')
  const isVirtualAssistantPage = path.includes('/virtual-assistant')
  const isServiceDetailPage =
    isItOutsourcingPage ||
    isHealthcareBpoPage ||
    isUsTaxationPage ||
    isCloudSolutionsPage ||
    isSaasExpertsPage ||
    isAiSolutionsPage ||
    isVirtualAssistantPage
  const pageNavLinks = isServiceDetailPage
    ? navLinks.map((link) => ({
        ...link,
        href: link.href === '#home' ? '/' : `/${link.href}`,
      }))
    : navLinks
  const [isScrollActive, setIsScrollActive] = useState(false)
  const [showWelcomeIntro, setShowWelcomeIntro] = useState(true)
  const [isWelcomeExiting, setIsWelcomeExiting] = useState(false)
  const [welcomePhase, setWelcomePhase] = useState('headline')
  const scrollIdleTimerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollActive(true)

      if (scrollIdleTimerRef.current) {
        window.clearTimeout(scrollIdleTimerRef.current)
      }

      scrollIdleTimerRef.current = window.setTimeout(() => {
        setIsScrollActive(false)
      }, 180)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollIdleTimerRef.current) {
        window.clearTimeout(scrollIdleTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isServiceDetailPage) {
      setShowWelcomeIntro(false)
      return undefined
    }

    const lockupTimer = window.setTimeout(() => {
      setWelcomePhase('lockup')
    }, 1500)

    const logoOnlyTimer = window.setTimeout(() => {
      setWelcomePhase('logo-only')
    }, 2800)

    const flyToNavTimer = window.setTimeout(() => {
      setWelcomePhase('fly-to-nav')
    }, 3450)

    const exitTimer = window.setTimeout(() => {
      setIsWelcomeExiting(true)
    }, 4200)

    const doneTimer = window.setTimeout(() => {
      setShowWelcomeIntro(false)
    }, 4900)

    return () => {
      window.clearTimeout(lockupTimer)
      window.clearTimeout(logoOnlyTimer)
      window.clearTimeout(flyToNavTimer)
      window.clearTimeout(exitTimer)
      window.clearTimeout(doneTimer)
    }
  }, [isServiceDetailPage])

  useEffect(() => {
    document.body.style.overflow = showWelcomeIntro ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [showWelcomeIntro])

  return (
    <>
      {showWelcomeIntro ? <WelcomeIntro phase={welcomePhase} isExiting={isWelcomeExiting} /> : null}
      <AmbientGraphics />
      <div className="page-shell">
        <Navbar links={pageNavLinks} isScrollActive={isScrollActive} />
        <main>
          {isItOutsourcingPage ? (
            <ITOutsourcingPage />
          ) : isHealthcareBpoPage ? (
            <HealthcareBpoPage />
          ) : isUsTaxationPage ? (
            <USTaxationPage />
          ) : isCloudSolutionsPage ? (
            <CloudSolutionsPage />
          ) : isSaasExpertsPage ? (
            <SaasExpertsPage />
          ) : isAiSolutionsPage ? (
            <AiSolutionsPage />
          ) : isVirtualAssistantPage ? (
            <VirtualAssistantPage />
          ) : (
            <>
              <Hero content={hero} />
              <Stats items={stats} />
              <WhyIndia section={whyIndiaSection} points={whyIndiaPoints} />
              <Services items={services} />
              <section id="about" className="section about">
                <p className="eyebrow">About</p>
                <h2>Building trusted global teams from India</h2>
                <p className="section-description">
                  Gateway Workforce partners with international companies to deliver
                  skilled professionals across IT, healthcare, taxation, cloud, SaaS,
                  AI, and virtual support functions.
                </p>
              </section>
              <Process
                lightHero={hiringProcessLight}
                intro={hiringProcessIntro}
                steps={hiringSteps}
              />
            </>
          )}
        </main>
        <Footer
          data={footer}
          navLinks={pageNavLinks}
          services={services}
          isScrollActive={isScrollActive}
        />
        {!isServiceDetailPage ? <FloatingScheduleCta isScrollActive={isScrollActive} /> : null}
      </div>
    </>
  )
}

export default App
