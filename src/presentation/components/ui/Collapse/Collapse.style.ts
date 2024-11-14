import { styled } from 'styled-components';

export const CollapseMenu = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: ${(props) => (props.$isOpen ? '200px' : '0')};
  background-color: #f8f9fa;
  padding: ${(props) => (props.$isOpen ? '10px' : '0 10px')};
`;
