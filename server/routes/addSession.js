const express = require('express')
const mongoose = require("mongoose")
const User = require('../model/user');
const router = express.Router()


router.post('/:userId/:projectID', async (req,res)=>{
    try{
        const user = await User.update(
            {"_id":req.params.userId,"projects._id":req.params.projectID},
            {$push: {"projects.$.session":req.body.projects[0].session}}
            )
            res.send("Added session")
    }catch(err){
        res.send({Message:err})
    }

})


module.exports = router;
