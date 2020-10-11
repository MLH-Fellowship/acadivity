const express = require('express')
const mongoose = require("mongoose")
const User = require('../model/user');
const router = express.Router()



//attendance info
router.get('/:userId', async (req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        res.send(user.attendance)
    }catch(err){
        res.send({Message:err})
    }

})

//add a subject
router.post('/add/:userId', async (req,res)=>{
    try{
        const user = await User.update(
            {_id:req.params.userId},
            {$push: {attendance:req.body.attendance}}
            )
            res.send("Added Subject")
    }catch(err){
        res.send({Message:err})
    }

})


//daily update
router.post('/update/:userId/:subjectId', async (req,res)=>{
    try{
        const user = await User.update(
            {"_id":req.params.userId,"attendance._id":req.params.subjectId},
            {$set: {"attendance.$.total_classes":req.body.attendance[0].total_classes, "attendance.$.current_attendance":req.body.attendance[0].current_attendance }}
            )
            res.send("Updated attendance")
    }catch(err){
        res.send({Message:err})
    }

})


module.exports = router;