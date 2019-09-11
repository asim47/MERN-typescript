const config = require('config');
const jwt = require('jsonwebtoken');


function auth(req,res,next){
    const token = req.headers["x-auth-token"];
    // check token
    
    if(!token){
        return res.status(401).json({rej:"No token, Auth Denied!!!"});
    }

    try{
        //verify token 
        const decoded = jwt.verify(token,config.get("jwtSecret"));

        // add user from payload

        req.user = decoded;
        
        next();
    }catch(e){
        res.status(400).json({msg:"Token Is Invalid!"})
    }

}

module.exports = auth;
