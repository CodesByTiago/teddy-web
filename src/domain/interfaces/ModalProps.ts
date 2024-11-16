export interface ModalProps {
  id?: string;
  name?: string;
  content: string;
  modalTitle: string;
  onClose: () => void;
}
