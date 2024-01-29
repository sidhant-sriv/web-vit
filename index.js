const express = require("express");
const path = require("path");

const app = express();

// Define the directory to serve static files from
const staticDir = path.join(import.meta.dir, "public");

// Set the directory to serve static files
app.use(express.static(staticDir));

//At / path get info.html
// if there is a get request at / path, send info.html
app.get("/", (req, res) => {
  res.sendFile(path.join(staticDir, "info.html"));
});

app.get("/form", (req, res) => {
  res.sendFile(path.join(staticDir, "form.html"));
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
