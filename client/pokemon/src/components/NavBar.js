import React from "react";
import { useHistory, Link } from "react-router-dom";

export default function NavBar() {
  const history = useHistory();

  return (
    <nav className="relative flex items-center justify-between w-full h-20 px-8 mx-auto bg-gray-300 rounded-md">
      <div className="inline-flex">
        <Link to="/">Logo</Link>
      </div>

      <div className="justify-start flex-grow-0 flex-shrink hidden px-2 sm:block">
        <button
          className="px-4 py-2 mr-4 text-sm font-medium text-green-400 transition border border-green-400 rounded-md focus:outline-none focus:ring hover:text-white hover:bg-green-400 active:bg-green-700 focus:ring-green-300"
          onClick={() => history.push("/")}
        >
          All Pokemon
        </button>

        <button
          className="px-4 py-2 mr-4 text-sm font-medium text-green-400 transition border border-green-400 rounded-md focus:outline-none focus:ring hover:text-white hover:bg-green-400 active:bg-green-700 focus:ring-green-300"
          onClick={() => history.push("/myPokemon")}
        >
          My Pokemon
        </button>
      </div>
    </nav>
  );
}
