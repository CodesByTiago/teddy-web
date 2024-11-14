import NavBar from '@components/ui/NavBar';
import { MainProps } from '@domain/interfaces/MainProps';
import { MainWrapper } from './Main.style';
import logo from '../assets/teddy-logo.png';
import { Link } from '@components/ui/Link';
import { useScreenDetector } from '@hooks/useScreenDetector/useScreenDetector';

export default function Main({ children }: MainProps) {
  const { isDesktop } = useScreenDetector();

  const logout = () => {
    localStorage.setItem('user', '');
  };

  return (
    <MainWrapper>
      <NavBar logo={logo}>
        {isDesktop && (
          <>
            <Link to='/clientes'>Clientes</Link>
            <Link to='/clientes-selecionados'>Clientes selecionados</Link>
            <Link to='/' onClick={logout}>
              Sair
            </Link>
          </>
        )}
      </NavBar>
      {children}
    </MainWrapper>
  );
}
