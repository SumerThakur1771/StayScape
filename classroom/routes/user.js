const express = require("express");
const router = express.Router();

//Index route
router.get("/", (req, res) => {
  res.send("Get for users");
});

//Show route
router.get("/:id", (req, res) => {
  res.send("Get for user id");
});

//Post
router.post("/users", (req, res) => {
  res.send("Post for users");
});

router.delete("/:id", (req, res) => {
  res.send("Delete for user id");
});

module.exports = router;