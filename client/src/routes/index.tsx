import ForgotPassword from "@/components/auth/ForgotPassword";
import Login from "@/components/auth/login";
import Signup from "@/components/auth/Singup";
import VerifyOtp from "@/components/auth/VerifyOtp";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  }
]);