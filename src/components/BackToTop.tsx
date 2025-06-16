import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 2.5rem;
  z-index: 2000;
  background: linear-gradient(45deg, #00ff87, #60efff);
  color: #181c1f;
  border: none;
  border-radius: 10%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  cursor: pointer;
  opacity: 0.85;
  transition: background 0.2s, color 0.2s, transform 0.2s, opacity 0.2s;
  outline: none;
  &:hover {
    background: linear-gradient(45deg, #60efff, #00ff87);
    color: #23272b;
    transform: translateY(-4px) scale(1.08);
    opacity: 1;
  }
`

const Arrow = styled.span`
  display: block;
  font-size: 1.5rem;
  line-height: 1;
`

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <Button onClick={scrollToTop} aria-label="Back to top">
      <Arrow>&uarr;</Arrow>
    </Button>
  )
}

export default BackToTop 