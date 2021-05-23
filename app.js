const express = require('express');
const correlator = require('express-correlation-id');
var index=require('./routes');

const app = express();
app.use(correlator())
app.use(function(req, res, next) {
    res.setHeader('x-correlation-id', correlator.getId())
    next();
  });
app.use(express.json())
app.use('/courseMaterial', index);


const port = 3000;

app.listen(port, () => {
   console.log(`Server starting at ${port}`);
});