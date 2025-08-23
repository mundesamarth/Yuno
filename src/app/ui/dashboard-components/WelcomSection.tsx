
import { plus } from "../fonts";

import { auth } from "@/lib/auth";
import DashboardCards from "./DashboardCards";



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
          {greetings},{" "}
          <span className="text-gradient-primary">{firstName}</span> 👋{" "}
        </h1>
        <p className="text-muted-foreground mt-1">{`Here's your financial overview`}</p>
      </header>

      {/* Card Section */}
      <section>
        <DashboardCards/>
      </section>

      {/* Charts */}
      <section></section>
    </div>
  );
}
