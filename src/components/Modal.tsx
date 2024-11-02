import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, title, content }) => {
  if (!show) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  max-width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  color: black;
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const Content = styled.p`
  color: black;
  font-size: 1em;
`;

const CloseButton = styled.button`
  margin-top: 10px;
`;

export default Modal;
