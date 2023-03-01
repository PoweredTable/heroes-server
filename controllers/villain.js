const villains = require('./../models/villain')

exports.post_villain = (req, res, next) => {
    let obj = req.body
    if (obj.constructor == Object 
        && "name" in obj && "id" in obj && "power" in obj){
            let name = req.body["name"]
            villains.push(obj)
            res.status(201).send(`The villain ${name} has been successfully added to the board!`)

    } else {
        res.status(502).send("Bad Gateway")
    }
}