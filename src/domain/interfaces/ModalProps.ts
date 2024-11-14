export interface ModalProps {
  id?: string;
  content: string;
  modalTitle: string;
  onClose: () => void;
}
