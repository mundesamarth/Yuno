import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full flex-none md:w-[300px] border-r border-slate-200">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-[#f8fafc]">
        {children}
      </div>
    </div>
  );
}