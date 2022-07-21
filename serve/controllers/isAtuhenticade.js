const {verify} = require("jsonwebtoken");

module.exports = {

    isAuthenticated(req, res, next){

        try{
            const token = req.headers.authorization.replace("Bearer ", "");

            const validaToken = verify(token, "NORMALAB");

            req["tokenData"] = validaToken;
            next();

        } catch(err){
            res.status(401).json("Unauthorized");
        }
    }

}