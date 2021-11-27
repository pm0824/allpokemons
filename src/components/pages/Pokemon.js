import React from 'react'
import './style.scss'

const Pokemon = ({ pokemons }) => {
    return (
        <div className='container'>
            {pokemons.map(p => (
                <div key={p.name}>{p.name}</div>
            ))}
        </div>
    )
}

export default Pokemon
