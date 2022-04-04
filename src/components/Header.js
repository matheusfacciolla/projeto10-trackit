import { useContext } from 'react';

import UserContext from "../contexts/UserContext";

import styled from 'styled-components';

function Header() {

    const { userInformation } = useContext(UserContext);

    return (
        <Head>
            <h1>TrackIt</h1>
            <img src={userInformation.image} alt='photoPerfil' />
        </Head>
    );
}

export default Header;

const Head = styled.div `
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;

    h1 {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
        margin-left: 18px;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
        margin-right: 18px;
    }
`;