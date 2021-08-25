
import React, { Component, useEffect, useState } from 'react'

export async function GetData() {
    const shipsFetch = await fetch('https://swapi.dev/api/starships/');
    const shipsJson = await shipsFetch.json();
    const shipsArray = shipsJson.results
    return (shipsArray);
}

// Retorna llistat de naus: nom i model
export function StarShips() {
    // Definim l' estat de les naus
    const [totesNaus, setTotesNaus] = useState([])

    // Obtenim el llistat de Naus i l' assignem a l' estat
    useEffect(() => {
        (async () => {
            const data = await GetData()
            setTotesNaus(data)
        }
        )
            ()
    }, []);

    // Retorna nom - model
    function nomModel(nau) {
        return [nau.name, nau.model].join(" / ");
    }

    // Render del nom i model de les naus
    return (
        <div className="App">
            <header className="App-header">
                <h2>Star Wars</h2>
                <ol>
                    <div>
                        {totesNaus.map(i => (
                            <li style={{ textAlign: "left" }} >{nomModel(i)}}</li>)
                        )}
                    </div>
                </ol>
            </header>
        </div>
    );
}

// export default StarShips;