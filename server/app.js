const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost/myBooks").then(
  () => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */

    console.log("Connected to Mongo");
  },
  err => {
    /** handle initial connection error */

    console.log("error connecting to Mongo: ");
    console.log(err);
  }
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
app.listen(4000, () => {
  console.log("Now listening on port 4000");
});
