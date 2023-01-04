import styled from "styled-components";
import Background from '../../assets/background.gif'

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
    padding-top: 20px;
`

export const Contato = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-weight: 500;
    color: #FFF;
    padding: 15px;
    overflow-y: auto;
    position: relative;
    &::-webkit-scrollbar {
        opacity: 0.1;
        
    }


    h1 {
        margin: 20px 0 20px 0;
    }

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;

        &:hover {
            background: #E3E3E3;
            border: none;
        }
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