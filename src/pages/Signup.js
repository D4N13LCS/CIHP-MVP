import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

const H1 = styled.h1`
    color: purple;
    text-align: center;
`

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.8em;
    padding: 1em;
    height: 100%;
`

const Campo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
`
const Label = styled.label`
    font-weight: 600;
    color: purple;
`

const Input = styled.input`
    
    padding: 0.2em;
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


`

function Signup(){

    const Navigate = useNavigate()

    function redirecionar(){
        const user = document.getElementById('user');
        sessionStorage.setItem('user', user.value)
        window.alert('Cadastro realizado com sucesso!')
        Navigate('/Login')
    }

    return(
        <Forms>
            <H1>Cadastro</H1>
            <Campo>
                <Label>Usuário:</Label>
                <Input id="user" placeholder="Insira seu usuário" required></Input>
            </Campo>
            <Campo>
                <Label>Senha:</Label>
                <Input placeholder="Insira sua senha" required></Input>
            </Campo>
            <Button onClick={()=>{redirecionar()}}>cadastrar</Button>
            <StyledLink to='/Login'>Já possui cadastro ? clique aqui!</StyledLink>
        </Forms>
    )
}

export default Signup;