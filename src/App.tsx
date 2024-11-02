import React from 'react';
import NetworkGraph from './pages/NetworkGraph';
import { Node, Edge } from 'vis-network/standalone';

const App: React.FC = () => {
  const nodes: Node[] = [
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
  ];

  const edges: Edge[] = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
  ];

  return (
    <div className="App">
      <h1>ProjectBoot</h1>
      <NetworkGraph nodes={nodes} edges={edges} />
    </div>
  );
};

export default App;
