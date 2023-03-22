import React from "react";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { Pokedex } from "./components/Pokedex";
import { useState, useEffect } from "react";
import { getPokemonData, getPokemons } from "./api";

export const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      //   console.log(data);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {}
  };

  // Use effect se utiliza para renderizar la primera vez que renderice

  useEffect(() => {
    fetchPokemons();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="App">
        <SearchBar />
        {loading ? (
          <div> cargando pokemones ... </div>
        ) : (
          <Pokedex pokemons={pokemons} />
        )}
      </div>
    </div>
  );
};
