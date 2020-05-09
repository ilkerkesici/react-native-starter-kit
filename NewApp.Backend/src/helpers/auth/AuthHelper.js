const JWT = require("jsonwebtoken");

const Config = require("../../config");


/**
 * This method check user is authanticate
 * @param {header} req 
 */
const authantication = (req) => {
    return new Promise(async (resolve, reject)  => {
        try{
            const token = req.headers['x-access-token']; 
            let result = await token_parse(token);
            resolve(result);
        }catch(err){ // Header error
            reject({error: { status: "There is unexpected error!"}, message: err});
            return;
        }
    })
}

/**
 * parse the given token if it is valid
 * @param  token 
 */
const token_parse = (token) => {
    return new Promise((resolve, reject)  => {
        try{
            if (token) {        
                try{
                    JWT.verify(token, Config.SECRET_KEY, (err, decoded) => {     

                        if (err) {     // Verification error    

                            reject({error: {status: 'Invalid token.'}, message: err})
                            return;   

                        } else {    // Success  
                            resolve({success: {status: 'Token is valid!'}, message: 'Success', data:decoded} )
                            return;      
                        }}); 
                }catch(err){ // Verification error
                    reject({error: {status: "There is unexpexted error!"}, message: err});
                    return;
                }
            } else {  // Token is null or undefined
                reject({error: {status: 'You must authorization.'}, message: 'No Token'});      
                return;    
            };
        }catch(err){
            reject({error: { status: "There is an unexpected error!"}, message: err});
            return;
        }
    })
}

/**
 * Creating JWT for user
 * @param {string} id is user id
 * @param {string} username is user username
 */
const createToken = (id, username) => {
    const payload = {
        id,
        username
    };               
    const token = JWT.sign(payload, Config.SECRET_KEY, {                        
        expiresIn: 60 * 60 * 24 * 365 * 3,                    
        });
    return token; 
}


module.exports={
    token_parse,
    authantication,
    createToken
}