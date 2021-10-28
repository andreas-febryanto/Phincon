import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../components/Card";
import { fetchMyPokemons } from "../store/action";

export default function MyPokemons() {
  const dispatch = useDispatch();
  const myPokemons = useSelector((state) => state.myPokemons);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchMyPokemons());
  }, []);

  if (isLoading) {
    return (
      <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_YMim6w.json"
        className="w-2/3 mx-auto h-2/3"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
    );
  }

  return (
    <div>
      {/* Pokemon */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto max-w-7x1">
          <div className="flex flex-wrap w-full p-4 mb-4">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="mb-2 text-5xl font-bold text-gray-900 sm:text-4xl title-font">
                All My Pokemon
              </h1>
              <div className="w-20 h-1 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {myPokemons.map((pokemon) => (
              <Cards key={pokemon.id} data={pokemon} tipe="pet" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
