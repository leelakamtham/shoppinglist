var express = require('express');
var router = express.Router();

var Item = require('../model/shoppingitem');


router.get('/items',(req,res)=>{
    
    Item.find((err,items)=>{
        if(err){
            res.json(err);
        }else{
            res.json(items);
        }
    })
    
    
})

router.post('/item',(req,res)=>{
    let newShoppingItem = new Item({
        itemName : req.body.itemName,
        itemQuantity: req.body.itemQuantity,
        itemBought:req.body.itemBought
    });
    newShoppingItem.save((err,item)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:`item added to db`});
        }
    });



})


router.put('/item/:id',(req,res)=>{
    Item.findByIdAndUpdate({_id:req.params.id},{
        $set:{
            itemName:req.body.itemName,
            itemQuantity:req.body.itemQuantity,
            itemBought:req.body.itemBought
        }

    },
    function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    


    })





})




router.delete('/item/:id',(req,res)=>{
Item.findByIdAndRemove({_id:req.params.id},(err,result)=>{
    if(err){
        res.json(err);
    }else{
        res.json(result);
    }
})







})








module.exports = router;