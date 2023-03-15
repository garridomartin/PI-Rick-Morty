import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        <div>
            { character.name? (
            <>
            <h2>{character.name}</h2>
                <p>{character.status}</p>
                <p>{character.specie}</p>
                <p>{character.gender}</p>
                <p>{character.origin?.name/*el ? es para que react espere la peticion */}</p>
                <img src={character.image} alt = "img" />
                </>) : (
                    <h3>LOADING...</h3>
                )}
            </div>
    )
};

export default Detail;



