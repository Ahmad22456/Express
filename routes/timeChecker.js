
const timeChecker = (req, res, next) => {
    const currentDay = new Date().getUTCDay()
    const currentTime = new Date().getUTCHours()
    if(currentDay === 0 || currentDay === 6 || currentTime >= 17 || currentTime < 9 ) {
        res.render('closed')
    } else {
        next()
    }
}

module.exports = timeChecker
