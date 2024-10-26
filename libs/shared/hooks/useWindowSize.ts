import { useState, useEffect, useMemo } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  const isDesktop = useMemo(() => {
    return windowSize.width >= 992
  }, [windowSize])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener('resize', handleResize)
      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    size: windowSize,
    isDesktop,
  }
}

export default useWindowSize
