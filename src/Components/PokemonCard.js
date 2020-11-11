import React from 'react'

const PokemonCard = (props) => {
    return (
        <>
            <div className="card sprite">
              <div className="card-header">
                <h5>{props.pokedexId}</h5>
              </div>
              <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokedexId}.png`} alt="sprite"/>
              <div className="card-body">
                <h5 className="card-title text-center">{props.pokemon}</h5>
              </div>
            </div>
        </>
    )
};

export default PokemonCard;