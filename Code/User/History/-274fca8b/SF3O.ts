export const useNavigationList = () => {
    const list = [
        {
            title: "Lojas & Serviços",
            location: "/home",
            access: true,
        },
        {
            title: "Minhas Safras",
            location: "/producer",
            access: true,
        },
        {
            title: "Seja um Corretor",
            location: "/producer",
            access: true,
        },
    ]

    return list
}
