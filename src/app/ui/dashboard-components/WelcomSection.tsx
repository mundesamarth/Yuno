import { plus } from "../fonts";
import {
  Goal,
  MoveDownRight,
  MoveUpRight,
  PoundSterling,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import StatCard from "../components/common/StatCard";
import { auth } from "@/lib/auth";

export default async function WelcomSection() {
  const currentHour = new Date().getHours();
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0] || "Yuno User";
  const greetings =
    currentHour < 12
      ? "Good Morning"
      : currentHour < 18
      ? "Good Afternoon"
      : "Good Evening";
  return (
    /* Welcome Section */
    <div className="space-y-6">
      <header>
        <h1 className={`text-3xl md:text-4xl font-bold ${plus.className}`}>
          {greetings}, <span className="text-gradient-primary">{firstName}</span> 👋{" "}
        </h1>
        <p className="text-muted-foreground mt-1">{`Here's your financial overview`}</p>
      </header>

      {/* Card Section */}
      <section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Current Balance"
            value="£3,200"
            change="12%"
            trendIcon={
              <MoveDownRight className="w-3 h-3 inline-block text-[#ff6b6b]" />
            }
            circleIcon={<TrendingUp className="text-[#4ecdc4] w-7 h-7" />}
            circleBg="#43cdc420"
            circleBorder="#4ecdc4"
          />
          <StatCard
            title="Monthly Spending"
            value="£235.60"
            change="3.4%"
            trendIcon={
              <MoveUpRight className="w-3 h-3 inline-block text-[#4ecdc4]" />
            }
            circleIcon={<TrendingDown className="text-[#ff6b6b] w-7 h-7" />}
            circleBg="#ff6b6b20"
            circleBorder="#ff6b6b"
          />
          <StatCard
            title="Budget Remaining"
            value="£1,264.50"
            change="15 Days into Month"
            trendIcon={""}
            circleIcon={<PoundSterling className="text-[#ffd93d] w-7 h-7" />}
            circleBg="#ffd93d20"
            circleBorder="#ffd93d"
          />
          <StatCard
            title="Savings Goal"
            value="£6750.70"
            change="+15.5%"
            trendIcon={
              <MoveUpRight className="w-3 h-3 inline-block text-[#4ecdc4]" />
            }
            circleIcon={<Goal className="text-[#8b5cf6]" />}
            circleBg="#8b5cf620"
            circleBorder="#8b5cf6"
          />
        </div>
      </section>

      {/* Charts */}
      <section>
        
   
      </section>
    </div>
  );
}
