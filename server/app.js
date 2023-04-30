const express = require("express");
const graphqlHTTP = require("graphql-http/lib/use/express");
const schema = require("./schema/schema.js");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://Kasaklalita:Kasakilita1945255959@cluster0.qbt6dsz.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("connected");
});

app.use("/graphql", graphqlHTTP.createHandler({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
