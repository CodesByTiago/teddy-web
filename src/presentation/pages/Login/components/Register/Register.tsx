import Toast from '@components/ui/Toast';
import { RegisterContainer, RegisterWrapper } from './Register.styled';
import { useState } from 'react';
import { RegisterModel } from '@domain/models/RegisterModel';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Form, Input } from '@components/ui/FormElements';
import { ErrorMessage } from '@components/ui/ErrorMessage';
import { useRegister } from '@services/repostitories/RegisterRepository';
import { AxiosError } from 'axios';

export default function Register() {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const { mutate } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterModel>();

  const onSubmit: SubmitHandler<RegisterModel> = (data) => {
    const newRegister = {
      name: data.name,
      email: data.email.toLowerCase(),
      password: data.password,
    };

    mutate(newRegister, {
      onSuccess: () => {
        setShowToast(true);
        setMessageType('success');
        setMessage('Usuário criado com sucesso!');
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          setShowToast(true);
          setMessageType('error');
          setMessage(error.response?.data.message);
        }
      },
    });
  };

  return (
    <RegisterWrapper>
      {showToast && (
        <Toast
          message={message}
          duration={3000}
          onClose={() => setShowToast(false)}
          type={messageType}
        />
      )}

      <RegisterContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type='text'
            placeholder='Digite o seu nome:'
            {...register('name', { required: 'Nome é requirido!' })}
          />
          {errors.name && (
            <ErrorMessage>O campo nome é obrigatório</ErrorMessage>
          )}

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
            Cadastrar
          </Button>
        </Form>
      </RegisterContainer>
    </RegisterWrapper>
  );
}
