import React from "react";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { Pokedex } from "./components/Pokedex";
import { useState, useEffect } from "react";
import { getPokemons } from "./api";

export const App = () => {
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      //   console.log(data);
      setPokemones(data.results);
    } catch (error) {}
  };

  const [pokemons, setPokemones] = useState([]);
  // Use effect se utiliza para renderizar la primera vez que renderice
  useEffect(() => {
    fetchPokemons();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="App">
        <SearchBar />
        <Pokedex pokemons={pokemons} />
      </div>
    </div>
  );
};
