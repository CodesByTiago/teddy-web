import {
  BarsMenu,
  Logo,
  Menu,
  NavbarContainer,
  NavbarContent,
  User,
} from './NavBar.style';
import { FiAlignJustify } from 'react-icons/fi';
import { useScreenDetector } from '@hooks/shared/useScreenDetector/useScreenDetector';
import Collapse from '../Collapse/Collapse';
import { useState } from 'react';
import { Link } from '../Link';
import { NavBarProps } from '@domain/interfaces/NavBarProps';
import { useUserStore } from '@store/userStore';
import { useAuthStore } from '@store/authStore';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ logo, children }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const user = useUserStore((state) => state.user);
  const clearToken = useAuthStore((state) => state.clearToken);

  const { isMobile } = useScreenDetector();
  const navigate = useNavigate();

  const logout = () => {
    clearToken();
    navigate('/login');
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        {isMobile && (
          <BarsMenu>
            <FiAlignJustify size={30} onClick={() => setIsOpen(!isOpen)} />
          </BarsMenu>
        )}
        <Logo src={logo} />
        <Menu>{children}</Menu>
        <User>
          Bem-vindo, <span>{user ? user.name : 'Usuário'}</span>
        </User>
      </NavbarContent>
      {isMobile && (
        <Collapse isOpen={isOpen}>
          <Link to='/clientes'>Clientes</Link>
          <Link to='/clientes-selecionados'>Clientes selecionados</Link>
          <Link to='/login' onClick={() => logout()}>
            Sair
          </Link>
        </Collapse>
      )}
    </NavbarContainer>
  );
}
