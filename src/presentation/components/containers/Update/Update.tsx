import { SubmitHandler, useForm } from 'react-hook-form';
import { useUpdateCustomerViewModel } from '@hooks/viewmodels/useCustmerViewModel/useClientViewModel';
import { ErrorMessage } from '@components/ui/ErrorMessage';
import { Button, Input } from '@components/ui/FormElements';
import { UpdateCustomerModel } from '@domain/models/Customer';
import { useUserStore } from '@store/userStore';
import { Form, PriceInput } from '@components/ui/FormElements/FormElements';
import { SuccessMessage } from '@components/ui/SuccessMessage';
import { useState } from 'react';
import Toast from '@components/ui/Toast';

export default function Update({ id }: { id: string }) {
  const [sended, setSended] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const { mutate } = useUpdateCustomerViewModel(id);
  const user = useUserStore((state) => state.user);
  const findCustomer = user.customers.find((customer) => customer.id === id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateCustomerModel>({
    defaultValues: {
      name: findCustomer?.name,
      salary: findCustomer?.salary,
      companyValue: findCustomer?.companyValue,
    },
  });

  const onSubmit: SubmitHandler<UpdateCustomerModel> = (data) => {
    const updateCustomer = {
      name: data.name,
      salary: data.salary,
      companyValue: data.companyValue,
    };

    mutate(updateCustomer, {
      onSuccess: () => {
        setSended(true);
      },
      onError: () => {},
    });
  };

  return (
    <>
      {showToast && (
        <Toast
          message='Erro ao editar cliente!'
          duration={3000}
          onClose={() => setShowToast(false)}
          type='success'
        />
      )}
      {sended ? (
        <SuccessMessage>Editado com succeso!</SuccessMessage>
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
            <ErrorMessage>Campos valor da empresa é origatório</ErrorMessage>
          )}

          <Button $inverted type='submit'>
            Editar cliente
          </Button>
        </Form>
      )}
    </>
  );
}
