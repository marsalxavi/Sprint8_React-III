
import React, { Component, useEffect, useState } from 'react'

// Modificat al Nivell 1 Exercici 3
// Crida a la API afegint Num Pag
async function GetPage(PageNum) {
    const urlPage = new URL(`https://swapi.dev/api/starships/?page=${PageNum}`)
    const shipsFetch = await fetch(urlPage);
    const shipsJson = await shipsFetch.json();
    const shipsArray = shipsJson.results
    return (shipsArray);
}

// ============ Retorna llistat de naus: nom i model ============
export function StarShips() {
    // Definim l' estat de les naus
    const [PaginaNaus, setPaginaNaus] = useState([]) // Canvi Tots x Pag al N01Ex03
    //Definim estil de linia (Afegit al Nivell 1 Exercici 2
    var liniaEsquerra = { textAlign: 'Left' }

    // Totes les naus
    // Retorna nom - model
    const NomImodel = (aryUnaNau) => ([aryUnaNau.name, aryUnaNau.model].join(" / "))

    // Llista totes les naus per pantalla
    function PrintPaginaNaus() {
        return (
            PaginaNaus.map((aryUnaNau, index) =>
            (<div key={index} style={liniaEsquerra}>
                {/* Modificat al N01Ex02 */}
                <li onClick={() => GetUnaNau(aryUnaNau)} > {NomImodel(aryUnaNau)}</li>
            </div>)
            )
        )
    }


    // ========= Afegit al Nivell 1 Exercici 2 =========
    const [unaNau, setUnaNau] = useState([])

    // Obte una nau per l index
    const GetUnaNau = (aryUnaNau) => setUnaNau(aryUnaNau)

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


    // ========= Afegit al Nivell 1 Exercici 3 =========
    // Control del numero de pagina
    const [PageNum, setPageNum] = useState(2)
    // Pagina amunt i avall
    const LastPage = () => setPageNum(PageNum - 1)
    const NextPage = () => setPageNum(PageNum + 1)

    // =vvv Canvi Tots x Pag al N01Ex03 vvv=
    // Obtenim la Pagina de Naus i l' assignem a l' estat (componentDidMount)
    useEffect(() => {
        (async () => {
            const data = await GetPage(PageNum)
            setPaginaNaus(data)
        })
            ()
    }, [PageNum]);

    // === Render del nom i model de les naus
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h2>Star Wars (N01 Ex02) </h2>
                </div>
                <ol>
                    <PrintPaginaNaus />
                </ol>
                <tr>
                    <td><button onClick={LastPage}>{'<< Last Page'}</button></td>
                    <td>Page Num: {PageNum}</td>
                    <td><button onClick={NextPage}>{'Next Page >>'}</button></td>
                </tr>
                {<h6>(Clik on StartShip to see details)</h6>}
                <div>
                    <h3>StarShip Datasheet</h3>
                    <ul><FitxaUnaNau /></ul>
                </div>
            </header>
        </div>
    )
}
// =^^^ Canvi Tots x Pag al N01Ex03 ^^^=

// export default StarShips