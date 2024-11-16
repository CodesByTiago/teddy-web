import { useState } from 'react';
import { useDeleteCustomerViewModel } from '@hooks/viewmodels/useCustmerViewModel/useClientViewModel';
import { DeleteWrapper } from './Delete.style';
import { Typography } from '@components/ui/Typography';
import { Button } from '@components/ui/FormElements';
import { useUserStore } from '@store/userStore';
import { AxiosError } from 'axios';
import { SuccessMessage } from '@components/ui/SuccessMessage';
import Toast from '@components/ui/Toast';

export default function Delete({ id, name }: { id: string; name?: string }) {
  const [sended, setSended] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const { mutate } = useDeleteCustomerViewModel();
  const { deleteCustomer } = useUserStore();

  const handleDeleteClient = () => {
    mutate(id, {
      onSuccess: () => {
        setSended(true);
        deleteCustomer(id);
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          setShowToast(!showToast);
        }
      },
    });
  };

  return (
    <>
      {showToast && (
        <Toast
          message='Erro ao excluir cliente!'
          duration={3000}
          onClose={() => setShowToast(false)}
          type='success'
        />
      )}
      {sended ? (
        <SuccessMessage>Cliente deletado com sucesso!</SuccessMessage>
      ) : (
        <DeleteWrapper>
          <Typography>
            Você está prestes as excluir o cliente: <span>{name}</span>
          </Typography>
          <Button $inverted onClick={() => handleDeleteClient()}>
            Excluir cliente
          </Button>
        </DeleteWrapper>
      )}
    </>
  );
}
