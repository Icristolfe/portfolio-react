import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Header,
  ContainerItems,
  Home,
  CategoryButton
} from './styles'

//import de imagens //
import Perfil from '../../assets/perfil.jpeg'

function HomePage() {
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
      <Home>

    <img class="perfil" src={Perfil} alt="perfil" />

    <h1 class="name" >Ícaro Cristolfe</h1>

    <p>
      Desenvolvedor Full Stack, apaixonado por tecnologia e um sonhador desde pequeno, través do meu conhecimento desejo ajudar pessoas ao meu redor desenvolvendo soluções práticas com o intuito de facilitar processos de maior dificuldade.<br></br>
      Como desenvolvedor front end tenho experiência com as seguintes tecnologias: HTML, CSS, Javascript, ReactJs,<br></br> Styled-Components, API Rest, Tailwind, entre outras ferramentas.<br></br>
      No back end tenho experiência com : Nodejs, MongoDB, Postgres,  Docker, ferramentas como Sequelize, Mongoose, Express.<br></br>
      Tenho certificação em metodologias ágeis, Scrum, Kanbam, com conhecimento em todas as cerimônias 
      de desenvolvimento: Daily, Review, Sprints.<br></br>
      Minhas experiências profissionais anteriores me permitiram desenvolver 
      qualidades pessoais como : proatividade, trabalho em equipe, tomada de decisões e boa comunicação .
      Estou aberto a novas conexões e troca de conhecimentos e experiências.</p>
        
    </Home>
      </ContainerItems>
    </Container>
  );
}

export default HomePage;
