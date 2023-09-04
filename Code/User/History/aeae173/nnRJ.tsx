import React, { useEffect, useState } from "react"
import { BottomNavigationAction, BottomNavigation as MuiBottomNav } from "@mui/material"
import { useHeader } from "../hooks/useHeader"
import { useLocation, useNavigate } from "react-router-dom"

interface BottomNavigationProps {
    external?: boolean
    section: NavigationMenu
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ external, section }) => {
    const navigate = useNavigate()
    const pathname = useLocation().pathname

    const [currentLocation, setCurrentLocation] = useState<
        | {
              id: number
              title: string
              location: string
              icon: React.ReactNode
          }
        | undefined
    >(external ? undefined : section.navigation![0])

    const handleChange = (value: number) => {
        const location = section.navigation!.filter((item) => item.id == value)[0]
        // setCurrentLocation()
        navigate(`${section.location}${location}`)
    }

    return (
        <MuiBottomNav
            showLabels
            value={currentLocation?.id || 0}
            onChange={(_, newValue) => handleChange(newValue)}
            sx={{
                marginTop: "auto",
                background: "transparent",
                padding: "3vw",
                height: "10vh",
                position: "fixed",
                bottom: 0,
                justifyContent: "space-between",
                width: "100%",
            }}
        >
            <BottomNavigationAction value={0} sx={{ display: "none" }} />
            {section.navigation?.map((item) => {
                const Icon = () => item.icon

                return (
                    <BottomNavigationAction
                        key={item.id}
                        label={<p style={{ fontSize: "2.6vw" }}>{item.title}</p>}
                        icon={<Icon />}
                        value={item.id}
                        sx={{
                            background: currentLocation?.id == item.id ? "white" : "",
                            borderRadius: "6vw",
                            gap: "1vw",
                            padding: "0 1vw",
                            minWidth: "0!important",
                        }}
                    />
                )
            })}
        </MuiBottomNav>
    )
}
