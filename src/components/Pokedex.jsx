import React from "react";
import { Pagination } from "./Pagination";

export const Pokedex = (props) => {
  const { pokemons, page, setPage, total } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <div className="font-semibold text-3xl">Pokédex</div>
        </div>
        <div className="col-span-4">
          <div>
            <Pagination
              page={page + 1}
              totalPages={total}
              onLeftClick={lastPage}
              onRightClick={nextPage}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-auto text-center mt-5">
        {pokemons.map((pokemon, idx) => {
          return (
            <div className="shadow-lg p-5">
              <div key={pokemon.name}>
                <div className="">
                  <img
                    src={pokemon.sprites.front_default}
                    alt=""
                    className="mx-auto w-24"
                  />
                </div>
                <div className="font-medium text-center">
                  <div className="font-bold text-xl"> {pokemon.name}</div>
                  <div className="grid grid-cols-2 mt-3">
                    {pokemon.types.map((type, idx) => {
                      return <div key={idx}>{type.type.name}</div>;
                    })}
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
