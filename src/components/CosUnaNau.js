
import React from 'react'

// Llista una Nau per pantalla
import FitxaUnaNau from './FitxaUnaNau';

// Cos d' una Nau
const CosUnaNau=({unaNau})=>{
    return (
        <div className="App-CosUnaNau">
        {/* <h4 className="App-titles">StarShips ({PageNum})</h4> */}
        <h3 className="App-titles">{Object.values(unaNau)[0]}: </h3>
        <ul>{FitxaUnaNau(unaNau)}</ul>
    </div>
    )
}
export default CosUnaNau