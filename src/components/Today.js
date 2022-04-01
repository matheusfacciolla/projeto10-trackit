import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import Header from "./Header";
import Menu from './Menu';
import Day from './Library/Day';

function Today() {

    const [todayHabits, setTodayHabits] = useState([]);

    const { token } = useContext(UserContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;

        const promise = axios.get(URL, config);

        promise.then((response) => {
            console.log("api resposta today", response.data)
            setTodayHabits(response.data);
        });
        promise.catch(error => {
            alert("Deu algum erro no cadastro...");
        });
    }, []);

    return (
        <ContainerContent>
            <Header />
            <Containerdate>
                <Day />
            </Containerdate>
            <ContainerHabits>
                {todayHabits.map(habit => <HandleTasks info={habit} />)}
            </ContainerHabits>
            <Menu />
        </ContainerContent>
    );
}

function HandleTasks(props) {

    const { info } = props

    return (
        <>
            <Containertarefa>
                <p>{info.name}</p>
            </Containertarefa>
            <ContainerSequencia>
                <p>Sequência atual: {info.currentSequence}</p>
                <p>Seu recorde: {info.highestSequence}</p>
            </ContainerSequencia>
            <ContainerCheck>
                <button><ion-icon name="checkmark-outline"></ion-icon></button>
            </ContainerCheck>
        </>
    );

}

export default Today;

const ContainerContent = styled.div`
    width: 100%;
    height: 100%;
    background-color: #E5E5E5;
`;

const ContainerHabits = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-left: 33px;
    margin-top: 40px;
    padding: 1px;
    position: relative;
`;

const Containertarefa = styled.div`   
   p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-top: 15px;
        margin-left: 15px;
    }
`;

const ContainerSequencia = styled.p `
    margin-top: 7px;

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
        margin-left: 15px;
    }
`;

const ContainerCheck = styled.div `
    button {
        position: absolute;
        top: 0;
        margin-left: 250px;
        margin-top: 14px;
        width: 69px;
        height: 69px;
        border: 1px solid #E7E7E7;
        box-sizing: border-box;
        border-radius: 5px;
    }
`;

const Containerdate = styled.div`
    margin-top: 100px;
    margin-left: 20px;
    background-color: #E5E5E5;
`;