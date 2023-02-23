const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const DATABASE_URL = "mongodb://127.0.0.1:27017/subscribers";

const db = mongoose.connection;

mongoose.connect(
  DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Failed to connect to db");
    } else {
      console.log("Successfully connnected to db");
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
