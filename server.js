import graphql from "express-graphql";
import schema from "./data/schema";
import models from "./data/models";

import "babel-core/register";
import path from "path";
import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
import Router from "./core/Router";
import Html from "./components/Html/Html";

const server = express();
const port = process.env.PORT || 3000;

server.use(express.static(path.join(__dirname, "public")));

//authentication mock
server.use((req, res, next) => {
  if (typeof req.query.admin !== "undefined") {
    req.user = { name: "Tarkus " };
  } else {
    req.user = null;
  }
  next();
});

server.use(
  "/graphql",
  graphql({
    schema,
    rootValue: { user: 1 },
    graphql: true,
    pretty: process.env.NODE_ENV !== "produection"
  })
);

models
  .sync({ force: process.env.NODE_ENV !== "production" })
  .catch(err => console.error(err.stack))
  .then(() => {
    server.listen(port, () =>
      console.log(`Node.js server is listening at http://localhost:${port}/`)
    );
  });

server.get("*", (req, res) => {
  const state = { user: req.user };
  const [component, page] = Router.match(req, state);
  const body = ReactDOM.renderToString(component);
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title={page.title}
      description={page.description}
      body={body}
      state={state}
    />
  );
  res.send("<!doctype html>\n" + html);
});
