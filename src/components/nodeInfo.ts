export const nodeInfo: { [key: number]: { title: string; content: string; edges: number[] } } = {
    // Technical Terms
    1: { title: 'Frontend', content: 'Frontend development involves creating the visual and interactive parts of a website.', edges: [] },
    2: { title: 'Backend', content: 'Backend development includes server-side logic, databases, and API integrations.', edges: [] },
    3: { title: 'Designer', content: 'Designers create the aesthetic, usability, and functionality of web applications.', edges: [] },
    4: { title: 'Mentor', content: 'Mentors guide others in skill development and project completion.', edges: [] },
    5: { title: 'ML', content: 'Machine Learning (ML) focuses on algorithms and data-driven model development.', edges: [] },
  
    // User Personas with Connections to Core Skills or Mentorship Nodes
    6: { title: 'Alice - Junior Frontend Developer', content: 'Alice has a strong foundation in HTML, CSS, and JavaScript and loves building user-friendly interfaces.', edges: [1] },
    7: { title: 'Bob - Backend Specialist', content: 'Bob is skilled in Node.js and database management, specializing in API development.', edges: [2] },
    8: { title: 'Clara - UX/UI Designer', content: 'Clara has a keen eye for design and works on user experience and interface designs.', edges: [3] },
    9: { title: 'David - Frontend Enthusiast', content: 'David is passionate about creating accessible web interfaces and is familiar with React and Vue.', edges: [1] },
    10: { title: 'Emma - Full-Stack Developer', content: 'Emma can work on both frontend and backend, handling entire web applications with ease.', edges: [1, 2] },
    11: { title: 'Frank - Machine Learning Engineer', content: 'Frank builds ML models and works with data preprocessing and feature engineering.', edges: [5] },
    12: { title: 'Grace - Product Designer', content: 'Grace combines UI design with product strategy to create cohesive user experiences.', edges: [3] },
    13: { title: 'Hank - DevOps Specialist', content: 'Hank focuses on CI/CD, cloud infrastructure, and ensures smooth deployment workflows.', edges: [2] },
    14: { title: 'Ivy - Frontend Developer', content: 'Ivy is a frontend developer experienced in TypeScript and responsive design techniques.', edges: [1] },
    15: { title: 'Jack - Mentor for Data Science', content: 'Jack provides guidance in data science, focusing on model selection and evaluation.', edges: [4, 5] },
    16: { title: 'Kate - Software Engineer', content: 'Kate is a generalist who can work across the stack but prefers backend development.', edges: [2] },
    17: { title: 'Leo - Junior Designer', content: 'Leo has a strong visual design background and creates prototypes for web and mobile.', edges: [3] },
    18: { title: 'Mia - Backend Developer', content: 'Mia specializes in databases, particularly MongoDB and PostgreSQL.', edges: [2] },
    19: { title: 'Nina - Data Analyst', content: 'Nina works on data cleaning, visualization, and analysis to inform product decisions.', edges: [5] },
    20: { title: 'Oscar - Frontend Developer', content: 'Oscar builds modern web applications using Angular and has experience in animation.', edges: [1] },
    21: { title: 'Paul - Mentor for Frontend', content: 'Paul has years of experience in frontend technologies and guides new developers.', edges: [4, 1] },
    22: { title: 'Quincy - ML Researcher', content: 'Quincy is focused on deep learning research and developing advanced ML models.', edges: [5] },
    23: { title: 'Rachel - UX Designer', content: 'Rachel designs user journeys and wireframes to enhance user interaction.', edges: [3] },
    24: { title: 'Sam - Full-Stack Engineer', content: 'Sam is proficient in both frontend and backend development and enjoys working with APIs.', edges: [1, 2] },
    25: { title: 'Tina - Cloud Engineer', content: 'Tina manages cloud deployments and optimizes server costs and performance.', edges: [2] },
    26: { title: 'Uma - Data Scientist', content: 'Uma has expertise in data processing, feature engineering, and ML model development.', edges: [5] },
    27: { title: 'Victor - Cybersecurity Specialist', content: 'Victor secures systems and data, working closely with backend teams for secure applications.', edges: [2] },
    28: { title: 'Wendy - Mobile Developer', content: 'Wendy develops iOS and Android applications with a focus on user-friendly experiences.', edges: [1] },
    29: { title: 'Xander - AR/VR Developer', content: 'Xander builds immersive experiences using AR and VR technology.', edges: [3] },
    30: { title: 'Yara - AI Engineer', content: 'Yara works on AI and ML integrations for various software applications.', edges: [5] },
  };
  