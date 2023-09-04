import GrassIcon from "@mui/icons-material/Grass"
import ChatIcon from "@mui/icons-material/Chat"
import GridViewIcon from "@mui/icons-material/GridView"
// import SearchIcon from "@mui/icons-material/Search"
import StorefrontIcon from "@mui/icons-material/Storefront"
import MultipleStopIcon from "@mui/icons-material/MultipleStop"
import BarChartIcon from "@mui/icons-material/BarChart"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import AppsIcon from "@mui/icons-material/Apps"
import SwapHorizIcon from "@mui/icons-material/SwapHoriz"
import LeaderboardIcon from "@mui/icons-material/Leaderboard"
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech"

import { useUser } from "./useUser"

export const useNavigationList = () => {
    const { user } = useUser()

    const iconStyle = {}

    const admin: NavigationMenu = {
        id: 1,
        title: "Administrador",
        hidden: user?.adm == false,
        location: "/adm",
        navigation: [
            {
                id: 1,
                title: "Painel",
                location: "",
                icon: <GridViewIcon sx={iconStyle} />,
            },
            {
                id: 2,
                title: "Chamados",
                location: "/business",
                icon: <ChatIcon sx={iconStyle} />,
            },
            {
                id: 3,
                title: "Transações",
                location: "/business",
                icon: <SwapHorizIcon sx={iconStyle} />,
            },
            {
                id: 4,
                title: "Estatatísticas",
                location: "/shipping",
                icon: <LeaderboardIcon sx={iconStyle} />,
            },
            {
                id: 5,
                title: "Análises",
                location: "/reviews",
                icon: <MilitaryTechIcon sx={iconStyle} />,
            },
        ],
    }

    const home: NavigationMenu = {
        id: 2,
        title: "Lojas & Serviços",
        location: "/home",
        navigation: [
            {
                id: 1,
                title: "Safras",
                location: "",
                icon: <GrassIcon sx={iconStyle} />,
            },
            {
                id: 2,
                title: "Lojas & Serviços",
                location: "/business",
                icon: <StorefrontIcon sx={iconStyle} />,
            },
            {
                id: 3,
                title: "Transportadoras",
                location: "/shipping",
                icon: <LocalShippingIcon sx={iconStyle} />,
            },
            {
                id: 4,
                title: "Conversas",
                location: "/chats",
                icon: <ChatIcon sx={iconStyle} />,
            },
        ],
    }

    const producer: NavigationMenu = {
        id: 3,
        title: "Minhas Safras",
        location: "/producer",
    }

    const agent: NavigationMenu = {
        id: 4,
        title: "Seja um Corretor",
        location: "/agent",
    }

    const business: NavigationMenu = {
        id: 5,
        title: "Meu Negócio",
        location: "/business",
    }

    const shipping: NavigationMenu = {
        id: 6,
        title: "Minha Transportadora",
        location: "/shipping",
    }

    const settings: NavigationMenu = {
        id: 7,
        title: "Configurações",
        location: "/settings",
    }

    const profile: NavigationMenu = {
        id: 8,
        title: "Perfil",
        hidden: true,
        location: "/profile",
        navigation: [
            {
                id: 1,
                title: "Perfil",
                location: "/",
                icon: <AppsIcon />,
            },
            {
                id: 2,
                title: "Seja um Corretor",
                location: "/",
                icon: <MultipleStopIcon />,
            },
            {
                id: 3,
                title: "Meu Negócio",
                location: "/",
                icon: <BarChartIcon />,
            },
            {
                id: 4,
                title: "Minha Transportadora",
                location: "/",
                icon: <LocalShippingIcon />,
            },
        ],
    }

    return { admin, home, agent, business, shipping, profile, settings, producer }
}
