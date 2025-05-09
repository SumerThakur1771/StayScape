const express = require("express");
const router = express.Router();

//Index route
router.get("/", (req, res) => {
  res.send("Get for posts");
});

//Show route
router.get("/:id", (req, res) => {
  res.send("Get for posts id");
});

//Post
router.post("/", (req, res) => {
  res.send("Post for posts");
});

router.delete("/:id", (req, res) => {
  res.send("Delete for posts id");
});

module.exports = router;