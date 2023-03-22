import React from "react";

const Card = (props) => {
  const { pokemon } = props;
  console.log(pokemon);
  return (
    <div className="bg-slate-100 border-slate-900">
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>

      <div>
        <div>{pokemon.name}</div>
        <div>{pokemon.id}</div>
        <div>
          {pokemon.types.map((type, idx) => {
            return <div key={idx}>{type.name}</div>;
          })}
        </div>
      </div>
      <div></div>

      {/* <div className="grid grid-cols-12">
        <div className="col-span-4">
          {<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
        </div>
        <div className="col-span-8">
          <div>{pokemon.name}</div>
          <div>
            <div>fuego</div>
            <div>agua</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
