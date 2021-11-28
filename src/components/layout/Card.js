import React from 'react'
import './style.scss'

const Card = ({ pokemon }) => {

    const { name } = pokemon

    return (
        <div className='card'>
            <div className='card__img'>
                <img src={pokemon.sprites.front_default} alt='' />
            </div>
            <div className='card__info'>
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default Card
