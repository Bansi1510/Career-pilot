import type { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";

import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "@/schemas/forgot-password.schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForgotPassword: FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
  });

  const handleForgotPassword = (
    data: ForgotPasswordFormData
  ) => {
    console.log("Forgot Password Payload:", data);

    // Call Forgot Password API here

    navigate("/verify-otp");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-white/95 backdrop-blur-xl p-6 md:p-8 shadow-2xl">
          {/* Logo */}
          <div className="mb-5 text-center">
            <img
              src="/logo2.png"
              alt="Career Pilot"
              className="h-14 w-auto mx-auto mb-3"
            />

            <h1 className="text-3xl font-bold text-slate-900">
              Career Pilot
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Recover your account
            </p>
          </div>

          {/* Header */}
          <div className="mb-5 text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              Forgot Password
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Enter your email address and we'll send you an OTP
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleForgotPassword)}
            className="space-y-4"
          >
            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-500" />

                <Input
                  type="email"
                  placeholder="Email Address"
                  className="h-10 pl-10 rounded-xl"
                  {...register("email")}
                />
              </div>

              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="h-11 w-full rounded-xl bg-slate-900 text-white font-semibold shadow-md hover:bg-slate-800 transition-all duration-300"
            >
              Send OTP
            </Button>
          </form>

          <div className="mt-5 border-t border-slate-200 pt-4 text-center">
            <p className="text-sm text-slate-500">
              Remember your password?
              <Link
                to="/login"
                className="ml-1 font-semibold text-primary hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;