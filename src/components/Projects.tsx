import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'

const ProjectsSection = styled(motion.section)`
  min-height: 100vh;
  background: #0f0f0f;
  color: #fff;
  padding: 4rem 0;
  display: flex;
  align-items: center;
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
      radial-gradient(circle at 15% 25%, rgba(0, 255, 135, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 85% 75%, rgba(96, 239, 255, 0.06) 0%, transparent 50%);
    animation: breathe 6s ease-in-out infinite;
  }
  
  @keyframes breathe {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }
`

const FloatingOrb = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, rgba(0, 255, 135, 0.1), rgba(96, 239, 255, 0.1));
  border-radius: 50%;
  filter: blur(3px);
  z-index: 0;
`

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`

const ProjectsTitle = styled.a`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(45deg, #00ff87, #60efff);
    border-radius: 2px;
    animation: expandTitle 2.5s ease-out forwards;
  }
  
  @keyframes expandTitle {
    from { width: 0; }
    to { width: 100px; }
  }
`

const ProjectsDescription = styled.p`
  color: #bdbdbd;
  font-size: 1.15rem;
  margin-top: 0.5rem;
  margin-bottom: 2.5rem;
  text-align: center;
  max-width: 700px;
  line-height: 1.6;
  position: relative;
  
  &::before {
    content: '🚀';
    position: absolute;
    left: -50px;
    top: 0;
    opacity: 0;
    animation: rocket 5s ease-in-out infinite;
  }
  
  @keyframes rocket {
    0%, 100% { opacity: 0; transform: translateY(0) rotate(0deg); }
    50% { opacity: 1; transform: translateY(-10px) rotate(15deg); }
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  width: 100%;
  position: relative;
`

const ProjectCard = styled(motion.div)`
  background: linear-gradient(135deg, #23272b, #2a2e32);
  border-radius: 18px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: normal;
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
    background: linear-gradient(45deg, transparent 30%, rgba(0, 255, 135, 0.03) 50%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.03) rotate(1deg);
    box-shadow: 0 16px 48px rgba(0,255,135,0.2);
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

const ProjectTitle = styled.a`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #00ff87;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #00ff87, #60efff);
    transition: width 0.3s ease;
  }
  
  &:hover {
    text-decoration: none;
    color: #00ff87;
    transform: translateX(5px);
    
    &::before {
      width: 100%;
    }
  }
`

const ProjectDesc = styled.p`
  color: #bdbdbd;
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
  text-align: justify;
  line-height: 1.6;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`

const TechBadge = styled(motion.span)`
  background: linear-gradient(135deg, #181c1f, #23272b);
  color: #00ff87;
  border-radius: 8px;
  padding: 0.4rem 0.9rem;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  margin-top: 0.2rem;
  border: 1px solid rgba(0, 255, 135, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: linear-gradient(135deg, #23272b, #181c1f);
    border-color: #00ff87;
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 255, 135, 0.2);
  }
`

const projects = [
  {
    title: 'SparkMobile',
    description: 'An app that caters to busy car owners, allowing them to book car cleaning services at their home. Click the name to see the project',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    url: 'https://sparkmobile.free.nf',
  },
  {
    title: 'On the Job Tracker',
    description: 'A system to help students and classes track their internship progress and has a writing feature that gives weekly and daily reports to OJT coordinators built with PHP, MySQL, HTML, CSS, and JavaScript.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/yourusername/on-the-job-tracker',
  },
  {
    title: 'Applicant Tracker System',
    description: 'Developed during my internship at SPLACEBPO, this system tracks applicants and their hiring status.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    url: 'https://splaceBPO.free.nf',
  },
]

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <ProjectsSection
      ref={ref}
      id="projects"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Floating Orbs */}
      <FloatingOrb
        style={{ top: '15%', left: '8%' }}
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <FloatingOrb
        style={{ top: '70%', right: '12%' }}
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <FloatingOrb
        style={{ top: '40%', right: '25%' }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <ProjectsContainer>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsDescription>
          Here are some of the key projects I've developed, showcasing my passion and technical skills throughout my college journey.
        </ProjectsDescription>
        <ProjectsGrid>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                delay: 0.2 + i * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              whileHover={{ 
                scale: 1.03,
                rotate: 1,
                transition: { duration: 0.3 }
              }}
            >
              <ProjectTitle 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {project.title}
              </ProjectTitle>
              <ProjectDesc>{project.description}</ProjectDesc>
              <TechStack>
                {project.tech.map((tech, techIndex) => (
                  <TechBadge 
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      delay: 0.4 + i * 0.15 + techIndex * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tech}
                  </TechBadge>
                ))}
              </TechStack>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  )
}

export default Projects 