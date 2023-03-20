import React from "react";

export const Navbar = () => {
  let logo =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <div>
      <nav className="bg-[#EF5350]">
        <img src={logo} alt="logo" className="w-32 mx-auto p-3" />
      </nav>
    </div>
  );
};
