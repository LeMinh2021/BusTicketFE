const express = require("express");
const {route} = require("./ticket.router");
const router = express.Router();

const {insertUser} = require("../model/user/User.model")

router.all("/", (req, res, next) => {
//   console.log(name);
//   res.json({ message: "return form user router" });
    next();
});

router.post("/",async(req,res) => {

    try{
        const result = await insertUser(req.body)
        console.log(result);
        res.json({message: " new user created", result});
    }
    catch(error){
        res.json({statux: "error" , message: error.message})
    }
    
})

module.exports = router;