
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ProfileSetup = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState({
    name: "",
    investmentGoal: "",
    riskLevel: "moderate"
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card className="p-8 glassmorphism">
          <h2 className="text-2xl font-bold text-gradient mb-6">Create Your Profile</h2>
          <div className="space-y-6">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="mt-2"
                  placeholder="John Doe"
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Label htmlFor="goal">Investment Goal</Label>
                <Input
                  id="goal"
                  value={profile.investmentGoal}
                  onChange={(e) => setProfile({ ...profile, investmentGoal: e.target.value })}
                  className="mt-2"
                  placeholder="e.g., Retirement, Buy a house"
                />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Label>Risk Tolerance</Label>
                <RadioGroup
                  value={profile.riskLevel}
                  onValueChange={(value) => setProfile({ ...profile, riskLevel: value })}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="conservative" id="conservative" />
                    <Label htmlFor="conservative">Conservative</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="moderate" id="moderate" />
                    <Label htmlFor="moderate">Moderate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="aggressive" id="aggressive" />
                    <Label htmlFor="aggressive">Aggressive</Label>
                  </div>
                </RadioGroup>
              </motion.div>
            )}

            <div className="flex justify-between items-center mt-6">
              <span className="text-sm text-neutral-500">Step {step} of 3</span>
              <Button onClick={handleNext}>
                {step === 3 ? "Complete" : "Next"}
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProfileSetup;
