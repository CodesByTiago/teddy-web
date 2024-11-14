import {
  LogoPageNotFound,
  NotFoundContainer,
  NotFoundWrapper,
} from './NotFound.styled';
import { Typography } from '@components/ui/Typography';
import { Button } from '@components/ui/FormElements';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo-branco-2048x993.webp';

export default function NotFound() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/clientes');
  };

  return (
    <NotFoundWrapper>
      <NotFoundContainer>
        <LogoPageNotFound src={logo} />
        <Typography fontWeight='bold' fontSize='20px'>
          Essa página não existe!
        </Typography>
        <Button onClick={() => handleReturn()}>
          Voltar para a página inicial!
        </Button>
      </NotFoundContainer>
    </NotFoundWrapper>
  );
}
