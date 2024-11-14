import { useState } from 'react';
import {
  CardContainer,
  CardFooter,
  CardInteractiveIcon,
  CardSelected,
  CardText,
  CardTitle,
} from './card.style';
import { FiPlus, FiEdit2, FiTrash2, FiMinus } from 'react-icons/fi';
import Modal from '../Modal';
import Toast from '../Toast/Toast';
import { CardProps } from '@domain/interfaces/CardProps';
import { useUserStore } from '@store/userStore';

export default function Card({
  id,
  name,
  salary,
  companyValue,
  isSelected,
}: CardProps) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [showToast, setShowToast] = useState(false);

  const { addSelectCustomer, deselectCustomer } = useUserStore();

  const handleOpenModal = (content: string, title: string) => {
    setModalContent(content);
    setShowModal(true);
    setModalTitle(title);
  };

  const handleAddSelected = () => {
    console.log(id);
    addSelectCustomer(id);
    setShowToast(true);
  };

  const handleRemoveSelected = () => {
    deselectCustomer(id);
  };

  return (
    <CardContainer>
      {showToast && (
        <Toast
          message='Cliente selecionado com succeso'
          duration={3000}
          onClose={() => setShowToast(false)}
          type='success'
        />
      )}

      <CardTitle>{name}</CardTitle>
      <CardText>Salário: R$ {salary}</CardText>
      <CardText>Empresa: R$ {companyValue}</CardText>
      <CardFooter>
        {isSelected ? (
          <CardSelected>
            <CardInteractiveIcon onClick={() => handleRemoveSelected()}>
              <FiMinus color='red' size={20} />
            </CardInteractiveIcon>
          </CardSelected>
        ) : (
          <>
            <CardInteractiveIcon onClick={() => handleAddSelected()}>
              <FiPlus size={20} />
            </CardInteractiveIcon>
            <CardInteractiveIcon
              onClick={() => handleOpenModal('Update', 'Editar cliente:')}
            >
              <FiEdit2 size={20} />
            </CardInteractiveIcon>
            <CardInteractiveIcon
              onClick={() => handleOpenModal('Delete', 'Excluir cliente:')}
            >
              <FiTrash2 size={20} color='red' />
            </CardInteractiveIcon>
          </>
        )}
      </CardFooter>
      {showModal && (
        <Modal
          id={id}
          modalTitle={modalTitle}
          content={modalContent}
          onClose={() => setShowModal(false)}
        />
      )}
    </CardContainer>
  );
}
