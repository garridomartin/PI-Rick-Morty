import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState } from "react";
import style from "./App.module.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Forms from "./components/Forms/Forms.jsx";
import { useEffect } from "react";




function App() {
  //! HOOKS
  const [characters, setCharacters] = useState([]);
  //const location = useLocation();//---> lo remplazo por pathname
  //console.log (location) //con  esto, veo un objeto con la propiedaad "pathname" que me indica a donde estoy
  const location = useLocation();
  const [access, setAcces] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  /*ESTO ME DICE QUE SI EL ACCES ES FALSO, ENTONCES ME MANDA AL LOG IN */

  //!CREDENCIALES  DE PRUEBA PARA LOG IN
  const username = 'martin.garrido@gmail.com' ;
  const password = 'martin1' ;

//! EVENT HANDLERS
  const onSearch = (id) => {
     //const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const URL_BASE = "http://localhost:3001/rickandmorty";
     //const KEY = "3a224f060c36.9173b04a183f5f2b6402";

     if (characters.find((char) => char.id == id)) {
  //     //lo saque afuera del fetch, asi trabaja mas rapido
      alert("PERSONAJE REPETIDO");
      return;
     }
     //fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
     fetch(`${URL_BASE}/onsearch/character/${id}`)
       .then((response) => response.json())
       .then((data) => {
         if(data.error) {
          console.log(data);
          alert("Personaje no encontrado en la base de datos");         
        } else {
           setCharacters((oldChars) => [...oldChars, data]);
           //setCharacters( [...characters, data]);
         }               
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        alert("Personaje no encontrado");
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };
  
const login = (userData) => {
  if(userData.username === username && userData.password === password) {
    setAcces(true);
    navigate("/home")
  } else {
    alert("CREDENCIALES INCORRECTAS")
  }

}
  
  //! RENDER!!!

  return (
    <div>
      <div className="App" style={{ padding: "20px" }}>
        <div className={style.nav}>
          {location.pathname !== "/" && <Nav onSearch={onSearch} />/*si no se cumple esa url... */}
        </div>
      </div>
      <Routes>
        <Route path= "/" 
        element={<Forms login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />
        {<Route path="/detail/:detailId" element = {<Detail />} />}
      </Routes>
      
    </div>
  );
}

export default App;
