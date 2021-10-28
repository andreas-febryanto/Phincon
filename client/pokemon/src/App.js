import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./pages/home";
import detailPokemon from "./pages/DetailPokemon";
import myPokemons from "./pages/MyPokemons";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail-pokemon/:pokemonId" component={detailPokemon} />
        <Route path="/myPokemon" component={myPokemons} />
      </Switch>
    </div>
  );
}

export default App;
