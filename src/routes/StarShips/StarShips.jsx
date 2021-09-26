
import React, { useEffect, useState } from 'react'

// Components
import GetWebPage from './components/GetWebPage.jsx'; //Carrega una pagina de la API
import Capsalera from './components/Capsalera.jsx'; // Capçalera de la pagina web
import CosPagNaus from './components/CosPagNaus.jsx'; // Cos de la Pag de Naus
import CosUnaNau from './components/CosUnaNau.jsx'; // Cos d' una Nau
import Peu from './components/Peu.jsx'; // Peu de la Pag web

// ============ Retorna llistat de naus: nom i model ============
export function StarShips() {
    // Definim l' estat de les naus de la Pagina
    const [PaginaNaus, setPaginaNaus] = useState([]) // Canvi Tots x Pag al N01Ex03

    // ========= Afegit al Nivell 1 Exercici 2 =========
    // Definim l' estat de la Nau Seleccionada
    const [unaNau, setUnaNau] = useState([])

    // ========= Afegit al Nivell 1 Exercici 3 =========
    // Control del numero de pagina
    const [PageNum, setPageNum] = useState(1)

    // =vvv Canvi Tots x Pag al N01Ex03 vvv=
    // Obtenim la Pagina de Naus i l' assignem a l' estat (componentDidMount)
    useEffect(() => {
        GetAryWebPage();
    }, [PageNum]);

    const urlPageBase = new URL(`https://swapi.dev/api/starships/?page=`)
    const urlPage = new URL(`${urlPageBase}${PageNum}`)

    const GetAryWebPage = async () => {
        const AryWebPage = await GetWebPage(urlPage)
        setPaginaNaus(AryWebPage)
    }

    const Cos = () => {
        return (
            <body className="App-body">
                {CosPagNaus(PageNum, { PaginaNaus, setUnaNau })}
                {CosUnaNau({ unaNau })}
            </body>
        )
    }

    // === Render del nom i model de les naus
    return (
        <div className="App">
            {/* <Capsalera /> */}
            <Cos />
            {Peu(PageNum, { setPageNum })}
        </div >
    )
}
// =^^^ Canvi Tots x Pag al N01Ex03 ^^^=