const express = require('express')
const mongoose = require("mongoose")
const User = require('../model/user');
const router = express.Router()


router.get('/', async (req,res)=>{
    try{
        const user = await User.find()
        res.send(user)
    }catch(err){
        res.send({Message:err})
    }

})



router.get('/:userId', async (req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        res.send(user.projects)
    }catch(err){
        res.send({Message:err})
    }

})


module.exports = router;
