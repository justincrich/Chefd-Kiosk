"use strict";
const express = require("express");
const routes = express.Router();
const getEngagements = require("../../data/index");

routes.get("/:engagementid/:resultid", function({ params: { engagementid,resultid } }, res, next) {
  const engagements = ["foodie", "foodtrivia"];
  //res.status(200).send({engagementid,resultid})
  if (engagements.indexOf(engagementid) !== -1) {
    const data = getEngagements(engagementid).results;
    let id = resultid;
    let results;
    if(engagementid === 'foodtrivia'){
      id = parseInt(id);
      
    }
    results = data[id]

    
    if(results){
        res.status(200).send(results);
    }else{
        res
      .status(400)
      .send({ message: `Error: ${resultid} is an invalid result ID.` });
    }
  } else {
    res
      .status(400)
      .send({ message: `Error: ${engagementid} is an invalid engagement type.` });
  }
});


module.exports = routes;
