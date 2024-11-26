import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../IMGS/LogoPNG.png';

const NAV = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: whitesmoke;
    height: 3em;
    padding: 0.2em 0.5em 0.2em 0;
    margin-bottom: 3em;
`;

const UL = styled.ul`
    display: flex;
    gap: 2em;
    list-style-type: none;
    
    @media (max-width: 768px) {
        display: ${(props) => (props.isMenuOpen ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 3em;
        right: 0;
        background-color: whitesmoke;
        width: 100%;
        padding: 1em 0;
        gap: 1em;
    }
`;

const Li = styled.li`
    padding-left: 1em;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: gray;
    font-weight: 600;
    &:hover {
        color: purple;
    }
`;

const Img = styled.img`
    width: 70px;
`

const MenuIcon = styled.div`
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    
    .bar {
        width: 25px;
        height: 3px;
        background-color: gray;
        border-radius: 5px;
    }

    
    @media (max-width: 768px) {
        display: flex;
    }
`;

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <NAV>
            <Link to="/"><Img src={Logo}></Img></Link>
            <MenuIcon onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </MenuIcon>
            <UL isMenuOpen={isMenuOpen}>
                <Li >
                    <StyledLink to="/Login">Login</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/SignUp">Sign Up</StyledLink>
                </Li>
            </UL>
        </NAV>
    );
}

export default Nav;