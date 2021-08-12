import React from 'react';
import Input from '../../components/Input';
import LoginImage from '../../assets/LoginImage.svg';
import LogoCompleta from '../../assets/LogoCompleta.svg';
import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';

export default function Login() {
    return (
        <Container>
            <Background>
                <img src={LoginImage} alt="Handmade Gi Riffarachi" />
            </Background>
            <Content>
                <div className="Head_logo">
                    <img src={LogoCompleta} alt="Handmade Gi Riffarachi" />
                </div>
                <div className="form_container">
                    <h1>Bem vindo(a) de volta!</h1>
                    <p>Entre com seus dados</p>
                    <form className="login_form">

                        <Input type="text" placeholder='Nome completo' Icon={FiMail}></Input>
                        <Input type="password" placeholder='Senha' Icon={FiLock}></Input>

                        <button type='submit' className='login_button'>Cadastrar</button>
                        <a href="/">Não tenho cadastro</a>
                    </form>
                </div>
            </Content>
        </Container>
    );
};