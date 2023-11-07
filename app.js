const express = require("express");
const app = express();

// Security Middlewares
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");

// body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Security Middleware Implmentation
app.use(cors());
app.use(mongoSanitize());
app.use(helmet());
app.use(hpp());
app.use("*", (req, res) => {
  res.send("Please use proper route");
});

// rate-limit;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 60,
});
app.use(limiter);

module.exports = app;
