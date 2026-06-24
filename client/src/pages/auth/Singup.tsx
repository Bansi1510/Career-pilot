import { useState, type FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";

import { signupSchema, type SignupFormData } from "@/schemas/signup.schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { createUserAPI } from "@/service/auth.service";
import { toast } from "sonner";

const Signup: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: createUserAPI,

    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/verify-otp");
    },

    onError: () => {
      toast.error("Something went wrong");
    },
  });
  const handleSignup = (data: SignupFormData) => {
    const payload = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      mobile_no: data.mobile_no,
      password: data.password,
    };

    console.log(payload);
    mutate(payload);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="rounded-3xl border border-white/10 bg-white/95 backdrop-blur-xl p-6 md:p-8 shadow-2xl">
          {/* Logo */}
          <div className="mb-5 text-center">
            <img
              src="/logo2.png"
              alt="Career Pilot"
              className="h-14 w-auto mx-auto mb-3"
            />

            <h1 className="text-3xl font-bold text-slate-900">Career Pilot</h1>

            <p className="mt-1 text-sm text-slate-500">
              Start your career journey today
            </p>
          </div>

          {/* Header */}
          <div className="mb-5 text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              Create Account
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Fill in your details to get started
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignup)} className="space-y-4">
            {/* First Name + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-500" />

                  <Input
                    placeholder="First Name"
                    className="h-10 pl-10 rounded-xl"
                    {...register("first_name")}
                  />
                </div>

                {errors.first_name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.first_name.message}
                  </p>
                )}
              </div>

              <div>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan-500" />

                  <Input
                    placeholder="Last Name"
                    className="h-10 pl-10 rounded-xl"
                    {...register("last_name")}
                  />
                </div>

                {errors.last_name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
            </div>

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

            {/* Mobile Number */}
            <div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />

                <Input
                  placeholder="Mobile Number"
                  className="h-10 pl-10 rounded-xl"
                  {...register("mobile_no")}
                />
              </div>

              {errors.mobile_no && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.mobile_no.message}
                </p>
              )}
            </div>

            {/* Password + Confirm Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    onClick={() => setShowPassword(!showPassword)}
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

              <div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pink-500" />

                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="h-10 pl-10 pr-10 rounded-xl"
                    {...register("confirm_password")}
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {errors.confirm_password && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="h-11 w-full rounded-xl bg-slate-900 text-white font-semibold shadow-md hover:bg-slate-800 transition-all duration-300"
            >
              {isPending ? "Creating Account..." : "🚀 Create Account"}
            </Button>
          </form>

          <div className="mt-5 border-t border-slate-200 pt-4 text-center">
            <p className="text-sm text-slate-500">
              Already have an account?
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

export default Signup;
