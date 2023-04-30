const express = require("express");
const graphqlHTTP = require("express-qraphql");

const app = express();

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
