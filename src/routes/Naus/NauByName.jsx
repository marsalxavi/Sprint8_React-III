import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const NauByName = () => {
    const { NomNau } = useParams();
    
    const [nau, setNau] = useState([])

    const urlPage = new URL(`https://swapi.dev/api/starships/?search=${NomNau}`);

    //declaro
    const GetStartShipByName = async (urlPage) => {
        const data = await fetch(urlPage)
        const users = await data.json()
        setNau(users.results.[0])
    }

    useEffect(() => {
        GetStartShipByName(urlPage);
    }, [NomNau])


    return (
        <div className="LlistatNaus">
            <h3>{nau.name}</h3>
            <ul>
                <li>{nau.model}</li>
                <li>{nau.manufacturer}</li>
                <li>{nau.starship_class}</li>
            </ul>
        </div>
    )
}
