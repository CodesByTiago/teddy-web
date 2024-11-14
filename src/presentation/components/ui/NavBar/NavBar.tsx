import { useNavigate } from 'react-router-dom';
import { NavBarInterface } from '../../interfaces/NavBarInterface';
import { CreateUserDTO } from '../../services/UserSErvice/create-user-dto';
import {
  BarsMenu,
  Logo,
  Menu,
  NavbarContainer,
  NavbarContent,
  User,
} from './NavBar.style';
import { FiAlignJustify } from 'react-icons/fi';
import { useScreenDetector } from '../../hooks/useScreenDetector';
import Collapse from '../Collapse/Collapse';
import { useState } from 'react';
import { Link } from '../Link';

export default function NavBar({ logo, children }: NavBarInterface) {
  const { isMobile } = useScreenDetector();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const storedUser = localStorage.getItem('user');
  const user: CreateUserDTO = storedUser ? JSON.parse(storedUser) : '';

  if (!user) {
    navigate('/');
  }

  const logout = () => {
    localStorage.setItem('user', '');
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
          <Link to='/' onClick={logout}>
            Sair
          </Link>
        </Collapse>
      )}
    </NavbarContainer>
  );
}
