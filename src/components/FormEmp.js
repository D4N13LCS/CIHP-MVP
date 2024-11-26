import styled from 'styled-components';

const H1 = styled.h1`
    color: purple;
    text-align: center;
`;

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    padding: 2em;
    width: 100%;  
    max-width: 400px; 
    background-color: #F5F5F5;
    margin: 0 auto; 

    @media screen and (max-width: 360px){
        max-width: 290px; 
    }

    @media screen and (min-width: 361px) and (max-width:480px){
        max-width: 300px;
            
    }

    
`;

const Campo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`;

const Label = styled.label`
    font-weight: 600;
    color: purple;
`;

const Input = styled.input`
    padding: 0.5em;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
    width: 100%; 
`;

const Button = styled.button`
    padding: 0.6em;
    background-color: purple;
    color: white;
    font-weight: 600;
    border: none;
    width: 100%;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        background-color: #6a5acd;
    }
`;

function FormEmp() {
    return (
        <>
            <H1>Para empresas</H1>
            <Forms>
                <Campo>
                    <Label>Nome:</Label>
                    <Input required placeholder='Insira o nome da empresa' />
                </Campo>
                <Campo>
                    <Label>Email:</Label>
                    <Input required placeholder='Insira o um E-mail válido' />
                </Campo>
                <Campo>
                    <Label>Senha:</Label>
                    <Input required placeholder='Insira uma senha' />
                </Campo>
                <Button>Cadastrar</Button>
            </Forms>
        </>
    );
}

export default FormEmp;
