import NavBar from '@components/ui/NavBar';
import { MainProps } from '@domain/interfaces/MainProps';
import { MainWrapper } from './Main.style';
import logo from '../../../assets/teddy-logo.png';
import { Link } from '@components/ui/Link';
import { useScreenDetector } from '@hooks/useScreenDetector/useScreenDetector';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';

export default function Main({ children }: MainProps) {
  const { isDesktop } = useScreenDetector();

  const clearToken = useAuthStore((state) => state.clearToken);
  const navigate = useNavigate();

  const logout = () => {
    clearToken();
    navigate('/login');
  };

  return (
    <MainWrapper>
      <NavBar logo={logo}>
        {isDesktop && (
          <>
            <Link to='/clientes'>Clientes</Link>
            <Link to='/clientes-selecionados'>Clientes selecionados</Link>
            <Link to='/login' onClick={logout}>
              Sair
            </Link>
          </>
        )}
      </NavBar>
      {children}
    </MainWrapper>
  );
}
