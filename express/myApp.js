let express = require('express');
let app = express();

app.get('/', (req, res) => {
    console.log(__dirname);
    res.send('Hello Express')
})

app.listen(3000);
module.exports = app;
