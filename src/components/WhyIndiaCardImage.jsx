import { useEffect, useState } from 'react'

const FALLBACK =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=750&q=82'

function WhyIndiaCardImage({ src, focus }) {
  const [activeSrc, setActiveSrc] = useState(src)

  useEffect(() => {
    setActiveSrc(src)
  }, [src])

  return (
    <img
      src={activeSrc}
      alt=""
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      sizes="(max-width: 900px) 100vw, 33vw"
      style={{ objectPosition: focus ?? 'center center' }}
      onError={() => {
        if (activeSrc !== FALLBACK) setActiveSrc(FALLBACK)
      }}
    />
  )
}

export default WhyIndiaCardImage
