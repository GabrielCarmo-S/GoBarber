import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu cadastro</h1>

          <Input placeholder="Nome" icon={FiUser} type="text" />

          <Input placeholder="E-mail" icon={FiMail} type="text" />

          <Input placeholder="Senha" icon={FiLock} type="password" />

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="ssss">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
