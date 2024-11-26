import styled from "styled-components";
import Filtro from "./Filtro";

const VagaSection = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.2em;
    margin-bottom: 5em;
`

const VagaDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    background-color: whitesmoke;
    border: 1px solid gray;
`

const ImagemVaga = styled.img`
    width: 100%;
    height: 200px;
`

const DescricaoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.15em;
`

const TitleSection = styled.h1`
    text-align: center;
`

const TitleVaga = styled.h1`
    text-align: center;
    color: purple;
`

const DescricaoVaga = styled.p`
    text-align: justify;
`

const DivMaisVaga = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2em;
    margin-bottom: 3em;
`

const MaisVagas = styled.a`
    display: flex;
    justify-self: flex-end;
    text-decoration: none;
    color: #AEC2FB;
    &:hover{
        color: white;
        text-decoration: underlined;
        cursor:pointer;
    }
`

const DivFilter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    gap: 4em;
`

function VagasPopulares(){
    return(
    <>
        <DivMaisVaga>
            <TitleSection>Vagas Populares</TitleSection>
            <MaisVagas>Veja mais vagas &#8594; </MaisVagas>
        </DivMaisVaga>
        <DivFilter>
            <Filtro/>
            <VagaSection>
            
                <VagaDiv>
                    <ImagemVaga src="https://img.freepik.com/vetores-gratis/pessoas-sem-teto_98292-2884.jpg?t=st=1732598331~exp=1732601931~hmac=2cafe56f332889fbdcf76af2c1468b5e8acc662f1e2cc80cb71c2a4b70978abf&w=740"/>
                    <DescricaoDiv>
                        <TitleVaga>Doação de alimentos</TitleVaga>
                        <DescricaoVaga>Seja a diferença na vida de quem mais precisa! Colabore na organização e distribuição de alimentos para famílias em situação de vulnerabilidade. Leve esperança e solidariedade à mesa. </DescricaoVaga>
                    </DescricaoDiv>
                </VagaDiv>
                <VagaDiv>
                    <ImagemVaga src="https://img.freepik.com/vetores-gratis/ilustracao-de-espirito-comunitario-desenhada-a-mao_23-2150188726.jpg?t=st=1732598682~exp=1732602282~hmac=5f6d460eb564a008c473b34420254182f1d57eee8d752a280da50b7d8adda2bd&w=740"/>
                    <DescricaoDiv>
                        <TitleVaga>Reflorestamento em itaipuaçu</TitleVaga>
                        <DescricaoVaga>Junte-se a nós na missão de restaurar o verde! Participe de ações de plantio de árvores e recuperação de áreas desmatadas. Ajude a construir um futuro mais sustentável para o planeta.</DescricaoVaga>
                    </DescricaoDiv>
                </VagaDiv>
                <VagaDiv>
                    <ImagemVaga src="https://img.freepik.com/vetores-gratis/conceito-de-reciclagem-de-pessoas_52683-37055.jpg?t=st=1732599897~exp=1732603497~hmac=f5e2526274832e8b9d63316257292551bb328454a05edfcf0ce77df41d9287e1&w=740"/>
                    <DescricaoDiv>
                        <TitleVaga>Reciclagem</TitleVaga>
                        <DescricaoVaga>Transforme resíduos em novas oportunidades! Contribua com projetos de reciclagem e educação ambiental, promovendo práticas sustentáveis em sua comunidade.</DescricaoVaga>
                    </DescricaoDiv>
                </VagaDiv>
                <VagaDiv>
                    <ImagemVaga src="https://img.freepik.com/vetores-gratis/voluntarios-ajudando-idosos_23-2148571216.jpg?t=st=1732600060~exp=1732603660~hmac=87b901ecbe4bc859de5968f235623afc587b714385d7ec4d09c16d0f811ed6db&w=740"/>
                    <DescricaoDiv>
                        <TitleVaga>Cuidado de idosos</TitleVaga>
                        <DescricaoVaga>Faça parte de um gesto de carinho e atenção! Dedique seu tempo ao cuidado de idosos, oferecendo apoio, companhia e momentos de alegria para quem merece todo o nosso respeito.</DescricaoVaga>
                    </DescricaoDiv>
                </VagaDiv>
            </VagaSection>
        </DivFilter>
    </>
    )
}   

export default VagasPopulares;