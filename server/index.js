const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://somanath89121:Somu1234@cluster0.qimi6od.mongodb.net/TT?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/api/users", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/taskRoutes"));
app.use("/api", require("./routes/emailRoutes"));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
