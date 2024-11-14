import { Logo } from '@components/ui/NavBar/NavBar.style';
import {
  HomeContainer,
  HomeTypographyWrapper,
  HomeWrapper,
} from './Home.styled';
import logo from '../../../assets/logo-branco-2048x993.webp';
import { Typography } from '@components/ui/Typography';
import { Button } from '@components/ui/FormElements';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/login');
  };

  return (
    <HomeWrapper>
      <HomeContainer>
        <Logo src={logo} />
        <HomeTypographyWrapper>
          <Typography fontSize='18px' fontWeight='bold'>
            Seja bem-vindo a Teddy Open Finance
          </Typography>
          <Typography fontSize='16' fontWeight='500'>
            Cadastre-se ou faça seu login agora mesmo!
          </Typography>
        </HomeTypographyWrapper>
        <Button $inverted onClick={() => handleRedirect()}>
          Acessar
        </Button>
      </HomeContainer>
    </HomeWrapper>
  );
}
