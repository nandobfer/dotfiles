export const useNavigationList = () => {
    const list = [
        {
            title: "Lojas & Serviços",
            location: "/home",
            navigation: [
                {
                    id: 1,
                    title: "Painel",
                    location: "/",
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
            title: "Minhas Safras",
            location: "/producer",
        },
        {
            title: "Seja um Corretor",
            location: "/agent",
        },
        {
            title: "Meu Negócio",
            location: "/business",
        },
        {
            title: "Minha Transportadora",
            location: "/shipping",
        },
        {
            title: "Configurações",
            location: "/settings",
        },
    ]

    return list
}
