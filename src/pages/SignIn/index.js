import React from 'react';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';

// import { Container } from './styles';

const SignIn = () => {
  return (
    <Background>
      <Input icon="call" placeholder="Digite seu nome" />
      <Button>Entrar</Button>
    </Background>
  );
};

export default SignIn;
