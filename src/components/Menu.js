import styled from 'styled-components';

function Menu() {
    return (
        <ContainerMenu>
            <p>Hábitos</p>
            <p>Histórico</p>
        </ContainerMenu>
    );
}

export default Menu;

const ContainerMenu = styled.div `
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
        margin-left: 32px;
        margin-right: 32px;
    }
`;