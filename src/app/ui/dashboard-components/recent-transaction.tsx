import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ArrowDownRight,
  ArrowUpRight,
  Car,
  Coffee,
  Film,
  PoundSterling,
  ShoppingBag,
  Utensils,
  Wifi,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface Transaction {
  id: string;
  icon: ReactNode;
  description: string;
  date: string;
  category: string;
  amount: number;
  type: "income" | "expense";
}

// helper function to generate random past dates
function getRandomPastDate(daysAgo: number) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toDateString();
}

const data: Transaction[] = [
  {
    id: "1",
    icon: <Coffee />,
    description: "StarBucks",
    date: getRandomPastDate(0), // today
    type: "expense",
    amount: 43,
    category: "Food & Beverage",
  },
  {
    id: "2",
    icon: <ShoppingBag />,
    description: "Amazon Purchase",
    date: getRandomPastDate(1), // yesterday
    type: "expense",
    amount: 120,
    category: "Shopping",
  },
  {
    id: "3",
    icon: <Car />,
    description: "Uber Ride",
    date: getRandomPastDate(2),
    type: "expense",
    amount: 18,
    category: "Transport",
  },
  {
    id: "4",
    icon: <Wifi />,
    description: "Internet Bill",
    date: getRandomPastDate(5),
    type: "expense",
    amount: 50,
    category: "Utilities",
  },
  {
    id: "5",
    icon: <PoundSterling />,
    description: "Salary",
    date: getRandomPastDate(10),
    type: "income",
    amount: 2500,
    category: "Income",
  },
  {
    id: "6",
    icon: <Utensils />,
    description: "Dinner at Pizza Hut",
    date: getRandomPastDate(3),
    type: "expense",
    amount: 65,
    category: "Food & Beverage",
  },
  {
    id: "7",
    icon: <Film />,
    description: "Netflix Subscription",
    date: getRandomPastDate(7),
    type: "expense",
    amount: 12,
    category: "Entertainment",
  },
];

export default function RecentTransaction() {
  return (
    <Card>
      <CardHeader>
        {/* Here i am gonna redner heading and view all tag  */}
        <div className="flex justify-between">
          <h3 className="font-bold">Recent Transactions</h3>
          <Link href="#" className="text-violet-400 hover:underline">
            View All
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        {/* Here goes the did which renders the transaction */}
        {/*  border-none rounded-none */}
        {data.map((transaction) => {
          const Icon = transaction.icon;
          const isIncome = transaction.type === "income";
          return (
            <div
              key={transaction.id}
              className="bg-transparent shadow-none  hover:bg-slate-100/50 hover:ease-in  transition-all duration-200 hover:border hover:rounded p-3 flex items-center justify-between"
            >
              {/* left side */}
              <div className="flex items-center ">
                <span className="inline-flex items-center justify-center border rounded-full bg-slate-200/50 w-10 h-10">
                {Icon}
                </span>
                <div className="pl-6 ">
                  <p className="flex font-bold text-lg pb-1">{transaction.description}</p>
                  <span className="flex gap-3 text-muted-foreground items-center">
              
                      <Badge variant= "secondary" className="px-2 min-h-6 text-xs min-w-24" >{transaction.category}</Badge>
                    <p className="text-xs"> {transaction.date}</p>
                  </span>
                </div>
              </div>

              {/* right side */}
              <div className="flex gap-2">
                <span className="text-xl font-bold">£{transaction.amount.toFixed(2)}</span>
                <span>
                  {
                    isIncome ?(<ArrowDownRight className="text-green-500"/>):(<ArrowUpRight className="text-red-500"/>)
                  }
                </span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
