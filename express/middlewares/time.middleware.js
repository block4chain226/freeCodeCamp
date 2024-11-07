const timeMiddleware = (req, res, next) => {
    req.time = new Date().toString()
    next()
}

const timeRes = (req,res) => {
    const date = {time:req.time}
    res.send(date)
}

module.exports={timeMiddleware, timeRes}