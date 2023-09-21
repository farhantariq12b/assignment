import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ModalA from './components/modalA';
import ModalB from './components/modalB';
import { Button } from 'react-bootstrap';

const ModalManager = () => {
  const [modalAVisible, setModalAVisible] = useState(false);
  const [modalBVisible, setModalBVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen for route changes and open modals accordingly
  useEffect(() => {
    if (location.pathname === '/modal-a') {
      setModalAVisible(true);
    } else if (location.pathname === '/modal-b') {
      setModalBVisible(true);
    } else {
      setModalAVisible(false);
      setModalBVisible(false);
    }
  }, [location.pathname]);

  const openModalA = () => {
    setModalAVisible(true);
    navigate('/modal-a');
  };

  const openModalB = () => {
    setModalBVisible(true);
    navigate('/modal-b');
  };

  const closeModalA = () => {
    setModalAVisible(false);
    navigate('/');
  };

  const closeModalB = () => {
    setModalBVisible(false);
    navigate('/');
  };

  return (
    <div>
      <Button variant="primary" onClick={openModalA}>
        Modal A
      </Button>
      <Button variant="primary" onClick={openModalB}>
        Modal B
      </Button>
      {modalAVisible && (
        <ModalA show={modalAVisible} onHide={closeModalA} />
      )}
      {modalBVisible && (
        <ModalB show={modalBVisible} onHide={closeModalB} />
      )}
    </div>
  );
};

export default ModalManager;
