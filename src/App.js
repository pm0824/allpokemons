import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import './App.scss'

import Header from "./components/layout/Header";
import Pokemon from "./components/pages/Pokemon";
import Pagination from "./components/layout/Pagination";

function App() {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()
  const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPokemons = async () => {
      await axios.get(currentUrl).then(res => {
        setLoading(false)
        setNextUrl(res.data.next)
        setPrevUrl(res.data.previous)
        getPokemonsData(res.data.results)
      })
    }
    return fetchPokemons()
    // eslint-disable-next-line 
  }, [currentUrl])

  const getPokemonsData = async (pokemonsList) => {
    const pokemonsData = await Promise.all(pokemonsList.map(async pokemon => {
      const pokemonRecord = await new Promise((resolve, reject) => {
        fetch(pokemon.url).then(res => res.json()).then(data => {
          resolve(data);
        })
      })
      return pokemonRecord
    }))
    setPokemons(pokemonsData)
  }

  function gotoNextPage() {
    setCurrentUrl(nextUrl)
  }
  function gotoPrevPage() {
    setCurrentUrl(prevUrl)
  }

  return (
    <Fragment>
      <Header />
      {loading ? (<h3>Loading...</h3>) : (
        <>
          <Pokemon pokemons={pokemons} />
          <Pagination gotoNextPage={nextUrl ? gotoNextPage : null}
            gotoPrevPage={prevUrl ? gotoPrevPage : null}
          />
        </>
      )}
    </Fragment>
  );
}

export default App;
