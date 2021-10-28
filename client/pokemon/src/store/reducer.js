import {
  LOADING_TOGGLE,
  ADD_POKEMONS,
  ADD_DETAIL_POKEMON,
  ADD_MY_POKEMONS,
  ADD_MY_DETAIL_POKEMON,
  RELEASE_MY_POKEMON,
  RENAME_MY_POKEMON,
} from "./actionType";

const initialState = {
  isLoading: true,
  pokemons: [],
  detailPokemon: {},
  myPokemons: [],
  detailMyPokemon: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_TOGGLE:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ADD_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case ADD_DETAIL_POKEMON:
      return {
        ...state,
        detailPokemon: action.payload,
      };
    case ADD_MY_POKEMONS:
      return {
        ...state,
        myPokemons: action.payload,
      };
    case ADD_DETAIL_POKEMON:
      return {
        ...state,
        detailMyPokemon: action.payload,
      };
    default:
      return state;
  }
}
