import { Outlet } from "react-router-dom";

import AppSidebar from "@/components/home/AppSidebar";
import CustomSidebarTrigger from "@/components/home/CustomSidebarTrigger";
import { userData } from "@/data/mockData";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar user={userData} />

      <SidebarInset>
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">

          <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b border-white/10 bg-slate-900/80 px-6 backdrop-blur-xl">
            <CustomSidebarTrigger />

            <h1 className="text-lg font-semibold text-white">
              Career Pilot
            </h1>
          </header>

          <main className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
            <Outlet />
          </main>

        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;