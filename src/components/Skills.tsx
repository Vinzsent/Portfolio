import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'

const SkillsSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 4rem 0;
  background: #181c1f;
  color: #fff;
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
      radial-gradient(circle at 20% 30%, rgba(0, 255, 135, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(96, 239, 255, 0.05) 0%, transparent 50%);
    animation: pulse 4s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.8; }
  }
`

const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 0;
`

const BackgroundCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(0, 255, 135, 0.03), rgba(96, 239, 255, 0.03));
  border: 1px solid rgba(0, 255, 135, 0.1);
`

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  grid-template-areas: 'left right';
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    grid-template-areas:
      'right'
      'left';
  }
`

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  grid-area: left;
  position: relative;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const SkillCard = styled(motion.div)`
  background: linear-gradient(135deg, #23272b, #2a2e32);
  color: #fff;
  padding: 1.5rem 1rem;
  border-radius: 16px;
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 135, 0.1), transparent);
    transition: left 0.6s;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(0, 255, 135, 0.05) 50%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.05) rotate(1deg);
    box-shadow: 0 12px 40px rgba(0,255,135,0.25);
    color: #00ff87;
    border: 2px solid #00ff87;
    background: linear-gradient(135deg, #2a2e32, #23272b);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 1;
    }
  }
`

const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  grid-area: right;
  position: relative;
`

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(45deg, #00ff87, #60efff);
    border-radius: 2px;
    animation: expandWidth 2s ease-out forwards;
  }
  
  @keyframes expandWidth {
    from { width: 0; }
    to { width: 80px; }
  }
`

const SkillsDesc = styled.p`
  font-size: 1.15rem;
  color: #bdbdbd;
  margin-bottom: 2rem;
  max-width: 420px;
  text-align: justify;
  position: relative;
  
  &::before {
    content: '💡';
    position: absolute;
    left: -40px;
    top: 0;
    opacity: 0;
    animation: glow 4s ease-in-out infinite;
  }
  
  @keyframes glow {
    0%, 100% { opacity: 0; transform: scale(0.8) rotate(0deg); }
    50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
  }
`

const skills = [
  'Project Management',
  'Typing',
  'Problem-Solving',
  'Adaptability',
  'Critical Thinking',
]

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <SkillsSection
      ref={ref}
      id="skills"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <AnimatedBackground>
        <BackgroundCircle
          style={{ width: '200px', height: '200px', top: '10%', left: '5%' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <BackgroundCircle
          style={{ width: '150px', height: '150px', top: '60%', right: '10%' }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <BackgroundCircle
          style={{ width: '100px', height: '100px', top: '30%', right: '30%' }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </AnimatedBackground>
      
      <SkillsContainer>
        <SkillGrid>
          {skills.map((skill, i) => (
            <SkillCard
              key={skill}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                delay: 0.2 + i * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: 1,
                transition: { duration: 0.2 }
              }}
            >
              {skill}
            </SkillCard>
          ))}
        </SkillGrid>
        <SkillsContent>
          <SkillsTitle>Skills</SkillsTitle>
          <SkillsDesc>
            Here are some of my core skills that help me excel in dynamic and challenging environments. I am always eager to learn and adapt, ensuring I bring value to every team and project I join.
          </SkillsDesc>
        </SkillsContent>
      </SkillsContainer>
    </SkillsSection>
  )
}

export default Skills