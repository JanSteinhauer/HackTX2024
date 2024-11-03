import './App.css';
import { SignInButton, UserButton, useAuth } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button.tsx";
import Dashboard from './components/Dashboard/Dashboard';
import MatchesSection from './components/MatchesSection/MatchesSection';
import { MatchData } from "./components/MatchesSection/types";
import styled from 'styled-components';

// Styled container to align Dashboard and MatchesSection side by side
const MainContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
`;

// Styling for Dashboard section
const DashboardContainer = styled.div`
  // flex: 1; // Take up available space
`;

// Styling for MatchesSection
const MatchesContainer = styled.div`
  flex: 1; // Take up available space
`;

function App() {
  const { isSignedIn } = useAuth();

  const exampleMatchData: MatchData = {
    name: "Alex Rivera",
    avatar: "https://m.media-amazon.com/images/S/amzn-author-media-prod/75e4qjid2d61alqo3rqooouaij._SY450_CR16%2C0%2C450%2C450_.jpg", // Add the avatar image URL here if available
    matchPercentage: 95,
    skills: ["JavaScript", "SQL", "HTML"],
    description: "I’m a backend developer skilled in designing efficient RESTful APIs and handling databases, eager to..."
  };

  return (
    <>
      <div>
        <header className="border-b bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <h2>SkillSync</h2>
              {isSignedIn ? (
                <UserButton />
              ) : (
                <Button variant="default">
                  <SignInButton />
                </Button>
              )}
            </div>
          </div>
        </header>
        <MainContainer>
          <DashboardContainer>
            <Dashboard />
          </DashboardContainer>
          {isSignedIn ? (
            <MatchesContainer>
              <MatchesSection matches={[exampleMatchData]} />
            </MatchesContainer>
          ) : (
            //here would go the onboarding component
            <div></div>
          )}
        </MainContainer>
      </div>
    </>
  );
}

export default App;
