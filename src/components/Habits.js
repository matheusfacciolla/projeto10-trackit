import Header from './Header';
import Menu from './Menu';

import styled from 'styled-components';

function Habits() {

    return (
        <>
            <Header />
                <ContainerHabits>
                    <ContainerMyHabits>
                        <h2>Meus hábitos</h2>
                        <button>+</button>
                    </ContainerMyHabits>
                    <p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </ContainerHabits>
            <Menu />
        </>
    );
}

export default Habits;

const ContainerHabits = styled.div `
    width: 100vw;
    height: 100vh;
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

const ContainerMyHabits = styled.div `
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

    button {
        width: 40px;
        height: 35px;
        margin-top: 22px;
        margin-right: 18px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
        border: none;
    }
`;