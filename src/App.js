import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters from "./data.js"; /*se eporta via "export", ergo, arma un objeto *//*, {
  Rick} /*rick se exporto aparte, export default */ 
 

function App() {
  return (
    <div className="App" style={{padding: "25px"}}>
      <div className={style.nav}>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>  
  
      <div>
        <Cards characters={characters} />
      </div>

    </div>
  );
}

export default App;
