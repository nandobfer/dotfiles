import React, { useEffect, useState } from "react"
import { BottomNavigationAction, BottomNavigation as MuiBottomNav } from "@mui/material"
import { useHeader } from "../hooks/useHeader"
import { useLocation, useNavigate } from "react-router-dom"

interface BottomNavigationProps {
    external?: boolean
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ external }) => {
    const navigate = useNavigate()
    const pathname = useLocation().pathname

    const { currentSection } = useHeader()

    const [userInteracted, setUserInteracted] = useState(false)
    const [currentLocation, setCurrentLocation] = useState<
        | {
              id: number
              title: string
              location: string
              icon: React.ReactNode
          }
        | undefined
    >(external ? undefined : currentSection.navigation![0])

    useEffect(() => {
        if (!userInteracted && currentLocation) {
            navigate(`${currentSection.location}${currentLocation.location}`)
        }
    }, [currentLocation])

    const handleNavChange = (_: any, newValue: number) => {
        setUserInteracted(true)
        setCurrentLocation(currentSection.navigation!.filter((item) => item.id == newValue)[0])
    }

    return (
        <MuiBottomNav
            showLabels
            value={userInteracted ? currentLocation?.id : external ? -1 : 0}
            onChange={handleNavChange}
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
            {currentSection.navigation?.map((item) => {
                const Icon = () => item.icon

                return (
                    <BottomNavigationAction
                        key={item.id}
                        label={<p style={{ fontSize: "2.6vw" }}>{item.title}</p>}
                        icon={<Icon />}
                        value={item.id}
                        sx={{ background: currentLocation?.id == item.id ? "white" : "", borderRadius: "6vw", gap: "1vw" }}
                    />
                )
            })}
        </MuiBottomNav>
    )
}
