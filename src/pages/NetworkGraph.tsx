import React, { useEffect, useRef, useState } from 'react';
import { Network, DataSet, Edge, Node, Options } from 'vis-network/standalone';
import 'vis-network/styles/vis-network.css';
import Modal from '../components/Modal';
import { nodeInfo } from '../components/nodeInfo'; // Import nodeInfo from external file

const NetworkGraph: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedNode, setSelectedNode] = useState<{ title: string; content: string } | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Generate nodes and edges from nodeInfo
  const nodes: Node[] = Object.keys(nodeInfo).map((id) => ({
    id: parseInt(id),
    label: nodeInfo[parseInt(id)].title,
  }));

  const edges: Edge[] = Object.entries(nodeInfo).flatMap(([nodeId, data]) =>
    data.edges.map((targetId) => ({ from: parseInt(nodeId), to: targetId }))
  );

  useEffect(() => {
    if (containerRef.current) {
      const data = {
        nodes: new DataSet(nodes),
        edges: new DataSet(edges),
      };

      const options: Options = {
        nodes: {
          shape: 'dot',
          size: 15,
          font: {
            size: 14,
            color: '#ffff',
          },
        },
        edges: {
          color: '#848484',
          arrows: {
            to: { enabled: true, scaleFactor: 1 },
          },
          font: {
            size: 12,
            color: '#848484',
          },
        },
        physics: {
          enabled: true,
          stabilization: { iterations: 150 },
        },
      };

      const network = new Network(containerRef.current, data, options);

      network.on('click', (params) => {
        if (params.nodes.length > 0) {
          const nodeId = params.nodes[0];
          const nodeData = nodeInfo[nodeId];
          if (nodeData) {
            setSelectedNode(nodeData);
            setShowModal(true);
          }
        }
      });
    }
  }, [nodes, edges]);

  const closeModal = () => {
    setShowModal(false);
    setSelectedNode(null);
  };

  return (
    <div>
      <div ref={containerRef} style={{ width: '100%', height: '500px' }} />
      {selectedNode && (
        <Modal
          show={showModal}
          onClose={closeModal}
          title={selectedNode.title}
          content={selectedNode.content}
        />
      )}
    </div>
  );
};

export default NetworkGraph;
