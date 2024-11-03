import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {ChangeEvent} from "react";

function PersonalInfoStep({handleInputChange, formData}: any) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold mb-4">Pesonal Information</h2>
      <div className="space-y-2">
        <Label htmlFor="company">Tell about yourself</Label>
        <Input
          id="company"
          value={formData.personalInfo.about}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange('personalInfo', 'about', e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="position">Years of Experience</Label>
        <Input
          type='number'
          id="position"
          value={formData.personalInfo.experience}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange('personalInfo', 'experience', e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="duration">Motivation</Label>
        <Input
          id="duration"
          value={formData.personalInfo.motivation}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange('personalInfo', 'motivation', e.target.value)}
        />
      </div>
    </div>
  )
}

export default PersonalInfoStep
