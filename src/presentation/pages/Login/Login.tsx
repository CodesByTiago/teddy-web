import { useEffect, useState } from 'react';
import { Typography } from '@components/ui/Typography';
import { LoginWrapper, LoginNewUser, LoginContainer } from './Login.styled';
import SignIn from './components/SignIn';
import Register from './components/Register';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';
import useTokenValidation from '@hooks/shared/useTokenValidation/useTokenValidation';

export default function Login() {
  const [registerUser, setRegisterUser] = useState<boolean>(false);
  const { token } = useAuthStore();
  const isValidToken = useTokenValidation(token);
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      if (isValidToken) {
        navigate('/clientes');
      }
    };

    checkToken();
  }, [isValidToken, navigate]);

  return (
    <LoginWrapper>
      <LoginContainer>
        <Typography fontSize='30px'>Olá, seja bem-vindo!</Typography>
        {registerUser ? <Register /> : <SignIn />}
        <LoginNewUser>
          <Typography
            color='#9e9e9e'
            onClick={() => setRegisterUser(!registerUser)}
          >
            {registerUser ? 'Fazer Login' : 'Cadastrar novo usuário'}
          </Typography>
        </LoginNewUser>
      </LoginContainer>
    </LoginWrapper>
  );
}
