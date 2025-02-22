
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const RiskAssessment = () => {
  return (
    <Card className="p-6 glassmorphism">
      <h3 className="text-lg font-semibold mb-4">Risk Assessment</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-neutral-600">Portfolio Risk</span>
            <span className="text-sm font-medium">Moderate</span>
          </div>
          <Progress value={65} className="h-2" />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-neutral-600">Market Volatility</span>
            <span className="text-sm font-medium">Low</span>
          </div>
          <Progress value={30} className="h-2" />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-neutral-600">Diversification</span>
            <span className="text-sm font-medium">High</span>
          </div>
          <Progress value={85} className="h-2" />
        </div>
      </div>
    </Card>
  );
};

export default RiskAssessment;
