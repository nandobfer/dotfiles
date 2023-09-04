import GrassIcon from "@mui/icons-material/Grass"

export const useNavigationList = () => {
    const list: NavigationMenu[] = [
        {
            id: 1,
            title: "Lojas & Serviços",
            location: "/home",
            navigation: [
                {
                    id: 1,
                    title: "Painel",
                    location: "/",
                    icon: <GrassIcon />,
                },
                {
                    id: 2,
                    title: "Conversas",
                    location: "/chats",
                },
                {
                    id: 3,
                    title: "Buscar",
                    location: "/search",
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
    ]

    return list
}
