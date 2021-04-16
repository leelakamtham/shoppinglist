require('./config');


var express = require('express');

var bodyParser = require('body-parser');
var cors = require('cors');

var route = require('./routes/routes');








var app = express();


app.use(bodyParser.json());
app.use(cors());


app.use('/api',route);







app.get('/',(req,res)=>{
    res.send("welcome to shopping list");
});








app.listen(port,()=>{
    console.log("server ruinning on port 3000  ");
})