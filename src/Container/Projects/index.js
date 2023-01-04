import React from 'react'
import Github from '../../assets/github2.svg'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Header,
  ContainerItems,
  Projetos,
  ContainerProjects,
  CategoryButton
} from './styles'

//import de imagens //
import Advice from '../../assets/advice.png'
import ApiDevburguer from '../../assets/apidevburguer.png'
import DevBurger from '../../assets/devburger.png'
import Pokedex from '../../assets/pokedex.png'
import MaterialUi from '../../assets/materialui.png'
import Tailwind from '../../assets/tailwind.png'
import Storybook from '../../assets/storybook.png'
import ConvertMoney from '../../assets/convert.png'
import TodoList from '../../assets/todolist1.png'
import Mario from '../../assets/mario.png'

function App() {
    const navigate = useNavigate()

  const projects = [
    {id:0, img:`${Advice}`, sub: `Gerador de conselhos`, src:'https://advice-generator-cristolfe.netlify.app/', github:'https://github.com/Icristolfe/advice-generator'},
    {id:1, img:`${ApiDevburguer}`, sub: `Api de uma hamburgueria`, src:'https://github.com/Icristolfe/api-devburger', github:'https://github.com/Icristolfe/api-devburger'},
    {id:2, img:`${DevBurger}`, sub: `Hamburgueria`, src:'https://github.com/Icristolfe/devburger', github:'https://github.com/Icristolfe/devburger'},
    {id:3, img:`${Pokedex}`, sub: `Pokedex`, src:'https://simplepokedexcristolfe.netlify.app/', github:'https://github.com/Icristolfe/Pok-dex'},
    {id:4, img:`${MaterialUi}`, sub: `Youtube Clone Material-Ui`, src:'https://youtubeclone-home-page.netlify.app/', github:'https://github.com/Icristolfe/youtube-clone-materialui'},
    {id:5, img:`${Tailwind}`, sub: `Facebook Clone Tailwind`, src:'https://github.com/Icristolfe/clone-facebook-login-tailwind', github:'https://github.com/Icristolfe/clone-facebook-login-tailwind'},
    {id:6, img:`${Storybook}`, sub: `Storybook`, src:'https://github.com/Icristolfe/storybook-example', github:'https://github.com/Icristolfe/storybook-example'},
    {id:7, img:`${ConvertMoney}`, sub: `Conversor de moedas`, src:'https://icristolfe.github.io/DevClub-Convert-Money/', github:'https://github.com/Icristolfe/DevClub-Convert-Money'},
    {id:8, img:`${TodoList}`, sub: `Lista de tarefas`, src:'https://to-do-list-cristolfe.netlify.app/', github:'https://github.com/Icristolfe/to-do-list'},
    {id:9, img:`${Mario}`, sub: `Mario Runner`, src:'https://mario-jumper-cristolfe.netlify.app/', github:'https://github.com/Icristolfe/mario-jumper'}
  ]
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 3 },
    { width: 1300, itemsToShow: 3 }
  ]
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
    <Projetos>
    <Carousel itemsToShow={1}  breakPoints={breakPoints}>
      {
        projects.map(project => (
          <ContainerProjects key={project.id}>
            <figure>
            <a  href={project.src} target="_blank" rel='noreferrer'>
            <img src={project.img} alt={project.sub} />
            </a>
            <figcaption>{project.sub}</figcaption>
                        <a class="link-repo" href={project.github} target="_blank" rel='noreferrer'>
                            <img style={{ height: 50, marginBottom: 20}} src={Github} alt="githublink" />
                        </a>
            </figure>
            
          </ContainerProjects>

        ))
      }
    </Carousel>
    </Projetos>

      </ContainerItems>
    </Container>
  );
}

export default App;
