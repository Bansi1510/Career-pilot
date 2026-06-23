import express from "express";
import cors from "cors";
import './config/db.ts'; 
const app = express();
import cookieParser from "cookie-parser";
import UserRouter from "./routes/user.route.ts";

app.use(cookieParser());

app.use(express.json());
app.use('/api/user',UserRouter)
app.use(
  cors({
    origin: "https://career-pilot-20.netlify.app",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Server running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});