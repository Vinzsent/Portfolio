import styled from '@emotion/styled'

const FooterSection = styled.footer`
  width: 100%;
  background: #181c1f;
  color: #bdbdbd;
  padding: 1.5rem 0 1rem 0;
  text-align: center;
  font-size: 1rem;
  border-top: 1px solid #23272b;
  margin-top: 2rem;
`

const Highlight = styled.span`
  color: #00ff87;
  font-weight: 600;
`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <FooterSection>
      &copy; {year} <Highlight>Vincent</Highlight>. Built with <Highlight>React</Highlight> + <Highlight>Vite</Highlight>.
    </FooterSection>
  )
}

export default Footer 