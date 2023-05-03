const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;
require("./db").connect();
app.use(express.json());
app.get("/", (req, res) => res.send("Hello World!"));
require("./router/index")(app);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
