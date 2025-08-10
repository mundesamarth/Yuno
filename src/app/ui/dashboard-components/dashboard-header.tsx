import { Card } from "@/components/ui/card";
import { Brain, TrendingUp } from "lucide-react";

export default function DashboardHeader() {
  const currentHour = new Date().getHours();
  const greetings =
    currentHour < 12
      ? "Good Morning"
      : currentHour < 18
      ? "Good afternoon"
      : "Good Evening";
  return (
    /* Welcome Section */
    <Card className="border-0 p-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {greetings}, Sam! 👋
          </h1>
          <p className="text-base text-muted-foreground">
            <span>{`Let's check with your Finances`}</span>
          </p>
        </div>
        <div className="w-12 h-12 bg-slate-300 rounded-xl flex items-center justify-center">
          <Brain className="w-6 h-6 text-white"/>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-background/50 rounded-lg px-4">
          <p className="text-sm text-muted-foreground ">Current Balance</p>
          <p className="text-xl font-bold text-foreground">£ 32,000</p>
          <p className="text-xs text-chart-2 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" />
            +2.3% from last month
          </p>
        </div>
        <div className="bg-background/50 rounded-lg px-4">
          <p className="text-sm text-muted-foreground">This Month</p>
          <p className="text-xl font-bold text-foreground">£5000</p>
          <p className="flex items-center text-xs text-chart-1">
            4% under budget
          </p>
        </div>
      </div>
    </Card>
  );
}
