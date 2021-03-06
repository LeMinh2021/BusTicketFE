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
  updatePassword,
} = require("../model/user/User.model");
const {
  setPasswordRestPin,
  getPinByEmailPin,
  deletePin,
} = require("../model/restPin/RestPin.model");

const { emailProcessor } = require("../helpers/email.helper");

const {
  resetPassReqValidation,
  updatePassValidation,
} = require("../middlewares/formValidation.middleware");


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


  // A. Create and send password reset pin number

  // 4. email the pin

  // B. update Password in DB
  // 1. receive email, pin and new Password
  // 2. validate pin
  // 3. encrypt new password
  // 4. update password in db
  // 5. send email notification

  // C. Server side form validation
  // 1. create middleware to validate form data

  router.post("/reset-password", resetPassReqValidation, async (req, res) => {
    const { email } = req.body;
  
    const user = await getUserByEmail(email);
  
    if (user && user._id) {
      // 2. create unique 6 digit pin
      const setPin = await setPasswordRestPin(email);
      
      await emailProcessor({
        email,
        pin: setPin.pin,
        type: "request-new-password",
      });
  
      return res.json({
        status: "success",
        message:
        "If the email is exist in our database, the password reset pin will be sent shortly."
      });
    }
  
    res.json({
      status: "error",
      message:
        "If the email is exist in our database, the password reset pin will be sent shortly.",
    });
  });
  
  router.patch("/reset-password", updatePassValidation, async (req, res) => {
    const { email, pin, newPassword } = req.body;
  
    const getPin = await getPinByEmailPin(email, pin);
    // 2. validate pin
    if (getPin._id) {
      const dbDate = getPin.addedAt;
      const expiresIn = 1;
  
      let expDate = dbDate.setDate(dbDate.getDate() + expiresIn);
  
      const today = new Date();
  
      if (today > expDate) {
        return res.json({ status: "error", message: "Invalid or expired pin." });
      }
  
      // encrypt new password
      const hashedPass = await hashPassword(newPassword);
  
      const user = await updatePassword(email, hashedPass);
  
      if (user._id) {
        // send email notification
        await emailProcessor({ email, type: "update-password-success" });
  
        ////delete pin from db
        deletePin(email, pin);
  
        return res.json({
          status: "success",
          message: "Your password has been updated",
        });
      }
    }
    res.json({
      status: "error",
      message: "Unable to update your password. plz try again later",
    });
  });
  
  module.exports = router;