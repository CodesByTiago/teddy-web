import { ReactNode } from 'react';
import { CollapseMenu } from './Collapse.style';

export default function Collapse({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: ReactNode;
}) {
  return <CollapseMenu $isOpen={isOpen}>{children}</CollapseMenu>;
}
