import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { releaseMyPokemon, renameMyPokemon } from "../store/action";
import { loadingToggle } from "../store/action";

export default function Cards(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const detailHandler = (id) => {
    history.push(`/detail-pokemon/${id}`);
    dispatch(loadingToggle(true));
  };

  const releaseHandler = (id) => {
    dispatch(releaseMyPokemon(id));
  };

  const renameHandler = (id) => {
    dispatch(renameMyPokemon(id));
  };

  const { id, name, img } = props.data;
  return (
    <div className="p-4 xl:w-1/3 md:w-1/2">
      <div className="p-6 bg-green-900 rounded-lg">
        <div className="relative">
          <img
            className="object-cover object-top w-full mb-6 rounded lg:h-96 xl:h-96 md:h-96 sm:h-96 xs:h-96 h-96"
            src={img}
            alt="image broken"
          />
        </div>

        <h2 className="mb-4 text-lg font-medium text-gray-200 title-font">
          {name}
        </h2>
        {props.tipe === "pet" && (
          <h2 className="mb-4 text-lg font-medium text-gray-200 title-font">
            {props.data.nickname}
          </h2>
        )}

        {/* Button */}
        {props.tipe === "wild" && (
          <div className="my-4">
            <button
              className="px-4 py-2 mr-4 text-sm font-medium text-red-400 transition border border-red-400 rounded-md focus:outline-none focus:ring hover:text-white hover:bg-red-400 active:bg-red-700 focus:ring-red-300"
              onClick={() => detailHandler(id)}
            >
              Detail Page
            </button>
          </div>
        )}

        {/* Button */}
        {props.tipe === "pet" && (
          <div className="my-4">
            <button
              className="px-4 py-2 mr-4 text-sm font-medium text-blue-400 transition border border-blue-400 rounded-md focus:outline-none focus:ring hover:text-white hover:bg-blue-400 active:bg-blue-700 focus:ring-blue-300"
              onClick={() => releaseHandler(id)}
            >
              Release
            </button>

            <button
              className="px-4 py-2 mr-4 text-sm font-medium text-red-400 transition border border-red-400 rounded-md focus:outline-none focus:ring hover:text-white hover:bg-red-400 active:bg-red-700 focus:ring-red-300"
              onClick={() => renameHandler(id)}
            >
              Rename
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
