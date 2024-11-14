import { useState } from 'react';
import { CardInterface } from '../../interfaces/CardInterface';
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
import useClientStore from '../../store/useClientStore';
import Toast from '../Toast/Toast';

export default function Card({
  id,
  name,
  salary,
  companyValue,
  isSelected,
}: CardInterface) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [showToast, setShowToast] = useState(false);

  const { addSelectedClient, deleteSelected } = useClientStore();

  const handleOpenModal = (content: string, title: string) => {
    setModalContent(content);
    setShowModal(true);
    setModalTitle(title);
  };

  const handleAddSelected = () => {
    addSelectedClient(id);
    setShowToast(true);
  };

  const handleRemeveSelected = () => {
    deleteSelected(id);
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
            <CardInteractiveIcon onClick={() => handleRemeveSelected()}>
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
