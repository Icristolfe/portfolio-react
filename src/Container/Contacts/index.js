import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Header,
  ContainerItems,
  Contato,
  CategoryButton
} from './styles'

//import de imagens //
import Github from '../../assets/github2.svg'
import Whats from '../../assets/whatsapp.svg'
import Linkedin from '../../assets/linkedin.svg'
import Download from '../../assets/download-direto.svg'

function Contact() {
  const navigate = useNavigate()
 
  function projectButton() {
    navigate('/projetos')
  }

  function homeButton() {
    navigate('/')
  }
  function contactButton() {
    navigate('/contato')
  }
  return (
    <Container >
      <Header>
         <div>
          <CategoryButton onClick={() => projectButton()}>
            Projetos
          </CategoryButton>
          <CategoryButton onClick={() => homeButton()}>
            Home
          </CategoryButton>
          <CategoryButton onClick={() => contactButton()}>
            Contato
          </CategoryButton>
         </div> 
      </Header>
      <ContainerItems>
      <Contato>
      <a href="https://www.linkedin.com/in/ícaro-cristolfe" target="_blank" rel='noreferrer' ><img src={Linkedin} alt='contato'/></a>
      <a href="https://wa.me/+5527997679661" target="_blank" rel='noreferrer'><img src={Whats} alt='contato'/></a>
      <a href="https://github.com/Icristolfe" target="_blank" rel='noreferrer'><img src={Github} alt='contato'/></a>
      <a href="https://drive.google.com/file/d/1VLN-hML6nmsh29ZR5WtVgihGyz3Lwbba/view?usp=sharing" target="_blank"  rel='noreferrer'><img src={Download} alt='contato'/></a>
        
      </Contato>
      </ContainerItems>
    </Container>
  );
}

export default Contact;
