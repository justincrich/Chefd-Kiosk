'use strict';

const express = require("express");
const routes = express.Router();

routes.get("/",function(req,res,next){
    console.log('hiiii')
})

module.exports = routes;