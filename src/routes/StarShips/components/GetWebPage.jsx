
import React from 'react'

// Crida a la API afegint Num Pag
// Modificat al Nivell 1 Exercici 3

async function GetWebPage(urlPage) {
    const webFetch = await fetch(urlPage);
    const webJson = await webFetch.json();
    return (webJson.results);
}

export default GetWebPage