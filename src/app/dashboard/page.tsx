import { Card } from "@/components/ui/card";
import AiInsights from "../ui/dashboard-components/ai-insights";
import DashboardHeader from "../ui/dashboard-components/dashboard-header";
import MonthlySpendingTreand from "../ui/dashboard-components/monthly-spending-trend";
import QuickAddTransaction from "../ui/dashboard-components/quick-add-transaction";
import SpendingByCategory from "../ui/dashboard-components/spending-by-category";
import TransactionHistory from "../ui/dashboard-components/transaction-history";

export default function Page() {
  return (
    <div >
      <div className="lg:flex lg:gap-6">
        <div className="lg:flex-[7]">

        <DashboardHeader />
        </div>
        <div className="lg:flex-[3]">

        <AiInsights />
        </div>
      </div>
      <Card>
        <QuickAddTransaction />
        <SpendingByCategory />
        <MonthlySpendingTreand />
      </Card>
      <Card>
        <TransactionHistory />
      </Card>
    </div>
  );
}
