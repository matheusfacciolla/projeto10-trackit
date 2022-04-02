import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';

import UserContext from '../contexts/UserContext';
import Logo from '../assets/images/logo-trackit.png'
import Loading from './Library/Loading';

import styled from 'styled-components';

function Login() {

    const [infosLogin, setInfosLogin] = useState({email: '', password: ''});
    const [isLoading, setIsLoading] = useState(false);
    
    const inputsLogin = handleInputsLogin();
    const navigate = useNavigate();
    const { setToken, setImgPerfil } = useContext(UserContext);
    
    const ObjLogin = {
        email: infosLogin.email,
        password: infosLogin.password
    }

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';

    function handleLogin(e) {
        e.preventDefault();
        setIsLoading(true);

        const promise = axios.post(URL, ObjLogin);

        promise.then((response) => { 
            setToken(response.data.token);
            //localStorage.setItem('token', JSON.stringify({...response.data}));
            setImgPerfil(response.data.image);
            setIsLoading(false);     
            navigate('/Hoje');
        });

        promise.catch(error => {
            alert('Usuário ou senha incorretos...'); 
            setIsLoading(false);
        });
    }

    function handleInputsLogin() {
        return (
            isLoading === true ?
                <form onSubmit={handleLogin}>
                    <input
                        type='email'
                        placeholder='email'
                        disabled={true}
                        style={{ background: '#F2F2F2', color: '#AFAFAF' }}
                    />
                    <input
                        type='password'
                        placeholder='senha'
                        disabled={true}
                        style={{ background: '#F2F2F2', color: '#AFAFAF' }}
                        
                    />
                    <button disabled style={{ opacity: 0.7 }}><Loading /></button>
                </form>
                :
                <form onSubmit={handleLogin}>
                    <input
                        type='email'
                        placeholder='email'
                        name='email'
                        value={infosLogin.email}
                        onChange={e => setInfosLogin({ ...infosLogin, email: e.target.value })}
                        disabled={false}
                        required
                    />
                    <input
                        type='password'
                        placeholder='senha'
                        name='password'
                        value={infosLogin.senha}
                        onChange={e => setInfosLogin({ ...infosLogin, password: e.target.value })}
                        disabled={false}
                        required
                    />
                        <button type='submit'>Entrar</button>
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
    background-color: white;
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
        border-radius: 5px;
        margin-bottom: 6px;
        display: flex;
        flex-direction: column;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        padding-left: 14px;
    }

    input::placeholder {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
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