import style from "./Card.module.css"

export default function Card({name, species, gender, image, onClose}) {//el objeto es props, pero lo desestructure
   return (
      <div className={style.container}>
         <button onClick={onClose} className ={style.closeButton} >X</button>   
         <img  src={image} alt=""/>
         <h2>Name: {name/*esto es el equivalente a props.name */} </h2>
         <h2>Species: {species} </h2>   
         <h2>Gender: {gender} </h2>
      </div>
   );
}
