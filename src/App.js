import React from "react";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { Pokedex } from "./components/Pokedex";
import { useState, useEffect } from "react";
import { getPokemonData, getPokemons } from "./api";
import Card from "./components/Card";

export const App = () => {
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      //   console.log(data);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (error) {}
  };

  const [pokemons, setPokemons] = useState([]);
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
        {/* <Card pokemon={pokemons} /> */}
      </div>
    </div>
  );
};
