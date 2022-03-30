import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import Header from "./Header";
import Menu from './Menu';

function Today() {

    const [tasks, setTasks] = useState(null);

    const { token } = useContext(UserContext);

    //console.log("context2", useContext(UserContext))

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;

        const promise = axios.get(URL, config);

        promise.then((response) => {
           // console.log("api", response.data)
            setTasks(response.data);
            //console.log("tasks", tasks)
        });
        promise.catch(error => {
            alert("Deu algum erro no cadastro...");
        });
    }, []);

    function handleTasks() {
        if (tasks.length > 0) {
            tasks.map(task => {
                const { id, name, done, currentSequence, highestSequence } = task
                return (
                    <ContainerTasks key={id}>
                        <p>{name}</p>
                        <p>{done}</p>
                        <p>{currentSequence}</p>
                        <p>{highestSequence}</p>
                    </ContainerTasks>
                )
            })
        }
    }

    return (
        <ContainerContent>
            <Header />
            {handleTasks}
            <Menu />
        </ContainerContent>
    );
}

export default Today;

const ContainerContent = styled.div `
    width: 100%;
    height: 100%;
    background-color: #E5E5E5;
`;

const ContainerTasks = styled.div`
    width: 340px;
    height: 94px;
    background-color: red;
    margin-top: 100px;
    margin-left: 20px;

    p {
        color: blue;
    }
`;