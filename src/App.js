import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState } from "react";
import style from "./App.module.css";

function App() {
//   function onSearch(character) {
//     fetch(`https://rickandmortyapi.com/api/character/${character}`)
//        .then((response) => response.json())
//        .then((data) => {
//           if (data.name) {
//              setCharacters((oldChars) => [...oldChars, data]);
//           } else {
//              window.alert('No hay personajes con ese ID');
//           }
//        });
//  }
const onSearch = (id) => {
  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const KEY = "3a224f060c36.9173b04a183f5f2b6402"
  fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
  .then(response=>response.json())
  .then(data=>{
    if(data.name && !characters.find(char => char.id === data.id)){
      setCharacters((oldChars) => [...oldChars, data]);
      //setCharacters( [...characters, data]);
    } else {
      alert("Algo salio mal")
    }
  })
}

const onClose = (id) => {
  setCharacters(
    characters.filter((char) => char.id !== id))

};

  const [characters, setCharacters] = useState([]);
  return (
    <div className="App" style={{ padding: "25px" }}>
      <div className={style.nav}>
        <Nav onSearch={onSearch} />
      </div>
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
