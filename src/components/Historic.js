import Header from './Header';
import Menu from './Menu';

import styled from 'styled-components';

function Historic() {

    return (
        <>
            <Header />
                <ContainerHistoric>
                    <ContainerMyHistoric>
                        <h2>Histórico</h2>
                    </ContainerMyHistoric>
                        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </ContainerHistoric>
            <Menu />
        </>
    );
}

export default Historic;

const ContainerHistoric = styled.div `
    width: 100%;
    height: 100%;
    background: #E5E5E5;
    margin-top: 70px;
    display: flex;
    flex-direction: column;

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        margin-top: 30px;
        margin-left: 17px;
        margin-right: 20px;
    }
`;

const ContainerMyHistoric = styled.div `
    display: flex;
    justify-content: space-between;

    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        margin-top: 28px;
        margin-left: 18px;
        color: #126BA5;
    }
`;