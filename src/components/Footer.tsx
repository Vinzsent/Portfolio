import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const FooterSection = styled(motion.footer)`
  width: 100%;
  background: linear-gradient(135deg, #181c1f, #23272b);
  color: #bdbdbd;
  padding: 2rem 0 1.5rem 0;
  text-align: center;
  font-size: 1rem;
  border-top: 2px solid rgba(0, 255, 135, 0.1);
  margin-top: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #00ff87, transparent);
    animation: glow 3s ease-in-out infinite;
  }
  
  @keyframes glow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
`

const Highlight = styled(motion.span)`
  color: #00ff87;
  font-weight: 600;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #00ff87, #60efff);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`

const FooterContent = styled.div`
  position: relative;
  z-index: 1;
`

const FloatingDot = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #00ff87;
  border-radius: 50%;
  opacity: 0.6;
`

const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <FooterSection
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating Dots */}
      <FloatingDot
        style={{ top: '20%', left: '15%' }}
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <FloatingDot
        style={{ top: '30%', right: '20%' }}
        animate={{
          y: [0, 10, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <FloatingDot
        style={{ top: '60%', left: '25%' }}
        animate={{
          y: [0, -8, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <FooterContent>
        &copy; {year} <Highlight whileHover={{ scale: 1.1 }}>Vincent</Highlight>. Built with <Highlight whileHover={{ scale: 1.1 }}>React</Highlight> + <Highlight whileHover={{ scale: 1.1 }}>Vite</Highlight>.
      </FooterContent>
    </FooterSection>
  )
}

export default Footer 