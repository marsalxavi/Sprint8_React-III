
import React from 'react'

    // Llista una Nau per pantalla
    function FitxaUnaNau(unaNau) {
        return (
            Object.keys(unaNau).map((obj, idx) => {
                return (
                    <tr key={idx}>
                        <td>{Object.keys(unaNau)[idx].toUpperCase()}: </td>
                        <td>{Object.values(unaNau)[idx]}</td>
                    </tr>
                )
            })
        )
    }

    export default FitxaUnaNau