
exports.post = (req, res, next) => {
    let name = req.body["name"]
    res.status(201).send(`The hero ${name} has been successfully added to the board!`)
}