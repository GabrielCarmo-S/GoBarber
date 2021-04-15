import React from 'react';
import {Container, Title} from './styles';

import logoImg from '../../assets/logo.png';
import {Image} from 'react-native';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title>Faça seu logon</Title>
    </Container>
  );
};

export default SignIn;
