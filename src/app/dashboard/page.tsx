import SpendingByCategory from "../ui/dashboard-components/monthly-spending-trend";
import WelcomSection from "../ui/dashboard-components/WelcomSection";


export default function Page() {
  return (
    <div className="bg-[#f8fafc]">
      <WelcomSection/>
      <SpendingByCategory/>
    </div>
  );
}
