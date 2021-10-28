import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { catchPokemon } from "../store/action";

export default function DetailCard(props) {
  const dispatch = useDispatch();
  const { id, name, img, types, moves } = props.data;
  const catchHandler = (id) => {
    const randomChance = Math.round(Math.random());
    if (!randomChance) {
      toast.error("Failed to catch pokemon", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let nickname = window.prompt("Input pokemon nickname");
      dispatch(catchPokemon(id, nickname));
    }
  };

  return (
    // <div className="p-4 xl:w-1/3 md:w-1/2">
    <div className="p-4 w-1/2">
      <div className="p-6 bg-blue-300 rounded-lg">
        <div className="relative">
          <img
            // className="object-cover object-top w-full mb-6 rounded lg:h-96 xl:h-96 md:h-96 sm:h-96 xs:h-96 h-96"
            className="object-cover object-top w-full mb-6 rounded"
            src={img}
            alt="image broken"
          />
        </div>

        <h3 className="text-xs font-medium tracking-widest text-indigo-500 title-font">
          <p className="text-base font-normal leading-relaxed text-gray-500">
            Types:
            {types.map((type, idx) => (
              <span key={idx}> #{type.type.name} </span>
            ))}
          </p>
        </h3>

        <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
          {name}
        </h2>
        <p className="text-base leading-relaxed">Move: {moves[0].move.name}</p>

        {/* Button */}
        <div className="my-4">
          <button
            className="px-4 py-2 mr-4 text-sm font-medium text-blue-400 transition border border-blue-400 rounded-md focus:outline-none focus:ring hover:text-white hover:bg-blue-400 active:bg-blue-700 focus:ring-blue-300"
            onClick={() => catchHandler(id)}
          >
            Catch Pokemon
          </button>
        </div>
      </div>
    </div>
  );
}
