import styled from "styled-components";

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 7em;
`

const Div = styled.div`
    padding: 1em;
    border-radius: 1em;
    &:hover{
        cursor: pointer;
        border: 2px solid gray;
    }
`

const H1 = styled.h1`
    text-align: center;
`

const Descricao = styled.p`
    text-align: justify;
    color:  #B6C2FE;
    width: 200px
`

function Sobre(){
    return(
        <>
        <Section>
            <Div>
                <H1> Missão</H1>
                <Descricao>Queremos aumentar o engajamento cívico e promover uma maior solidariedade na sociedade.</Descricao>
            </Div>

            <Div>
                <H1> Visão</H1>
                <Descricao>Queremos ser os maiores servidores de voluntariado do Brasil.</Descricao>
            </Div>

            <Div>
                <H1> Valores</H1>
                <Descricao>honestidade, solidariedade, empatia e respeito.</Descricao>
            </Div>
        </Section>
        </>
    )
}

export default Sobre;