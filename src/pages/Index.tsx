
import { useState } from "react";
import { motion } from "framer-motion";
import { ChartLine, ArrowUpRight, TrendingUp, ShieldCheck } from "lucide-react";
import MarketOverview from "../components/MarketOverview";
import RiskAssessment from "../components/RiskAssessment";
import InvestmentSuggestions from "../components/InvestmentSuggestions";
import { Card } from "@/components/ui/card";
import ProfileSetup from "../components/ProfileSetup";

const Index = () => {
  const [isProfileComplete, setIsProfileComplete] = useState(false);

  if (!isProfileComplete) {
    return <ProfileSetup onComplete={() => setIsProfileComplete(true)} />;
  }

  return (
    <div className="min-h-screen p-6 bg-neutral-100">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gradient mb-2"
          >
            Smart Investor
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600"
          >
            AI-powered insights for smarter investing
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard 
            title="Market Trend"
            value="+2.3%"
            trend="up"
            icon={<TrendingUp className="w-5 h-5" />}
          />
          <StatsCard 
            title="Risk Level"
            value="Moderate"
            icon={<ShieldCheck className="w-5 h-5" />}
          />
          <StatsCard 
            title="Top Performer"
            value="AAPL"
            trend="up"
            icon={<ChartLine className="w-5 h-5" />}
          />
          <StatsCard 
            title="Opportunities"
            value="12"
            icon={<ArrowUpRight className="w-5 h-5" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MarketOverview />
          </div>
          <div>
            <RiskAssessment />
          </div>
        </div>

        <InvestmentSuggestions />
      </div>
    </div>
  );
};

const StatsCard = ({ title, value, trend, icon }: { 
  title: string;
  value: string;
  trend?: 'up' | 'down';
  icon: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Card className="p-6 card-hover glassmorphism">
        <div className="flex items-center justify-between mb-2">
          <span className="text-neutral-600 text-sm">{title}</span>
          <span className="text-primary">{icon}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`text-2xl font-semibold ${
            trend === 'up' ? 'text-success' : 
            trend === 'down' ? 'text-danger' : 
            'text-neutral-900'
          }`}>
            {value}
          </span>
        </div>
      </Card>
    </motion.div>
  );
};

export default Index;
