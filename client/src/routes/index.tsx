import { createBrowserRouter } from "react-router-dom";
import ForgotPassword from "@/components/auth/ForgotPassword";
import VerifyOtp from "@/components/auth/VerifyOtp";
import TutorialPage from "@/components/dashboard/tutorial/TutorialPage";
import Login from "@/components/auth/login";
import Signup from "@/components/auth/Singup";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Home } from "lucide-react";

export const router = createBrowserRouter([
  // Auth Routes
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />,
  },

  // Dashboard Routes
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tutorials/:skill",
        element: <TutorialPage />,
      },
    ],
  },
]);