import { useState, createContext } from 'react';
import { ModalLoading } from '../Components/Loading/ModalLoading';

export const ModalLoadingContext = createContext({});

export const ModalLoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleModalLoading = (loading = true, message = null) => {
    setLoading(loading);
    setMessage(message);
  }

  return (
    <ModalLoadingContext.Provider value={{ handleModalLoading }}>
      {children}
      <ModalLoading open={loading} message={message} />
    </ModalLoadingContext.Provider>
  );
}