import styled from "styled-components";

const CausaDestaque = styled.h1`
    text-align: center;
    @media screen and (min-width: 361px) and (max-width:480px){
        font-size: 1.7em; 
    }
`;

const ContainerCausas = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5em;
    padding: 1em;
    margin-top: 3em;
    margin-bottom: 70px;
`;

const CausaCard = styled.div`
    position: relative;
    height: 300px;
    width: 300px;
    border-radius: 50%; 
    background-color: white;
    overflow: hidden; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    transition: transform 0.3s ease-in-out; 
    cursor: pointer;

    &:hover {
        transform: scale(1.05); 
    }

    &:hover .backgroundImage {
        transform: scale(1.2); 
    }

    @media screen and (min-width: 361px) and (max-width:480px){
        height:250px;
        width: 250px;
    }

    @media screen and (min-width:481px) and (max-width:768px){
        height:270px;
        width: 280px;
    }
`;

const BackgroundImage = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    transition: transform 0.3s ease-in-out; 
    border-radius: 50%; 
`;

const NomeCausa = styled.p`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-weight: 600;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px 10px;
    border-radius: 8px;
    color: black;

    @media screen and (min-width: 361px) and (max-width:480px){
        font-size: 0.85em;
    }
`;

function Causas() {
    return (
        <>
            <CausaDestaque>
                Causas em destaque
            </CausaDestaque>
            <ContainerCausas>
                <CausaCard>
                    <BackgroundImage
                        className="backgroundImage"
                        style={{
                            backgroundImage: `url("https://img.freepik.com/vetores-premium/faixa-para-animais-de-estimacao-servico-de-treinamento-para-caes_81522-5082.jpg?w=740")`,
                        }}
                    />
                    <NomeCausa>Proteção animal</NomeCausa>
                </CausaCard>

                <CausaCard>
                    <BackgroundImage
                        className="backgroundImage"
                        style={{
                            backgroundImage: `url("https://img.freepik.com/vetores-gratis/pare-a-violencia-de-genero_23-2148581704.jpg?t=st=1732423008~exp=1732426608~hmac=126661a905dafb79e3466e4e9efb1d169db573fab084b7ed6ed9b9cc5790a167&w=740")`,
                        }}
                    />
                    <NomeCausa>Violência contra mulheres</NomeCausa>
                </CausaCard>

                <CausaCard>
                    <BackgroundImage
                        className="backgroundImage"
                        style={{
                            backgroundImage: `url("https://img.freepik.com/vetores-gratis/vidas-negras-importam-conceito_52683-40464.jpg?t=st=1732422935~exp=1732426535~hmac=93c88dab229730be28f617035f863da84961ec84d230b1bbf5603890f40a9292&w=740")`,
                        }}
                    />
                    <NomeCausa>Equidade racial</NomeCausa>
                </CausaCard>

                <CausaCard>
                    <BackgroundImage
                        className="backgroundImage"
                        style={{
                            backgroundImage: `url("https://img.freepik.com/vetores-gratis/ilustrado-com-salvar-o-projeto-do-planeta_23-2148515224.jpg?t=st=1732423294~exp=1732426894~hmac=65748954329fcab538a691d9a3ffb9cf7f173f5cf3cf3a6273eafe172aecf9b3&w=740")`,
                        }}
                    />
                    <NomeCausa>Meio ambiente</NomeCausa>
                </CausaCard>
            </ContainerCausas>
        </>
    );
}

export default Causas;
