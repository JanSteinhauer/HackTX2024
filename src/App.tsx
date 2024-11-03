import React, { useState } from 'react';
import { SignInButton, UserButton, useAuth } from "@clerk/clerk-react";
import styled, { css } from 'styled-components';
import Sidebar from './components/Dashboard/Sidebar';
import GraphChatManager from './pages/GraphChatManager';
import MatchesSection from './components/MatchesSection/MatchesSection';
import MultiStepForm from './pages/MultiStepForm';
import { Button } from "@/components/ui/button.tsx";
import { MatchData } from "./components/MatchesSection/types";
// Define an interface for MainContainer props
interface MainContainerProps {
  isFormCompleted: boolean;
}

// Styled container to align Dashboard and MatchesSection side by side
const MainContainer = styled.div<MainContainerProps>`
  ${(props) =>
    props.isFormCompleted
      ? css`
          display: contents;
          flex-direction: column;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          gap: 20px;
          justify-content: center;
        `
      : css`
          display: flex;
          flex-direction: column;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          gap: 20px;
          justify-content: center;
        `}
`;

const MainContainer1 = styled.div`
  display: contents;
  max-width: 1200px;
  gap: 30px;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
`;

// const MatchesContainer = styled.div`
//   flex: 1;
// `;

// Wrapper to vertically align to the top of the viewport
const CenteredFormContainer = styled.div`
  display: inline-flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
`;

const DashboardContainer = styled.div``;

const App: React.FC = () => {
  const { isSignedIn } = useAuth();
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Home");

  const handleFormComplete = () => setIsFormCompleted(true);

  const handleNavItemClick = (label: string) => {
    setSelectedSection(label);
  };

  const exampleMatchData: MatchData = {
    name: "Alex Rivera",
    avatar: "https://m.media-amazon.com/images/S/amzn-author-media-prod/75e4qjid2d61alqo3rqooouaij._SY450_CR16%2C0%2C450%2C450_.jpg",
    matchPercentage: 95,
    skills: ["JavaScript", "SQL", "HTML"],
    description: "I’m a backend developer skilled in designing efficient APIs..."
  };

  return (
    <div>
      <header className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <h2>SkillSync</h2>
            {isSignedIn ? <UserButton /> : <Button variant="default"><SignInButton /></Button>}
          </div>
        </div>
      </header>
      <MainContainer isFormCompleted={isFormCompleted}>
        {isSignedIn ? (
          <CenteredFormContainer>
            {isFormCompleted ? (
              <MainContainer1>
                <Sidebar onNavItemClick={handleNavItemClick} />
                <DashboardContainer>
                  {selectedSection === "Members" ? (
                    <GraphChatManager />
                  ) : (
                    <MatchesSection matches={[exampleMatchData]} />
                  )}
                </DashboardContainer>
              </MainContainer1>
            ) : (
              <MultiStepForm onFormComplete={handleFormComplete} />
            )}
          </CenteredFormContainer>
        ) : (
          <div></div>
        )}
      </MainContainer>
    </div>
  );
};

export default App;
