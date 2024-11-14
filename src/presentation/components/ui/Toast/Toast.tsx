import { useEffect, useState } from 'react';
import { ToastProps } from '@domain/interfaces/ToastsProps';
import { CloseButton, ToastContainer } from './Toast.style';

export default function Toast({
  message,
  type = 'success',
  duration = 3000,
  onClose,
}: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose && onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <ToastContainer type={type} visible={visible}>
      {message}
      <CloseButton
        onClick={() => {
          setVisible(false);
          onClose && onClose();
        }}
      >
        ×
      </CloseButton>
    </ToastContainer>
  );
}
