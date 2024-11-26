import styled from "styled-components";
import { useState, useEffect } from "react";
import foto1 from '../IMGS/FotoVolun1.2.png';
import foto2 from '../IMGS/FotoVolun2.2.png';
import foto3 from '../IMGS/FotoVolun3.2.png';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em;

    

    @media screen and (max-width:1600px){
        justify-content: center;
    }



`;

const Img = styled.img`
    height: 400px;
    width: 500px;

    @media screen and (min-width:481px) and (max-width:768px) {
        height: 300px;
        width: 360px;
    }

    @media screen and (min-width: 361px) and (max-width:480px) {
        height: 250px;
        width: 270px;
    }
`;

const Span = styled.span`
    font-size: 70px;
    color: white;
    &:hover {
        cursor: pointer;
        color: rgb(0, 0, 0, 0.4);
    }

    @media screen and (min-width:481px) and (max-width:768px) {
        font-size: 55px;
    }

    @media screen and (min-width: 361px) and (max-width:480px) {
        font-size: 55px;
    }
`;

function Carrossel() {
    const imagens = [foto1, foto2, foto3];
    const [indice, setIndice] = useState(0);

    const avancar = () => {
        setIndice((prevIndice) => (prevIndice + 1) % imagens.length);
    };

    const retroceder = () => {
        setIndice((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
    };

    
    useEffect(() => {
        const intervalo = setInterval(avancar, 3000);
        return () => clearInterval(intervalo); 
    }, []);

    return (
        <Container>
            <Span onClick={retroceder}>{"<"}</Span>
            <Img src={imagens[indice]} alt={`Imagem ${indice + 1}`} />
            <Span onClick={avancar}>{">"}</Span>
        </Container>
    );
}

export default Carrossel;
