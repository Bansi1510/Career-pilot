import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());

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