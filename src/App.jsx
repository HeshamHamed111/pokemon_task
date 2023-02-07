import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import PokemonDetails from "./pages/PokemonDetails";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <Routes>
        <Route
          path="pokemon_task/"
          element={<Home searchInput={searchInput} />}
        ></Route>
        <Route
          path="pokemon_task/pokemon/:pokemonId"
          element={<PokemonDetails />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
