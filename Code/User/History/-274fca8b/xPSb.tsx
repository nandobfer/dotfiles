import GrassIcon from "@mui/icons-material/Grass"
import ChatIcon from "@mui/icons-material/Chat"
// import GridViewIcon from "@mui/icons-material/GridView"
// import SearchIcon from "@mui/icons-material/Search"
import StorefrontIcon from "@mui/icons-material/Storefront"
import MultipleStopIcon from "@mui/icons-material/MultipleStop"
import BarChartIcon from "@mui/icons-material/BarChart"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import AppsIcon from "@mui/icons-material/Apps"

export const useNavigationList = () => {
    const iconStyle = {}
    const list: NavigationMenu[] = [
        {
            id: 1,
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
        },
        {
            id: 2,
            title: "Minhas Safras",
            location: "/producer",
        },
        {
            id: 3,
            title: "Seja um Corretor",
            location: "/agent",
        },
        {
            id: 4,
            title: "Meu Negócio",
            location: "/business",
        },
        {
            id: 5,
            title: "Minha Transportadora",
            location: "/shipping",
        },
        {
            id: 6,
            title: "Configurações",
            location: "/settings",
        },
        {
            id: 7,
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
        },
    ]

    return list
}
