import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserRound, GraduationCap } from "lucide-react";

const RoleStep = ({handleInputChange}) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: 'member',
      title: 'Member',
      description: 'Join as a member to learn and grow with our community',
      icon: UserRound,
      features: [
        'Access to learning resources',
        'Connect with mentors',
        'Join community discussions',
        'Track your progress'
      ]
    },
    {
      id: 'mentor',
      title: 'Mentor',
      description: 'Share your expertise and guide others in their journey',
      icon: GraduationCap,
      features: [
        'Create learning paths',
        'Guide community members',
        'Host mentoring sessions',
        'Share your expertise'
      ]
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Role</h1>
            <p className="text-gray-600">Select how you'd like to participate in our community</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role) => {
              const Icon = role.icon;
              const isSelected = selectedRole === role.id;

              return (
                <Card
                  key={role.id}
                  className={`relative cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    isSelected
                      ? 'ring-2 ring-primary shadow-lg'
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedRole(role.id)}
                >
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${
                      isSelected ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <h2 className="text-xl font-semibold mb-2">{role.title}</h2>
                    <p className="text-gray-600 mb-4">{role.description}</p>

                    <div className="space-y-2">
                      {role.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full mt-6"
                      variant={isSelected ? "default" : "outline"}
                      onClick={() => setSelectedRole(role.id)}
                    >
                      {isSelected ? 'Selected' : `Choose as ${role.title}`}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleStep;
