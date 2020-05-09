const router = require("express").Router();
const helper = require('../helpers');
const DBHelper = require('../db');

router.post('/api/message', async (req, res, next) => {
    let token_data;
    try{
        token_data = await helper.auth.authantication(req);
    }catch(err){
        res.status(401);
        res.json({Status: false, Message: 'Authorization denied!', Data: null});
        return;
    }
    try{
        let data = req.body;
        if(!data.message && !data.message_type && !data.taker_id){
            res.status(400);
           return  res.json({Status: false, Message: 'Invalid input!', Data: null});
        }
        let response = await helper.message.saveMessage(req, token_data.data);
        res.json(response)
    }catch(err){
        res.status(400);
        res.json(err);
    }
});

router.get('/api/message', async (req, res, next) => {
    let token_data;
    try{
        token_data = await helper.auth.authantication(req);
    }catch(err){
        res.status(401);
        res.json({Status: false, Message: 'Authorization denied!', Data: null});
        return;
    }
    let data = req.query;
    try{
        if(data.user_id){
            let result = await helper.message.getMessagesBetweenTwoUser(data, token_data.data);
            return res.json(result);
        }
        // Get message list of user which is request to API

        let result = await DBHelper.message.getLastMessageListAndUserInfo(token_data.data.id);
        
        res.json({Success: true, Data: result, Message: null});
    }catch(err){
        res.json({Error: err});
    }
});

module.exports = router;