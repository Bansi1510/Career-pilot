import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from "@/pages/auth/login";
import Signup from "@/pages/auth/Singup";
import VerifyOtp from "@/pages/auth/VerifyOtp";
import { createBrowserRouter } from "react-router-dom";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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