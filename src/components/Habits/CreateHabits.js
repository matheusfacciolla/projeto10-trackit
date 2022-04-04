import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';

import UserContext from '../../contexts/UserContext';
import Loading from '../Library/Loading';

import styled from 'styled-components';

function MyHabits() {

    const [addHabit, setAddHabit] = useState({ name: '' });
    const [addId, setAddId] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const InputsMyHabits = handleInputMyHabits();

    const { setNewHabit, setHabitCreated, userInformation } = useContext(UserContext);

    const days = [
        { id: 0, day: "D" },
        { id: 1, day: "S" },
        { id: 2, day: "T" },
        { id: 3, day: "Q" },
        { id: 4, day: "Q" },
        { id: 5, day: "S" },
        { id: 6, day: "S" }    
    ]

    const ObjMyHabits = {
        name: addHabit.name,
        days: addId
    }

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

    const config = {
        headers: {
            Authorization: `Bearer ${userInformation.token}`
        }
    }

    function handleNewHabit(e) {
        e.preventDefault();
        setIsLoading(true);

        const promise = axios.post(URL, ObjMyHabits, config);

        promise.then((response) => {
            setIsLoading(false);
            setHabitCreated(response.data);
            setNewHabit(false);
            navigate('/Habitos');
        });

        promise.catch(error => {
            alert('Deu algum erro');
            setIsLoading(false);
        });
    }

    function handleInputMyHabits() {
        return (
            !isLoading ?
                <input
                    type='text'
                    placeholder='nome do hábito'
                    name='name'
                    value={addHabit.name}
                    onChange={(e) => setAddHabit({ ...addHabit, name: e.target.value })}
                    disabled={false}
                    required
                />

                :

                <input
                    type='text'
                    placeholder='nome do hábito'
                    disabled={true}
                    style={{ background: '#F2F2F2', color: '#AFAFAF' }}
                />
        );
    }

    return (
        <ContainerContent>
            <ContainerInputs>
                {InputsMyHabits}
                <ButtonDays>
                    {days.map((day) => <Day info={day} addId={addId} setAddId={setAddId} />)}
                </ButtonDays>
                <ButtonConfirmCancel>
                    {!isLoading ?
                        <>
                            <ButtonCancel onClick={() => setNewHabit(false)}>Cancelar</ButtonCancel>
                            <ButtonConfirm onClick={handleNewHabit} disabled={addId.length > 0 ? false : true}>Salvar</ButtonConfirm>
                        </>
                        :
                        <>
                            <ButtonCancel>Cancelar</ButtonCancel>
                            <ButtonConfirm style={{ opacity: 0.7 }}><Loading /></ButtonConfirm>
                        </>
                    }
                </ButtonConfirmCancel>
            </ContainerInputs>
        </ContainerContent>
    );
}

function Day(props) {

    const { info, addId, setAddId } = props

    const [selected, setSelected] = useState(false);

    const backgroundNotSelected = '#FFFFFF';
    const backgroundSelected = '#CFCFCF';
    const colorNotSelected = '#DBDBDB';
    const colorSelected = '#FFFFFF';

    if (selected === false) {
        return <ButtonDay background={backgroundNotSelected} color={colorNotSelected} onClick={() => {
            setAddId([...addId, info.id])
            setSelected(true);
        }
        }>{info.day}</ButtonDay>

    } else if (selected === true) {

        return <ButtonDay background={backgroundSelected} color={colorSelected} onClick={() => {
            setSelected(false);
            setAddId(addId.splice(addId.indexOf(info.id), 1));
            setAddId([...addId]);
        }
        }>{info.day}</ButtonDay>
    }
}

export default MyHabits;

const ContainerContent = styled.div`
    width: 340px;
    height: 180px;
    margin: auto auto;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 5px;
`;

const ContainerInputs = styled.div`
    width: 340px;
    height: 180px;
        
    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        padding-left: 14px;
        margin-top: 18px;
        margin-left: 18px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    input::placeholder {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
`;

const ButtonDays = styled.div`
    display: flex;
    margin-top: 10px;
    margin-left: 12px;
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
    margin-left: 6px;
`;

const ButtonConfirmCancel = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: end;
`;

const ButtonConfirm = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    color: blue;
    border: none;  
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    margin-left: 23px;
    margin-right: 20px;
    cursor: pointer;
`;

const ButtonCancel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    color: #52B6FF;
    cursor: pointer;
`;