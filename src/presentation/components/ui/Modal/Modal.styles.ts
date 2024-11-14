import { styled } from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing.km6};
  border-bottom: 1px solid #e9e9e9;
  margin-bottom: ${({ theme }) => theme.spacing.km6};
  padding: 20px;
`;

export const ModalTitle = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
