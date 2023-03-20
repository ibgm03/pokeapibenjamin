import React, { useState } from "react";
import { searchPokemon } from "../api";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    console.log(data);
    setPokemon(data);
  };
  return (
    <div className="container mx-auto mt-2 ">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <input
            type="text"
            placeholder="Buscar Pokemon ..."
            className="bg-[#F0F1F5] font-semibold py-2 px-4 rounded-full w-[20rem]"
            onChange={onChange}
          />
        </div>
        <div className="col-span-3 ml-7">
          <button
            className="bg-[#007AFF] rounded-lg px-2 py-2 font-bold text-white"
            onClick={onClick}
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};
