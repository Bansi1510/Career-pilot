import {
  LayoutDashboard,
  Briefcase,
  Brain,
  X,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import AppLogo from "./AppLogo";
import ProfileSection from "./ProfileSection";
import SkillTutorials from "./SkillTutorials";

import type { User } from "@/types/User";

interface Props {
  user: User;
}

const AppSidebar = ({ user }: Props) => {
  return (
    <Sidebar
      variant="sidebar"
      collapsible="offcanvas"
      className="bg-white text-slate-900 shadow-2xl"
    >
      {/* Header */}
      <SidebarHeader className="border-b border-slate-200 bg-white p-4">

        <div className="flex items-center justify-between">

          <AppLogo />

          {/* Mobile Close Button */}
          <SidebarTrigger className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200">
            <X className="h-5 w-5 text-slate-700" />
          </SidebarTrigger>

        </div>

      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="bg-white px-3 py-6">

        <SidebarMenu className="space-y-3">

          <SidebarMenuItem>
            <SidebarMenuButton
              className="h-12 rounded-xl"
              onClick={() => console.log("Dashboard API")}
            >
              <LayoutDashboard className="h-5 w-5 text-blue-500" />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              className="h-12 rounded-xl"
              onClick={() => console.log("Interview Prep API")}
            >
              <Brain className="h-5 w-5 text-purple-500" />
              <span>Interview Prep</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              className="h-12 rounded-xl"
              onClick={() => console.log("Applications API")}
            >
              <Briefcase className="h-5 w-5 text-green-500" />
              <span>My Applications</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

        </SidebarMenu>

        {/* Skills */}
        <div className="mt-10">
          <SkillTutorials skills={user.skills} />
        </div>

      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-slate-200 bg-white p-4">
        <ProfileSection user={user} />
      </SidebarFooter>

    </Sidebar>
  );
};

export default AppSidebar;