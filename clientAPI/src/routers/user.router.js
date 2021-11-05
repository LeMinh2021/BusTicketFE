const express = require("express");
const { route, post } = require("./ticket.router");
const { hashPassword, comparePassword } = require("../helpers/bcrypt.helper");
const { createAccessJWT, createRefreshJWT } = require("../helpers/jwt.helper");
const {userAuthorization} = require("../Middlewares/authorization.middlewares")
const router = express.Router();
const {
  insertUser,
  getUserByEmail,
  getUserById,
} = require("../model/user/User.model");




router.all("/", (req, res, next) => {
    //   console.log(name);
    // res.json({ message: "return form user router" });
  
    next();
  });


  // Get user profile route
  router.get("/", userAuthorization, async (req, res) => {
    //this data coming form database
    const _id = req.userId;
  
    const userProf = await getUserById(_id);
    //3. extract user id
    //4. get user profile based on the user id
  
    res.json({ user: userProf });
  });
  


  // Create new user router
router.post("/", async (req, res) => {
    const { name, company, address, phone, email, password } = req.body;
  
    try {
      //hash password
      const hashedPass = await hashPassword(password);
      const newUserObj = {
        name,
        company,
        address,
        phone,
        email,
        password: hashedPass,
      };
      const result = await insertUser(newUserObj);
      console.log(result);
      res.json({ message: "New user created", result });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  });
  
  //User sign in Router
  router.post("/login", async (req, res) => {
    console.log(req.body);
  
    const { email, password } = req.body;
  
    /// hash our email and compare with the db one 
    if (!email || !password) {
      return res.json({ status: "error", message: "Invalid form submition!" });
    }
  
    ///get user with email from db
    const user = await getUserByEmail(email);
  
    const passFromDb = user && user._id ? user.password : null;
  
    if (!passFromDb)
      return res.json({ status: "error", message: "Invalid email or password!" });
  
  
    const result = await comparePassword(password, passFromDb);
    if(!result){
      return res.json({ status: "error", message: "Invalid email or password!" });
      
    }

    const accessJWT = await createAccessJWT(user.email , `${user._id}`)

    const refreshJWT = await createRefreshJWT(user.email, `${user._id}`)

  
    res.json({ status: "success", message: "Login Successfully!", accessJWT ,refreshJWT });
  });

  
  
  module.exports = router;