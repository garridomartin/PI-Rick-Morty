require("dotenv").config();
const express = require("express")
const router = require("./routes")//levanta el index automaticamente
const morgan = require("morgan")

const PORT = process.env.PORT || 3001;//esto hace que desde mi compu, es 3001, pero si lo subo al server, el que se genere.

const server = express();
server.use(express.json());//!IMPORTANTE: convierte la info a objeto json, para que se pueda leer y trabajar.
server.use(morgan("dev"))

server.use("/", router); 


server.listen(PORT, () => {
    console.log(`Listenint on port ${PORT}`);
});

