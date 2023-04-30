const express = require("express");
const graphqlHTTP = require("graphql-http/lib/use/express");
const schema = require("./schema/schema.js");

const app = express();

app.use("/graphql", graphqlHTTP.createHandler({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
