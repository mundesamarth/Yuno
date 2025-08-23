import { NextResponse } from "next/server";

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

export async function GET(request: Request) {
  const data: DashboardSummary = {
    currentBalance: {
      value: 1201,
      change: 12,
    },
    monthlySpending:{
        value:3000,
        change:5,
    },
    budgetRemaining:{
        value:4001,
        label: "15 days into Month"
    },
    savingGoals:{
        value:1200,
        label: "Emergency funds"
    }
  };

  return NextResponse.json(data);
}
