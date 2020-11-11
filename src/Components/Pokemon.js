import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react/cjs/react.development";
import {
  getPokemonAction,
  getPokemonNext,
  getPokemonPrevious,
  getPokemonSprite
} from "../Redux/PokeDucks";

const Pokemon = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((store) => store.pokemon.array);
  const offset = useSelector((store) => store.pokemon.offset);
  const sprite = useSelector((store) => store.pokemon.sprite);

  const [getPokemonClicked, setGetPokemonClicked] = useState(false);

  //dispatch(getPokemonSprite());

  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-md-6">
          <h1>
            Pokémon
            <span role="img" arial-label="get">
              ✨
            </span>
          </h1>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <button
            className="btn btn-success mx-1"
            onClick={() => {
              dispatch(getPokemonAction());
              setGetPokemonClicked(true);
            }}
          >
            Get Pokemon
          </button>
          <button onClick={() => dispatch(getPokemonSprite())}>
            Ramdon
          </button>
        </div>
      </div>
      <div>
        <ul>
          {pokemon.map((singlePokemon) => (
            <li key={singlePokemon.name}>{singlePokemon.name}</li>
          ))}
        </ul>
      </div>
      <div className="row">
      {
          pokemon.map(singlePokemon => (
            <div className="card sprite" key={singlePokemon.name}>
              <img className="card-img-top" src={sprite} alt="sprite"/>
              <div className="card-body">
              <h5 className="card-title text-center">{singlePokemon.name}</h5>
              </div>
            </div>
          ))
        }
      </div>
      {getPokemonClicked ? (
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
      ) : (
        <></>
      )}
    </div>
  );
};

export default Pokemon;
