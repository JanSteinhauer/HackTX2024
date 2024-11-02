import React, { useEffect, useRef } from 'react';
import { Network, DataSet, Edge, Node, Options } from 'vis-network/standalone';
import 'vis-network/styles/vis-network.css';

interface NetworkGraphProps {
  nodes: Node[];
  edges: Edge[];
}

const NetworkGraph: React.FC<NetworkGraphProps> = ({ nodes, edges }) => {
  const containerRef = useRef<HTMLDivElement>(null);

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
            size: 14, // Font size for labels
            color: '#343434', // Color of node labels
          },
        },
        edges: {
          color: '#848484',
          arrows: {
            to: {
              enabled: true,
              scaleFactor: 1,
            },
          },
          font: {
            size: 12, // Font size for edge labels
            color: '#848484', // Color of edge labels
          },
        },
        physics: {
          enabled: true,
          stabilization: { iterations: 150 },
        },
      };

      const network = new Network(containerRef.current, data, options);

      network.on('click', (params) => {
        console.log('Node clicked:', params.nodes);
      });
    }
  }, [nodes, edges]);

  return <div ref={containerRef} style={{ width: '100%', height: '500px' }} />;
};

export default NetworkGraph;
