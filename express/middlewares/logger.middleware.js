 const logger = (req, res, next) => {
    const ip = req.ip
    const path = req.path
    const method = req.method
    const info = `${method} ${path} - ${ip}`
    console.log(info)
    next()
}

module.exports = logger

