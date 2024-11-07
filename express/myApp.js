let express = require('express');
let app = express();

// app.get('/', (req, res) => {
//     res.send('Hello Express')
// })

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(3000);
module.exports = app;
