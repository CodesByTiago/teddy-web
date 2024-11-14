import { useDeleteClient } from '../../services/ClientsService';
import useClientStore from '../../store/useClientStore';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { DeleteWrapper } from './Delete.style';

export default function Delete({ id }: { id: string }) {
  const { deleteClient } = useClientStore();
  const { mutate } = useDeleteClient();

  const handleDeleteClient = () => {
    mutate(id, {
      onSuccess: () => {
        deleteClient(id);
      },
    });
  };

  return (
    <DeleteWrapper>
      <Typography>
        Você está prestes as excluir o cliente: <span>Eduardo</span>
      </Typography>
      <Button $inverted onClick={() => handleDeleteClient()}>
        Excluir cliente
      </Button>
    </DeleteWrapper>
  );
}
