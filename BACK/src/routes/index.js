const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDeail");
let favs = require("../utils/favs")

const router = Router();

router.get("/onsearch/:id", getCharById)//la callback (en verde) es el handler o controller, que maneja la logica de la ruta con los req y res

router.get("/detail/:id", getCharDetail)
//extraigo la informacion que me llega por params, puedo llamar a un servicio externo (debe ser a traves de otra funcion), guardar info en la base de datos

router.post("/rickandmorty/fav", (req, res) => {
    console.log(req.body)
    favs.push(req.body);
    res.status(200).json({ status: "OK"});
})

router.get("/rickandmorty/fav", (req, res) => {
    res.status(200).json(favs);
})

router.delete("/rickandmorty/fav/:id", (req, res) => {
    const { id } = req.params;
    favs = favs.filter(char => char.id != id);
    res.status(200).json({ status: "OK" })
})

module.exports = router;