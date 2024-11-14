export interface ToastProps {
  message: string;
  type: string;
  duration: number;
  onClose: () => void;
}
