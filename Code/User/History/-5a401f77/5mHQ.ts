export const useFormatMessageTime = () => {
    const months = {
        [1]: "Jan",
        [2]: "Fev",
        [3]: "Mar",
        [4]: "Abr",
        [5]: "Mai",
        [6]: "Jun",
        [7]: "Jul",
        [8]: "Ago",
        [9]: "Set",
        [10]: "Out",
        [11]: "Nov",
        [12]: "Dez",
    }

    const days = {
        [1]: "Dom",
        [2]: "Seg",
        [3]: "Ter",
        [4]: "Qua",
        [5]: "Qui",
        [6]: "Sex",
        [7]: "Sáb",
    }

    const format = (date: Date) => {
        // @ts-ignore
        return `${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth() + 1]} de ${date.getUTCFullYear()}`
    }

    return format
}

// sexta, 08 de agosto de 2023
