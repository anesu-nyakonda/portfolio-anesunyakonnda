const express = require("express");
const main = require("./email");
const app = express();

main();

app.listen(3000, () => {
  console.log("listening on port 3000");
});
