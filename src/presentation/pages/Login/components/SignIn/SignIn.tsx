import Toast from '@components/ui/Toast';
import { SignInContainer, SignInWrapper } from './SignIn.styled';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Form, Input } from '@components/ui/FormElements';
import { ErrorMessage } from '@components/ui/ErrorMessage';
import { SignInModel } from '@domain/models/SignInModel';
import { useLogin } from '@hooks/useAuth/useAuth';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [showToast, setShowToast] = useState(false);

  const loginMutation = useLogin();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInModel>();

  const onSubmit: SubmitHandler<SignInModel> = (data) => {
    const loginData = {
      email: data.email.toLowerCase(),
      password: data.password,
    };

    loginMutation.mutate(loginData, {
      onSuccess: () => {
        navigate('/clientes');
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          if (error.code !== 'ERR_NETWORK') {
            setShowToast(true);
            setMessageType('error');
            setMessage(error.response?.data.message);
          } else {
            setShowToast(true);
            setMessageType('error');
            setMessage('Serviço indisponível!');
          }
        }
      },
    });
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
            placeholder='Digite o seu e-mail:'
            {...register('email', { required: 'E-mail é requirido!' })}
          />
          {errors.email && (
            <ErrorMessage>O campo e-mail é obrigatório</ErrorMessage>
          )}

          <Input
            type='password'
            placeholder='Digite a sua senha:'
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
