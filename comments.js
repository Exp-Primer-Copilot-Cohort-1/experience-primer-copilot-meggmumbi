// Create web server

const express = require("express");
const router = express.Router();
const Comment = require("../models/comment");
const Post = require("../models/post");
const User = require("../models/user");

// create comment
router.post("/", async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).send(comment);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete comment
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findOneAndDelete({ _id: req.params.id });
    res.status(200).send(comment);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).send(comments);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get comment by id
router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.status(200).send(comment);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get comments by post
router.get("/post/:id", async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.id });
    res.status(200).send(comments);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get comments by user
router.get("/user/:id", async (req, res) => {
  try {
    const comments = await Comment.find({ author: req.params.id });
    res.status(200).send(comments);
  } catch (err) {
    res.status(400).send(err);
  }
});

// update comment
router.patch("/:id", async (req, res) => {
  try {
    const comment = await Comment.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).send(comment);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
