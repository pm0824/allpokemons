import React from 'react'
import './style.scss'

const Card = ({ pokemon }) => {

    const { name, weight, height } = pokemon

    return (
        <div className='card'>
            <div className='card__img'>
                <img src={pokemon.sprites.front_default} alt='' />
            </div>
            <div className='card__title'>
                <h3>{name}</h3>
            </div>
            <div className='card__types'>
                {pokemon.types.map(type => {
                    return <div className='card__types_type' key={type.type.name}>{type.type.name}</div>
                })}
            </div>
            <ul className='card__info'>
                <li className='card__info_item'>Height - {height}</li>
                <li className='card__info_item'>Weight - {weight}</li>
            </ul>
        </div>
    )
}


export default Card
