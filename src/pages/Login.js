import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

const H1 = styled.h1`
    color: purple;
    text-align: center;

    @media screen and (max-width:360px){
       font-size: 1.5em;
    }
`

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.8em;
    padding: 1em;
    height: 100%;
    
    @media screen and (max-width:360px){
        width: 120px;
        height: 120px; 
    }
`

const Campo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;

    @media screen and (max-width:360px){
        width: 100px; 
    }

`
const Label = styled.label`
    font-weight: 600;
    color: purple;

    @media screen and (max-width:360px){
        font-size: .85em; 
    }
`

const Input = styled.input`
    padding: 0.2em;

    @media screen and (max-width:360px){
        width: 60px; 
    }
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-self: flex-end;
    padding: 0.3em;
    background-color: purple;
    color: white;
    font-weight: 600;
    border: none;
    width: 100px;
    &:hover{
        cursor: pointer;
        background-color: #6a5acd;
    }

    @media screen and (max-width:360px){
        width: 50px;
        font-size: 0.7em; 
    }
`

const StyledLink = styled(Link)`
    color: black;
    &:hover{
    color: blue;
    }

    @media screen and (max-width:360px){
        font-size: 0.7em;
    }
`

function Login(){

    const Navigate = useNavigate()

    function redirecionar(){
        alert(`Seja bem vindo, ${sessionStorage.getItem('user')}!`)
        Navigate('/')
    }

    return(
        <Forms >
            <H1>Login</H1>
            <Campo>
                <Label>Usuário:</Label>
                <Input placeholder="Insira seu usuário"></Input>
            </Campo>
            <Campo>
                <Label>Senha:</Label>
                <Input placeholder="Insira sua senha"></Input>
            </Campo>
            <Button onClick={()=>{redirecionar()}}>Entrar</Button>
            <StyledLink to='/Signup'>Não possui cadastro ? clique aqui!</StyledLink>
        </Forms>
    )
}


export default Login;