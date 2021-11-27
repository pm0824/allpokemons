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
    axios.get(currentUrl).then(res => {
      setLoading(false)
      setPokemons(res.data.results)
      setNextUrl(res.data.next)
      setPrevUrl(res.data.previous)
    })
    // eslint-disable-next-line 
  }, [currentUrl])

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
