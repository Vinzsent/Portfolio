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
`

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: center;
`

const ProjectsDescription = styled.p`
  color: #bdbdbd;
  font-size: 1.15rem;
  margin-top: 0.5rem;
  margin-bottom: 2.5rem;
  text-align: center;
  max-width: 700px;
  line-height: 1.6;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  width: 100%;
`

const ProjectCard = styled(motion.div)`
  background: #23272b;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 32px rgba(0,255,135,0.10);
    border: 1px solid #00ff87;
  }
`

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #00ff87;
`

const ProjectDesc = styled.p`
  color: #bdbdbd;
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
  text-align: justify;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const TechBadge = styled.span`
  background: #181c1f;
  color: #00ff87;
  border-radius: 6px;
  padding: 0.3rem 0.8rem;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  margin-top: 0.2rem;
`

const projects = [
  {
    title: 'SparkMobile',
    description: 'An app that caters to busy car owners, allowing them to book car cleaning services at their home.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'On the Job Tracker',
    description: 'A system to help students and classes track their internship progress, built with PHP, MySQL, HTML, CSS, and JavaScript.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Applicant Tracker System',
    description: 'Developed during my internship at SPLACEBPO, this system tracks applicants and their hiring status.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
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
      <ProjectsContainer>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsDescription>
          Here are some of the key projects I've developed, showcasing my passion and technical skills throughout my college journey.
        </ProjectsDescription>
        <ProjectsGrid>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDesc>{project.description}</ProjectDesc>
              <TechStack>
                {project.tech.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
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