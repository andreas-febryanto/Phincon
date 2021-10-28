import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";
import DetailCard from "../components/DetailCard";
import { fetchDetailPokemon } from "../store/action";

export default function DetailPokemon() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.detailPokemon);
  const isLoading = useSelector((state) => state.isLoading);
  const { pokemonId } = useParams();

  useEffect(() => {
    dispatch(fetchDetailPokemon(pokemonId));
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
                Detail Pokemon
              </h1>
              <div className="w-20 h-1 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <DetailCard data={pokemon} tipe="wild" />
          </div>
        </div>
      </section>
    </div>
  );
}
