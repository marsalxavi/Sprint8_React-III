
import React from 'react'

// Retorna nom - model d' una Nau
const NomImodel = (unaNau) => ([unaNau.name, unaNau.model].join(" / "))

export default NomImodel