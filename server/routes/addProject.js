const express = require('express')
const mongoose = require("mongoose")
const User = require('../model/user');
const router = express.Router()


router.post('/:userId', async (req,res)=>{
    try{
        const user = await User.update(
            {_id:req.params.userId},
            {$push: {projects:req.body.projects}}
            )
            res.send("Added Project")
    }catch(err){
        res.send({Message:err})
    }

})


module.exports = router;
