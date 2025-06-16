import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import reactLogo from '../assets/react.svg'

const AboutSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 4rem 0;
  background: #0f0f0f;
`

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const AboutContent = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(45deg, #00ff87, #60efff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #888;
    margin-bottom: 1.5rem;
  }
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`

const SkillItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  border: 2px solid transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-6px) scale(1.04);
    box-shadow: 0 6px 24px rgba(0,255,135,0.12);
    color: #00ff87;
    border: 2px solid #00ff87;
    outline: 2px solid #60efff;
    outline-offset: 2px;
  }
`

const SkillLogo = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 0.5rem;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
`

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      name: 'React',
      logo: reactLogo,
      link: 'https://react.dev/',
    },
    {
      name: 'TypeScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      link: 'https://www.typescriptlang.org/docs/',
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      link: 'https://nodejs.org/en/docs',
    },
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      link: 'https://docs.python.org/3/',
    },
    {
      name: 'SQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      link: 'https://www.w3schools.com/sql/',
    },
    {
      name: 'MYSQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      link: 'https://dev.mysql.com/doc/',
    },
    {
      name: 'PHP',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      link: 'https://www.php.net/docs.php',
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      link: 'https://git-scm.com/doc',
    },
    {
      name: 'HTML',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      name: 'CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      name: 'Figma',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      link: 'https://www.figma.com/developers/docs',
    },
  ]

  return (
    <AboutSection
      ref={ref}
      id="about"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <AboutContainer>
        <AboutContent>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.3 }}
            style={{ textAlign: 'justify' }}
          >
            I am an enthusiastic and motivated IT graduate eager to apply my skills in a dynamic and innovative environment. With a strong foundation in technology and a passion for problem-solving, I am committed to continuous learning and adapting to the evolving IT landscape. My strengths lie in troubleshooting, software development, and system support, making me a valuable addition to any team. I am looking for an opportunity to grow and contribute my technical expertise to meaningful projects.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.4 }}
            style={{ textAlign: 'justify' }}
          >
            These are the tools and languages I usually used to build my projects.
          </motion.p>
        </AboutContent>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <SkillItem
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <SkillLogo src={skill.logo} alt={skill.name + ' logo'} />
                {skill.name}
              </SkillItem>
            </a>
          ))}
        </SkillsGrid>
      </AboutContainer>
    </AboutSection>
  )
}

export default About 