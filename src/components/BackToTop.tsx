import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from '@emotion/styled'

const Button = styled(motion.button)`
  position: fixed;
  right: 2rem;
  bottom: 2.5rem;
  z-index: 2000;
  background: linear-gradient(45deg, #00ff87, #60efff);
  color: #181c1f;
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 6px 32px rgba(0,255,135,0.3);
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  outline: none;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.6s;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00ff87, #60efff, #00ff87);
    border-radius: 50%;
    z-index: -1;
    animation: rotate 3s linear infinite;
  }
  
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  &:hover {
    background: linear-gradient(45deg, #60efff, #00ff87);
    color: #23272b;
    transform: translateY(-6px) scale(1.1);
    opacity: 1;
    box-shadow: 0 12px 40px rgba(0,255,135,0.4);
    
    &::before {
      left: 100%;
    }
    
    span {
      transform: translateY(-2px);
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(0.95);
  }
`

const Arrow = styled(motion.span)`
  display: block;
  font-size: 1.8rem;
  line-height: 1;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
`

const PulseRing = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border: 2px solid rgba(0, 255, 135, 0.3);
  border-radius: 50%;
  z-index: -1;
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

  return (
    <AnimatePresence>
      {visible && (
        <Button 
          onClick={scrollToTop} 
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 20 
          }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
          whileTap={{ 
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
        >
          <PulseRing
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <Arrow
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ↑
          </Arrow>
        </Button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop 