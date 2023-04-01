import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css"

const Detail = () => {
    //const params = useParams(); el id esta en detailId. entonces reemplazo
    const {detailId} = useParams();

    const [character, setCharacter] = useState({});//creo el estado armando el distractory []
    
    useEffect(()=>{  //el hook useEffect siempre tendra una cb (Cdo el componente se monta) y un array. Cuando el componente se monta
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "3a224f060c36.9173b04a183f5f2b6402";
        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`)
        .then((response)=> setCharacter(response.data));//axios me da "response" y hago setCharacet deresponse.data
        
    },[]);
    
    return (
        <div className={style.container}>      
            { character.name? (
            <>
            <h2>{character.name}</h2>
                <p>Status: {character.status}<br></br>
                <br></br>Species: {character.species}<br></br>
                <br></br>Gender: {character.gender}<br></br>
                <br></br>Location: {character.location?.name}<br></br>
                <br></br>Origin: {character.origin?.name/*el ? es para que react espere la peticion */}<br></br>
                </p>           
                <img src={character.image} alt = "img" />
                </>) : (
                    <h3>LOADING...</h3>
                )}
            </div>
    )
};

export default Detail;



