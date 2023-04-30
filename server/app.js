const express = require("express");
const graphqlHTTP = require("graphql-http/lib/use/express");

const app = express();

app.use("/graphql", graphqlHTTP.createHandler({}));

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
