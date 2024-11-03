import React, { useState } from 'react';
import styled from 'styled-components';

type Message = {
  id: number;
  sender: string;
  text: string;
  avatar: string;
};

type Persona = {
  name: string;
  avatar: string;
  id: number;
};

const personas: Persona[] = [
  { id: 2, name: 'Bob', avatar: '🧑‍🔧' },
  { id: 3, name: 'Charlie', avatar: '👨‍🏫' },
  { id: 4, name: 'Diana', avatar: '👩‍🔬' },
  { id: 5, name: 'Eve', avatar: '👩‍🎨' },
];

const ChatPageContainer = styled.div`
  display: flex;
  height: 91vh;
  width: 88vw; /* Take up the full width of the viewport */
  font-family: Arial, sans-serif;
  color: #333;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #2c3e50;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box; /* Ensure padding doesn’t overflow */
`;

const ChatContainer = styled.div`
  flex: 1; /* Allow ChatContainer to take up remaining space */
  display: flex;
  flex-direction: column;
  background-color: #ecf0f1;
  padding: 20px;
  box-sizing: border-box; /* Ensure padding doesn’t overflow */
`;


const PersonaButton = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? '#34495e' : 'transparent')};
  border: none;
  color: #ecf0f1;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  margin: 5px 0;
  &:hover {
    background-color: #34495e;
  }
`;

const ChatHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const MessageBubble = styled.div<{ isSender: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isSender ? 'row-reverse' : 'row')};
  margin-bottom: 10px;
  align-items: center;
`;

const MessageText = styled.div<{ isSender: boolean }>`
  background-color: ${(props) => (props.isSender ? '#2c3e50' : '#bdc3c7')};
  color: ${(props) => (props.isSender ? '#ecf0f1' : '#333')};
  padding: 10px;
  border-radius: 15px;
  max-width: 60%;
  font-size: 16px;
  margin: ${(props) => (props.isSender ? '0 0 0 10px' : '0 10px 0 0')};
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-right: 10px;
  font-size: 16px;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
`;

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<{ [key: string]: Message[] }>({});
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(personas[0]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '' || !selectedPersona) return;

    const newChatMessage: Message = {
      id: (messages[selectedPersona.name]?.length || 0) + 1,
      sender: 'Alice',
      text: newMessage,
      avatar: '👩‍💻',
    };

    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedPersona.name]: [...(prevMessages[selectedPersona.name] || []), newChatMessage],
    }));
    setNewMessage('');
  };

  return (
    <ChatPageContainer>
      <Sidebar>
        <h2>Alice's Chats</h2>
        {personas.map((persona) => (
          <PersonaButton
            key={persona.id}
            active={selectedPersona?.id === persona.id}
            onClick={() => setSelectedPersona(persona)}
          >
            {persona.avatar} {persona.name}
          </PersonaButton>
        ))}
      </Sidebar>

      <ChatContainer>
        {selectedPersona && (
          <>
            <ChatHeader>Chat with {selectedPersona.name}</ChatHeader>
            <MessagesContainer>
              {(messages[selectedPersona.name] || []).map((message) => (
                <MessageBubble key={message.id} isSender={message.sender === 'Alice'}>
                  <MessageText isSender={message.sender === 'Alice'}>
                    {message.sender === 'Alice' ? '' : `${message.sender}: `} {message.text}
                  </MessageText>
                </MessageBubble>
              ))}
            </MessagesContainer>

            <InputContainer>
              <Input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <SendButton onClick={handleSendMessage}>Send</SendButton>
            </InputContainer>
          </>
        )}
      </ChatContainer>
    </ChatPageContainer>
  );
};

export default ChatPage;
