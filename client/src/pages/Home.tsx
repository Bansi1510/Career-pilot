import AppSidebar from "@/components/home/AppSidebar";
import CustomSidebarTrigger from "@/components/home/CustomSidebarTrigger";

import { userData } from "@/data/mockData";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

const Home = () => {
  return (
    <SidebarProvider>

      <AppSidebar user={userData} />

      <SidebarInset>

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">

          {/* Header */}
          <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b border-white/10 bg-slate-900/80 px-6 backdrop-blur-xl">
            <CustomSidebarTrigger />

            <h1 className="text-lg font-semibold text-white">
              Career Pilot
            </h1>

          </header>

          {/* Main Content */}
          <main className="p-4 md:p-6 lg:p-8">

            <div className="space-y-6">

              {/* Welcome Card */}
              <div className="rounded-3xl border border-white/10 bg-white/95 p-8 shadow-2xl backdrop-blur-xl">

                <h1 className="text-3xl font-bold text-slate-900">
                  Welcome Back 👋
                </h1>

                <p className="mt-2 text-slate-500">
                  Continue your interview preparation journey.
                </p>

              </div>

              {/* Dashboard Cards */}
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                <div className="rounded-3xl bg-white p-6 shadow-xl">
                  <h3 className="text-sm text-slate-500">
                    Resume Score
                  </h3>

                  <p className="mt-3 text-3xl font-bold text-blue-600">
                    85%
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-xl">
                  <h3 className="text-sm text-slate-500">
                    Applications
                  </h3>

                  <p className="mt-3 text-3xl font-bold text-green-600">
                    12
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-xl">
                  <h3 className="text-sm text-slate-500">
                    Mock Interviews
                  </h3>

                  <p className="mt-3 text-3xl font-bold text-purple-600">
                    5
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-xl">
                  <h3 className="text-sm text-slate-500">
                    Skills
                  </h3>

                  <p className="mt-3 text-3xl font-bold text-orange-600">
                    {userData.skills.length}
                  </p>
                </div>

              </div>

            </div>

          </main>

        </div>

      </SidebarInset>

    </SidebarProvider >
  );
};

export default Home;