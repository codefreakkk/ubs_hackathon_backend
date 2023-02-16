const express = require("express");
const app = express();
const cors = require("cors");

require("./model/database");

const jobRoutes = require("./routes/jobRoutes");
const userRoutes = require("./routes/userRoutes");

// middle ware
app.use(express.json());
app.use(cors());

app.use("/api/v1", jobRoutes);
app.use("/api/v1", userRoutes);

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`server started at ${PORT}`));