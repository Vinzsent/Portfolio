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
      radial-gradient(circle at 25% 20%, rgba(0, 255, 135, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 75% 80%, rgba(96, 239, 255, 0.05) 0%, transparent 50%);
    animation: wave 8s ease-in-out infinite;
  }
  
  @keyframes wave {
    0%, 100% { opacity: 0.3; transform: translateY(0); }
    50% { opacity: 0.7; transform: translateY(-10px); }
  }
`

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, rgba(0, 255, 135, 0.08), rgba(96, 239, 255, 0.08));
  border-radius: 50%;
  filter: blur(2px);
  z-index: 0;
`

const ContactContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;
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
    animation: expandContact 2.5s ease-out forwards;
  }
  
  @keyframes expandContact {
    from { width: 0; }
    to { width: 80px; }
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  position: relative;
`

const Input = styled(motion.input)`
  padding: 1rem 1.2rem;
  border-radius: 12px;
  border: 2px solid transparent;
  background: linear-gradient(135deg, #23272b, #2a2e32);
  color: #fff;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  position: relative;
  
  &::placeholder {
    color: #888;
    transition: color 0.3s ease;
  }
  
  &:focus {
    border-color: #00ff87;
    box-shadow: 0 0 0 4px rgba(0, 255, 135, 0.1);
    transform: translateY(-2px);
    
    &::placeholder {
      color: #00ff87;
    }
  }
  
  &:hover {
    border-color: rgba(0, 255, 135, 0.3);
    transform: translateY(-1px);
  }
`

const TextArea = styled(motion.textarea)`
  padding: 1rem 1.2rem;
  border-radius: 12px;
  border: 2px solid transparent;
  background: linear-gradient(135deg, #23272b, #2a2e32);
  color: #fff;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  position: relative;
  
  &::placeholder {
    color: #888;
    transition: color 0.3s ease;
  }
  
  &:focus {
    border-color: #00ff87;
    box-shadow: 0 0 0 4px rgba(0, 255, 135, 0.1);
    transform: translateY(-2px);
    
    &::placeholder {
      color: #00ff87;
    }
  }
  
  &:hover {
    border-color: rgba(0, 255, 135, 0.3);
    transform: translateY(-1px);
  }
`

const Button = styled(motion.button)`
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: none;
  background: linear-gradient(45deg, #00ff87, #60efff);
  color: #181c1f;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 20px rgba(0,255,135,0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.6s;
  }
  
  &:hover {
    background: linear-gradient(45deg, #60efff, #00ff87);
    color: #23272b;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 32px rgba(0,255,135,0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
  }
`

const SocialSection = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const SocialText = styled.p`
  color: #bdbdbd;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  text-align: center;
  position: relative;
  
  &::before {
    content: '📱';
    position: absolute;
    left: -40px;
    top: 0;
    opacity: 0;
    animation: phone 4s ease-in-out infinite;
  }
  
  @keyframes phone {
    0%, 100% { opacity: 0; transform: scale(0.8) rotate(0deg); }
    50% { opacity: 1; transform: scale(1.2) rotate(15deg); }
  }
`

const SocialGrid = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
`

const SocialCard = styled(motion.a)`
  background: linear-gradient(135deg, #23272b, #2a2e32);
  color: #fff;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 600;
  font-size: 1.08rem;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
  
  &:hover {
    transform: translateY(-6px) scale(1.05) rotate(1deg);
    box-shadow: 0 12px 32px rgba(0,255,135,0.2);
    color: #00ff87;
    border: 2px solid #00ff87;
    background: linear-gradient(135deg, #2a2e32, #23272b);
    
    &::before {
      left: 100%;
    }
    
    img {
      transform: scale(1.2) rotate(360deg);
      filter: drop-shadow(0 4px 8px rgba(0, 255, 135, 0.3));
    }
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
  position: relative;
`

const ContactDetail = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #bdbdbd;
  text-decoration: none;
  font-size: 1.15rem;
  transition: all 0.3s ease;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  border: 2px solid transparent;
  
  &:hover {
    color: #00ff87;
    transform: translateX(8px) scale(1.02);
    background: rgba(0, 255, 135, 0.05);
    border-color: rgba(0, 255, 135, 0.2);
    
    img {
      transform: scale(1.2) rotate(360deg);
      filter: drop-shadow(0 4px 8px rgba(0, 255, 135, 0.3));
    }
  }
`

const DetailIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: invert(70%) sepia(20%) saturate(500%) hue-rotate(80deg) brightness(110%) contrast(100%);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`

const socials = [
  {
    name: 'Facebook',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg',
    link: 'https://www.facebook.com/Vinz.crame14',
  },
  {
    name: 'Instagram',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/instagram.svg',
    link: 'https://www.instagram.com/vinz.crame/',
  },
  {
    name: 'LinkedIn',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    link: 'https://www.linkedin.com/in/vincent-crame-b2376b197/',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
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
      {/* Floating Elements */}
      <FloatingElement
        style={{ top: '20%', left: '10%' }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <FloatingElement
        style={{ top: '60%', right: '15%' }}
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <ContactContainer>
        <ContactTitle>Contact</ContactTitle>
        <SocialText>Do you have question? Email me</SocialText>
        <ContactForm onSubmit={e => e.preventDefault()}>
          <Input 
            type="text" 
            placeholder="Your Name" 
            required 
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          />
          <Input 
            type="email" 
            placeholder="Your Email" 
            required 
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          />
          <TextArea 
            placeholder="Your Message" 
            required 
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          />
          <Button 
            type="submit"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </Button>
        </ContactForm>
        <ContactInfoGrid
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <ContactDetail 
            href="mailto:vincentcrame7@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <DetailIcon src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/gmail.svg" alt="Email Icon" />
            vincentcrame7@gmail.com
          </ContactDetail>
        </ContactInfoGrid>
        <SocialSection>
          <SocialText>Or reach me out on these social media sites:</SocialText>
          <SocialGrid>
            {socials.map((social, i) => {
              return (
                <SocialCard
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    delay: 0.7 + i * 0.1,
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
                  <SocialIcon
                    src={social.icon}
                    alt={social.name + ' icon'}
                  />
                  {social.name}
                </SocialCard>
              )
            })}
          </SocialGrid>
        </SocialSection>
      </ContactContainer>
    </ContactSection>
  )
}

export default Contact 