export const useNavigationList = () => {
    const list = [
        {
            title: "Lojas & Serviços",
            access: true,
            menus: [
                {
                    title: "Painel",
                    location: "/home/panel",
                },
                {
                    title: "Conversas",
                    location: "/home/chats",
                },
                {
                    title: "Buscar",
                    location: "/home/search",
                },
            ],
        },
    ]
}
