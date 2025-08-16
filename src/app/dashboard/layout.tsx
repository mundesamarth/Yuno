import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex md:flex-row h-screen">
      <div className="border-r border-slate-200">
        <SideNav />
      </div>
      <div className=" flex-grow p-6 overflow-y-auto  bg-[#f8fafc]">
        {children}
      </div>
    </div>
  );
}