let express = require('express');
const {timeMiddleware, timeRes} = require('./middlewares/time.middleware');
require('dotenv').config()
let app = express();


app.use('/public', express.static(__dirname + '/public'))
app.use((req, res, next) => {
    const ip = req.ip
    const path = req.path
    const method = req.method
    const info = `${method} ${path} - ${ip}`
    console.log(info)
    next()
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})


app.get('/json', (req, res) => {
    const messageStyle = process.env.MESSAGE_STYLE
    const message = 'Hello json'
    const data = {'message': messageStyle === 'uppercase' ? message.toUpperCase() : message}
    res.json(data)
})

app.get('/:word/echo', (req, res) => {
    const word = req.params.word
    res.send({echo: word})
})

app.get('/now', timeMiddleware, timeRes)
