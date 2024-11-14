import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin: auto;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button<{ $inverted?: boolean }>`
  width: 100%;
  color: ${(props) =>
    props.$inverted ? '#fff' : props.theme.font.colors.secondary};
  background-color: ${(props) =>
    props.$inverted ? props.theme.font.colors.secondary : '#fff'};
  padding: ${({ theme }) => theme.spacing.km4};
  border: 1px solid ${({ theme }) => theme.font.colors.secondary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  }
`;
