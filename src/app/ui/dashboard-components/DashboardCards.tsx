"use client";
import {
  Goal,
  MoveDownRight,
  MoveUpRight,
  PoundSterling,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import StatCard from "../components/common/StatCard";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface DashboardMetrics {
  value: number;
  change?: number;
  label?: string;
}
interface DashboardSummary {
  currentBalance: DashboardMetrics;
  monthlySpending: DashboardMetrics;
  budgetRemaining: DashboardMetrics;
  savingGoals: DashboardMetrics;
}

export default function DashboardCards() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/dashboard/summary")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setSummary(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load Dashboard");
        console.error("Something went wrong", error);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div>
        {error}
        {""}
        <Button
          className="ml-10 bg-red-500 hover:cursor-pointer hover:bg-red-700"
          onClick={() => window.location.reload()}
        >
          Retry
        </Button>
      </div>
    );
  }

  if (loading) {
    return <p>Loading....</p>;
  }
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Current Balance"
        value={`£${summary?.currentBalance.value?.toLocaleString() ?? '0'}`}
        change={`${summary?.currentBalance.change ?? 0}`}
        trendIcon={
          <MoveDownRight className="w-3 h-3 inline-block text-[#ff6b6b]" />
        }
        circleIcon={<TrendingUp className="text-[#4ecdc4] w-7 h-7" />}
        circleBg="#43cdc420"
        circleBorder="#4ecdc4"
        showComparision
      />
      <StatCard
        title="Monthly Spending"
        value={`£${summary?.monthlySpending.value?.toLocaleString()?? '0'}`}
        change={`${summary?.monthlySpending.change ?? ""}`}
        trendIcon={
          <MoveUpRight className="w-3 h-3 inline-block text-[#4ecdc4]" />
        }
        circleIcon={<TrendingDown className="text-[#ff6b6b] w-7 h-7" />}
        circleBg="#ff6b6b20"
        circleBorder="#ff6b6b"
        showComparision
      />
      <StatCard
        title="Budget Remaining"
        value={`£${summary?.budgetRemaining.value?.toLocaleString() ?? '0'}`}
        change={`${summary?.budgetRemaining.label}`}
        trendIcon={""}
        circleIcon={<PoundSterling className="text-[#ffd93d] w-7 h-7" />}
        circleBg="#ffd93d20"
        circleBorder="#ffd93d"
      />
      <StatCard
        title="Savings Goal"
        value={`£${summary?.savingGoals.value?.toLocaleString() ?? '0'}`}
        change={`${summary?.savingGoals.label}`}
        trendIcon={""}
        circleIcon={<Goal className="text-[#8b5cf6]" />}
        circleBg="#8b5cf620"
        circleBorder="#8b5cf6"
      />
    </div>
  );
}
