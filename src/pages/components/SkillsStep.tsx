import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {ChangeEvent, KeyboardEvent} from "react";
import {Badge} from "@/components/ui/badge.tsx";
import {X} from "lucide-react";

function SkillsStep({setNewSkill, newSkill, handleAddSkill, handleRemoveSkill, formData}: any) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold mb-4">Skills</h2>
      <div className="flex space-x-2">
        <Input
          value={newSkill}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNewSkill(e.target.value)}
          placeholder="Enter a skill"
          onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleAddSkill()}
        />
        <Button onClick={handleAddSkill}>Add</Button>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {formData.skills.map((skill: string, index: number) => (
          <Badge key={index} variant="secondary" className="px-3 py-1">
            {skill}
            <X
              className="ml-2 h-4 w-4 cursor-pointer"
              onClick={() => handleRemoveSkill(skill)}
            />
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default SkillsStep
