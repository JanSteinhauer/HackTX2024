import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import RoleStep from "@/pages/components/RoleStep.tsx";
import SkillsStep from "@/pages/components/SkillsStep.tsx";
import PersonalInfoStep from "@/pages/components/PersonalInfoStep.tsx";
import { useNavigate } from "react-router-dom";

interface MultiStepFormProps {
  onFormComplete: () => void;
}

interface PersonalInfo {
  about: string;
  experience: number;
  motivation: string;
}

interface FormData {
  personalInfo: PersonalInfo;
  skills: string[];
  role: string;
}

// Initial form data state
const initialFormData: FormData = {
  personalInfo: {
    about: '',
    experience: 0,
    motivation: '',
  },
  skills: [],
  role: ''
};

type FormSection = keyof FormData;
type PersonalInfoField = keyof PersonalInfo;

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

interface SuccessMessageProps {
  formData: FormData;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ onFormComplete }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [newSkill, setNewSkill] = useState<string>('');
  const navigate = useNavigate();

  const totalSteps = 3;

  const handleNext = (): void => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      onFormComplete(); // Notify App that the form is complete
    }
  };

  const handlePrevious = (): void => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAddSkill = (): void => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string): void => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleInputChange = (
    section: FormSection,
    field: PersonalInfoField,
    value: string
  ): void => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value
      }
    });
  };

  const SuccessMessage: React.FC<SuccessMessageProps> = ({ formData }) => (
    <div className="text-center py-8 space-y-6">
      <div className="flex justify-center">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-800">Application Submitted!</h2>
        <p className="text-gray-600">Thank you for completing all steps</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg max-w-md mx-auto">
        <h3 className="font-medium text-gray-800 mb-2">Summary</h3>
        <div className="text-left space-y-2 text-sm">
          <p><span className="font-medium">Role:</span> Member</p>
          <p><span className="font-medium">Name:</span> {formData.personalInfo.about}</p>
          <p><span className="font-medium">Experience:</span> {formData.personalInfo.experience}</p>
          <p><span className="font-medium">Skills:</span> {formData.skills.join(', ')}</p>
        </div>
      </div>
      <Button
        className="mt-4"
        onClick={() => navigate('/')}
      >
        Home Page
      </Button>
    </div>
  );

  const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
    return (
      <div className="relative flex justify-center items-center py-4">
        <div className="relative flex justify-between w-2/3">
          {[...Array(totalSteps)].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 border-2 ${
                  index + 1 === currentStep
                    ? 'bg-primary text-white border-primary'
                    : index + 1 < currentStep
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-400 border-gray-300'
                }`}
              >
                {index + 1}
              </div>
              <span className={`mt-2 text-sm ${
                index + 1 === currentStep
                  ? 'text-primary font-medium'
                  : 'text-gray-500'
              }`}>
                Step {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <RoleStep handleInputChange={handleInputChange} />
        );
      case 2:
        return (
          <PersonalInfoStep formData={formData} handleInputChange={handleInputChange}/>
        );
      case 3:
        return (
          <SkillsStep
            setNewSkill={setNewSkill}
            newSkill={newSkill}
            handleAddSkill={handleAddSkill}
            handleRemoveSkill={handleRemoveSkill}
            formData={formData} />
        );
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        {!isCompleted && <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />}
      </CardHeader>
      <CardContent>
        {isCompleted ? (
          <SuccessMessage formData={formData} />
        ) : (
          renderStep()
        )}
      </CardContent>
      {!isCompleted && (
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          <Button onClick={handleNext}>
            {currentStep === totalSteps ? 'Submit' : 'Next'}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default MultiStepForm;
