import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onChat?: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onChat, title, content }) => {
  if (!show) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <ButtonContainer>
          <CloseButton onClick={onClose}>Close</CloseButton>
          {onChat && <ChatButton onClick={onChat}>Chat</ChatButton>}
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};

// Styled Components
const ChatButton = styled.button`
  padding: 8px 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;


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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const CloseButton = styled.button`
  padding: 8px 16px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #bbb;
  }
`;

const ConnectButton = styled.button`
  padding: 8px 16px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;



export default Modal;
