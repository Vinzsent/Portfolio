import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'

const ContactSection = styled(motion.section)`
  min-height: 100vh;
  background: #181c1f;
  color: #fff;
  padding: 4rem 0;
  display: flex;
  align-items: center;
`

const ContactContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: center;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`

const Input = styled.input`
  padding: 0.9rem 1rem;
  border-radius: 8px;
  border: none;
  background: #23272b;
  color: #fff;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  transition: box-shadow 0.2s;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  &:focus {
    box-shadow: 0 0 0 2px #00ff87;
  }
`

const TextArea = styled.textarea`
  padding: 0.9rem 1rem;
  border-radius: 8px;
  border: none;
  background: #23272b;
  color: #fff;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  min-height: 120px;
  resize: vertical;
  transition: box-shadow 0.2s;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  &:focus {
    box-shadow: 0 0 0 2px #00ff87;
  }
`

const Button = styled.button`
  padding: 0.9rem 1rem;
  border-radius: 8px;
  border: none;
  background: linear-gradient(45deg, #00ff87, #60efff);
  color: #181c1f;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  &:hover {
    background: linear-gradient(45deg, #60efff, #00ff87);
    color: #23272b;
    transform: translateY(-2px) scale(1.03);
  }
`

const SocialSection = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SocialText = styled.p`
  color: #bdbdbd;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  text-align: center;
`

const SocialGrid = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: wrap;
`

const SocialCard = styled(motion.a)`
  background: #23272b;
  color: #fff;
  border-radius: 10px;
  padding: 0.8rem 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 600;
  font-size: 1.08rem;
  text-decoration: none;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  transition: transform 0.2s, box-shadow 0.2s, color 0.2s;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    transform: translateY(-4px) scale(1.04);
    box-shadow: 0 6px 24px rgba(0,255,135,0.10);
    color: #00ff87;
    border: 1px solid #00ff87;
  }
`

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`

const ContactInfoGrid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;
  align-items: center;
  text-align: center;
`

const ContactDetail = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #bdbdbd;
  text-decoration: none;
  font-size: 1.15rem;
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: #00ff87;
    transform: translateX(5px);
  }
`

const DetailIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: invert(70%) sepia(20%) saturate(500%) hue-rotate(80deg) brightness(110%) contrast(100%);
`

const socials = [
  {
    name: 'Facebook',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg',
    // TODO: Replace with your Facebook profile link
    link: 'https://www.facebook.com/Vinz.crame14',
  },
  {
    name: 'Instagram',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/instagram.svg',
    // TODO: Replace with your Instagram profile link
    link: 'https://www.instagram.com/vinz.crame/',
  },
  {
    name: 'LinkedIn',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    // TODO: Replace with your LinkedIn profile link
    link: 'https://www.linkedin.com/in/vincent-crame-b2376b197/',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    // TODO: Replace with your GitHub profile link
    link: 'https://github.com/Vinzsent',
  },
]

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <ContactSection
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      id="contact"
    >
      <ContactContainer>
        <ContactTitle>Contact</ContactTitle>
        <ContactForm onSubmit={e => e.preventDefault()}>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <TextArea placeholder="Your Message" required />
          <Button type="submit">Send Message</Button>
        </ContactForm>
        <ContactInfoGrid
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <ContactDetail href="mailto:your.email@example.com">
            <DetailIcon src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/gmail.svg" alt="Email Icon" />
            vincentcrame7@gmail.com {/* TODO: Replace with your email address */}
          </ContactDetail>
        </ContactInfoGrid>
        <SocialSection>
          <SocialText>Reach me out on these social media sites:</SocialText>
          <SocialGrid>
            {socials.map((social, i) => (
              <SocialCard
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <SocialIcon src={social.icon} alt={social.name + ' icon'} />
                {social.name}
              </SocialCard>
            ))}
          </SocialGrid>
        </SocialSection>
      </ContactContainer>
    </ContactSection>
  )
}

export default Contact 