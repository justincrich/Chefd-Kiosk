const routes = require('express').Router();
const contacts = require('./contact/contact');
const engagement = require('./engagement/engagement.js');
const results = require('./results/results.js');
routes.use('/contacts',contacts);
routes.use('/engagement',engagement);
routes.use('/results',results);
routes.get('/',(req,res)=>{
  console.log("USER IN REQ");
  res.status(200).json({message:'Connected'});
})

routes.post('/',(req,res)=>{
  console.log('hiiiiiiiiiii',req.url)

  res.send({'justin':'hi'})
})

module.exports = routes;
