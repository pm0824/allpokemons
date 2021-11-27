import React, { Fragment } from "react";
import './App.scss'

import Header from "./components/layout/Header";
import Pokemon from "./components/pages/Pokemon";

function App() {

  return (
    <Fragment>
      <Header />
      <Pokemon />
    </Fragment>
  );
}

export default App;
