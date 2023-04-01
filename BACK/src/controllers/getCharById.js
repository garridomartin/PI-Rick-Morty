const axios = require("axios");
const { KEY, URL_BASE } = process.env;

const getCharById = (req, res) => {
    //const params = req.params; lo desagrego
    const { id } = req.params;

    axios
    .get(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => {
        const { id, name, species, gender, image } = response.data;
        res.status(200).json({ id, name, species, gender, image });
    })
    .catch((error)=> {
        res.status(500).json({error: error.message})
    });
    };

module.exports = getCharById;