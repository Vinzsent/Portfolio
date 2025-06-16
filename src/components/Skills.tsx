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
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const SkillCard = styled(motion.div)`
  background: #23272b;
  color: #fff;
  padding: 1.2rem 0;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  transition: transform 0.2s, box-shadow 0.2s, border 0.2s, outline 0.2s;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    transform: translateY(-6px) scale(1.04);
    box-shadow: 0 6px 24px rgba(0,255,135,0.12);
    color: #00ff87;
    border: 2px solid #00ff87;
    outline: 2px solid #60efff;
    outline-offset: 2px;
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
`

const SkillsDesc = styled.p`
  font-size: 1.15rem;
  color: #bdbdbd;
  margin-bottom: 2rem;
  max-width: 420px;
  text-align: justify;
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
      <SkillsContainer>
        <SkillGrid>
          {skills.map((skill, i) => (
            <SkillCard
              key={skill}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
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