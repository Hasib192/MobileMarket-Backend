const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config();
const PORT = process.env.SERVER_PORT || process.env.PORT;

mongoose.connect(process.env.DATABASE_URI).then(
  () => {
    app.listen(PORT, () => {
      console.log(`Server started:${PORT} & Database connected:${process.env.DATABASE_URI}`);
    });
  },
  (err) => {
    console.error(err);
  }
);
