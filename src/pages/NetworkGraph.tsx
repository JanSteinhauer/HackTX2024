import React, { useEffect, useRef } from 'react';
import { Network, DataSet, Edge, Node, Options } from 'vis-network/standalone';
import 'vis-network/styles/vis-network.css';
import { nodeInfo } from '../components/nodeInfo';

interface NetworkGraphProps {
  onNodeClick: (nodeData: { title: string; content: string }) => void;
}

const NetworkGraph: React.FC<NetworkGraphProps> = ({ onNodeClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate nodes and edges from nodeInfo
  const nodes: Node[] = Object.keys(nodeInfo).map((id) => ({
    id: parseInt(id),
    label: nodeInfo[parseInt(id)].title,
    color: parseInt(id) >= 1 && parseInt(id) <= 5 ? '#FFA500' : undefined,
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
            color: '#000000',
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
            onNodeClick(nodeData); // Pass selected node data to parent component
          }
        }
      });
    }
  }, [nodes, edges, onNodeClick]);

  return <div ref={containerRef} style={{ width: '100%', height: '500px' }} />;
};

export default NetworkGraph;
