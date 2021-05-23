const express = require('express');
const router = express.Router();
const data = require("./data");
var tv4 = require('tv4')

schema = require("./schema.json");

router.get('/info/:storeid', (req, res) => {
    if(req.params.storeid in data)
        res.send(data[req.params.storeid])
    else
        res.send('Store ID doesn\'t exist')
 });

 router.post('/results/:storeid/:requestType', (req, res) => {
     
    if(!(req.params.storeid in data) || !(req.params.requestType.toUpperCase() === 'BOOKNOWPLUS'))
        res.send('Invalid Request');
    var result = tv4.validateResult(req.body, schema);
    if(!result.valid)
        res.send(JSON.stringify(req))
    else{
        res.send(req.body["bookStores"][0]["courses"][0])
    }
    
 })

 module.exports = router;
