import React from 'react';
import NetworkGraph from './pages/NetworkGraph';
import { Node, Edge } from 'vis-network/standalone';

const App: React.FC = () => {
  const nodes: Node[] = [
    { id: 1, label: 'Frontend Developer' },
    { id: 2, label: 'Backend Developer' },
    { id: 3, label: 'Full-Stack Developer' },
    { id: 4, label: 'UI/UX Designer' },
    { id: 5, label: 'Product Manager' },
    { id: 6, label: 'Data Scientist' },
    { id: 7, label: 'Data Analyst' },
    { id: 8, label: 'Machine Learning Engineer' },
    { id: 9, label: 'DevOps Engineer' },
    { id: 10, label: 'Quality Assurance Engineer' },
    { id: 11, label: 'Cybersecurity Specialist' },
    { id: 12, label: 'Mobile App Developer' },
    { id: 13, label: 'Game Developer' },
    { id: 14, label: 'Cloud Architect' },
    { id: 15, label: 'Database Administrator' },
    { id: 16, label: 'Technical Writer' },
    { id: 17, label: 'Marketing Specialist' },
    { id: 18, label: 'Business Analyst' },
    { id: 19, label: 'Graphic Designer' },
    { id: 20, label: 'Project Manager' },
    { id: 21, label: 'AI Engineer' },
    { id: 22, label: 'API Developer' },
    { id: 23, label: 'SEO Specialist' },
    { id: 24, label: 'Content Strategist' },
    { id: 25, label: 'Web Developer' },
    { id: 26, label: 'Blockchain Developer' },
    { id: 27, label: 'AR/VR Developer' },
    { id: 28, label: 'Customer Support Specialist' },
    { id: 29, label: 'Software Architect' },
    { id: 30, label: 'Technical Support Engineer' },
  ];
  
  const edges: Edge[] = [
    { from: 1, to: 4, label: 'UI Collaboration' },
    { from: 1, to: 3, label: 'Frontend & Fullstack' },
    { from: 2, to: 3, label: 'Backend & Fullstack' },
    { from: 2, to: 15, label: 'DB Management' },
    { from: 3, to: 5, label: 'Project Implementation' },
    { from: 4, to: 19, label: 'Design Collaboration' },
    { from: 5, to: 20, label: 'Project Planning' },
    { from: 6, to: 8, label: 'Data for ML' },
    { from: 7, to: 6, label: 'Data Analysis' },
    { from: 8, to: 21, label: 'AI Integration' },
    { from: 9, to: 10, label: 'CI/CD & QA' },
    { from: 10, to: 9, label: 'Testing & Deployment' },
    { from: 11, to: 29, label: 'Security Design' },
    { from: 12, to: 2, label: 'Mobile API Integration' },
    { from: 12, to: 1, label: 'Mobile Frontend' },
    { from: 13, to: 27, label: 'Game Development' },
    { from: 14, to: 9, label: 'Cloud Setup' },
    { from: 15, to: 2, label: 'Database Integration' },
    { from: 16, to: 3, label: 'Documentation' },
    { from: 17, to: 5, label: 'Marketing Strategy' },
    { from: 18, to: 20, label: 'Business Planning' },
    { from: 19, to: 25, label: 'Web Graphics' },
    { from: 21, to: 6, label: 'AI & Data Science' },
    { from: 22, to: 1, label: 'Frontend API' },
    { from: 23, to: 24, label: 'SEO Content' },
    { from: 24, to: 25, label: 'Web Content' },
    { from: 26, to: 2, label: 'Blockchain Integration' },
    { from: 27, to: 13, label: 'AR/VR for Games' },
    { from: 28, to: 30, label: 'Support Collaboration' },
    { from: 29, to: 3, label: 'Architecture Design' },
    { from: 30, to: 5, label: 'Technical Assistance' },
  ];
  
  return (
    <div className="App">
      <h1>ProjectBoot</h1>
      <NetworkGraph nodes={nodes} edges={edges} />
    </div>
  );
};

export default App;
