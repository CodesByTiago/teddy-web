import { FiX } from 'react-icons/fi';
import { ModalProps } from '@domain/interfaces/ModalProps';
import Create from '@components/containers/Create';
import Update from '@components/containers/Update';
import Delete from '@components/containers/Delete';
import {
  Button,
  ModalBackground,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from './Modal.styles';

export default function Modal({
  id,
  name,
  onClose,
  content,
  modalTitle,
}: ModalProps) {
  const renderComponent = () => {
    switch (content) {
      case 'Update':
        return <Update id={`${id}`} />;
      case 'Delete':
        return <Delete id={`${id}`} name={name} />;
      case 'Create':
        return <Create />;
      default:
        null;
    }
  };

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{modalTitle}</ModalTitle>
          <Button onClick={onClose}>
            <FiX size={20} />
          </Button>
        </ModalHeader>
        <ModalContent>{renderComponent()}</ModalContent>
      </ModalContainer>
    </ModalBackground>
  );
}
