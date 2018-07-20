"use strict";
const express = require("express");
const routes = express.Router();
const engagements = require("../../data/index");

routes.get("/:id", function({ params: { id } }, res, next) {
  const options = ["foodie", "foodtrivia"];
  if (options.indexOf(id) !== -1) {
    const data = engagements(id);
    
    res.status(200).send(data.engagement);
  } else {
    res
      .status(400)
      .send({ message: `Error: ${id} is an invalid engagement type.` });
  }
});


module.exports = routes;
