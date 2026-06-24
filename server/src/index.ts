import express from "express";
import cors from "cors";
import "./config/db";
import cookieParser from "cookie-parser";
import UserRouter from "./routes/user.route";




const app = express();

app.use(cookieParser());

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
