import axios from "../apis/axios";
import { toast } from "react-toastify";
import {
  LOADING_TOGGLE,
  ADD_POKEMONS,
  ADD_DETAIL_POKEMON,
  ADD_MY_POKEMONS,
  ADD_MY_DETAIL_POKEMON,
  RELEASE_MY_POKEMON,
  RENAME_MY_POKEMON,
} from "./actionType";

export function loadingToggle(payload) {
  return {
    type: LOADING_TOGGLE,
    payload: payload,
  };
}

export function addPokemons(payload) {
  return {
    type: ADD_POKEMONS,
    payload: payload,
  };
}

export function addDetailPokemon(payload) {
  return {
    type: ADD_DETAIL_POKEMON,
    payload: payload,
  };
}

export function addMyPokemons(payload) {
  return {
    type: ADD_MY_POKEMONS,
    payload: payload,
  };
}

export function addMyDetailPokemon(payload) {
  return {
    type: ADD_MY_DETAIL_POKEMON,
    payload: payload,
  };
}

export function releasePokemon(payload) {
  return {
    type: RELEASE_MY_POKEMON,
    payload: payload,
  };
}

export function renamePokemon(payload) {
  return {
    type: RENAME_MY_POKEMON,
    payload: payload,
  };
}

export function fetchPokemons() {
  return async function (dispatch, getState) {
    try {
      dispatch(loadingToggle(true));
      const { data } = await axios.get("/pokemon");
      dispatch(addPokemons(data));
      dispatch(loadingToggle(false));
    } catch (err) {
      console.log(err);
    }
  };
}

export function fetchDetailPokemon(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(loadingToggle(true));
      const { data } = await axios.get(`/pokemon/${id}`);
      dispatch(addDetailPokemon(data));
      dispatch(loadingToggle(false));
    } catch (err) {
      console.log(err);
    }
  };
}

export function fetchMyPokemons() {
  return async function (dispatch, getState) {
    try {
      dispatch(loadingToggle(true));
      const { data } = await axios.get("/myPokemon");
      dispatch(addMyPokemons(data));
      dispatch(loadingToggle(false));
    } catch (err) {
      console.log(err);
    }
  };
}

export function catchPokemon(id, name) {
  return async function (dispatch, getState) {
    try {
      dispatch(loadingToggle(true));
      await axios({
        method: "POST",
        url: `/pokemon/${id}`,
        data: {
          nickname: name,
        },
      });
      dispatch(loadingToggle(false));
      toast.success("Success to catch pokemon", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error("Error Happen", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
}

export function releaseMyPokemon(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(loadingToggle(true));
      await axios({
        method: "POST",
        url: `/myPokemon/${id}`,
      });
      dispatch(fetchMyPokemons());
      dispatch(loadingToggle(false));
      toast.success("Success to release pokemon", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      dispatch(loadingToggle(false));
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
}

export function renameMyPokemon(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(loadingToggle(true));
      await axios({
        method: "PATCH",
        url: `/myPokemon/${id}`,
      });
      dispatch(fetchMyPokemons());
      dispatch(loadingToggle(false));
      toast.success("Success to rename pokemon", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      dispatch(loadingToggle(false));
      toast.error("failed to rename pokemon", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
}
