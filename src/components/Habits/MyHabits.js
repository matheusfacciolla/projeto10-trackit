import { useContext } from 'react';

import Header from '../Header';
import Menu from '../Menu';
import CreateHabits from './CreateHabits';
import ListHabits from './ListHabits'
import UserContext from '../../contexts/UserContext';

import styled from 'styled-components';

function MyHabits() {

    const { newHabit, setNewHabit } = useContext(UserContext);

    return (
        <>
            <Header />
            <ContainerHabits>
                <ContainerMyHabits>
                    <h2>Meus hábitos</h2>
                    <button onClick={() => setNewHabit(true)}>+</button>
                </ContainerMyHabits>
                {
                    newHabit ?
                        <CreateHabits />
                        :
                        <ContainerListHabits>
                            <ListHabits />
                        </ContainerListHabits>
                }
            </ContainerHabits>
            <Menu />
        </>
    );
}

export default MyHabits;

const ContainerHabits = styled.div`
    width: 100%;
    height: 100%;
    background: #E5E5E5;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
`;

const ContainerMyHabits = styled.div`
    display: flex;
    justify-content: space-between;

    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        margin-top: 28px;
        color: #126BA5;
    }

    button {
        display: flex;
        justify-content: center;
        align-items:center;
  
        width:40px;
        height:35px;
        background-color: #52B6FF;
        color: #FFFFFF;
        border: none;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-size: 26.976px;
        padding-bottom:5px;
        margin-top: 22px;
        cursor: pointer;
    }
`;

const ContainerListHabits = styled.div`
   display: flex;
   flex-direction: column;
`;