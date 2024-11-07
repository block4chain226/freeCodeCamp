let express = require('express');
const {logger} = require('./middlewares/logger.middleware');
const bodyParser = require('body-parser');
const {timeMiddleware, timeRes} = require('./middlewares/time.middleware');
const {getUser} = require('./handlers/users/user')
require('dotenv').config()
let app = express();


app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(logger)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})


app.get('/json', (req, res) => {
    const messageStyle = process.env.MESSAGE_STYLE
    const message = 'Hello json'
    const data = {'message': messageStyle === 'uppercase' ? message.toUpperCase() : message}
    res.json(data)
})

app.get('/now', timeMiddleware, timeRes)

app.get('/:word/echo', (req, res) => {
    const word = req.params.word
    res.send({echo: word})
})

app.get('/name', getUser).post(getUser)


module.exports = app;
