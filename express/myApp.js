let express = require('express');
require('dotenv').config()
let app = express();

// app.get('/', (req, res) => {
//     res.send('Hello Express')
// })

app.use('/public', express.static(__dirname + '/public'))

app.get('/json', (req,res)=>{
    const messageStyle = process.env.MESSAGE_STYLE
    const message = 'Hello json'
    const data =  {"message": messageStyle === 'uppercase' ? message.toUpperCase() : message}
    res.json(data)
})

app.listen(3000);
module.exports = app;
