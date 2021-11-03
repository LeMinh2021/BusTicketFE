const jwt = require('jsonwebtoken');
const {getJWT, setJWT} = require("./redis.helper")
const {storeUserRefreshJWT} = require("../model/user/User.model");

const createAccessJWT = async (email , _id) => {
    try {
        const accessJWT =  jwt.sign({ email}, 
            process.env.JWT_ACCESS,
            {expiresIn:'15m'});
        await setJWT(accessJWT, _id)
        return Promise.resolve(accessJWT);
    } catch (error) {
        return Promise.reject(accessJWT);
    }
}

const createRefreshJWT = async (email, _id) => {
    try {
        const refreshJWT =  jwt.sign({ email},
             process.env.JWT_ACCESS,
            {expiresIn:'20d'});
        await storeUserRefreshJWT( _id,refreshJWT )
        return Promise.resolve(refreshJWT);
        
    } catch (error) {
        return Promise.reject(error)
    }


    
}

module.exports= {
    createAccessJWT,
    createRefreshJWT,
}

