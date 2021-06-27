import React, { useCallback, useEffect } from 'react';
import { FiAlertCircle, FiX, FiCheckCircle, FiInfo } from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toast';
import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();
  const handleRemoveToast = useCallback(
    (id: string) => {
      removeToast(id);
    },
    [removeToast]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container type={message.type} hasDescription={!!message.description}>
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button onClick={() => handleRemoveToast(message.id)} type="button">
        <FiX size={18} />
      </button>
    </Container>
  );
};

export default Toast;
