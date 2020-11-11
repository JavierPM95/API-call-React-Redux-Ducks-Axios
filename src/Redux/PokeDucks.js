import axios from "axios";

// Constantes
const initialData = {
  array: [],
  offset: 0,
  sprite: []
};

// Types
const GET_POKEMON_OK = "GET_POKEMON_OK";
const GET_POKEMON_NEXT = "GET_POKEMON_NEXT";
const GET_POKEMON_PREVIOUS = "GET_POKEMON_PREVIOUS";
const GET_POKEMON_SPRITE = "GET_POKEMON_SPRITE";

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
    case GET_POKEMON_SPRITE:
      return {
        ...state,
        sprite: action.payload.sprite
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

export const getPokemonSprite = () => async (dispatch, getState) => {
    const pokeArray = getState().pokemon.array;
    const pokeUrl = pokeArray.map(
      (pokemon) => `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
    );
    console.log(pokeUrl);
  try {
    const res = {
      res0: await axios.get(pokeUrl[0]),
      res1: await axios.get(pokeUrl[1]),
/*      res2: await axios.get(pokeUrl[2]),
      res3: await axios.get(pokeUrl[3]),
      res4: await axios.get(pokeUrl[4]),
      res5: await axios.get(pokeUrl[5]),
      res6: await axios.get(pokeUrl[6]),
      res7: await axios.get(pokeUrl[7]),
      res8: await axios.get(pokeUrl[8]),
      res9: await axios.get(pokeUrl[9]),
      res10: await axios.get(pokeUrl[10]),
      res11: await axios.get(pokeUrl[11]),
      res12: await axios.get(pokeUrl[12]),
      res13: await axios.get(pokeUrl[13]),
      res14: await axios.get(pokeUrl[14]),
      res15: await axios.get(pokeUrl[15]),
      res16: await axios.get(pokeUrl[16]),
      res17: await axios.get(pokeUrl[17]),
      res18: await axios.get(pokeUrl[18]),
      res19: await axios.get(pokeUrl[19]),
      res20: await axios.get(pokeUrl[20]),*/
    };
    console.log(res);
    dispatch({
      type: GET_POKEMON_SPRITE,
      payload: {
        sprite: res
      },
    });
  } catch (error) {
    console.log(error);
  }
};
