
import React, { useEffect, useState } from 'react'

// Components
import GetPage from './components/GetPage'; //Carrega una pagina de la API
import Capsalera from './components/Capsalera'; // Capçalera de la pagina web
import CosPagNaus from './components/CosPagNaus'; // Cos de la Pag de Naus
import CosUnaNau from './components/CosUnaNau'; // Cos d' una Nau
import Peu from './components/Peu'; // Peu de la Pag web

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
        (async () => {
            const Page = await GetPage(PageNum)
            setPaginaNaus(Page)
        })
            ()
    }, [PageNum]);

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
            <Capsalera />
            <Cos />
            {Peu(PageNum, { setPageNum })}
        </div >
    )
}
// =^^^ Canvi Tots x Pag al N01Ex03 ^^^=

// export default StarShips