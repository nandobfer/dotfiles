import { ReactComponent as GreenIcon } from '../images/simulator/green.svg'
import { ReactComponent as YellowIcon } from '../images/simulator/yellow.svg'
import { ReactComponent as RedIcon } from '../images/simulator/red.svg'
import { ReactComponent as Red2Icon } from '../images/simulator/red2.svg'
import { api2 } from "../api"
import { useState } from 'react'

export const useFlags = async () => {
    api2.get("/settings").then(response => )

    const [green, setGreen] = useState(0);
    const [yellow, setYellow] = useState(0);
    const [red, setRed] = useState(0);
    const [red2, setRed2] = useState(0);
    

    const flags = [
        {
            id: 1,
            name: "Verde",
            factor: green,
            icon: <GreenIcon />,
        },
        {
            id: 2,
            name: "Amarela",
            factor: yellow,
            icon: <YellowIcon />,
        },
        {
            id: 3,
            name: "Vermelha 1",
            factor: red,
            icon: <RedIcon />,
        },
        {
            id: 4,
            name: "Vermelha 2",
            factor: red2,
            icon: <Red2Icon />,
        },
    ]

    return flags
}