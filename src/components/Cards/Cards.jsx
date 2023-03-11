import Card from "../Card/Card";
import { CardContainer } from "./styledComponents";

export default function Cards({characters, onClose}) {//originalmente, reciba props, y definia characters = props
  //const onClose = () => window.alert("Emulamos que cierre la card");
  return (
    <CardContainer>
      {characters.map(({id, name, species, gender, image}) => {//donde se enumera el objeto, puede ir characters...
       
       return (//... llamar characters.name
          <Card
            id = {id}
            image = {image}
            name = {name}
            species = {species}
            gender = {gender}
            onClose = {onClose}
          />//si cierro con </Card>, no se por que no lo toma
        );
      })}
    </CardContainer>
  );
}
