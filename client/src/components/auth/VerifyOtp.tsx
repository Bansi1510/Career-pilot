import { useEffect, useRef, useState, type FC } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

const VerifyOtp: FC = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(90);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);

    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    const newOtp = [...otp];

    pastedData.split("").forEach((digit, index) => {
      newOtp[index] = digit;
    });

    setOtp(newOtp);

    const focusIndex = Math.min(pastedData.length, 5);

    inputRefs.current[focusIndex]?.focus();
  };

  const handleResendOtp = () => {
    console.log("Resend OTP");

    // Call resend OTP API

    setTimer(90);
  };

  const handleVerifyOtp = async () => {
    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      alert("Please enter a valid OTP");
      return;
    }

    console.log({
      otp: otpValue,
    });

    // const response = await verifyOtp({ otp: otpValue });

    // if (response.success) {
    //   navigate("/");
    // }

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-white/95 backdrop-blur-xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <img
              src="/logo2.png"
              alt="Career Pilot"
              className="h-14 mx-auto mb-4"
            />

            <h1 className="text-2xl font-bold text-slate-900">Verify OTP</h1>

            <p className="mt-2 text-sm text-slate-500">
              Enter the 6-digit code sent to your email
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onPaste={handlePaste}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="h-12 w-12 rounded-xl border border-slate-300 text-center text-lg font-semibold outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          <div className="text-center mb-6">
            {timer > 0 ? (
              <p className="text-sm text-slate-500">
                Resend OTP in{" "}
                <span className="font-semibold">
                  {Math.floor(timer / 60)}:
                  {(timer % 60).toString().padStart(2, "0")}
                </span>
              </p>
            ) : (
              <button
                onClick={handleResendOtp}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Resend OTP
              </button>
            )}
          </div>

          <Button
            onClick={handleVerifyOtp}
            className="h-11 w-full rounded-xl bg-slate-900 text-white font-semibold shadow-md hover:bg-slate-800 transition-all duration-300"
          >
            Verify OTP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
