import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Form, Input } from '@components/ui/FormElements';
import { ErrorMessage } from '@components/ui/ErrorMessage';
import { CreateCustomerModel } from '@domain/models/Customer';
import { SuccessMessage } from '@components/ui/SuccessMessage';
import { useCreateCustomerViewModel } from '@hooks/viewmodels/useCustmerViewModel/useClientViewModel';
import { useUserStore } from '@store/userStore';
import { PriceInput } from '@components/ui/FormElements/FormElements';

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCustomerModel>();

  const { mutate } = useCreateCustomerViewModel();
  const { user, addCustomer } = useUserStore();

  const [sended, setSended] = useState(false);
  const [sendedError, setSendedError] = useState(false);

  const onSubmit: SubmitHandler<CreateCustomerModel> = (data) => {
    const createCustomer = {
      name: data.name,
      salary: data.salary,
      companyValue: data.companyValue,
      userId: user.id,
    };

    mutate(createCustomer, {
      onSuccess: (data) => {
        setSended(true);
        addCustomer(data);
      },
      onError: () => {
        setSendedError(true);
      },
    });
  };

  return (
    <>
      {sended ? (
        <SuccessMessage>Cliente cadastrado com succeso</SuccessMessage>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type='text'
            placeholder='Digite o nome:'
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <ErrorMessage>Campo nome é obrigatório</ErrorMessage>}

          <PriceInput
            intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
            decimalScale={2}
            placeholder='Digite o salário:'
            {...register('salary', {
              required: 'Salary is required',
              min: { value: 0, message: 'Salary must be positive' },
            })}
          />
          {errors.salary && (
            <ErrorMessage>Campo salário é origatório</ErrorMessage>
          )}

          <PriceInput
            intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
            decimalScale={2}
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
            Criar cliente
          </Button>

          {sendedError && <ErrorMessage>Erro ao criar cliente</ErrorMessage>}
        </Form>
      )}
    </>
  );
}
