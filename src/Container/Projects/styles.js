import styled from "styled-components";
import Background from '../../assets/background.jpg'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgb(0,0,0);
    background: url("${Background}");
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 50px;

    .rec.rec-arrow {
    background: #efefef;
    color: #03205F;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    background-color: #efefef;
    color: #03205F;
    border: 2px solid #03205F;
    opacity: 0.7;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }

  .rec.rec-dot {
    outline: none;
    display: none;
  }
`

export const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 30px;

    div{
        display: flex;
        gap: 30px;
    }
`

export const ContainerItems = styled.div `
    width: 375px;
    height: 450px;
    background: rgba(0, 69, 201, 0.22);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.1px);
    -webkit-backdrop-filter: blur(6.1px);
`

export const Projetos = styled.div`
    width: 100%;
    height: 100%;
`

export const ContainerProjects = styled.div`
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 150px;

    img{
        width: 250px;
        height: 190px;
        cursor: pointer;
        border-radius: 10px;
    }
    figcaption  {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 50px;
        color: #E3E3E3;
    }
    figure img {
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    margin-bottom: 5px;
}

figure:hover img {
    margin-bottom: 10px;
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    margin-top: 15px;
}
`

export const CategoryButton = styled.button`
        border: none;
        background: none;
        font-size: 20px;
        font-family: 'Sevillana', sans-serif;
        font-family: 'Sevillana', cursive;
        font-weight: 600;
        letter-spacing: 2px;
        cursor: pointer;
        border: none;
        background: none;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
        color: #FFF;
        border-bottom: 2px solid #FFF;
        height: 40px;

        &:hover {
                    opacity: 0.8;
                }

        &:active {
                opacity: 0.5;
            }
            
`