import styled, { css } from 'styled-components';

export const ToastContainer = styled.div<{ visible?: boolean; type?: string }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-width: 350px;
  padding: 16px;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: translateY(${({ visible }) => (visible ? '0' : '20px')});
  transition: opacity 0.3s, transform 0.3s;

  ${({ type }) =>
    type === 'success' &&
    css`
      background-color: #4caf50;
    `}
  ${({ type }) =>
    type === 'error' &&
    css`
      background-color: #f44336;
    `}
  ${({ type }) =>
    type === 'warning' &&
    css`
      background-color: #ff9800;
    `}
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin-left: 12px;
`;
