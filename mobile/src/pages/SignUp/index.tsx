import React, {useRef} from 'react';
import logoImg from '../../assets/logo.png';
import {Image, KeyboardAvoidingView, Platform} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

import Icon from 'react-native-vector-icons/Feather';

import {Container, Title, BackToSignIn, BackToSignInText} from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
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

            <Title>Crie sua conta</Title>

            <Form ref={formRef} onSubmit={() => {}}>
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="email" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha" />

              <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>
            </Form>
          </Container>
          <BackToSignIn onPress={() => navigation.navigate('SignIn')}>
            <Icon name="arrow-left" size={20} color="#fff" />
            <BackToSignInText>Voltar para logon</BackToSignInText>
          </BackToSignIn>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
