import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import UserContext from '../../contexts/UserContext';

import styled from 'styled-components';

function Menu() {

    const [listHabits, setListHabits] = useState([]);
    const { token } = useContext(UserContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;

        const promise = axios.get(URL, config);

        promise.then((response) => {
            console.log("api lista de habitos", response.data)
            setListHabits(response.data);
        });
        promise.catch(error => {
            alert("Deu algum erro no cadastro...");
        });
    }, []);

    return (
        <Container>

            {
                listHabits.length > 0 ?
                    <>
                        {listHabits.map((habit) => <Habit info={habit} />)}
                    </>
                    :
                    <p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            }

        </Container>
    );
}

export default Menu;

function Habit(props) {

    const backgroundNotSelected = '#FFFFFF';
    const backgroundSelected = '#CFCFCF';
    const colorNotSelected = '#DBDBDB';
    const colorSelected = '#FFFFFF';

    const { info } = props;

    const dias = [1, 2, 3, 4, 5, 6, 7];
    const mapping = { 1: 'D', 2: 'S', 3: 'T', 4: 'Q', 5: 'Q', 6: 'S', 7: 'S' }


    return (
        <ContainerHabit>
            <p>{info.name}</p>
            <ContainerButton>
            {
                dias.map(day =>
                    <ButtonDay
                        background={info.days.includes(day) ? backgroundSelected : backgroundNotSelected}
                        color={info.days.includes(day) ? colorSelected : colorNotSelected} >{mapping[day]}
                    </ButtonDay>)
            }
            </ContainerButton>
        </ContainerHabit>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContainerHabit = styled.div`
    width: 340px;
    height: 91px;
    margin-top: 10px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    
    P {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        margin-top: 10px;
        margin-left: 13px;
        color: #666666;
    }
`;

const ContainerButton = styled.div `
    display: flex;
    align-items: center;
    margin-left: 14px;
    margin-top: 8px;
`;

const ButtonDay = styled.div`
    width: 30px;
    height: 30px;
    background: ${props => props.background};
    border: 1px solid #DBDBDB;
    border-radius: 5px;
    text-align: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.color};
    cursor: pointer;
    margin-right: 4px;
`;