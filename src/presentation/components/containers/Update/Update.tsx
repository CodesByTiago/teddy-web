import { SubmitHandler, useForm } from 'react-hook-form';
import { Form } from '../Form';
import { Input } from '../Input';
import { Button } from '../Button';
import { ErrorMessage } from '../ErrorMessage';
import { useUpdateClient } from '../../services/ClientsService';
import { useState } from 'react';
import { SuccessMessage } from '../SuccessMessage/SuccessMessage';
import useClientStore from '../../store/useClientStore';
import { CreateClientDTO } from '../../services/ClientsService/create-client-dto';
import { CreateUserDTO } from '../../services/UserSErvice/create-user-dto';

export default function Update({ id }: { id: string }) {
  const { mutate } = useUpdateClient(id);
  const { data } = useClientStore();

  const findClient = data?.find((client) => client.id === id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateClientDTO>({
    defaultValues: {
      name: findClient?.name,
      salary: findClient?.salary,
      companyValue: findClient?.companyValue,
    },
  });

  const [sended, setSended] = useState(false);
  const [sendedError, setSendedError] = useState(false);

  const storedUser = localStorage.getItem('user');
  const user: CreateUserDTO = storedUser ? JSON.parse(storedUser) : '';

  type FormData = {
    name: string;
    salary: string;
    companyValue: string;
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const updateClient = {
      name: data.name,
      salary: data.salary,
      companyValue: data.companyValue,
      userId: user.id,
    };

    mutate(updateClient, {
      onSuccess: () => {
        setSended(true);
        setSendedError(false);
      },
      onError: () => {
        setSendedError(true);
      },
    });
  };

  return (
    <>
      {sended ? (
        <SuccessMessage>Editado com succeso</SuccessMessage>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type='text'
            placeholder='Digite o nome:'
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <ErrorMessage>Campo nome é obrigatório</ErrorMessage>}

          <Input
            type='text'
            placeholder='Digite o salário:'
            {...register('salary', {
              required: 'Salary is required',
              min: { value: 0, message: 'Salary must be positive' },
            })}
          />
          {errors.salary && (
            <ErrorMessage>Campo salário é origatório</ErrorMessage>
          )}

          <Input
            type='text'
            placeholder='Digite o valor da empresa:'
            {...register('companyValue', {
              required: 'Company Value is required',
              min: { value: 0, message: 'Value must be positive' },
            })}
          />
          {errors.companyValue && (
            <ErrorMessage>Campos empresa é origatório</ErrorMessage>
          )}

          <Button $inverted type='submit'>
            Editar cliente
          </Button>

          {sendedError && <ErrorMessage>Erro ao editar cliente</ErrorMessage>}
        </Form>
      )}
    </>
  );
}
