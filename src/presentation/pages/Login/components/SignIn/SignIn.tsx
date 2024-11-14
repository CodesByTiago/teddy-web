import Toast from '@components/ui/Toast';
import { SignInContainer, SignInWrapper } from './SignIn.styled';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Form, Input } from '@components/ui/FormElements';
import { ErrorMessage } from '@components/ui/ErrorMessage';
import { SignInModel } from '@domain/models/SignInModel';

export default function Register() {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInModel>();

  const onSubmit: SubmitHandler<SignInModel> = (data) => {
    const newRegister = {
      email: data.email.toLowerCase(),
      password: data.password,
    };

    console.log(newRegister);
  };

  return (
    <SignInWrapper>
      {showToast && (
        <Toast
          message={message}
          duration={3000}
          onClose={() => setShowToast(false)}
          type={messageType}
        />
      )}

      <SignInContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type='email'
            placeholder='Digite o seu nome:'
            {...register('email', { required: 'E-mail é requirido!' })}
          />
          {errors.email && (
            <ErrorMessage>O campo e-mail é obrigatório</ErrorMessage>
          )}

          <Input
            type='password'
            placeholder='Digite o seu nome:'
            {...register('password', { required: 'Senha é requirida!' })}
          />
          {errors.email && (
            <ErrorMessage>O campo senha é obrigatório</ErrorMessage>
          )}

          <Button $inverted type='submit'>
            Entrar
          </Button>
        </Form>
      </SignInContainer>
    </SignInWrapper>
  );
}
