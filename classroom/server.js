const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");

app.use(
  session({
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/reqcount", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send(`You sent the request ${req.session.count} times`);
});

app.get("/test", (req, res) => {
  res.send("test successful!");
});

app.listen(3000, () => {
  console.log("server is listening to 3000");
});

// const cookieParser = require("cookie-parser");

// app.use(cookieParser("secretCode"));

// app.get("/getsignedcookies", (req, res) => {
//   res.cookie("made-in", "India", { signed: true });
//   res.send("signed cookie sent");
// });

// app.get("/verify", (req, res) => {
//   console.log(req.signedCookies);
//   res.send("verified!");
// });

// app.get("/getcookies", (req, res) => {
//   res.cookie("greet", "namaste");
//   res.send("sent you some cookies!");
// });

// app.get("/", (req, res) => {
//   console.dir(req.cookies);
//   res.send("Hi I am root!");
// });

// app.get("/greet", (req, res) => {
//   let { name = "anonymous" } = req.cookies;
//   res.send(`Hi ${name}`);
// });

// app.use("/users", users);
// app.use("/posts", posts);
