import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react/cjs/react.development";
import {
  getPokemonNext,
  getPokemonPrevious,
  getPokedexId,
} from "../Redux/PokeDucks";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const pokemon = useSelector((store) => store.pokemon.array);
  const dispatch = useDispatch();
  const offset = useSelector((store) => store.pokemon.offset);
  const pokedexId = useSelector((store) => store.pokemon.pokedexId);
  

  useEffect(() => {
    dispatch(getPokedexId());
  }, [offset, dispatch]);
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-6">
          <h1>
            Pokémon Index
            <span role="img" arial-label="get">
              ✨
            </span>
          </h1>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
        {offset >= 20 ? (
          <button
            className="btn btn-primary mx-2"
            onClick={() => dispatch(getPokemonPrevious())}
          >
            Previous
          </button>
        ) : (
          <></>
        )}
        {offset <= 893 ? (
          <button
            className="btn btn-primary mx-2"
            onClick={() => dispatch(getPokemonNext())}
          >
            Next
          </button>
        ) : (
          <></>
        )}
        </div>
      </div>
      <div className="row my-4">
        <PokemonCard pokedexId={pokedexId[0]} pokemon={pokemon[0].name} />
        <PokemonCard pokedexId={pokedexId[1]} pokemon={pokemon[1].name} />
        <PokemonCard pokedexId={pokedexId[2]} pokemon={pokemon[2].name} />
        <PokemonCard pokedexId={pokedexId[3]} pokemon={pokemon[3].name} />
        <PokemonCard pokedexId={pokedexId[4]} pokemon={pokemon[4].name} />
        <PokemonCard pokedexId={pokedexId[5]} pokemon={pokemon[5].name} />
        <PokemonCard pokedexId={pokedexId[6]} pokemon={pokemon[6].name} />
        <PokemonCard pokedexId={pokedexId[7]} pokemon={pokemon[7].name} />
        <PokemonCard pokedexId={pokedexId[8]} pokemon={pokemon[8].name} />
        <PokemonCard pokedexId={pokedexId[9]} pokemon={pokemon[9].name} />
        <PokemonCard pokedexId={pokedexId[10]} pokemon={pokemon[10].name} />
        <PokemonCard pokedexId={pokedexId[11]} pokemon={pokemon[11].name} />
        <PokemonCard pokedexId={pokedexId[12]} pokemon={pokemon[12].name} />
        <PokemonCard pokedexId={pokedexId[13]} pokemon={pokemon[13].name} />
        <PokemonCard pokedexId={pokedexId[14]} pokemon={pokemon[14].name} />
        <PokemonCard pokedexId={pokedexId[15]} pokemon={pokemon[15].name} />
        <PokemonCard pokedexId={pokedexId[16]} pokemon={pokemon[16].name} />
        <PokemonCard pokedexId={pokedexId[17]} pokemon={pokemon[17].name} />
        <PokemonCard pokedexId={pokedexId[18]} pokemon={pokemon[18].name} />
        <PokemonCard pokedexId={pokedexId[19]} pokemon={pokemon[19].name} />
      </div>
      <div className="d-flex justify-content-center">
        {offset >= 20 ? (
          <button
            className="btn btn-primary mx-2"
            onClick={() => dispatch(getPokemonPrevious())}
          >
            Previous
          </button>
        ) : (
          <></>
        )}
        {offset <= 893 ? (
          <button
            className="btn btn-primary mx-2"
            onClick={() => dispatch(getPokemonNext())}
          >
            Next
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
