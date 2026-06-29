import express from "express";
import cors from "cors";
import "./config/db";
import cookieParser from "cookie-parser";
import UserRouter from "./routes/user.route";
import { transporter } from "./utils/sendOtp";

const app = express();

app.use(cookieParser());

console.log("🚀 Starting SMTP verification");
(async () => {
  try {
    await transporter.verify();
    console.log("✅ SMTP Ready");
  } catch (err) {
    console.error("❌ SMTP Error:", err);
  }
})();
console.log("🚀 SMTP verification finished");

app.use(express.json());
app.use("/api/user", UserRouter);
app.use(
  cors({
    origin: ["https://career-pilot-20.netlify.app", "http://localhost:5173"],
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("Server running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
