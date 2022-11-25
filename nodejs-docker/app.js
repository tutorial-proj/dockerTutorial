const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "book one",
    },
    {
      id: "2",
      title: "book 2",
    },
  ]);
});

app.listen(4000, () => {
  console.log("listning for the requests");
});
