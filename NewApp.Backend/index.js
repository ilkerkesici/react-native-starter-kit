const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const port = require('./src/config').PORT;
const helper = require('./src/helpers');
const message_router = require('./src/routers/MessageRouter');
const user_router = require('./src/routers/UserRouter');

/**
 * Socket listener
 */
io.on("connection", socket => {
    socket.on('user_connected', async token  => {
        try{
            
            await helper.connection.userConnect(token, socket.id, socket);
            
        }catch(err){
        }
    });
    socket.on('user_disconnect', async token => {
        try{
            await helper.connection.userDisconnect(token, socket);
        }catch(err){
        }
    })
})

// Add headers
app.use(function (req, res, next) {
    
    // Website you wish to allow to connect
    res.header("Access-Control-Allow-Origin", "*");
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    // Pass to next layer of middleware
   
    next();
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('public'));


app.use(message_router);
app.use(user_router);

app.io = io;

server.listen(port, () => {
    console.log("Server running on port " + port);
});