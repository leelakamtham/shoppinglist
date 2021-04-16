
port = 3000;

var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/shoppinglist');
mongoose.connection.on('connected',() =>{
    console.log('connected to mongodb');
});
mongoose.connection.on('error',(err)=>{
    console.log(err);

})






/*
{useNewUrlParser:true},
{ useUnifiedTopology: true })
.then(()=> console.log("database connected"))
.catch((err)=> console.log("error "+err));

*/