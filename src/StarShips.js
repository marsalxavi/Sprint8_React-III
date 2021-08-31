
import React, { Component, useEffect, useState } from 'react'

// Crida a la API
async function GetData() {
    const shipsFetch = await fetch('https://swapi.dev/api/starships/');
    const shipsJson = await shipsFetch.json();
    const shipsArray = shipsJson.results
    return (shipsArray);
}

// Retorna llistat de naus: nom i model
export function StarShips() {
    // Definim l' estat de les naus
    const [totesNaus, setTotesNaus] = useState([])
    const [unaNau, setUnaNau] = useState([])

    // Obtenim el llistat de Naus i l' assignem a l' estat (componentDidMount)
    useEffect(() => {
        (async () => {
            const data = await GetData()
            setTotesNaus(data)
        }
        )
            ()
    }, []);

    //Definim estil de linia
    var liniaEsquerra = { textAlign: 'Left' }

    // Totes les naus
    // Retorna nom - model
    const NomImodel = (aryUnaNau) => ([aryUnaNau.name, aryUnaNau.model].join(" / "))

    // Obte una nau per l index
    const GetUnaNau = (aryUnaNau) => setUnaNau(aryUnaNau)

    // Llista totes les naus per pantalla
    function PrintTotesNaus() {
        return (
            totesNaus.map((aryUnaNau, index) =>
            (<div key={index} style={liniaEsquerra}>
                <li onClick={() => GetUnaNau(aryUnaNau)} > {NomImodel(aryUnaNau)}</li>
            </div>)
            )
        )
    }

    // Llista una Nau per pantalla
    function FitxaUnaNau() {
        return (
            Object.keys(unaNau).map((obj, idx) => {
                return (
                    <div key={idx} style={liniaEsquerra}>
                        {idx + 1} - {Object.keys(unaNau)[idx]}: {Object.values(unaNau)[idx]}
                    </div>
                )
            })
        )
    }

    // === Render del nom i model de les naus
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h2>Star Wars (N01 Ex02) </h2>
                </div>
                <ol>
                    <PrintTotesNaus />
                </ol>
                {<h6>(Clik on StartShip to see details)</h6>}
                <div>
                    <h3>StarShip Datasheet</h3>
                    <ul><FitxaUnaNau /></ul>
                </div>
            </header>
        </div>
    );
}

// export default StarShips