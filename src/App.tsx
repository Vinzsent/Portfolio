import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './App.css'
import profileImg from './assets/image.jpg'

// Floating Particles Component
const FloatingParticles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`

const Particle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, #00ff87, #60efff);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 255, 135, 0.5);
`

const Section = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0;
  position: relative;
`

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 255, 135, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(96, 239, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(0, 255, 135, 0.05) 0%, transparent 50%);
    animation: gradientShift 8s ease-in-out infinite;
  }
  
  @keyframes gradientShift {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #888;
  margin-bottom: 2rem;
`

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 255, 135, 0.1);
`

const NavLinks = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;

  a {
    color: #888;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    padding: 0.5rem 1rem;
    border-radius: 8px;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(45deg, #00ff87, #60efff);
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    &:hover {
      color: #00ff87;
      background: rgba(0, 255, 135, 0.1);
      
      &::before {
        width: 80%;
      }
    }
  }
`

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 2rem;
  }
`

const ProfileImgWrapper = styled(motion.div)`
  border-radius: 50%;
  overflow: hidden;
  width: 280px;
  height: 280px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  border: 4px solid #23272b;
  background: #181c1f;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s, border 0.3s, transform 0.3s;
  cursor: pointer;
  position: relative;
  
  &::before {
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
    box-shadow: 0 8px 32px rgba(0,255,135,0.18);
    border: 4px solid #00ff87;
    transform: scale(1.05) rotate(-2deg);
  }
`

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 800px) {
    align-items: center;
    text-align: center;
  }
`

const HireMeButton = styled(motion.a)`
  margin-top: 2rem;
  display: inline-block;
  padding: 0.9rem 2.2rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #181c1f;
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  border-radius: 32px;
  box-shadow: 0 4px 24px rgba(0,255,135,0.18);
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;
  outline: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    background: linear-gradient(45deg, #60efff, #00ff87);
    color: #23272b;
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 32px rgba(0,255,135,0.22);
    
    &::before {
      left: 100%;
    }
  }
`

const WavyDivider = styled.div`
  width: 100%;
  height: 80px;
  margin-top: -2rem;
  background: none;
  position: relative;
  z-index: 2;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`

function App() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }))
      setParticles(newParticles)
    }
    
    generateParticles()
  }, [])

  return (
    <>
      <FloatingParticles>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </FloatingParticles>
      
      <Nav>
        <NavLinks>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </NavLinks>
      </Nav>
      
      <HeroSection
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroContent>
          <ProfileImgWrapper
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
            whileHover={{ scale: 1.08, rotate: -2 }}
          >
            <ProfileImg src={profileImg} alt="Vincent's profile" />
          </ProfileImgWrapper>
          <HeroText>
            <Title
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 180, damping: 10 }}
            >
              Hi, I'm Vincent
            </Title>
            <Subtitle
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Web Developer
            </Subtitle>
            <HireMeButton
              href="#contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
            >
              🚀 Hire Me
            </HireMeButton>
          </HeroText>
        </HeroContent>
      </HeroSection>
      
      <WavyDivider>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#181c1f" fillOpacity="1" d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,53.3C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z" />
        </svg>
      </WavyDivider>
      
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
