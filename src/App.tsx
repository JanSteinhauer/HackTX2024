import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import {Button} from "@/components/ui/button.tsx";
import Onboarding from "@/pages/MultiStepForm.tsx";

function App() {
  return (
    <>
      <header className='border-b bg-background'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <h2>SkillSync</h2>
              <SignedOut>
                <Button type='button' variant='default'>
                  <SignInButton fallbackRedirectUrl='/onboarding' />
                </Button>
              </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>
      <SignedIn>
        <Onboarding />
      </SignedIn>
    </>
  )
}

export default App
