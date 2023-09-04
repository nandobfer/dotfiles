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
            location: "/agent",
            access: true,
        },
        {
            title: "Meu Negócio",
            location: "/business",
            access: true,
        },
        {
            title: "Minha Transportadora",
            location: "/business",
            access: true,
        },
    ]

    return list
}
