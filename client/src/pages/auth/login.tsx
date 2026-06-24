import { useState, type FC } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

import { loginSchema, type LoginFormData } from "@/schemas/login.schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (data: LoginFormData) => {
    console.log("Login Payload:", data);
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
              Welcome back
            </p>
          </div>

          {/* Header */}
          <div className="mb-5 text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              Login
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Sign in to continue your journey
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleLogin)}
            className="space-y-4"
          >
            {/* Email */}
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

            {/* Password */}
            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-orange-500" />

                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="h-10 pl-10 pr-10 rounded-xl"
                  {...register("password")}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              className="h-11 w-full rounded-xl bg-slate-900 text-white font-semibold shadow-md hover:bg-slate-800 transition-all duration-300"
            >
              🚀 Login
            </Button>
          </form>

          <div className="mt-5 border-t border-slate-200 pt-4 text-center">
            <p className="text-sm text-slate-500">
              Don't have an account?
              <Link
                to="/signup"
                className="ml-1 font-semibold text-primary hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;