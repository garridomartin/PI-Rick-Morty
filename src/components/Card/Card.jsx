import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({ id, name, species, gender, image, onClose }) {
  //el objeto es props, pero lo desestructure
  return (
    <div className={style.container}>
      <div>
      <button onClick={() => onClose(id)} className={style.closeButton}>
        X
      </button>
      </div>
      <img src={image} alt="" />
      <Link
        to={`/detail/${id}` /*esto es navegcion, no es carpeta de archivo*/}
      >
        <h2>Name: {name /*esto es el equivalente a props.name */} </h2>
      </Link>
      <h2>Species: {species} </h2>
      <h2>Gender: {gender} </h2>
    </div>
  );
}
