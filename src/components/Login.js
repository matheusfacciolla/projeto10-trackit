import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Logo from '../assets/images/logo-trackit.png'
import Loading from './Loading';

import styled from 'styled-components';

function Login() {

    const [infosLogin, setInfosLogin] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const inputsLogin = handleInputsLogin();

    /*
    const ObjLogin = {
        email: infosLogin.email,
        password: infosLogin.password
    }

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';

    const promise = axios.post(URL, ObjLogin);

    promise.then((response) => {
        const { data } = response;
        setInfosLogin(data);
        setIsLoading(false);
        navigate('/hoje');
    });

    promise.catch(error => {
        alert("Deu algum erro...");
    });
    */

    function handleLogin(e) {
        e.preventDefault();
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    });


    //Renderiza os inputs
    function handleInputsLogin() {
        return (
            isLoading === true ?
                <form onSubmit={handleLogin} disabled>
                    <input
                        type='email'
                        placeholder='email'
                        name='email'
                        value={infosLogin.email}
                        onChange={e => setInfosLogin({ ...infosLogin, email: e.target.value })}
                    />
                    <input
                        type='text'
                        placeholder='senha'
                        name='password'
                        value={infosLogin.senha}
                        onChange={e => setInfosLogin({ ...infosLogin, password: e.target.value })}
                    />
                    <button disabled><Loading /></button>
                </form>
                :
                <form onSubmit={handleLogin}>
                    <input
                        type='email'
                        placeholder='email'
                        name='email'
                        value={infosLogin.email}
                        onChange={e => setInfosLogin({ ...infosLogin, email: e.target.value })}
                        required
                    />
                    <input
                        type='text'
                        placeholder='senha'
                        name='password'
                        value={infosLogin.senha}
                        onChange={e => setInfosLogin({ ...infosLogin, password: e.target.value })}
                        required
                    />
                    <Link to='/habitos'>
                        <button type='submit'>Entrar</button>
                    </Link>
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
                {inputsLogin}
            </ContainerInputs>

            <Link to='/cadastro'>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </ContainerContent>
    );
}

export default Login;

const ContainerContent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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
        cursor: pointer;
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