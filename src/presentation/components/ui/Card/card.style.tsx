import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: 4px;
  padding: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.km15};
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.sz8};
  margin-bottom: ${({ theme }) => theme.spacing.km5};
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const CardText = styled.p`
  font-size: ${({ theme }) => theme.font.size.sz7};
  text-align: center;
  line-height: 20px;
`;

export const CardFooter = styled.div<{ selected?: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.km7};
`;

export const CardSelected = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
`;

export const CardInteractiveIcon = styled.div`
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`;
