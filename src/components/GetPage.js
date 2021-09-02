
import React from 'react'

// Crida a la API afegint Num Pag
// Modificat al Nivell 1 Exercici 3

async function GetPage(PageNum) {
    const urlPage = new URL(`https://swapi.dev/api/starships/?page=${PageNum}`)
    const shipsFetch = await fetch(urlPage);
    const shipsJson = await shipsFetch.json();
    const shipsArray = shipsJson.results
    return (shipsArray);
}

export default GetPage