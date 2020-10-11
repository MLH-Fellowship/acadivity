const express = require('express')
const mongoose = require("mongoose")
const User = require('../model/user');
const router = express.Router()



//to view all the grades for a user
router.get('/:userId', async (req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        res.send(user.grade)
    }catch(err){
        res.send({Message:err})
    }

})


//GPA update
router.post('/update/:userId/', async (req,res)=>{
    try{
        const user = await User.update(
            {"_id":req.params.userId},
            {$set: {"grade.current_cgpa":req.body.grade.current_cgpa, "grade.target_cgpa":req.body.grade.target_cgpa, "grade.current_semester":req.body.grade.current_semester, "grade.total_credits":req.body.grade.total_credits }}
            )
            res.send("Updated grade sheet")
    }catch(err){
        res.send({Message:err})
    }

})




module.exports = router;