import React, { useState, useEffect } from 'react';
import './App.css';
import PokeCard from "./components/pokeCard/PokeCard";
import axios from 'axios';


function App() {

    return (
    <>
        <div>
            <PokeCard />
        </div>
    </>

  );
}

export default App;