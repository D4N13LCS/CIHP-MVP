import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-image: url("/fundoFormBlur.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    backgorund-position: center;
    height: 600px;
    width: 600px;
    margin: 0 auto;
    margin-bottom: 3em;
    
    @media screen and (max-width:360px){
        width: 20em;
        height: 20em;
    }
        
    @media screen and (min-width: 361px) and (max-width:480px){
        width: 23em;
        height: 23em;
            
    }
    
    @media screen and (min-width:481px) and (max-width:768px){
        width: 30em;
        height: 30em;
    }

`

const LoginBox = styled.div`
    display none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    padding: 2em;
    
    box-shadow: 1px 1px 8px 1px black;
    @media screen and (max-width:360px){
        
    }
`


function FormLayout(){
    return(
        <>
            <Container>
                <LoginBox>
                    <Outlet/>
                </LoginBox>
            </Container>
        </>
    )
    

}

export default FormLayout;