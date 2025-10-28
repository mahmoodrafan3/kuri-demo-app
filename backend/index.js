import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import User from "./models/User.js";
import session from "express-session";
import passport from "passport";
import "./passport.js";

dotenv.config();
const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Register
app.post("/auth/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    user = new User({ name, email, password });
    await user.save();

    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login
app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    req.session.user = user; // store in session
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get current user (works for both Google + email login)
app.get("/auth/user", (req, res) => {
  if (req.user) {
    res.json(req.user); // Google user via passport
  } else if (req.session.user) {
    res.json(req.session.user); // Email-password user via session
  } else {
    res.status(401).json({ message: "Not logged in" });
  }
});

// Google Auth Routes
app.get("/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: "http://localhost:3000/home",
        failureRedirect: "http://localhost:3000"
    })
);

// Logout
app.get("/auth/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy();
    res.redirect("http://localhost:3000");
  });
});

app.get("/auth/user", (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: "Not logged in" });
  }
});


app.get("/", (req, res) => res.send("API running..."));

app.listen(5000, () => console.log("Server started on port 5000"));

