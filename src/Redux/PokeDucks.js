import axios from "axios";

// Constantes
const initialData = {
  array: [
  {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"},
  {name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/"},
  {name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/"},
  {name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/"},
  {name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/"},
  {name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/"},
  {name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/"},
  {name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/"},
  {name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/"},
  {name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/"},
   {name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/"},
   {name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/"},
   {name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/"},
   {name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/"},
   {name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/"},
   {name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/"},
   {name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/"},
   {name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon/18/"},
   {name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/19/"},
   {name: "raticate", url: "https://pokeapi.co/api/v2/pokemon/20/"}
  ],
  offset: 0,
  pokedexId: []
};

// Types
const GET_POKEMON_OK = "GET_POKEMON_OK";
const GET_POKEMON_NEXT = "GET_POKEMON_NEXT";
const GET_POKEMON_PREVIOUS = "GET_POKEMON_PREVIOUS";
const GET_POKEDEX_ID = "GET_POKEDEX_ID";

// Reducer
export default function pokeReducer(state = initialData, action) {
  switch (action.type) {
    case GET_POKEMON_OK:
      return { ...state, array: action.payload };
    case GET_POKEMON_NEXT:
      return {
        ...state,
        array: action.payload.array,
        offset: action.payload.offset,
      };
    case GET_POKEMON_PREVIOUS:
      return {
        ...state,
        array: action.payload.array,
        offset: action.payload.offset,
      };
    case GET_POKEDEX_ID:
      return {
        ...state,
        pokedexId: action.payload.pokedexId
      };
    default:
      return state;
  }
}

// Acciones

export const getPokemonAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );
    dispatch({
      type: GET_POKEMON_OK,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonNext = () => async (dispatch, getState) => {
  const offset = getState().pokemon.offset;
  const next = offset + 20;

  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${next}&limit=20`
    );
    dispatch({
      type: GET_POKEMON_NEXT,
      payload: {
        array: res.data.results,
        offset: next,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonPrevious = () => async (dispatch, getState) => {
  const offset = getState().pokemon.offset;
  const previous = offset - 20;

  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${previous}&limit=20`
    );
    dispatch({
      type: GET_POKEMON_PREVIOUS,
      payload: {
        array: res.data.results,
        offset: previous,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPokedexId = () => async (dispatch, getState) => {
    const pokemonUrl = getState().pokemon.array.map(pokemon => pokemon.url)
    const pokemonSplit = pokemonUrl.map(p => (p.split("/")))
    const pokedexId = pokemonSplit.map(p => (p[6]))
  try {
    
    dispatch({
      type: GET_POKEDEX_ID,
      payload: {
        pokedexId: pokedexId
      },
    });
  } catch (error) {
    console.log(error);
  }
};
