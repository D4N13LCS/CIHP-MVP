import styled from 'styled-components';
import FormEmp from './FormEmp';

const FOOTER = styled.footer`
    margin-top: 70px;
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    padding: 2em 0;
`;

const Div = styled.div`
    width: 100%;
    max-width: 600px; 

`;

const P = styled.p`
    text-align: center;

`

function Footer(){
    return(
        <FOOTER>
            <Div>
                <FormEmp/>
                <P>2024 &copy;CanIhelp</P>
            </Div>
            
        </FOOTER>
    )
}

export default Footer;