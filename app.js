const express = require("express"),
  cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log("Image Hub Backend is Running...");
});
