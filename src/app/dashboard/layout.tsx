import { AsideBar } from "@/components";

export default function LayoutDashboard({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100  antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="grid grid-cols-12  relative w-screen">
        <AsideBar />
        <div className="flex col-span-10 w-full p-5 border-2 border-gray-800  ">
          {children}
        </div>
      </div>
    </div>
  );
}