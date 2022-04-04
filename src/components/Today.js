import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import Header from "./Header";
import Menu from './Menu';
import Day from './Library/Day';

function Today() {

    const [todayHabits, setTodayHabits] = useState([]);

    const { userInformation, progress, setProgress, att, setAtt } = useContext(UserContext);

    const isDoneTrue = "#8FC549";
    const isDoneFalse = "#BABABA";

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userInformation.token}`
            }
        }

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;

        const promise = axios.get(URL, config);

        promise.then((response) => {
            const { data } = response;
            setTodayHabits(response.data);
            setProgress((data.filter((element) => element.done).length / data.length) * 100);
        });
        promise.catch(error => {
            alert("Deu algum erro no cadastro...");
        });
    }, [att]);

    return (
        <ContainerContent>
            <Header />
            <Containerdate>
                <Day />
                <ContainerRes>
                    {progress > 0 ? <Porcentagem isDone={progress > 0 ? isDoneTrue : isDoneFalse}>{progress.toFixed(0)}% dos hábitos concluídos</Porcentagem> : <Porcentagem isDone={progress > 0 ? isDoneTrue : isDoneFalse}>Nenhum hábito concluído ainda</Porcentagem>}
                </ContainerRes>
            </Containerdate>
            {todayHabits.map(habit => <TodayHabit info={habit} key={todayHabits.id} att={att} setAtt={setAtt} />)}
            <Menu />
        </ContainerContent>
    );
}

function TodayHabit(props) {

    const { info, setAtt, att } = props
    const { userInformation } = useContext(UserContext);

    const isCheckTrue = "#8FC549";
    const isCheckFalse = "#EBEBEB";

    const isDoneTrue = "#8FC549";
    const isDoneFalse = "#666666";

    function handleCheck() {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${info.id}/${!info.done ? "check" : "uncheck"}`;
        const config = { headers: { Authorization: `Bearer ${userInformation.token}` } };
        const promise = axios.post(URL, null, config);

        promise.then(() => setAtt(!att)).catch(() => { alert("Deu algum erro...")});
    }

    return (
        <ContainerHabits>
            <Containertarefa>
                <p>{info.name}</p>
            </Containertarefa>
            <ContainerSequence>
                <p>Sequência atual:</p><P isDone={info.done ? isDoneTrue : isDoneFalse}>{info.currentSequence} dias</P>
            </ContainerSequence>
            <ContainerRecord>
                <p>Seu recorde:</p><P isDone={info.currentSequence === info.highestSequence && info.done ? isDoneTrue : isDoneFalse}>{info.highestSequence} dias</P>
            </ContainerRecord>
            <ContainerCheck>
                <Button isCheck={info.done ? isCheckTrue : isCheckFalse} onClick={() => { handleCheck(info) }}><ion-icon name="checkmark-outline"></ion-icon></Button>
            </ContainerCheck>
        </ContainerHabits>
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
    margin-left: 18px;
    padding: 1px;
    position: relative;
    margin-top: 10px;
`;

const Containerdate = styled.div`
    margin-top: 100px;
    margin-left: 20px;
    background-color: #E5E5E5;
`;

const ContainerRes = styled.div`
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: ${props => props.isDone};
        margin-bottom: 25px;
    }
`;

const Porcentagem = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.isDone};
    margin-bottom: 25px;
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

const ContainerSequence = styled.div`
    margin-top: 7px;
    display: flex;

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

const ContainerRecord = styled.div`
    margin-top: 7px;
    display: flex;

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

const P = styled.div`     
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: ${props => props.isDone};
    margin-left: 4px;
`;

const ContainerCheck = styled.div`
    ion-icon {
        font-size: 35px;
        color: #FFFFFF;
    }
`;

const Button = styled.button`
    position: absolute;
    top: 0;
    margin-left: 250px;
    margin-top: 14px;
    width: 69px;
    height: 69px;
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    background: ${props => props.isCheck};
`;