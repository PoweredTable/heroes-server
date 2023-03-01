const heroes = require('./../models/hero')
const villains = require('./../models/villain')


exports.battle = (req, res, next) => {
    let obj = req.body

    if (obj.constructor == Object 
        && "hero_id" in obj && "villain_id" in obj){

            const hero_id = obj["hero_id"]; 
            const villain_id = obj["villain_id"];

            const hero = heroes.find(i => i.id == hero_id)
            const villain = villains.find(i => i.id == villain_id)

            if (hero["power"] > villain["power"]){
                res.status(200).send(`The hero ${hero["name"]} won the battle against ${villain["name"]}!`)

            } else if (villain["power"] > hero["power"]){
                res.status(200).send(`The villain ${villain["name"]} won the battle against ${hero["name"]}!`)

            } else {
                res.status(200).send(`A draw between the hero ${hero["name"]} and the villain ${villain["name"]}`)

            }

    } else {
        res.status(502).send("Bad Gateway")
    }
}