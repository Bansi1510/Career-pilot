import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOtp = async (
  email: string,
  firstName: string,
  otp: string
): Promise<void> => {
  try {
    await transporter.sendMail({
      from: `"Career Pilot" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify Your Email - Career Pilot",
      html: `
        <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">
          <h2>Hello ${firstName},</h2>

          <p>Welcome to <strong>Career Pilot</strong>.</p>

          <p>Your verification OTP is:</p>

          <h1 style="
            background:#4f46e5;
            color:white;
            padding:15px;
            width:180px;
            text-align:center;
            border-radius:8px;
          ">
            ${otp}
          </h1>

          <p>This OTP is valid for <strong>5 minutes</strong>.</p>

          <p>If you didn't request this, please ignore this email.</p>

          <br/>

          <p>Thanks,</p>
          <h3>Career Pilot Team</h3>
        </div>
      `,
    });

    console.log("✅ OTP email sent");
  } catch (error) {
    console.error("❌ Email error:", error);
    throw error;
  }
};