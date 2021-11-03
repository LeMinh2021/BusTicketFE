const jwt = require('jsonwebtoken');
const {getJWT, setJWT} = require("./redis.helper")

const createAccessJWT = async (email , _id) => {
    try {
        const accessJWT = await jwt.sign({ email}, process.env.JWT_ACCESS,
             {expiresIn:'15m'});
        await setJWT(accessJWT, _id)
        return Promise.resolve(accessJWT);
    } catch (error) {
        return Promise.reject(accessJWT);
    }
}

const createRefreshJWT = (payload) => {
    const refreshJWT = jwt.sign({ payload}, process.env.JWT_ACCESS,{expiresIn:'20d'});

    return Promise.resolve(refreshJWT);
}

module.exports= {
    createAccessJWT,
    createRefreshJWT,
}

