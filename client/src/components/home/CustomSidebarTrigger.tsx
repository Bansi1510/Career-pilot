import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { PanelLeft } from "lucide-react";

const CustomSidebarTrigger = () => {
  const { isMobile, openMobile } = useSidebar();

  // ✅ hide ONLY on mobile when sidebar is open
  if (isMobile && openMobile) return null;

  return (
    <SidebarTrigger className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-lg hover:bg-slate-100">
      <PanelLeft className="h-5 w-5 text-slate-900" />
    </SidebarTrigger>
  );
};

export default CustomSidebarTrigger;