import { useEffect } from 'react'

const useSetHeightForFullScreen = () => {
  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])
}

export default useSetHeightForFullScreen
