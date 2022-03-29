import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Logo from '../assets/images/logo-trackit.png';
import Loading from './Loading';

import styled from 'styled-components';

function Register() {

    const [infosRegister, setInfosRegister] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const inputsRegister = handleInputsRegister();

    // const ObjRegister = {
    //    email: infosRegister.email,
    //     name: infosRegister.name,
    //     image: infosRegister.image,
    //     password: infosRegister.password
    // }

    //const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';

    // const promise = axios.post(URL, ObjRegister);

    //promise.then((response) => {
    //     const { data } = response;
    //     setInfosRegister(data);
    //     setIsLoading(false);
    //     navigate('/');
    // });

    // promise.catch(error => {
    //     alert("Deu algum erro...");
    // });

    //post
    function handleRegister(e) {
        e.preventDefault();
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    });

    //Renderiza os inputs
    function handleInputsRegister() {
        return (
            isLoading === true ?
                <form onSubmit={handleRegister}>
                    <input
                        type='email'
                        placeholder='email'
                        name='email'
                        value={infosRegister.email}
                        onChange={e => setInfosRegister({ ...infosRegister, email: e.target.value })}
                    />
                    <input
                        type='text'
                        placeholder='senha'
                        name='password'
                        value={infosRegister.password}
                        onChange={e => setInfosRegister({ ...infosRegister, password: e.target.value })}
                    />
                    <input
                        type='text'
                        placeholder='nome'
                        name='name'
                        value={infosRegister.name}
                    />
                    <input
                        type='text'
                        placeholder='foto'
                        name='image'
                        value={infosRegister.image}
                    />
                    <div>
                        <button disabled><Loading /></button>
                    </div>
                </form>
                :
                <form onSubmit={handleRegister}>
                    <input
                        type='email'
                        placeholder='email'
                        name='email'
                        value={infosRegister.email}
                        onChange={e => setInfosRegister({ ...infosRegister, email: e.target.value })}
                        required
                    />
                    <input
                        type='text'
                        placeholder='senha'
                        name='password'
                        value={infosRegister.password}
                        onChange={e => setInfosRegister({ ...infosRegister, password: e.target.value })}
                        required
                    />
                    <input
                        type='text'
                        placeholder='nome'
                        name='name'
                        value={infosRegister.name}
                        onChange={e => setInfosRegister({ ...infosRegister, name: e.target.value })}
                        required
                    />
                    <input
                        type='text'
                        placeholder='foto'
                        name='image'
                        value={infosRegister.image}
                        onChange={e => setInfosRegister({ ...infosRegister, image: e.target.value })}
                        required
                    />
                    <div>
                        <button type='submit'>Cadastrar</button>
                    </div>
                </form>
        );
    }

    return (
        <ContainerContent>
            <ContainerLogo>
                <img src={Logo} alt='logo' />
                <h1>TrackIt</h1>
            </ContainerLogo>

            <ContainerInputs>
                {inputsRegister}
            </ContainerInputs>

            <Link to='/'>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </ContainerContent>
    );
}

export default Register;

const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const ContainerLogo = styled.div`
    
    img {
        width: 180px;
        height: 178.38px;
        margin-top: 68px;
    }

    h1 {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 68.982px;
        line-height: 86px;
        text-align: center;
        color: #126BA5;
        margin-bottom: 33px;
    }
`;

const ContainerInputs = styled.div`

    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        margin-bottom: 6px;
        display: flex;
        flex-direction: column;
    }

    input::placeholder {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        padding-left: 11px;
    }

    button {
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        border: none;
        color: #FFFFFF;
        margin-bottom: 25px;
    }

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`;