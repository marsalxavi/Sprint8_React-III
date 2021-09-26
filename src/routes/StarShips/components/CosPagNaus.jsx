
import React from 'react'

// Llista totes les naus per pantalla
import PrintPaginaNaus from './PrintPaginaNaus.jsx';

// Cos de la Pag de Naus
const CosPagNaus = (PageNum, { PaginaNaus, setUnaNau }) => {
    return (
        <div className="App.CosPagNaus">
            <h4 className="App-titles">StarShips ({PageNum})</h4>
            <PrintPaginaNaus
                PaginaNaus={PaginaNaus}
                setUnaNau={setUnaNau}
            />
            {<h6 className="App-titles">(Clik on StartShip to see details)</h6>}
        </div>
    )
}

export default CosPagNaus;
