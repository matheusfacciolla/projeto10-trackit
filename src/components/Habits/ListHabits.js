import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import UserContext from '../../contexts/UserContext';
import Loading from '../Library/Loading';


import styled from 'styled-components';


function ListHabits() {

    const { listHabits, setListHabits, att, setAtt, userInformation} = useContext(UserContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userInformation.token}`
            }
        }

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;

        const promise = axios.get(URL, config);

        promise.then((response) => {
            setListHabits(response.data);
        });
        promise.catch(error => {
            alert("Deu algum erro no cadastro...");
        });
    }, [att]);

    function handleText() {
        return (
            <p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        );
    }

    return (
        <Container>

            {
                listHabits.length > 0 ?
                    <>
                        {listHabits.map((habit) => 
                        <Habit 
                        info={habit} 
                        setListHabits={setListHabits} 
                        listHabits={listHabits}
                        att={att}
                        setAtt={setAtt} />)}
                    </>
                    :
                    <>
                     {() => {
                         <Loading />
                         setTimeout(handleText, 500)
                         }}
                    </>
            }

        </Container>
    );
}

function Habit(props) {

    const backgroundNotSelected = '#FFFFFF';
    const backgroundSelected = '#CFCFCF';
    const colorNotSelected = '#DBDBDB';
    const colorSelected = '#FFFFFF';

    const { info, setListHabits, att, setAtt } = props;
    const { userInformation} = useContext(UserContext);

    const navigate = useNavigate();

    const dias = [0, 1, 2, 3, 4, 5, 6];
    const mapping = {0: 'D', 1: 'S', 2: 'T', 3: 'Q', 4: 'Q', 5: 'S', 6: 'S'}

    function deleteButtonHandler() {
        if (window.confirm("Você tem certeza?")) {

            const config = {
                headers: { Authorization: `Bearer ${userInformation.token}` }
            };
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${info.id}`

            const promise = axios.delete(URL, config);
            promise.then((response) => {
                setListHabits(response.data);
                setAtt(!att);
                navigate('/habitos');
            });
            promise.catch(() => {
                alert("Algo deu errado...")
            })
        }
    }

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
            <ion-icon name="trash-outline" onClick={ deleteButtonHandler }></ion-icon>
        </ContainerHabit>
    );
}

export default ListHabits;

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
    position: relative;
    
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

    ion-icon {
        font-size:18px;
        width: 18px;
        height: 18px;
        position:absolute;
        top:0;
        right:0;
        color: #666666;
        margin-right: 10px;
        margin-top: 11px;
        cursor: pointer;
    }
`;

const ContainerButton = styled.div`
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