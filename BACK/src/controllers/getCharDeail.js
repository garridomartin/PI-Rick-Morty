const axios = require("axios");
const { KEY, URL_BASE } = process.env;

const getCharDetail = (req, res) => {
    //const params = req.params; lo desagrego
    const { id } = req.params;

    axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => {
        const { id, name, species, gender, origin, image } = response.data;
        res.status(200).json({ id, name, species, gender, origin, image });
    }).catch((error)=> {
        res.status(500).json({error: error.message})
    });
    };



module.exports = getCharDetail;