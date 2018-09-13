const express = require('express')
const appConfig = require('./config/appConfig')
const fs = require('fs')
const mongoose = require('mongoose')
const http = require('http')
const bodyParser = require('body-parser')
const routeLogger = require('./middlewares/routeLogger')
const globleErrorHandler = require('./middlewares/appErrorHandler')
const helmet = require('helmet')
const logger = require('./lib/loggerLib')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(globleErrorHandler.globleErrorHandler);
app.use(routeLogger.logIp);
app.use(helmet());

let modelPath = './model'
fs.readdirSync(modelPath).forEach(function(file){
    if (-file.indexOf('.js'))
    console.log(modelPath+'/'+file)
    require(modelPath+'/'+file)
});


let routePath = './routes'

fs.readdirSync(routePath).forEach(function(file){
    if(-file.indexOf('.js'))
    console.log(routePath+'/'+file)

    let route = require(routePath+'/'+file);
    route.setRouter(app)
})

app.use(globleErrorHandler.globleNotFoundHandler);


const server = http.createServer(app)
// start listening to http server
console.log(appConfig)
server.listen(appConfig.port)
server.on('error', onError)
server.on('listening', onListening)



/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        logger.error(error.code + ' not equal listen', 'serverOnErrorHandler', 10)
        throw error
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        case 'EADDRINUSE':
            logger.error(error.code + ':port is already in use.', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        default:
            logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10)
            throw error
    }
}


function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    ('Listening on ' + bind)
    logger.info('server listening on port' + addr.port, 'serverOnListeningHandler', 10)
    let db = mongoose.connect(appConfig.db.uri, { useNewUrlParser: true })
}


process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
    // application specific logging, throwing an error, or other logic here
})

/*app.listen(appConfig.port, () =>{
    console.log('Example app listening on port 3000!')
     
   //   let db = 
     mongoose.connect(appConfig.db.uri,{ useNewUrlParser: true });
   })*/


   // handling mongoose connection error
mongoose.connection.on('error', function (err) {
    console.log('database connection error');
    console.log(err)

}); // end mongoose connection error

// handling mongoose success event
mongoose.connection.on('open', function (err) {
    if (err) {
        console.log("database error");
        console.log(err);

    } else {
        console.log("database connection open success");
    }

}); // end mongoose connection open handler