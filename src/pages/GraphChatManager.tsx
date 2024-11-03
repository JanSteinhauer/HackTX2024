import React, { useState } from 'react';
import NetworkGraph from './NetworkGraph';
import ChatPage from './ChatPage';
import Modal from '../components/Modal';

const GraphChatManager: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<{ title: string; content: string } | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleNodeClick = (nodeData: { title: string; content: string }) => {
    setSelectedNode(nodeData);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedNode(null);
  };

  const handleStartChat = () => {
    setShowModal(false);
    setShowChat(true);
  };

  const handleBackToGraph = () => {
    setShowChat(false);
  };

  return (
    <div>
      {showChat ? (
        <ChatPage />
      ) : (
        <>
          <NetworkGraph onNodeClick={handleNodeClick} />
          {selectedNode && (
            <Modal
              show={showModal}
              onClose={handleCloseModal}
              title={selectedNode.title}
              content={selectedNode.content}
              onChat={handleStartChat}
            />
          )}
        </>
      )}
      {showChat && <button onClick={handleBackToGraph}>Back to Graph</button>}
    </div>
  );
};

export default GraphChatManager;
