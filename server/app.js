const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

var routes = require('./routes/index');

//logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
//static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use('/api',routes)
app.post('/contacts',(req,res)=>{
  console.log('contacts test')
})
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
var port = process.env.PORT || 3030;
app.listen(port, function(){
  console.log("I'm listening on port ",port);
});
  
module.exports = app;