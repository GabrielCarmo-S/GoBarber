import React from 'react';
import logoImg from '../../assets/logo.png';
import {Image, KeyboardAvoidingView, Platform} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          keyboardShouldPersistTaps="handled">
          <Container>
            <Image source={logoImg} />

            <Title>Faça seu logon</Title>

            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button onPress={() => {}}>Entrar</Button>

            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci Minha Senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
          <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
            <Icon name="log-in" size={20} color="#ff9000" />
            <CreateAccountButtonText>Criar uma Conta</CreateAccountButtonText>
          </CreateAccountButton>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
