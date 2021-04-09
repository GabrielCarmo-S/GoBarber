import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>

          <Input placeholder="E-mail" icon={FiMail} type="text" />

          <Input placeholder="Senha" icon={FiLock} type="password" />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci Minha Senha</a>
        </form>

        <a href="ssss">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
