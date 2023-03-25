// ROUTER
const router = require("express").Router();

// BCRYPT
const bcrypt = require("bcrypt");

// JTW
const jwt = require("jsonwebtoken");

// PRISMA
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// SIGNUP
router.post("/signup", async (req, res, next) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.usernameInput,
    },
  });
  const email = await prisma.user.findUnique({
    where: {
      email: req.body.emailInput,
    },
  });
  if (user || email) {
    if (email && user)
      return res.status(400).json({ message: "user and email already exist" });
    else if (user)
      return res.status(400).json({ message: "username already exist" });
    else if (email)
      return res.status(400).json({ message: "email already exist" });
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.passwordInput, 10);
    await prisma.user.create({
      data: {
        username: req.body.usernameInput,
        password: hashedPassword,
        email: req.body.emailInput,
      },
    });
    return res.status(201).json({ message: "Signed in successfully 😊 👌" });
  } catch (error) {
    next(error);
  }
});

// LOGIN
router.post("/login", async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.body.username,
      },
    });
    if (user === null) return res.status(401).json({ message: "Cannot found user" });
    else {
      if (await bcrypt.compare(req.body.password, user.password)) {
        const accessToken = jwt.sign(user.username, process.env.ACCESS_TOKEN_SECRET);
        res.setHeader("Set-Cookie", `access_token=${accessToken}`);
        return res.status(200).json({ message: "Your are logged in" });
      } else {
        return res.status(401).json({ message: "Not Allowed" });
      }
    }
  } catch (error) {
    next(error);
  }
});

// AUTH
const authenticateToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.sendStatus(401);
  try {
    const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.username = data;
    next();
  } catch (error) {
    return res.sendStatus(403);
  }
};

router.get("/username", authenticateToken, async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.username,
      },
    });
    res.json({ username: user.username });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
