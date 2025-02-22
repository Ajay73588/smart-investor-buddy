
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

const suggestions = [
  {
    asset: "AAPL",
    name: "Apple Inc.",
    change: "+2.3%",
    recommendation: "Buy",
    trend: "up",
  },
  {
    asset: "TSLA",
    name: "Tesla Inc.",
    change: "-1.5%",
    recommendation: "Hold",
    trend: "down",
  },
  {
    asset: "NVDA",
    name: "NVIDIA Corporation",
    change: "+3.7%",
    recommendation: "Buy",
    trend: "up",
  },
];

const InvestmentSuggestions = () => {
  return (
    <Card className="p-6 glassmorphism">
      <h3 className="text-lg font-semibold mb-4">AI Investment Suggestions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {suggestions.map((item, index) => (
          <motion.div
            key={item.asset}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-4 card-hover">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">{item.asset}</h4>
                  <p className="text-sm text-neutral-600">{item.name}</p>
                </div>
                {item.trend === "up" ? (
                  <TrendingUp className="w-5 h-5 text-success" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-danger" />
                )}
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm font-medium ${
                  item.trend === "up" ? "text-success" : "text-danger"
                }`}>
                  {item.change}
                </span>
                <span className={`text-sm font-medium ${
                  item.recommendation === "Buy" ? "text-success" : "text-neutral-600"
                }`}>
                  {item.recommendation}
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export default InvestmentSuggestions;
