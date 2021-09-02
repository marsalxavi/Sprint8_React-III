
import React from 'react'

import GetUnaNau from './GetUnaNau'; // Retorna la nau seleccionada del llistat de naus
import NomImodel from './NomIModel'; // Retorna nom - model

// Llista totes les naus per pantalla
function PrintPaginaNaus({PaginaNaus, setUnaNau}) {
    return (
        PaginaNaus.map((unaNau, index) =>
        (<div key={index} >
            {/* Modificat al N01Ex02 */}
            <tr onClick={() => GetUnaNau(unaNau,  {setUnaNau})} > {NomImodel(unaNau)}</tr>
        </div>)
        )
    )
}

export default PrintPaginaNaus