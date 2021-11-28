import React from 'react'
import './style.scss'
import Card from '../layout/Card'

const Pokemon = ({ pokemons }) => {
    return (
        <div className='container'>
            {pokemons.map(p => (
                <Card className='grid-item' key={p.id} pokemon={p} />
            ))}
        </div>
    )
}

export default Pokemon
