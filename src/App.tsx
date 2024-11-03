import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import {Button} from "@/components/ui/button.tsx";
import NetworkGraph from './pages/NetworkGraph';
import GraphChatManager from './pages/GraphChatManager';

function App() {

  return (
    <>
    <div>
    <header className='border-b bg-background'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <h2>SkillSync</h2>
              <SignedOut>
                <Button variant='default'>
                  <SignInButton />
                </Button>
              </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>
      <GraphChatManager/>
    </div>
    
    
    </>
  )
}

export default App