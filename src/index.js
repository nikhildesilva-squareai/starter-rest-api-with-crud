const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ project: "REST API with CRUD", status: "TODO: implement" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
