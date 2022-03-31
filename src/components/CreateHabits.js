import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';

import UserContext from '../contexts/UserContext';
import Loading from './Loading';

import styled from 'styled-components';

function MyHabits() {

    const [addHabit, setAddHabit] = useState({ name: '', days: [] });
    const [addId, setAddId] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    //const [isSelected, setIsSelected] = useState(false);

    const navigate = useNavigate();
    const InputsMyHabits = handleInputMyHabits();

    const { token, setNewHabit } = useContext(UserContext);

    const days = [
        { id: 1, day: "D" },
        { id: 2, day: "S" },
        { id: 3, day: "T" },
        { id: 4, day: "Q" },
        { id: 5, day: "Q" },
        { id: 6, day: "S" },
        { id: 7, day: "S" }
    ]

    const ObjMyHabits = {
        name: addHabit.name,
        days: addId
    }

    console.log("arrayid", addId)
    console.log("objeto", ObjMyHabits)

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function handleNewHabit(e) {
        e.preventDefault();
        setIsLoading(true);

        const promise = axios.post(URL, ObjMyHabits, config);

        promise.then((response) => {
            setIsLoading(false);
            console.log("resposta api habito criado", response.data);
            setAddHabit(response.data)
            navigate('/Hoje');
        });

        promise.catch(error => {
            alert('Usuário ou senha incorretos...');
            console.log(error.data)
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
                            <ButtonCancel onClick={() => setNewHabit(true)}>Cancelar</ButtonCancel>
                            <ButtonConfirm onClick={handleNewHabit}>Salvar</ButtonConfirm>
                        </>
                        :
                        <>
                            <ButtonCancel>Cancelar</ButtonCancel>
                            <ButtonConfirm><Loading /></ButtonConfirm>
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

    console.log(selected)

    const backgroundNotSelected = '#FFFFFF';
    const backgroundSelected = '#CFCFCF';
    const colorNotSelected = '#DBDBDB';
    const colorSelected = '#FFFFFF';

    if (selected === false) {
        console.log("entrou1")
        return <ButtonDay background={backgroundNotSelected} color={colorNotSelected} onClick={() => {
            setSelected(true);
            setAddId([...addId, info.id])
        }
        }>{info.day}</ButtonDay>

    } else if (selected === true) {
        console.log("entrou2")
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
    margin-left: 17px;
    margin-top: 20px;
    display: flex;
    align-items: center;
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
`;